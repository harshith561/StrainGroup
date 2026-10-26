const fs = require('fs');
const path = require('path');
const { query, checkConnection } = require('../src/database/connection');

async function runMigrations() {
  console.log('🚀 Running database migrations for Strains Group...');

  const isConnected = await checkConnection();
  if (!isConnected) {
    console.warn('⚠️  PostgreSQL database connection could not be established.');
    console.warn('ℹ️  Ensure PostgreSQL is running locally on port 5432 and database strains_db exists.');
    console.warn('ℹ️  The backend will use resilient internal storage until the database is available.');
    return;
  }

  try {
    const migrationFile = path.join(__dirname, '001_initial_schema.sql');
    const sql = fs.readFileSync(migrationFile, 'utf8');

    await query(sql);
    console.log('✅ Migrations applied successfully: 001_initial_schema.sql');
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  runMigrations().then(() => process.exit(0));
}

module.exports = runMigrations;
