const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

test('Backend API Test Suite', async (t) => {
  await t.test('GET /api/health should return status healthy', async () => {
    const res = await request(app).get('/api/health');
    assert.equal(res.status, 200);
    assert.equal(res.body.status, 'healthy');
    assert.ok(res.body.service);
  });

  await t.test('GET /api/projects should return 6 project items', async () => {
    const res = await request(app).get('/api/projects');
    assert.equal(res.status, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.length, 6);
    assert.equal(res.body.data[0].title, 'Saudi Lime Green');
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

  await t.test('POST /api/contact should fail on invalid data', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ email: 'not-an-email' });
    assert.equal(res.status, 400);
    assert.equal(res.body.success, false);
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
      .send({ email: 'subscriber@brand.com' });
    assert.equal(res.status, 201);
    assert.equal(res.body.success, true);
    assert.equal(res.body.data.email, 'subscriber@brand.com');
  });
});
