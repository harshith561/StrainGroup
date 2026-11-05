/**
 * Centralized Data & Media Assets Configuration for Sustainability Page
 * Strains Associates & Strains Fashions Private Limited
 */

export const SUSTAINABILITY_ASSETS = {
  heroVideo: {
    src: '/videos/clothing-manufacturing-hero.mp4',
    fallbackSrc: '/videos/contact-hero.mp4',
    poster: '/images/ecosystem/hero-factory.jpg',
  },
  showcaseVideo: {
    src: '/videos/clothing-manufacturing-video.mp4',
    fallbackSrc: '/videos/clothing-manufacturing-hero.mp4',
    poster: '/images/ecosystem/phase-stitchery.jpg',
  },
  ctaVideo: {
    src: '/videos/clothing-manufacturing-contact.mp4',
    fallbackSrc: '/videos/contact-hero.mp4',
    poster: '/images/ecosystem/hub-tirupur.jpg',
  },
  // Background Image for the CTA Section (Replace with any image URL/path)
  ctaImage: {
    src: '/images/ecosystem/hub-tirupur.jpg',
    alt: 'Strains Sustainable Manufacturing Facility Tirupur',
  },
};

export const SUSTAINABILITY_STATS = [
  {
    value: '100%',
    label: 'Zero Liquid Discharge',
    subtext: 'Complete closed-loop water recovery & biological filtration at Tirupur.',
  },
  {
    value: '80%',
    label: 'Water Consumption Saved',
    subtext: 'Himalayan hemp bast fibers require a fraction of conventional cotton irrigation.',
  },
  {
    value: '0%',
    label: 'Toxic Effluents & Heavy Metals',
    subtext: 'No azo dyes, formaldehyde, or synthetic chromium salts discharged into nature.',
  },
  {
    value: '10,000+',
    label: 'Basil Seedlings Sprouted',
    subtext: 'Living, non-GMO seed-embedded price tags transforming into fresh kitchen herbs.',
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    id: 'zld',
    tag: 'CLOSED-LOOP WATER',
    title: 'Zero Liquid Discharge (ZLD) Infrastructure',
    description:
      'Conventional textile processing dumps millions of liters of chemical-laden sludge into local river basins. In our Tirupur facility, 100% of dye and wash effluent is routed through multi-stage biological filtration, ultra-filtration, and reverse osmosis, recycling pure water back into production cycles.',
    stats: '100% Recirculated Water',
    iconName: 'Droplets',
    accentColor: '#00e676',
    highlights: [
      'Multi-stage Reverse Osmosis & Nano-filtration',
      'Solid residue mineralized for eco-construction bricks',
      'Tested safe for surrounding flora and agriculture',
      'Strict compliance with Tamil Nadu Pollution Control Board',
    ],
  },
  {
    id: 'bast-fibers',
    tag: 'REGENERATIVE FIBERS',
    title: 'Himalayan Hemp & GOTS Organic Cotton',
    description:
      'We curate certified raw materials straight from verified organic farmer cooperatives. Pure industrial hemp requires zero synthetic pesticides, replenishes topsoil through nitrogen fixation, and produces breathable garments with 3x the tensile strength of conventional fast-fashion fabrics.',
    stats: '80% Lower Water Footprint',
    iconName: 'Leaf',
    accentColor: '#00a859',
    highlights: [
      'GOTS Certified 100% Organic Cotton (Non-GMO)',
      'High-tenacity wild Himalayan hemp bast fibers',
      'Cruelty-free vegan cellulosic silk & plant leather',
      'Hypoallergenic, breathable, and zero synthetic microplastics',
    ],
  },
  {
    id: 'botanical-dyes',
    tag: 'CIRCULAR PIGMENTS',
    title: 'Botanical Fruit & Flower Dye Extraction',
    description:
      'Our color kitchen replaces petroleum-derived carcinogenic synthetic dyes with slow-simmered extracts of discarded pomegranate rinds, wild marigold flower garlands, madder root, and wild indigo. The exhausted dye broth is 100% organic compost safe for farming.',
    stats: 'Zero Petroleum Pigments',
    iconName: 'Flower2',
    accentColor: '#10b981',
    highlights: [
      'Pomegranate rinds, marigold flowers, turmeric & madder',
      'Natural alum & salt mordanting without heavy metal fixers',
      'Earthy, warm palettes that age gracefully with gentle washes',
      '100% compostable botanical sludge returned to soil',
    ],
  },
  {
    id: 'living-packaging',
    tag: 'BIOCELLULAR PACKAGING',
    title: 'Plantable Seed Tags & Compostable Wraps',
    description:
      'Instead of throwing price tags into a landfill, customers plant ours into moist soil. Handcrafted from post-consumer recycled cotton rag paper, our hangtags are embedded with live, non-GMO sweet basil and wildflower seeds that sprout within 7 to 10 days.',
    stats: 'Zero Single-Use Plastic',
    iconName: 'Sprout',
    accentColor: '#34d399',
    highlights: [
      'Recycled cotton rag paper embedded with living seeds',
      'Biodegradable cornstarch garment polybags',
      'Soy-based non-toxic offset printing inks',
      'Zero single-use plastic tape or nylon kimble tags',
    ],
  },
];

