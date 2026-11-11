const express = require('express');
const router = express.Router();
const contentController = require('../controllers/content.controller');

router.use((req, res, next) => {
  if (req.method === 'GET') {
    res.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
  }
  next();
});

router.get('/projects', contentController.handleGetProjects);
router.get('/services', contentController.handleGetServices);
router.get('/testimonials', contentController.handleGetTestimonials);
router.get('/products', contentController.handleGetProducts);

module.exports = router;
