const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const validate = require('../middleware/validate');
const { contactSchema } = require('../validators/contact.validator');

router.post('/', validate(contactSchema), contactController.handleCreateContact);
router.get('/', contactController.handleListContacts);

module.exports = router;
