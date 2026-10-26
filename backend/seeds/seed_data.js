const { query, checkConnection, inMemoryStore } = require('../src/database/connection');

async function seedData() {
  console.log('🌱 Seeding initial data for Strains Group...');

  const isConnected = await checkConnection();
  if (!isConnected) {
    console.log('⚠️  PostgreSQL offline: in-memory seed stores are pre-loaded and ready.');
    return;
  }

  try {
    // Seed Projects
    for (const p of inMemoryStore.projects) {
      await query(
        `INSERT INTO projects (title, category, image_url, sort_order)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT DO NOTHING`,
        [p.title, p.category, p.image_url, p.sort_order]
      );
    }

    // Seed Services
    for (const s of inMemoryStore.services) {
      await query(
        `INSERT INTO services (service_code, title, description, details, sort_order)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT DO NOTHING`,
        [s.service_code, s.title, s.description, s.details, s.sort_order]
      );
    }

    // Seed Testimonials
    for (const t of inMemoryStore.testimonials) {
      await query(
        `INSERT INTO testimonials (name, role, quote, sort_order)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT DO NOTHING`,
        [t.name, t.role, t.quote, t.sort_order]
      );
    }

    console.log('✅ Seeding complete.');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  }
}

if (require.main === module) {
  seedData().then(() => process.exit(0));
}

module.exports = seedData;
