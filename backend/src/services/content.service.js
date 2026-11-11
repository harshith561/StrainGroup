const { query, canAttemptDb, inMemoryStore } = require('../database/connection');

const CACHE_TTL_MS = 60 * 1000;
const contentCache = new Map();

async function getCachedTableList(cacheKey, sql, fallback) {
  const cached = contentCache.get(cacheKey);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
    return cached.rows;
  }

  if (canAttemptDb()) {
    try {
      const res = await query(sql);
      if (res.rows.length > 0) {
        contentCache.set(cacheKey, { rows: res.rows, cachedAt: Date.now() });
        return res.rows;
      }
    } catch (e) {
      // fall back to default
    }
  }

  return fallback;
}

async function getProjectsList() {
  return getCachedTableList(
    'projects',
    'SELECT * FROM projects ORDER BY sort_order ASC',
    inMemoryStore.projects
  );
}

async function getServicesList() {
  return getCachedTableList(
    'services',
    'SELECT * FROM services ORDER BY sort_order ASC',
    inMemoryStore.services
  );
}

async function getTestimonialsList() {
  return getCachedTableList(
    'testimonials',
    'SELECT * FROM testimonials ORDER BY sort_order ASC',
    inMemoryStore.testimonials
  );
}

async function getProductsList() {
  return [
    { colorName: 'black', title: 'OBSIDIAN TORUS', price: '$289.00', image: '/assets/showcase_black-BJotsqei.png' },
    { colorName: 'blue', title: 'COBALT TORUS', price: '$310.00', image: '/assets/showcase_blue-C5q3oofu.png' },
    { colorName: 'red', title: 'CRIMSON TORUS', price: '$299.00', image: '/assets/showcase_red-DXVEAuCv.png' },
    { colorName: 'green', title: 'EMERALD TORUS', price: '$325.00', image: '/assets/showcase_green-Bd5gogVn.png' },
    { colorName: 'yellow', title: 'SUNSET TORUS', price: '$340.00', image: '/assets/showcase_yellow-CsUU_SOt.png' },
  ];
}

module.exports = {
  getProjectsList,
  getServicesList,
  getTestimonialsList,
  getProductsList,
};