export const BOTANICAL_DYES_LIST = [
  {
    id: 'pomegranate',
    name: 'Pomegranate Rind',
    botanicalName: 'Punica granatum',
    colorName: 'Khaki Ochre & Golden Moss',
    hex: '#8C7738',
    gradient: 'from-[#605221] to-[#99833D]',
    source: 'Upcycled fruit rinds from local organic juice vendors',
    benefit: 'Naturally high in tannins, acting as its own organic mordant for high colorfastness.',
    washFastness: 'Rating 4/5',
  },
  {
    id: 'marigold',
    name: 'Temple Marigold Petals',
    botanicalName: 'Tagetes erecta',
    colorName: 'Sunlit Amber & Honey Gold',
    hex: '#D97706',
    gradient: 'from-[#B45309] to-[#F59E0B]',
    source: 'Collected holy floral offerings from South Indian temples',
    benefit: 'Antimicrobial carotenoids impart glowing sunny hues without artificial brighteners.',
    washFastness: 'Rating 4.2/5',
  },
  {
    id: 'madder',
    name: 'Indian Madder (Manjistha)',
    botanicalName: 'Rubia cordifolia',
    colorName: 'Terracotta & Dusty Rose',
    hex: '#9F2B3E',
    gradient: 'from-[#881337] to-[#BE123C]',
    source: 'Wild harvested roots from sustainable forest reserves',
    benefit: 'Ancient Ayurvedic therapeutic plant prized for skin-soothing, antibacterial properties.',
    washFastness: 'Rating 4.5/5',
  },
  {
    id: 'indigo',
    name: 'Wild Indigo Leaf',
    botanicalName: 'Indigofera tinctoria',
    colorName: 'Deep Midnight & Aegean Blue',
    hex: '#1E3A8A',
    gradient: 'from-[#172554] to-[#1E40AF]',
    source: 'Naturally fermented green indigo leaf vats in Tamil Nadu',
    benefit: 'Completely natural microbial reduction without hazardous sodium hydrosulfite.',
    washFastness: 'Rating 4.8/5',
  },
  {
    id: 'turmeric',
    name: 'Organic Turmeric Root',
    botanicalName: 'Curcuma longa',
    colorName: 'Zesty Saffron & Radiant Gold',
    hex: '#EAB308',
    gradient: 'from-[#CA8A04] to-[#FACC15]',
    source: 'Deccan plateau organic agricultural cooperatives',
    benefit: 'Curcumin pigment infuses garments with natural antibacterial and hypo-allergenic shielding.',
    washFastness: 'Rating 4/5',
  },
  {
    id: 'chlorophyll',
    name: 'Wild Acacia & Chlorophyll',
    botanicalName: 'Acacia catechu',
    colorName: 'Earthy Sage & Deep Khaki',
    hex: '#3F6212',
    gradient: 'from-[#365314] to-[#4D7C0F]',
    source: 'Fallen acacia bark and natural spinach leaf extracts',
    benefit: 'Rich in catechin tannins providing rich, grounding earthy neutrals that never fade.',
    washFastness: 'Rating 4.5/5',
  },
];

