const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content.controller');

router.get('/projects', contentController.handleGetProjects);
router.get('/services', contentController.handleGetServices);
router.get('/testimonials', contentController.handleGetTestimonials);
router.get('/products', contentController.handleGetProducts);

module.exports = router;
