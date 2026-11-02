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
    id: 'naga-praharsha',
    name: 'Praharsha',
    slug: 'naga-praharsha',
    designation: 'Strategy Maker and Line Producer',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Naga Praharsha Govindu is the Founder and Director of Strains Associates and Strains Fashions Private Limited. Acting as chief Strategy Maker and Line Producer, Praharsha drives multi-tier client engagements, brand development, creative campaigns, and eco-fashion manufacturing.',
      'He champions zero-discharge industrial processes, circular supply-chain models, and high-impact brand storytelling, seamlessly uniting creative digital studio execution in Hyderabad with industrial apparel production in Tirupur.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'pavan-kumar',
    name: 'Pavan',
    slug: 'pavan-kumar',
    designation: 'Head of Photography and Videography',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Pavan Kumar Kodimela is a Director and Head of Photography and Videography at Strains Associates. He leads the visual capture department, managing technical camera crews, drone videography, and professional studio lighting rigs.',
      'From editorial fashion lookbooks and commercial product showcases to heavy industrial and corporate shoots, Pavan crafts evocative visual atmospheres that define modern category leaders.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'danny-cooper',
    name: 'Danny',
    slug: 'danny-cooper',
    designation: 'Head of Direction and Post-production',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Danny leads Direction and Post-production at Strains Associates, bringing cinematic grandeur and precision pacing to commercial brand films, corporate videos, and social reels.',
      'His multidisciplinary mastery spans script direction, offline/online video editing, high-end colour grading, visual effects (VFX), motion graphics, and immersive sound design.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'prasad-varma',
    name: 'Prasad',
    slug: 'prasad-varma',
    designation: 'Head of Digital Marketing Team',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Prasad heads the Digital Marketing Team at Strains Associates, orchestrating full-funnel performance marketing, Google Ads campaigns, SEO, and social media advertising across Facebook and Instagram.',
      'With proven achievements including a verified 90.8% Google Ads optimization score and industry-leading low CPCs for major enterprises, Prasad integrates data analytics with high-converting creative distribution.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'brenda-janet',
    name: 'Brenda C. Janet',
    slug: 'brenda-janet',
    designation: 'Digital Marketing & Creative Team Lead',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Brenda coordinates cross-functional creative advertising and marketing workflows at Strains Associates. She aligns creative design with performance marketing strategies to build cohesive brand ecosystems.',
      'Her expertise covers content marketing, social media campaigns, and creative conversion architectures that ensure high client engagement across digital touchpoints.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    slug: 'elena-rostova',
    designation: 'Video Editing & Motion Graphics Specialist',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    description: [
      'Elena specializes in motion graphics, title animation, and post-production visual effects. Working closely with Danny in the video editing team, she crafts dynamic visual narratives for social and commercial video campaigns.',
      'Her craft elevates brand films, product reels, and digital advertisements with fluid kinetic typography and high-fidelity motion design.',
    ],
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    dribbble: null,
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