export const SUSTAINABLE_MATERIALS_DATA = [
  {
    id: 'hemp',
    name: 'Pure Himalayan Hemp & Blends',
    category: 'Regenerative Bast Fiber',
    image: '/images/ecosystem/material-hemp-textiles.jpg',
    tag: 'Zero Chemical Pesticides',
    summary:
      'Hemp is nature’s most resilient textile fiber. Grown in Himalayan foothills with natural rainfall, it requires 80% less water than conventional cotton and produces long-lasting, antimicrobial garments that soften with every wash.',
    metrics: [
      { label: 'Water Savings', value: '80% Lower Usage' },
      { label: 'Tensile Strength', value: '3x Conventional Cotton' },
      { label: 'UV Resistance', value: 'Blocks 95% UVA/B' },
      { label: 'Microplastics', value: '0% Synthetic Leaching' },
    ],
    features: [
      'Naturally pest-resistant without synthetic pesticides',
      'Deep taproots prevent soil erosion and sequester carbon',
      'Thermo-regulating fiber keeps you cool in summer and warm in winter',
      'Blended with organic cotton for ultra-soft hoodies and tees',
    ],
  },
  {
    id: 'organic-cotton',
    name: 'GOTS Certified Organic Cotton',
    category: 'Heirloom Non-GMO Agriculture',
    image: '/images/ecosystem/material-organic-cotton.jpg',
    tag: 'Fair Wage Farmer Cooperatives',
    summary:
      'Grown strictly from heirloom, non-genetically modified seeds on rain-fed farms. Cultivated without synthetic nitrogen fertilizers or chemical defoliants, preserving groundwater aquifers and farmer health.',
    metrics: [
      { label: 'Seed Purity', value: '100% Non-GMO' },
      { label: 'Synthetic Pesticides', value: '0 Grams Used' },
      { label: 'Soil Organic Carbon', value: '+35% Enrichment' },
      { label: 'Dermatological Safety', value: 'Hypoallergenic Certified' },
    ],
    features: [
      'GOTS (Global Organic Textile Standard) certified supply chain',
      'Spun into premium single jersey, French terry, and fleece in Tirupur',
      'Ultra-soft handfeel ideal for sensitive skin and infants',
      'Fair pricing guarantees sustainable income for rural farming communities',
    ],
  },
  {
    id: 'botanical-dyes',
    name: 'Botanical Pigments & Zero Discharge',
    category: 'Closed-Loop Circular Color',
    image: '/images/ecosystem/material-botanical-dyes.jpg',
    tag: '100% Biodegradable Runoff',
    summary:
      'Our color laboratory extracts rich, warm palettes by simmering pomegranate rinds, temple marigold flowers, turmeric, and madder root. Paired with our closed-loop ZLD water treatment, it produces zero environmental toxicity.',
    metrics: [
      { label: 'Heavy Metals', value: '0% Lead & Chromium' },
      { label: 'Azo Compounds', value: '0% Carcinogens' },
      { label: 'Effluent Safety', value: 'Clean Enough to Drink' },
      { label: 'Sludge Recycling', value: '100% Farm Compost' },
    ],
    features: [
      'Eliminates harmful synthetic azo dyestuffs and heavy metal mordants',
      'Effluent water is treated and recirculated back to the dyehouse',
      'Yields living, organic hues with warm, artisanal depth',
      'Tested to international colorfastness and wash-fastness benchmarks',
    ],
  },
  {
    id: 'vegan-materials',
    name: 'Cellulosic Vegan Silk & Vegan Leather',
    category: 'Cruelty-Free Biomaterials',
    image: '/images/ecosystem/material-vegan-silk-leather.jpg',
    tag: 'Zero Animal Exploitation',
    summary:
      'Luxurious textures engineered from plant cellulose, tree bark, and bio-based fibers. Offering the fluid drape of silk and the rich tactile durability of leather without harming a single animal or using toxic polyurethane plastic.',
    metrics: [
      { label: 'Animal Exploitation', value: '0 Animals Harmed' },
      { label: 'Chromium Tanning', value: '0% Toxic Baths' },
      { label: 'Breathability', value: 'High Cellular Porosity' },
      { label: 'End of Life', value: 'Biodegradable Biomass' },
    ],
    features: [
      'Buttery-soft drape engineered from sustainably harvested plant cellulose',
      'Plant-based vegan leather for garment trims, patches, and accessories',
      'No toxic formaldehyde, solvent dimethylformamide, or PVC coatings',
      'A true cruelty-free alternative for mindful contemporary fashion labels',
    ],
  },
  {
    id: 'plantable-tags',
    name: 'Plantable Seed Tags & Cornstarch Bags',
    category: 'Regenerative Living Artifacts',
    image: '/images/ecosystem/material-plantable-seed-tags.jpg',
    tag: 'Sprouts Sweet Basil & Flowers',
    summary:
      'Every garment is tagged with handmade recycled cotton rag paper embedded with living non-GMO sweet basil seeds. Customers plant the tag in potting soil, water it, and watch fresh aromatic herbs grow on their windowsill.',
    metrics: [
      { label: 'Paper Base', value: '100% Recycled Cotton Offcuts' },
      { label: 'Live Seeds Embedded', value: 'Non-GMO Sweet Basil' },
      { label: 'Germination Window', value: '7 to 10 Days' },
      { label: 'Plastic Polybags', value: '100% Replaced by Bio-Bags' },
    ],
    features: [
      'Turns post-consumer factory cutting waste into living biodiversity',
      'Printed with water-soluble, non-toxic soy and vegetable inks',
      'Accompanied by biodegradable cornstarch polybags that dissolve harmlessly',
      'Creates an unforgettable, tactile unboxing experience for your customers',
    ],
  },
];

