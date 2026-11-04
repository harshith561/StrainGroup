import React from 'react';

/* ==========================================================================
   ESTEEMED CLIENTS - 20 VERIFIED HIGH-CONTRAST VECTOR BRAND LOGOS
   100% Authentic to Strains Associates & Strains Fashions Private Limited.
   Includes 18 Verified External Clients + 2 In-House Flagship Brands.
   Proportioned with 250x60 viewBox for optimal prominence and legibility.
   ========================================================================== */

export const CLIENT_LOGOS_DATA = [
  // 1. JSW Cement (Core Client - Official PDF)
  {
    id: 'jsw-cement',
    name: 'JSW Cement',
    subtext: 'Green Cement • Slag & Concreel HD',
    category: 'Infrastructure & Heavy Industry',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Slanted architectural blocks symbolizing structural cement */}
          <polygon points="-14,10 -8,-12 0,-12 -6,10" fill="#0284C7" />
          <polygon points="-3,10 3,-12 11,-12 5,10" fill="#EF4444" />
          <polygon points="8,10 14,-12 18,-12 12,10" fill="#0284C7" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          JSW <tspan fill="#38BDF8">CEMENT</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#38BDF8" fontFamily="'Inter', sans-serif" letterSpacing="1.4">
          GREEN CEMENT • INFRASTRUCTURE
        </text>
      </svg>
    ),
  },

  // 2. Xiti (Core Client - Official PDF)
  {
    id: 'xiti',
    name: 'Xiti',
    subtext: 'Handlooms & Eco-Apparel',
    category: 'Luxury Fashion & Handloom',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Weave loom diamond geometric mark */}
          <polygon points="0,-14 14,0 0,14 -14,0" stroke="#DFBA73" strokeWidth="1.6" fill="none" />
          <polygon points="0,-8 8,0 0,8 -8,0" fill="#10B981" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
          <line x1="-14" y1="0" x2="14" y2="0" stroke="#DFBA73" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        <text x="54" y="27" fontSize="17.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="2.5">
          XITI
        </text>
        <text x="54" y="43" fontSize="8.5" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="1.6">
          HANDLOOMS & ECO-APPAREL
        </text>
      </svg>
    ),
  },

  // 3. Haraa Gold & Diamonds (Core Client - Official PDF)
  {
    id: 'haraa-gold',
    name: 'Haraa Gold & Diamonds',
    subtext: 'Luxury Bridal Jewellery • Jubilee Hills',
    category: 'Luxury Gold & Diamonds',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Crown and radiant diamond facet */}
          <polygon points="0,-13 12,-4 0,14 -12,-4" stroke="#FFD700" strokeWidth="1.5" fill="none" />
          <polygon points="0,-13 6,-4 0,4 -6,-4" fill="#FFD700" />
          <circle cx="0" cy="-14" r="1.6" fill="#FFFFFF" />
          <circle cx="-12" cy="-4" r="1.4" fill="#FFFFFF" />
          <circle cx="12" cy="-4" r="1.4" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="16" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.8">
          HARAA <tspan fill="#FFD700">GOLD</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="1.5">
          DIAMONDS • JUBILEE HILLS
        </text>
      </svg>
    ),
  },

  // 4. Partha Dental (Core Client - Official PDF)
  {
    id: 'partha-dental',
    name: 'Partha Dental',
    subtext: 'Skin & Hair Clinics • 130+ Centers',
    category: 'Healthcare & Aesthetics',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Clinical cross & aesthetic dental shield */}
          <circle cx="0" cy="0" r="15" stroke="#00E5FF" strokeWidth="1.6" fill="none" />
          <path d="M-5 -8 C-8 -8 -9 -3 -6 2 L0 10 L6 2 C9 -3 8 -8 5 -8 C2 -8 0 -5 0 -5 C0 -5 -2 -8 -5 -8 Z" fill="#00E5FF" />
          <circle cx="0" cy="-1" r="2" fill="#0284C7" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          PARTHA <tspan fill="#00E5FF">DENTAL</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#7DD3FC" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          SKIN & HAIR • 130+ CLINICS
        </text>
      </svg>
    ),
  },

  // 5. Sri BioAesthetics (Core Client - Official PDF)
  {
    id: 'sri-bioaesthetics',
    name: 'Sri BioAesthetics',
    subtext: 'Microbial Agri-Biotech • SoilFirst',
    category: 'Microbial Biotechnology',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Bio-helix and living sprout leaf */}
          <circle cx="0" cy="0" r="15" stroke="#10B981" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
          <path d="M-7 7 C-10 0 -5 -11 0 -13 C5 -11 10 0 7 7 C3 11 -3 11 -7 7 Z" fill="#10B981" />
          <path d="M0 -11 L0 8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="-3" cy="-1" r="1.4" fill="#34D399" />
          <circle cx="3" cy="2" r="1.4" fill="#34D399" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.5">
          SRI <tspan fill="#10B981">BIOAESTHETICS</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#6EE7B7" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          MICROBIAL BIOTECH • SOILFIRST
        </text>
      </svg>
    ),
  },

  // 6. Pakka Non Veg (Core Client - Official PDF)
  {
    id: 'pakka-non-veg',
    name: 'Pakka Non Veg',
    subtext: 'Authentic South Indian Cuisine',
    category: 'Culinary & Restaurant Chain',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Culinary woodfire sizzle and clay-pot flame */}
          <circle cx="0" cy="0" r="16" stroke="#EF4444" strokeWidth="1.4" fill="none" />
          <path d="M-6 8 C-10 2 -8 -7 0 -13 C2 -7 7 -5 7 0 C7 6 2 10 -6 8 Z" fill="#EF4444" />
          <path d="M-2 7 C-5 4 -3 -2 1 -6 C3 -2 4 1 4 4 C4 7 1 8 -2 7 Z" fill="#F59E0B" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.6">
          PAKKA <tspan fill="#EF4444">NON VEG</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#FBBF24" fontFamily="'Inter', sans-serif" letterSpacing="1.3">
          SOUTH INDIAN CULINARY
        </text>
      </svg>
    ),
  },

  // 7. Pioneer Cranes & Hoists (Verified Online Portfolio)
  {
    id: 'pioneer-cranes',
    name: 'Pioneer Cranes',
    subtext: 'Industrial Overhead EOT Cranes',
    category: 'Heavy Material Handling',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Heavy industrial crane gantry & hook */}
          <rect x="-14" y="-12" width="28" height="5" rx="1" fill="#F59E0B" />
          <line x1="-10" y1="-7" x2="-10" y2="12" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="10" y1="-7" x2="10" y2="12" stroke="#F59E0B" strokeWidth="2.5" />
          <path d="M0 -7 L0 3 C0 7 4 8 4 11 C4 13 2 14 0 14 C-2 14 -4 13 -4 11" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          PIONEER <tspan fill="#F59E0B">CRANES</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#FCD34D" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          EOT CRANES & HOISTS
        </text>
      </svg>
    ),
  },

  // 8. Aastu Refrigeration (Verified Online Portfolio)
  {
    id: 'aastu-refrigeration',
    name: 'Aastu Refrigeration',
    subtext: 'Industrial HVAC & Cold Chain',
    category: 'Commercial Refrigeration & HVAC',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          {/* Industrial cooling snowflake crystal */}
          <rect x="-14" y="-14" width="28" height="28" rx="4" stroke="#00E676" strokeWidth="1.5" fill="none" />
          <path d="M-8 0 L8 0 M0 -8 L0 8" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
          <path d="M-5 -5 L5 5 M-5 5 L5 -5" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          AASTU <tspan fill="#00E676">REFRIGERATION</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#6EE7B7" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          INDUSTRIAL HVAC & COLD CHAIN
        </text>
      </svg>
    ),
  },

  // 9. Bhama Emporio (Verified Online Portfolio)
  {
    id: 'bhama-emporio',
    name: 'Bhama Emporio',
    subtext: 'Bridal Couture & Silks • Jubilee Hills',
    category: 'Fashion & Bridal Retail',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <ellipse cx="-7" cy="-8" rx="6" ry="9" fill="#00B4D8" transform="rotate(-30, -7, -8)" />
          <ellipse cx="7" cy="-8" rx="6" ry="9" fill="#E0218A" transform="rotate(30, 7, -8)" />
          <ellipse cx="-7" cy="8" rx="5" ry="7.5" fill="#FFD100" transform="rotate(30, -7, 8)" />
          <ellipse cx="7" cy="8" rx="5" ry="7.5" fill="#7B2CBF" transform="rotate(-30, 7, 8)" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="16" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.8">
          BHAMA
        </text>
        <text x="54" y="43" fontSize="9" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="2.5">
          EMPORIO • JUBILEE HILLS
        </text>
      </svg>
    ),
  },

  // 10. Royal EV (Verified Online Portfolio)
  {
    id: 'royal-ev',
    name: 'Royal EV',
    subtext: 'Ride with Pride • Clean Mobility',
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
          Royal <tspan fill="#FFD700">EV</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#4ADE80" fontFamily="'Inter', sans-serif" letterSpacing="1">
          RIDE WITH PRIDE • CLEAN MOBILITY
        </text>
      </svg>
    ),
  },

  // 11. CryoVault Biotech (Verified Online Portfolio)
  {
    id: 'cryovault',
    name: 'CryoVault',
    subtext: 'Stem Cell & Cord Blood Banking',
    category: 'Biotechnology & Stem Cells',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="13" stroke="#38BDF8" strokeWidth="2.4" fill="none" />
          <circle cx="0" cy="0" r="5.5" fill="#EF4444" />
          <path d="M0 -15 L0 -11 M0 11 L0 15 M-15 0 L-11 0 M11 0 L15 0" stroke="#38BDF8" strokeWidth="2" />
        </g>
        <text x="54" y="27" fontSize="16" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Cryo<tspan fill="#EF4444">Vault</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          STEM CELL & CORD BLOOD BANKING
        </text>
      </svg>
    ),
  },

  // 12. Cornileus Pharmaceuticals (Verified Online Portfolio)
  {
    id: 'cornileus',
    name: 'Cornileus Pharmaceuticals',
    subtext: 'Pellet Formulations & APIs',
    category: 'Healthcare & Pharma',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-13 -3 C-8 -11 8 -11 13 -3 C15 4 10 13 0 15 C-10 13 -15 4 -13 -3 Z" fill="none" stroke="#FF7043" strokeWidth="2" />
          <path d="M-6 -12 L6 6" stroke="#FF7043" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M-2 -7 Q -9 -14 -14 -9 Q -9 -4 -2 -7" fill="#FF7043" />
          <path d="M2 -7 Q 9 -14 14 -9 Q 9 -4 2 -7" fill="#10B981" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="800" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.4">
          Cornileus
        </text>
        <text x="54" y="42" fontSize="8" fontWeight="700" fill="#FF7043" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          PHARMACEUTICALS (P) LTD.
        </text>
      </svg>
    ),
  },

  // 13. Global Tree (Verified Online Portfolio)
  {
    id: 'global-tree',
    name: 'Global Tree',
    subtext: 'Overseas Education & Immigration',
    category: 'Global Education & Careers',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <polygon points="0,-13 15,-6.5 0,0 -15,-6.5" fill="#00E5FF" />
          <path d="M-11,-3 L-11,5.5 Q 0,12 11,5.5 L11,-3" fill="none" stroke="#00E5FF" strokeWidth="2.2" />
          <circle cx="0" cy="1" r="13" fill="none" stroke="#26A69A" strokeWidth="1.6" strokeDasharray="3 2" />
        </g>
        <text x="54" y="27" fontSize="15.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.6">
          GLOBAL <tspan fill="#00E5FF">TREE</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="1">
          EDUCATION & IMMIGRATION
        </text>
      </svg>
    ),
  },

  // 14. IndustryARC (Verified Online Portfolio)
  {
    id: 'industryarc',
    name: 'IndustryARC',
    subtext: 'Analytics • Research • Consulting',
    category: 'Market Intelligence & Analytics',
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
        <text x="54" y="43" fontSize="8" fontWeight="600" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          ANALYTICS • RESEARCH • REPORTS
        </text>
      </svg>
    ),
  },

  // 15. Ship AtoZ (Verified Online Portfolio)
  {
    id: 'ship-atoz',
    name: 'Ship AtoZ',
    subtext: 'Intra-City Logistics Platform',
    category: 'Logistics & Supply Chain',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#FBBF24" strokeWidth="1.6" />
          <rect x="-9" y="-4" width="11" height="9" rx="1" fill="#FBBF24" />
          <path d="M2 -1 H8 L10 2 V4 H2 Z" fill="#FBBF24" />
          <circle cx="-5.5" cy="5.5" r="2.4" fill="#000000" stroke="#FBBF24" strokeWidth="1" />
          <circle cx="5.5" cy="5.5" r="2.4" fill="#000000" stroke="#FBBF24" strokeWidth="1" />
        </g>
        <text x="54" y="27" fontSize="16.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif">
          Ship <tspan fill="#FBBF24">AtoZ</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#FDE047" fontFamily="'Inter', sans-serif" letterSpacing="1">
          ON-DEMAND LOGISTICS PLATFORM
        </text>
      </svg>
    ),
  },

  // 16. TripZada (Verified Online Portfolio)
  {
    id: 'trip-zada',
    name: 'TripZada',
    subtext: 'Curated Tours & Experiential Travel',
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
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#CBD5E1" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          CURATED TOURS & EXPERIENCES
        </text>
      </svg>
    ),
  },

  // 17. Tejas Elite (Verified Online Portfolio)
  {
    id: 'tejas-elite',
    name: 'Tejas Elite',
    subtext: 'Property Development & Infrastructure',
    category: 'Real Estate & Construction',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <path d="M-8 3 C-8 -2 0 -12 0 -12 C0 -12 8 -2 8 3 C8 9 -8 9 -8 3 Z" fill="#EF4444" />
          <path d="M-4 4 C-4 0 0 -6 0 -6 C0 -6 4 0 4 4 C4 8 -4 8 -4 4 Z" fill="#F59E0B" />
          <path d="M-11 9 Q 0 15 11 9" stroke="#EF4444" strokeWidth="1.5" fill="none" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="800" fill="#FFFFFF" fontFamily="'Cinzel', serif" letterSpacing="1.2">
          TEJAS ELITE
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#F59E0B" fontFamily="'Inter', sans-serif" letterSpacing="1">
          REAL ESTATE & DEVELOPMENTS
        </text>
      </svg>
    ),
  },

  // 18. Savin International (Verified Online Portfolio)
  {
    id: 'savin-international',
    name: 'Savin International',
    subtext: 'Global Commodity Trade & Export',
    category: 'International Trade & Export',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="16" stroke="#818CF8" strokeWidth="1.4" fill="none" />
          <path d="M-12 0 H12 M0 -12 V12" stroke="#818CF8" strokeWidth="1.2" />
          <ellipse cx="0" cy="0" rx="9" ry="15" stroke="#2DD4BF" strokeWidth="1.2" fill="none" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="14.5" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          SAVIN <tspan fill="#818CF8">INTERNATIONAL</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#A78BFA" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          GLOBAL COMMODITY TRADE
        </text>
      </svg>
    ),
  },

  // 19. Strains Fashions (In-House Flagship Brand)
  {
    id: 'strains-fashions',
    name: 'Strains Fashions',
    subtext: 'Conscious Organic Apparel & Botanic Dyes',
    category: 'Sustainable D2C Fashion',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="15" stroke="#00a859" strokeWidth="1.6" fill="none" />
          <path d="M0 -10 C-6 -4 -4 8 0 12 C4 8 6 -4 0 -10 Z" fill="#00a859" />
          <circle cx="0" cy="-2" r="2.2" fill="#FFFFFF" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          STRAINS <tspan fill="#00a859">FASHIONS</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#86EFAC" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          CONSCIOUS ORGANIC WEAR
        </text>
      </svg>
    ),
  },

  // 20. Strains Stitchery (In-House Manufacturing Hub, Tirupur)
  {
    id: 'strains-stitchery',
    name: 'Strains Stitchery',
    subtext: 'Zero-Discharge Garments • Tirupur',
    category: 'Ethical Garment Manufacturing',
    logo: (
      <svg viewBox="0 0 250 60" className="w-full h-full" fill="none">
        <g transform="translate(26, 30)">
          <circle cx="0" cy="0" r="15" stroke="#DFBA73" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
          <path d="M-10 -10 L10 10 M7 -10 L-7 10" stroke="#00a859" strokeWidth="2" strokeLinecap="round" />
          <circle cx="0" cy="0" r="3.5" fill="#DFBA73" />
        </g>
        <text x="54" y="27" fontSize="15" fontWeight="900" fill="#FFFFFF" fontFamily="'Inter', sans-serif" letterSpacing="0.8">
          STRAINS <tspan fill="#00a859">STITCHERY</tspan>
        </text>
        <text x="54" y="43" fontSize="8" fontWeight="700" fill="#DFBA73" fontFamily="'Inter', sans-serif" letterSpacing="1.2">
          ZERO-DISCHARGE HUB • TIRUPUR
        </text>
      </svg>
    ),
  },
];
