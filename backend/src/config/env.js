const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  adminApiKey: process.env.ADMIN_API_KEY || '',
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || '120', 10),
    submissionWindowMs: parseInt(process.env.SUBMISSION_RATE_LIMIT_WINDOW_MS || '900000', 10),
    submissionMax: parseInt(process.env.SUBMISSION_RATE_LIMIT_MAX || '20', 10),
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'strains_db',
  },
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',          // false for 587/STARTTLS
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    recipientEmail: process.env.SMTP_RECIPIENT_EMAIL || 'reelcravings@gmail.com',
  },
};

module.exports = config;
