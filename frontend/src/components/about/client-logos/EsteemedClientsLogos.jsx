import React from 'react';

/* ==========================================================================
   ESTEEMED CLIENTS - 24 HIGH-CONTRAST HORIZONTAL VECTOR BRAND LOGOS
   Crisp, visible, bold typography & iconic marks tailored for dark theme.
   Proportioned with 250x60 viewBox for optimal prominence and legibility.
   ========================================================================== */

export const CLIENT_LOGOS_DATA = [
  // 1. Beauty Essentials
  {
    id: 'beauty-essentials',
    name: 'Beauty Essentials',
    subtext: 'Experience • Express • Emerge',
    category: 'Beauty & Wellness',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-6 -14 C-12 -14 -15 -8 -12 -1 C-9 5 -1 7 0 0 C-1 -8 -1 -14 -6 -14 Z" fill="#FF7A00" />
          <path d="M6 -14 C12 -14 15 -8 12 -1 C9 5 1 7 0 0 C1 -8 1 -14 6 -14 Z" fill="#FF2A6D" />
          <path d="M14 -1 C17 5 15 12 9 14 C2 15 0 9 0 0 C7 0 11 -7 14 -1 Z" fill="#9C27B0" />
          <path d="M-14 -1 C-17 5 -15 12 -9 14 C-2 15 0 9 0 0 C-7 0 -11 -7 -14 -1 Z" fill="#E91E63" />
          <path d="M-8 11 C-8 17 0 19 0 11 C0 7 -3 7 -8 11 Z" fill="#FFB300" />
          <path d="M8 11 C8 17 0 19 0 11 C0 7 3 7 8 11 Z" fill="#FF5722" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="14.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          BEAUTY ESSENTIALS
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="600" fill="#38BDF8" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          EXPERIENCE • EXPRESS • EMERGE
        </text>
      </svg>
    ),
  },

  // 2. Bhama Emporio
  {
    id: 'bhama-emporio',
    name: 'Bhama Emporio',
    subtext: 'Fashion & Retail',
    category: 'Fashion & Retail',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <ellipse cx="-7" cy="-8" rx="6" ry="9" fill="#00B4D8" transform="rotate(-30, -7, -8)" />
          <ellipse cx="7" cy="-8" rx="6" ry="9" fill="#E0218A" transform="rotate(30, 7, -8)" />
          <ellipse cx="-7" cy="8" rx="5" ry="7.5" fill="#FFD100" transform="rotate(30, -7, 8)" />
          <ellipse cx="7" cy="8" rx="5" ry="7.5" fill="#7B2CBF" transform="rotate(-30, 7, 8)" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.8">
          BHAMA
        </text>
        <text x="54" y="43" fontSize="9.5" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="3">
          EMPORIO
        </text>
      </svg>
    ),
  },

  // 3. Branding with Shakthi
  {
    id: 'shakthi',
    name: 'Branding with Shakthi',
    subtext: 'Brand Consulting',
    category: 'Brand Consulting',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="17" stroke="#DFBA73" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
          <circle cx="0" cy="0" r="14.5" stroke="#C5A059" strokeWidth="0.8" fill="none" />
          <path d="M 6 -8 C 6 -12 -3 -12 -4 -8 C -5 -4 6 -2 6 4 C 6 10 -4 11 -6 7" stroke="#FFD700" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <circle cx="6" cy="-8" r="1.4" fill="#FFD700" />
          <circle cx="-6" cy="7" r="1.4" fill="#FFD700" />
        </g>
        <text x="54" y="22" fontSize="10.5" fontStyle="italic" fill="#DFBA73" fontFamily="'Playfair Display', serif">
          Branding with
        </text>
        <text x="54" y="38" fontSize="15.5" fontWeight="800" fill="#FFD700" fontFamily="'Cinzel', serif" letterSpacing="1.8">
          SHAKTHI
        </text>
        <text x="54" y="49" fontSize="7.5" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="1.5">
          STRATEGY & DESIGN
        </text>
      </svg>
    ),
  },

  // 4. Cornileus Pharmaceuticals
  {
    id: 'cornileus',
    name: 'Cornileus Pharmaceuticals',
    subtext: 'Pharmaceuticals (P) Ltd.',
    category: 'Healthcare & Pharma',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-13 -3 C-8 -11 8 -11 13 -3 C15 4 10 13 0 15 C-10 13 -15 4 -13 -3 Z" fill="none" stroke="#FF7043" strokeWidth="2.2" />
          <path d="M-6 -12 L6 6" stroke="#FF7043" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M-2 -7 Q -9 -14 -14 -9 Q -9 -4 -2 -7" fill="#FF7043" />
          <path d="M2 -7 Q 9 -14 14 -9 Q 9 -4 2 -7" fill="#10B981" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.4">
          Cornileus
        </text>
        <text x="54" y="42" fontSize="8.5" fontWeight="700" fill="#FF7043" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          PHARMACEUTICALS (P) LTD.
        </text>
      </svg>
    ),
  },

  // 5. Global Tree
  {
    id: 'global-tree',
    name: 'Global Tree',
    subtext: 'Education • Immigration • Training',
    category: 'Global Education & Careers',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <polygon points="0,-13 15,-6.5 0,0 -15,-6.5" fill="#00E5FF" />
          <path d="M-11,-3 L-11,5.5 Q 0,12 11,5.5 L11,-3" fill="none" stroke="#00E5FF" strokeWidth="2.2" />
          <circle cx="0" cy="1" r="13" fill="none" stroke="#26A69A" strokeWidth="1.6" strokeDasharray="3 2" />
          <path d="M15,-6.5 L18,4 L16,11" fill="none" stroke="#FFD700" strokeWidth="1.3" />
          <circle cx="16" cy="12" r="1.6" fill="#FFD700" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.6">
          GLOBAL <tspan fill="#00E5FF">TREE</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif">
          Education • Immigration • Training
        </text>
      </svg>
    ),
  },

  // 6. House of Hariya (3R)
  {
    id: 'house-of-hariya',
    name: 'House of Hariya (3R)',
    subtext: 'Heritage & Luxury',
    category: 'Heritage & Luxury',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="18" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="0" cy="0" r="15.5" stroke="#C5A059" strokeWidth="1.3" fill="none" />
          <rect x="-13" y="-9" width="26" height="18" rx="9" fill="#9E0031" stroke="#D4AF37" strokeWidth="1.3" />
          <text x="0" y="4" textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#FFD700" fontFamily="'Cinzel', serif">
            3R
          </text>
        </g>
        <text x="54" y="26" fontSize="14.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.2">
          HOUSE OF HARIYA
        </text>
        <text x="54" y="42" fontSize="8.5" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="1.5">
          HERITAGE & LUXURY
        </text>
      </svg>
    ),
  },

  // 7. IndustryARC
  {
    id: 'industryarc',
    name: 'IndustryARC',
    subtext: 'Analytics • Research • Consulting',
    category: 'Market Intelligence',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="15" fill="#0091EA" />
          <path d="M-15 0 C-15 -15 15 -15 17 0 C15 -10 -8 -10 -11 5" fill="#00E5FF" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.5">
          INDUSTRY<tspan fill="#00B0FF">ARC</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif">
          Analytics • Research • Consulting
        </text>
      </svg>
    ),
  },

  // 8. Naatu Entertainments
  {
    id: 'naatu-entertainments',
    name: 'Naatu Entertainments',
    subtext: 'Media & Entertainment',
    category: 'Media & Film Production',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" stroke="#DFBA73" strokeWidth="1.3" fill="none" />
          <polygon points="0,-11 3.5,-3.5 11,-3.5 4.5,2 7,10 0,5.5 -7,10 -4.5,2 -11,-3.5 -3.5,-3.5" fill="#FFD700" />
        </g>
        <text x="54" y="28" fontSize="21" fontWeight="800" fontStyle="italic" fill="#FFD700" fontFamily="'Playfair Display', cursive">
          Naatu
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="2">
          ENTERTAINMENTS
        </text>
      </svg>
    ),
  },

  // 9. Pegasus Solutions
  {
    id: 'pegasus-solutions',
    name: 'Pegasus Solutions',
    subtext: 'Reach us to reach abroad',
    category: 'Overseas Consultancy',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M -10 4 C -12 1 -8 -5 0 -7 C 5 -9 11 -3 13 0 C 11 3 3 5 0 5 Z" fill="#10B981" />
          <path d="M-2 -7 C-7 -15 5 -18 13 -11 C16 -8 13 -2 8 -3 C3 -5 3 -7 -2 -7 Z" fill="#34D399" />
          <path d="M3 -9 C0 -15 11 -16 16 -11 C14 -5 9 -3 3 -9 Z" fill="#6EE7B7" />
          <path d="M-5 5 L-9 13 M0 5 L-2 14 M5 5 L11 11 M8 3 L13 8" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#10B981" fontFamily="'Inter', sans-serif">
          Pegasus <tspan fill="#FFFFFF">Solutions</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#6EE7B7" fontFamily="'Inter', sans-serif">
          Reach us to reach abroad
        </text>
      </svg>
    ),
  },

  // 10. Radiant
  {
    id: 'radiant',
    name: 'Radiant',
    subtext: 'Luxury & Hospitality',
    category: 'Hospitality & Real Estate',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="17" stroke="#DFBA73" strokeWidth="1.2" strokeDasharray="4 2" fill="none" />
          <text x="0" y="7.5" textAnchor="middle" fontSize="22" fontWeight="800" fill="#FFD700" fontFamily="'Playfair Display', serif">
            R
          </text>
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="2">
          RADIANT
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="2">
          LUXURY & HOSPITALITY
        </text>
      </svg>
    ),
  },

  // 11. Royal eV
  {
    id: 'royal-ev',
    name: 'Royal eV',
    subtext: 'Ride with Pride',
    category: 'Electric Mobility & Green Tech',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-11 -8 L-8 0 L0 -9 L8 0 L11 -8 L11 4 L-11 4 Z" fill="#FFD700" stroke="#FFA000" strokeWidth="0.8" />
          <polygon points="1,4 -3,14 2,14 -1,19 6,11 0,11" fill="#22C55E" />
          <circle cx="-11" cy="-8" r="1.6" fill="#FFD700" />
          <circle cx="0" cy="-9" r="1.6" fill="#FFD700" />
          <circle cx="11" cy="-8" r="1.6" fill="#FFD700" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Royal <tspan fill="#FFD700">eV</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#4ADE80" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          RIDE WITH PRIDE • GREEN TECH
        </text>
      </svg>
    ),
  },

  // 12. Savin Technologies
  {
    id: 'savin-technologies',
    name: 'Savin Technologies',
    subtext: 'IT & Cloud Solutions',
    category: 'IT & Cloud Solutions',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M -8 -9 L 0 -13 L 8 -9 L 8 2 L 0 6 L -8 2 Z" stroke="#7C4DFF" strokeWidth="2.4" fill="none" />
          <path d="M 0 -6 L 8 -2 L 8 9 L 0 13 L -8 9 L -8 -2 Z" stroke="#00E5FF" strokeWidth="2.4" fill="none" />
        </g>
        <text x="54" y="27" fontSize="17.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Savin
        </text>
        <text x="54" y="42" fontSize="9" fontWeight="800" fill="#A78BFA" fontFamily="'Inter', sans-serif" letterSpacing="2">
          TECHNOLOGIES
        </text>
      </svg>
    ),
  },

  // 13. Snow Mist
  {
    id: 'snow-mist',
    name: 'Snow Mist',
    subtext: 'Premium Pure Living',
    category: 'FMCG & Beverages',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <polygon points="-13,9 -4,-6 5,9" fill="#FFFFFF" />
          <polygon points="-4,9 5,-8 14,9" fill="#E2E8F0" />
          <polygon points="-7,1 -4,-6 -1,1" fill="#38BDF8" />
          <polygon points="2,0 5,-8 8,0" fill="#38BDF8" />
          {[-8, 0, 8].map((dx, i) => (
            <polygon key={i} points="0,-1.6 0.5,-0.5 1.6,-0.5 0.8,0.2 1.1,1.4 0,0.8 -1.1,1.4 -0.8,0.2 -1.6,-0.5 -0.5,-0.5" fill="#38BDF8" transform={`translate(${dx}, -11)`} />
          ))}
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.2">
          SNOW MIST
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#38BDF8" fontFamily="'Inter', sans-serif" letterSpacing="1.5">
          HERITAGE PURE LIVING
        </text>
      </svg>
    ),
  },

  // 14. Tejas Elite
  {
    id: 'tejas-elite',
    name: 'Tejas Elite',
    subtext: 'We Care For Your Events',
    category: 'Event Management & Luxury',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-8 3 C-8 -2 0 -12 0 -12 C0 -12 8 -2 8 3 C8 9 -8 9 -8 3 Z" fill="#EF4444" />
          <path d="M-4 4 C-4 0 0 -6 0 -6 C0 -6 4 0 4 4 C4 8 -4 8 -4 4 Z" fill="#F59E0B" />
          <path d="M-11 9 Q 0 15 11 9" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.2">
          TEJAS ELITE
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#F59E0B" fontFamily="'Inter', sans-serif" letterSpacing="1">
          WE CARE FOR YOUR EVENTS
        </text>
      </svg>
    ),
  },

  // 15. trip Zada
  {
    id: 'trip-zada',
    name: 'trip Zada',
    subtext: 'Travel & Vacations',
    category: 'Travel & Tourism',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" stroke="#10B981" strokeWidth="1.6" fill="none" />
          <polygon points="0,-13 4.5,-2 13,0 4.5,2 0,13 -4.5,2 -13,0 -4.5,-2" fill="#10B981" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
        </g>
        <text x="54" y="28" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          trip <tspan fill="#22C55E">Zada</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          VACATIONS & EXPERIENCES
        </text>
      </svg>
    ),
  },

  // 16. Vijay Eye Care
  {
    id: 'vijay-eye-care',
    name: 'Vijay Eye Care',
    subtext: 'Vision First Hand',
    category: 'Ophthalmology & Healthcare',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-14 0 C-10 -10 10 -10 14 0 C10 10 -10 10 -14 0 Z" stroke="#FF7043" strokeWidth="2.2" fill="none" />
          <circle cx="0" cy="0" r="5.5" stroke="#00E5FF" strokeWidth="2.2" fill="none" />
          <circle cx="0" cy="0" r="2.4" fill="#FF7043" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.5">
          VIJAY EYE CARE
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#FF7043" fontFamily="'Inter', sans-serif">
          Vision First Hand • Eyecare
        </text>
      </svg>
    ),
  },

  // 17. Raki Avenues Pvt Ltd.
  {
    id: 'raki-avenues',
    name: 'Raki Avenues Pvt Ltd.',
    subtext: "Venu's Infrastructure",
    category: 'Real Estate & Infrastructure',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" fill="#0284C7" stroke="#FBBF24" strokeWidth="1.6" />
          <circle cx="0" cy="-5" r="5.5" fill="#FBBF24" />
          <path d="M-15 10 Q -6 -2 4 10 Z" fill="#15803D" />
          <path d="M-3 10 Q 7 2 15 10 Z" fill="#16A34A" />
        </g>
        <text x="54" y="27" fontSize="14.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.5">
          RAKI AVENUES
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#FBBF24" fontFamily="'Inter', sans-serif">
          Venu's Infrastructure (P) Ltd.
        </text>
      </svg>
    ),
  },

  // 18. CryoVault
  {
    id: 'cryovault',
    name: 'CryoVault',
    subtext: 'Stemcell Banking & Beyond',
    category: 'Biotech & Stem Cell Banking',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="13" stroke="#38BDF8" strokeWidth="2.6" fill="none" />
          <circle cx="0" cy="0" r="6" fill="#EF4444" />
          <path d="M0 -15 L0 -11 M0 11 L0 15 M-15 0 L-11 0 M11 0 L15 0" stroke="#38BDF8" strokeWidth="2" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Cryo<tspan fill="#EF4444">Vault</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif">
          Stemcell Banking & Beyond
        </text>
      </svg>
    ),
  },

  // 19. KOKA INFRA LLP
  {
    id: 'koka-infra',
    name: 'KOKA INFRA LLP',
    subtext: 'Construction & Development',
    category: 'Civil & Infra Construction',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-9 9 L-9 -11 L-3 -11 L-3 9 Z" fill="#EF4444" />
          <path d="M-3 -3 L6 -11 L11 -11 L1 0 L12 9 L7 9 L-3 1 Z" fill="#EF4444" />
          <polygon points="-11,-11 -3,-17 5,-11" fill="#DC2626" />
          <rect x="-1" y="-7" width="3" height="3" fill="#F59E0B" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#EF4444" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          KOKA <tspan fill="#FFFFFF">INFRA</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="800" fill="#F87171" fontFamily="'Inter', sans-serif" letterSpacing="1">
          CIVIL CONSTRUCTION LLP
        </text>
      </svg>
    ),
  },

  // 20. India Matrimony Hub
  {
    id: 'india-matrimony',
    name: 'India Matrimony Hub',
    subtext: 'Bringing Hearts Together',
    category: 'Matrimonial & Social',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-4 -3 C-9 -9 -14 0 -6 8 L0 13 L6 8 C14 0 9 -9 4 -3 L0 1 Z" fill="#F43F5E" />
          <circle cx="0" cy="-6" r="3.2" fill="#FFD700" />
        </g>
        <text x="54" y="27" fontSize="14.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.5">
          INDIA MATRIMONY
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="800" fill="#F43F5E" fontFamily="'Inter', sans-serif" letterSpacing="1">
          HUB • HEARTS TOGETHER
        </text>
      </svg>
    ),
  },

  // 21. Liquor Cave
  {
    id: 'liquor-cave',
    name: 'Liquor Cave',
    subtext: 'Fine Wine • Spirits • Craft Beer',
    category: 'Fine Beverages & Retail',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" stroke="#E11D48" strokeWidth="1.3" fill="none" />
          <path d="M-3 -9 H3 V-3 L5 0 V9 H-5 V0 L-3 -3 Z" fill="#E11D48" />
          <circle cx="0" cy="-11" r="1.6" fill="#F59E0B" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.5">
          LIQUOR CAVE
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#E11D48" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          FINE WINES & SPIRITS
        </text>
      </svg>
    ),
  },

  // 22. Rank One Odyssey
  {
    id: 'odyssey',
    name: 'Rank One Odyssey',
    subtext: 'Where You Belong',
    category: 'Architecture & Living',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="15" stroke="#F59E0B" strokeWidth="1.3" fill="none" />
          <circle cx="0" cy="0" r="5" fill="#F59E0B" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line key={deg} x1="0" y1="-6.5" x2="0" y2="-13" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg}, 0, 0)`} />
          ))}
        </g>
        <text x="54" y="27" fontSize="14.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="0.8">
          RANK ONE ODYSSEY
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#F59E0B" fontFamily="'Inter', sans-serif" letterSpacing="1.5">
          WHERE YOU BELONG
        </text>
      </svg>
    ),
  },

  // 23. Chavan's Clinic
  {
    id: 'chavans',
    name: "Chavan's Clinic",
    subtext: 'Skin • Hair • Trichology • Laser',
    category: 'Dermatology & Cosmetology',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" stroke="#EF4444" strokeWidth="1.3" fill="none" />
          <path d="M-2 -10 C5 -10 7 -3 7 2 C7 7 2 11 -3 13 C-2 7 -1 2 -2 -10 Z" fill="#EF4444" />
          <path d="M-5 -7 C-2 -7 0 -3 0 0 C0 3 -3 6 -6 9 C-5 3 -4 -1 -5 -7 Z" fill="#FFFFFF" />
          <circle cx="0" cy="-4" r="1.3" fill="#EF4444" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="0.8">
          CHAVAN'S CLINIC
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#F87171" fontFamily="'Inter', sans-serif" letterSpacing="1">
          SKIN • HAIR • TRICHOLOGY
        </text>
      </svg>
    ),
  },

  // 24. Ship Atoz
  {
    id: 'ship-atoz',
    name: 'Ship Atoz',
    subtext: 'Fast Courier & Logistics',
    category: 'Logistics & Supply Chain',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#FBBF24" strokeWidth="1.6" />
          <rect x="-9" y="-4" width="11" height="9" rx="1" fill="#FBBF24" />
          <path d="M2 -1 H8 L10 2 V4 H2 Z" fill="#FBBF24" />
          <circle cx="-5.5" cy="5.5" r="2.4" fill="#000000" stroke="#FBBF24" strokeWidth="1" />
          <circle cx="5.5" cy="5.5" r="2.4" fill="#000000" stroke="#FBBF24" strokeWidth="1" />
          <circle cx="0" cy="-7" r="1.5" fill="#EF4444" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Ship <tspan fill="#FBBF24">Atoz</tspan>
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#FDE047" fontFamily="'Inter', sans-serif" letterSpacing="1">
          FAST COURIER & LOGISTICS
        </text>
      </svg>
    ),
  },
];
