const { Pool } = require('pg');
const config = require('../config/env');

let pool = null;
let isConnected = false;

// In-memory fallback stores for when local postgres instance is not currently active
const inMemoryStore = {
  contacts: [],
  subscribers: new Set(),
  projects: [
    { id: 1, title: 'Saudi Lime Green', category: 'Branding & Campaigns', image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', sort_order: 1 },
    { id: 2, title: 'Panda Automap', category: 'UI/UX Mobile Design', image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', sort_order: 2 },
    { id: 3, title: 'Saudi Venture Capital', category: 'Corporate Platforms', image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', sort_order: 3 },
    { id: 4, title: 'Rebrand Lawberry', category: 'Web Development & Identity', image_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', sort_order: 4 },
    { id: 5, title: 'Selicon Cloud Cave', category: 'Cloud Engineering & Security', image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80', sort_order: 5 },
    { id: 6, title: 'Mountain Upwork', category: 'Creative Marketing & Direction', image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', sort_order: 6 },
  ],
  services: [
    { id: 1, service_code: '01', title: 'Art Direction', description: 'Our aim is to nurture brands and help them grow. And just like human brands need to grow.', details: 'Creative styling, visual storytelling, and aesthetic design systems built to establish a dominant brand footprint.', sort_order: 1 },
    { id: 2, service_code: '02', title: 'Interaction Design', description: "Whether your inquiries are big or small, we're prepared to engage, focusing on complex problems.", details: 'Immersive user experience flows, micro-interactions, and state transitions that make websites feel dynamic and alive.', sort_order: 2 },
    { id: 3, service_code: '03', title: 'Web & Mobile Development', description: 'Every opportunity comes with unique factors are the mainstream we can offer your brand.', details: 'Robust frontend code structures, scalable backend integrations, and responsive architectures utilizing modern web principles.', sort_order: 3 },
    { id: 4, service_code: '04', title: 'Digital Marketing', description: 'We offer digital marketing that connect, engage, and drive results. Let’s turn your vision into reality.', details: 'Conversion-driven campaigns, data-led analytics modeling, search engine visibility mapping, and social media ecosystems.', sort_order: 4 },
    { id: 5, service_code: '05', title: 'Brand Guideline', description: 'We always eager to collaborate with forward thinking individuals and the organizations.', details: 'A practical guide explaining how and why Strains should be part of every project to ensure its high quality and coherence.', sort_order: 5 },
  ],
  testimonials: [
    { id: 1, name: 'Michael Mahanay', role: 'CEO, TechVentures', quote: 'They took the time to understand my brand and target audience and developed a marketing strategy that perfectly captured our essence. Their creative campaigns led to a significant increase in sales, and their expertise helped us secure a valuable partnership.', sort_order: 1 },
    { id: 2, name: 'Daryl Mitchell', role: 'Founder, Apex Digital', quote: 'Their mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits. We discovered more funny quality work. The detail and execution of their designs was top tier.', sort_order: 2 },
    { id: 3, name: 'Tom Banton', role: 'Marketing Lead, Redox Corp', quote: 'Strains Associates is always eager to collaborate with forward-thinking individuals and organizations, using the power of design and technology to tackle today’s challenges and shape a better future. From sleek websites to memorable branding, they offer creative solutions.', sort_order: 3 },
    { id: 4, name: 'Lance Petter', role: 'Product Director, VibeScale', quote: 'Design is a team effort, and I believe in a true partnership. By working closely with Strains Associates, understanding our vision and core message, we managed to build an identity that sets us apart globally.', sort_order: 4 },
    { id: 5, name: 'Henrik Klassen', role: 'Creative VP, Synapse', quote: "We're passionate about partnering with visionary individuals and organizations to harness the power of design and technology. Strains delivered a bold identity that connects, engages, and drives long-term customer values.", sort_order: 5 },
  ],
};

function initPool() {
  if (!pool) {
    pool = new Pool({
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      connectionTimeoutMillis: 3000,
    });

    pool.on('error', (err) => {
      console.warn('⚠️  PostgreSQL background connection notice:', err.message);
      isConnected = false;
    });
  }
  return pool;
}

async function query(text, params) {
  try {
    const p = initPool();
    const result = await p.query(text, params);
    isConnected = true;
    return result;
  } catch (err) {
    isConnected = false;
    // Transparently forward or delegate
    throw err;
  }
}

async function checkConnection() {
  try {
    const p = initPool();
    await p.query('SELECT 1');
    isConnected = true;
    return true;
  } catch (err) {
    isConnected = false;
    return false;
  }
}

module.exports = {
  query,
  checkConnection,
  initPool,
  inMemoryStore,
  getIsConnected: () => isConnected,
};
