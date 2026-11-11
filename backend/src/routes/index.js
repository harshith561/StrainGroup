const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');
const newsletterRoutes = require('./newsletter.routes');
const contentRoutes = require('./content.routes');
const { checkConnection } = require('../database/connection');

// Health Check
router.get('/health', async (req, res) => {
  res.set('Cache-Control', 'no-store');
  const dbConnected = await checkConnection({ force: true });
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
