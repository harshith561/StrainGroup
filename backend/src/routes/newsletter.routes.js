const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter.controller');
const validate = require('../middleware/validate');
const adminAuth = require('../middleware/adminAuth');
const { createRateLimiter } = require('../middleware/rateLimit');
const config = require('../config/env');
const { newsletterSchema } = require('../validators/newsletter.validator');

const newsletterLimiter = createRateLimiter({
  windowMs: config.rateLimit.submissionWindowMs,
  max: config.rateLimit.submissionMax,
  message: 'Too many newsletter requests from this IP, please try again shortly.',
});

router.post('/', newsletterLimiter, validate(newsletterSchema), newsletterController.handleSubscribe);
router.get('/', adminAuth, newsletterController.handleListSubscribers);

module.exports = router;