export const SUSTAINABILITY_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Non-GMO Regenerative Sourcing',
    subtitle: 'Direct Farmer Cooperatives',
    description:
      'We source certified non-GMO organic cotton from Deccan plateau farmer cooperatives and wild-grown hemp from Himalayan foothills. Farmers receive premium living wages and zero synthetic agrochemical debt.',
    iconName: 'Sprout',
    deliverables: [
      'GOTS Certified Organic Raw Bolls',
      'Pesticide-Free High-Tenacity Hemp Stalks',
      'Farmer Fair-Trade Pricing Verification',
      'Soil Organic Matter Health Audits',
    ],
  },
  {
    step: '02',
    title: 'Clean Spinning & Circular Knitting',
    subtitle: 'Tirupur Textile Hub',
    description:
      'Raw fibers are gently carded and ring-spun in clean facilities with air filtration. We knit single jersey, interlock, French terry, and fleece using energy-efficient circular knitting machinery.',
    iconName: 'Wind',
    deliverables: [
      'Ring-Spun Long-Staple Combed Yarns',
      'Custom GSM Knits (180 to 450 GSM)',
      'Zero Chemical Sizing or Chlorine Bleach',
      'Strict Fabric Shrinkage & Torque Tests',
    ],
  },
  {
    step: '03',
    title: 'Botanical Dyeing & ZLD Water Recovery',
    subtitle: '100% Effluent Recirculation',
    description:
      'Natural botanical extracts (pomegranate, marigold, madder, turmeric) are infused into the fabrics. All process water passes through our Zero Liquid Discharge plant, purifying water back into crystal-clear drinking standards.',
    iconName: 'Droplet',
    deliverables: [
      '100% Plant & Flower Pigments',
      'Multi-Stage RO & Biological Water Recycling',
      'Zero Effluent Discharged Outside Facility',
      'ISO Washfastness & Lightfastness Reports',
    ],
  },
  {
    step: '04',
    title: 'Ethical Cut, Make & Trim (CMT)',
    subtitle: 'Fair Wages & Low Fabric Waste',
    description:
      'Master cutters utilize computer-assisted nesting algorithms to minimize cutting waste offcuts. Our garment workers enjoy air-conditioned workspaces, ergonomic workstations, fair living wages, and healthcare benefits.',
    iconName: 'Scissors',
    deliverables: [
      'CAD Optimized Pattern Nesting (<5% scrap)',
      'Precision Twin-Needle & Flatlock Seaming',
      'Living Wage & Ethical Labor Enforced',
      'Zero Fabric Scrap Sent to Landfill (Upcycled into Paper)',
    ],
  },
  {
    step: '05',
    title: 'Living Artifacts & Zero Plastic Delivery',
    subtitle: 'Plantable Tags & Compostable Bags',
    description:
      'Fabric cutting offcuts are pulped into paper embedded with live non-GMO sweet basil seeds to create price tags. Garments are sealed in cornstarch bio-bags and shipped in 100% recycled corrugated master cartons.',
    iconName: 'PackageCheck',
    deliverables: [
      'Handmade Plantable Seed Hangtags',
      '100% Biodegradable Cornstarch Garment Bags',
      'Recycled Kraft Paper Shipping Tape',
      'Global Carbon-Neutral Freight Options',
    ],
  },
];

