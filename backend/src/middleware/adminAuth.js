const crypto = require('crypto');
const config = require('../config/env');

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a), 'utf8');
  const bufB = Buffer.from(String(b), 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

function adminAuth(req, res, next) {
  res.set('Cache-Control', 'no-store');

  const expectedKey = process.env.ADMIN_API_KEY || config.adminApiKey;
  if (!expectedKey) {
    return res.status(403).json({
      success: false,
      message: 'Admin endpoint access is disabled',
    });
  }

  const headerKey = req.get('x-admin-api-key');
  const authHeader = req.get('authorization');
  const bearerKey =
    authHeader && authHeader.toLowerCase().startsWith('bearer ')
      ? authHeader.slice(7).trim()
      : '';
  const providedKey = headerKey || bearerKey;

  if (!providedKey) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required',
    });
  }

  if (!safeEqual(providedKey, expectedKey)) {
    return res.status(403).json({
      success: false,
      message: 'Forbidden',
    });
  }

  return next();
}

module.exports = adminAuth;

