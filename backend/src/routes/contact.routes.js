const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const validate = require('../middleware/validate');
const adminAuth = require('../middleware/adminAuth');
const { createRateLimiter } = require('../middleware/rateLimit');
const config = require('../config/env');
const { contactSchema } = require('../validators/contact.validator');

const contactLimiter = createRateLimiter({
  windowMs: config.rateLimit.submissionWindowMs,
  max: config.rateLimit.submissionMax,
  message: 'Too many inquiry submissions from this IP, please try again shortly.',
});

router.post('/', contactLimiter, validate(contactSchema), contactController.handleCreateContact);
router.get('/', adminAuth, contactController.handleListContacts);

module.exports = router;