export const SUSTAINABILITY_FAQS = [
  {
    question: 'How does your Zero Liquid Discharge (ZLD) plant in Tirupur work?',
    answer:
      'Our facility in Tirupur operates a closed-loop effluent treatment system. Wastewater from the botanical dyeing and scouring processes is treated through a biological aerobic reactor, followed by dual-media filtration, activated carbon adsorption, ultra-filtration, and two-stage reverse osmosis (RO). The permeate (98% of the water) is crystal clear and pumped directly back into the dyehouse for the next batch. The remaining 2% reject is evaporated in solar recovery pans to recover safe mineral salts used in sustainable construction bricks. Zero drops of wastewater ever leave our factory premises into local water tables.',
  },
  {
    question: 'Do natural botanical dyes wash out or fade quickly?',
    answer:
      'No. Our botanical dyeing methodology pairs rich plant tannins (such as those naturally occurring in pomegranate rinds and acacia) with natural mineral salts (alum mordants) to molecularly bind the pigment onto organic fibers. Our fabrics achieve an industry-standard ISO colorfastness rating of 4 to 4.5 out of 5 for washing and light. Just like premium selvedge denim or heirloom linen, botanical garments develop a gorgeous, subtle patina over years of wear that chemical synthetic garments can never replicate.',
  },
  {
    question: 'How do customers plant and grow the seed price tags?',
    answer:
      'It is remarkably simple! Each tag is made from handmade post-consumer cotton rag embedded with live, non-GMO sweet basil seeds. To plant: soak the tag in water for 15 minutes, lay it in a small pot of potting soil, cover it with a light layer of soil (about 1/8 inch), place it in a sunny windowsill, and water daily. Within 7 to 10 days, green basil seedlings will sprout. In 4 to 6 weeks, your customer will be harvesting fresh, aromatic basil for their meals.',
  },
  {
    question: 'What are the minimum order quantities (MOQs) for sustainable manufacturing?',
    answer:
      'Because Strains operates its own integrated production hub in Tirupur rather than relying on third-party middlemen, we offer flexible, founder-friendly MOQs starting at just 100 to 250 pieces per style/colorway for organic cotton and hemp garments. For enterprise brands seeking scale, our production floors comfortably handle 10,000 to 50,000+ units per month with consistent AQL 2.5 quality control.',
  },
  {
    question: 'Can existing fashion labels transition their supply chain to Strains?',
    answer:
      'Yes. Over 40% of our apparel manufacturing clients are established brands migrating from conventional polluting mills to our circular setup. Our team provides complete tech-pack translation, fabric matching, lab dipping, and sampling prototypes within 7 to 10 days. We also furnish full marketing transparency kits—including cinema-grade 4K factory footage, laboratory test certificates, and storytelling copy—so you can proudly communicate your sustainability journey to your customers.',
  },
  {
    question: 'What international certifications and audits cover your production?',
    answer:
      'Our raw organic cotton is GOTS (Global Organic Textile Standard) certified. Our dyeing auxiliaries and botanical processes comply with OEKO-TEX Standard 100 (Class 1 safe for infants). Our wastewater facility is fully certified Zero Liquid Discharge by the Tamil Nadu Pollution Control Board (TNPCB). In addition, our manufacturing operations adhere to strict Fair Wage and Living Wage standards with safe, air-cooled, ergonomic working environments.',
  },
];

