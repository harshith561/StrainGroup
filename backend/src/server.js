const app = require('./app');
const config = require('./config/env');
const { checkConnection } = require('./database/connection');

const PORT = config.port || 5000;

async function startServer() {
  const isDbConnected = await checkConnection();

  const server = app.listen(PORT, () => {
    console.log(`
=====================================================
  ✨ STRAINS GROUP API SERVER
=====================================================
  📡 Address:  http://localhost:${PORT}
  🔗 API Base: http://localhost:${PORT}/api
  📊 Health:   http://localhost:${PORT}/api/health
  🗄️  Database: ${isDbConnected ? 'PostgreSQL (strains_db) Connected' : 'In-Memory Store Active'}
  🌐 CORS:     ${config.corsOrigin}
=====================================================
    `);
  });

  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = { startServer };
