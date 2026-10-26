const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');
const newsletterRoutes = require('./newsletter.routes');
const contentRoutes = require('./content.routes');
const { checkConnection } = require('../database/connection');

// Health Check
router.get('/health', async (req, res) => {
  const dbConnected = await checkConnection();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Strains Group API',
    database: dbConnected ? 'connected (PostgreSQL)' : 'active (in-memory store fallback)',
  });
});

router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/', contentRoutes);

module.exports = router;
