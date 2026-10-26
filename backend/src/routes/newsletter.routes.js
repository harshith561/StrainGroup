const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletter.controller');
const validate = require('../middleware/validate');
const { newsletterSchema } = require('../validators/newsletter.validator');

router.post('/', validate(newsletterSchema), newsletterController.handleSubscribe);
router.get('/', newsletterController.handleListSubscribers);

module.exports = router;
