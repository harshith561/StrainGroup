const { query, checkConnection, inMemoryStore } = require('../database/connection');

async function getProjectsList() {
  const isConnected = await checkConnection();
  if (isConnected) {
    try {
      const res = await query('SELECT * FROM projects ORDER BY sort_order ASC');
      if (res.rows.length > 0) return res.rows;
    } catch (e) {
      // fall back to default
    }
  }
  return inMemoryStore.projects;
}

async function getServicesList() {
  const isConnected = await checkConnection();
  if (isConnected) {
    try {
      const res = await query('SELECT * FROM services ORDER BY sort_order ASC');
      if (res.rows.length > 0) return res.rows;
    } catch (e) {
      // fall back to default
    }
  }
  return inMemoryStore.services;
}

async function getTestimonialsList() {
  const isConnected = await checkConnection();
  if (isConnected) {
    try {
      const res = await query('SELECT * FROM testimonials ORDER BY sort_order ASC');
      if (res.rows.length > 0) return res.rows;
    } catch (e) {
      // fall back to default
    }
  }
  return inMemoryStore.testimonials;
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
