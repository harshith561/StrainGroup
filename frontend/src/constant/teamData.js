/**
 * Centralized Team Member Data Store for Strains Group
 *
 * Each team member contains:
 * - id: unique identifier
 * - name: full name
 * - slug: URL-friendly route slug
 * - designation: professional title / role
 * - profileImage: high-resolution portrait photograph
 * - description: array of two descriptive paragraphs
 * - facebook: URL or null
 * - twitter: URL or null
 * - dribbble: URL or null
 * - linkedin: URL or null
 */

export const TEAM_MEMBERS = [
  {
    id: 'jared-silverman',
    name: 'Jared Silverman',
    slug: 'jared-silverman',
    designation: 'Partner & Executive Creative Director',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    description: [
      'With over fifteen years driving multi-disciplinary brand transformations, Jared orchestrates high-impact visual campaigns and cross-channel design architectures. His vision aligns cinematic storytelling with cutting-edge digital interactions to craft unforgettable agency experiences.',
      "Prior to leading creative direction at Strains, he spearheaded global identity overhauls for Fortune 500 innovators and luxury fashion labels. Jared oversees creative strategy, brand positioning, and the studio's avant-garde visual language.",
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'naga-praharsha',
    name: 'Naga Praharsha',
    slug: 'naga-praharsha',
    designation: 'Founder & Line Producer',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Naga Praharsha founded Strains in 2012 with a bold multidisciplinary vision: uniting cutting-edge brand design with real industrial apparel manufacturing in Tirupur. Praharsha acts as chief strategist and line producer, managing multi-tier client engagements, creative direction, and global eco-fashion initiatives.',
      'He champions zero-discharge industrial processes and circular supply-chain models, seamlessly bridging the gap between studio concept art and industrial production scale for premium international brands.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'danny-cooper',
    name: 'Danny Cooper',
    slug: 'danny-cooper',
    designation: 'Head of Direction & Post-Production',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Leading the direction and post-production suites at Strains, Danny brings cinematic grandeur and precision pacing to commercial film and digital narratives. His multidisciplinary mastery spans color grading, composite visual effects, and high-fidelity sound engineering.',
      'With a portfolio featuring broadcast commercials and high-energy brand films, Danny ensures every frame captures the raw energy and elevated aesthetic that defines the Strains creative ethos.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'pavan-kumar',
    name: 'Pavan Kumar',
    slug: 'pavan-kumar',
    designation: 'Head of Photography & Visuals',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Pavan directs the camera department and studio photography at Strains, crafting evocative visual atmospheres through deliberate lighting and composition. His keen photographic eye brings textiles, high fashion, and architecture vividly to life.',
      'Managing technical camera crews and studio lighting rigs, Pavan has delivered iconic lookbooks, editorial spreads, and product showcases that have set new visual standards for contemporary apparel brands.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'brenda-janet',
    name: 'Brenda C. Janet',
    slug: 'brenda-janet',
    designation: 'Lead UX & Creative Strategist',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Brenda sculpts intuitive user journeys and high-performance digital platforms. Balancing rigorous usability engineering with bold visual innovation, she ensures digital touchpoints are both frictionless and memorable.',
      'Her work spans design systems, interactive web applications, and immersive e-commerce architectures, translating complex enterprise operations into fluid, responsive digital experiences.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'prasad-varma',
    name: 'Prasad Varma',
    slug: 'prasad-varma',
    designation: 'Head of Digital Marketing & Growth',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Prasad orchestrates full-funnel digital acceleration, performance marketing, and data-driven client expansion. He integrates predictive analytics with high-converting creative distribution across global digital channels.',
      'Having scaled direct-to-consumer and business-to-business brands into multimillion-dollar market leaders, Prasad leads the strategic deployment of performance campaigns and growth experiments.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    slug: 'elena-rostova',
    designation: 'Senior Motion & 3D Artist',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Elena specializes in photorealistic 3D visualization, kinetic typography, and motion design. She brings brand identities into vivid three-dimensional reality with fluid simulations and dynamic environmental shaders.',
      'Her craft powers the digital showcases and interactive product configurators at Strains, delivering museum-grade digital craftsmanship that mesmerizes audiences across screens.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'james-david',
    name: 'James David',
    slug: 'james-david',
    designation: 'Creative Director',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    description: [
      'James guides the overall artistic vision and brand identity across client engagements at Strains. Combining traditional design discipline with modern digital experimentation, he crafts memorable brand worlds.',
      'With a decade of experience helming creative teams, James ensures every project resonates emotionally with audiences while fulfilling strategic business goals.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'martin-carlos',
    name: 'Martin Carlos',
    slug: 'martin-carlos',
    designation: 'Senior Web Developer',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80',
    description: [
      'Martin architects scalable frontend systems, performant interactive animations, and robust web applications. He bridges design fidelity with engineering precision to deliver silky smooth user experiences.',
      "Specializing in modern JavaScript frameworks and creative coding, Martin ensures the agency's digital builds achieve industry-leading speed, accessibility, and visual fluidity.",
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'garry-j-coburn',
    name: 'Garry J. Coburn',
    slug: 'garry-j-coburn',
    designation: 'Motion Designer',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
    description: [
      'Garry transforms static design systems into dynamic kinetic visual narratives. His work brings life to user interfaces, video promos, and interactive brand assets.',
      'Focusing on micro-interactions and high-impact title sequences, Garry blends rhythm, timing, and bold graphic sensibility to engage viewers instantaneously.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com',
  },
];

/**
 * Normalizes string for slug comparison
 */
function normalizeSlug(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Lookup team member by slug or normalized name
 * Supports fuzzy slug matches (e.g., "brenda-c-janet" <-> "brenda-janet")
 */
export function getTeamMemberBySlug(slug) {
  if (!slug) return null;
  const target = normalizeSlug(slug);

  return (
    TEAM_MEMBERS.find((m) => {
      const memberSlug = normalizeSlug(m.slug);
      if (memberSlug === target) return true;

      const nameSlug = normalizeSlug(m.name);
      if (nameSlug === target) return true;

      // Handle middle initials (e.g. brenda-c-janet vs brenda-janet)
      const targetNoInitial = target.replace(/-[a-z]-/g, '-');
      const memberNoInitial = memberSlug.replace(/-[a-z]-/g, '-');
      if (targetNoInitial === memberNoInitial) return true;

      return false;
    }) || null
  );
}

/**
 * Returns all team members
 */
export function getAllTeamMembers() {
  return TEAM_MEMBERS;
}
