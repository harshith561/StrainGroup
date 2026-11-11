process.env.NODE_ENV = 'test';

const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const express = require('express');
const app = require('../src/app');
const config = require('../src/config/env');
const { createRateLimiter } = require('../src/middleware/rateLimit');
const { closePool } = require('../src/database/connection');
const { closeTransporter } = require('../src/services/email.service');

test('Backend API Test Suite', async (t) => {
  t.after(async () => {
    closeTransporter();
    await closePool();
  });

  await t.test('GET /api/health should return status healthy with no-store cache header', async () => {
    const res = await request(app).get('/api/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'healthy');
    assert.ok(res.body.service);
    assert.equal(res.headers['cache-control'], 'no-store');
  });

  await t.test('GET /api/projects should return 6 project items with cache headers', async () => {
    const res = await request(app).get('/api/projects');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.length, 6);
    assert.equal(res.body.data[0].title, 'Saudi Lime Green');
    assert.match(res.headers['cache-control'] || '', /public, max-age=300/);
  });

  await t.test('GET /api/services should return 5 services', async () => {
    const res = await request(app).get('/api/services');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.length, 5);
    assert.equal(res.body.data[0].title, 'Art Direction');
  });

  await t.test('GET /api/testimonials should return 5 testimonials', async () => {
    const res = await request(app).get('/api/testimonials');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.length, 5);
    assert.equal(res.body.data[0].name, 'Michael Mahanay');
  });

  await t.test('GET /api/products should return 5 torus products', async () => {
    const res = await request(app).get('/api/products');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.length, 5);
  });

  await t.test('POST /api/contact should fail on invalid data and invalid phone', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ email: 'not-an-email' });
    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);

    const badPhone = await request(app)
      .post('/api/contact')
      .send({
        name: 'Alexander Weber',
        email: 'alexander@example.com',
        phone: 'invalid-phone-xyz',
      });
    assert.equal(badPhone.status, 400);
    assert.equal(badPhone.body.success, false);
  });

  await t.test('POST /api/contact should succeed with valid data', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'Alexander Weber',
        email: 'alexander@example.com',
        phone: '+49 123 456 789',
        service: 'Cinematic Video & Photo Production',
        message: 'We would like to book a commercial shoot for our luxury brand.',
      });
    assert.equal(res.status, 201);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.name, 'Alexander Weber');
  });

  await t.test('POST /api/newsletter should fail on invalid email', async () => {
    const res = await request(app)
      .post('/api/newsletter')
      .send({ email: 'invalid-email-format' });
    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);
  });

  await t.test('POST /api/newsletter should succeed on valid email', async () => {
    const res = await request(app)
      .post('/api/newsletter')
      .send({ email: 'Subscriber@Brand.com' });
    assert.equal(res.status, 201);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.email, 'subscriber@brand.com');
  });

  await t.test('GET /api/contact and GET /api/newsletter enforce admin API key auth', async () => {
    const prevEnvKey = process.env.ADMIN_API_KEY;
    const prevConfigKey = config.adminApiKey;

    try {
      delete process.env.ADMIN_API_KEY;
      config.adminApiKey = '';

      const disabledRes = await request(app).get('/api/contact');
      assert.equal(disabledRes.status, 403);

      process.env.ADMIN_API_KEY = 'test-admin-secret-key';

      const missingHeader = await request(app).get('/api/contact');
      assert.equal(missingHeader.status, 401);

      const wrongKey = await request(app)
        .get('/api/newsletter')
        .set('x-admin-api-key', 'wrong-key');
      assert.equal(wrongKey.status, 403);

      const authorizedContact = await request(app)
        .get('/api/contact')
        .set('x-admin-api-key', 'test-admin-secret-key');
      assert.equal(authorizedContact.status, 200);
      assert.equal(authorizedContact.body.success, true);
      assert.equal(authorizedContact.headers['cache-control'], 'no-store');

      const authorizedNewsletter = await request(app)
        .get('/api/newsletter')
        .set('Authorization', 'Bearer test-admin-secret-key');
      assert.equal(authorizedNewsletter.status, 200);
      assert.equal(authorizedNewsletter.body.success, true);
      assert.equal(authorizedNewsletter.headers['cache-control'], 'no-store');
    } finally {
      if (prevEnvKey === undefined) delete process.env.ADMIN_API_KEY;
      else process.env.ADMIN_API_KEY = prevEnvKey;
      config.adminApiKey = prevConfigKey;
    }
  });

  await t.test('CORS restricts disallowed origins and permits configured origins', async () => {
    const allowedRes = await request(app)
      .get('/api/services')
      .set('Origin', 'http://localhost:3000');
    assert.equal(allowedRes.status, 200);
    assert.equal(allowedRes.headers['access-control-allow-origin'], 'http://localhost:3000');

    const blockedRes = await request(app)
      .get('/api/services')
      .set('Origin', 'https://untrusted.example.com');
    assert.equal(blockedRes.status, 200);
    assert.equal(blockedRes.headers['access-control-allow-origin'], undefined);
  });

  await t.test('Rate limiter emits standard headers and enforces 429 on excess traffic', async () => {
    const miniApp = express();
    miniApp.use(createRateLimiter({ windowMs: 60000, max: 2 }));
    miniApp.get('/ping', (_req, res) => res.json({ ok: true }));

    const r1 = await request(miniApp).get('/ping');
    assert.equal(r1.status, 200);
    assert.equal(r1.headers['ratelimit-limit'], '2');
    assert.equal(r1.headers['ratelimit-remaining'], '1');

    const r2 = await request(miniApp).get('/ping');
    assert.equal(r2.status, 200);
    assert.equal(r2.headers['ratelimit-remaining'], '0');

    const r3 = await request(miniApp).get('/ping');
    assert.equal(r3.status, 429);
    assert.ok(r3.headers['retry-after']);
    assert.equal(r3.body.success, false);
  });
});
