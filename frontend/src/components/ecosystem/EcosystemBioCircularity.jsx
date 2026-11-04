'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  Droplets,
  Sprout,
  Package,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const MATERIALS = [
  {
    id: 'hemp',
    name: 'Industrial Hemp Textiles',
    category: 'Alternative Bast Fiber',
    icon: Leaf,
    benefit: '80% Less Water vs Cotton',
    origin: 'Cultivated Himalayan Foothills',
    image: '/images/ecosystem/material-hemp-textiles.jpg',
    caption: 'Pure woven hemp fabric — naturally breathable, antimicrobial, and UV-resistant.',
    desc: 'Hemp is the heavyweight champion of regenerative textiles. It needs zero synthetic fertilizers, gulps 80% less water than conventional cotton, and gets softer with every trip through the washing machine. We weave it into heavyweight tees, casual shirts, and chore jackets in Tirupur.',
    specs: [
      { label: 'Water Savings', value: '80% Lower Usage' },
      { label: 'Tensile Strength', value: '3x Cotton Durability' },
      { label: 'Soil Health', value: 'Naturally Replenishing' },
      { label: 'Microplastics', value: '0% Synthetic Leaching' },
    ],
  },
  {
    id: 'cotton',
    name: 'Certified Organic Cotton',
    category: 'Regenerative Agriculture',
    icon: Sprout,
    benefit: 'Zero Chemical Pesticides',
    origin: 'Deccan Plateau Farmer Cooperatives',
    image: '/images/ecosystem/material-organic-cotton.jpg',
    caption: 'Pure non-GMO heirloom organic cotton bolls picked without toxic chemical defoliants.',
    desc: 'Spun strictly from heirloom, non-GMO seeds without a single drop of neurotoxic pesticides or synthetic defoliants. Our organic cotton is harvested by fair-wage farmers and knit into ultra-soft single-jersey and french terry fabrics inside our factory.',
    specs: [
      { label: 'Seed Standard', value: '100% Non-GMO' },
      { label: 'Toxic Runoff', value: 'Zero Chemicals' },
      { label: 'Worker Safety', value: 'Living Wage Certified' },
      { label: 'Skin Feel', value: 'Hypoallergenic Comfort' },
    ],
  },
  {
    id: 'dyes',
    name: 'Botanical Fruit & Flower Dyes',
    category: 'Circular Pigment Extraction',
    icon: Droplets,
    benefit: 'Safe Enough to Drink',
    origin: 'Tirupur Botanical Vats',
    image: '/images/ecosystem/material-botanical-dyes.jpg',
    caption: 'Natural dye pigments extracted from pomegranate rinds, marigold flowers, and madder root.',
    desc: 'Conventional textile dyeing poisons rivers with azo compounds and heavy metals. We extract vibrant, earthy pigments by gently simmering pomegranate rinds, marigold flower petals, turmeric root, and madder. The leftover rinse water is clean enough to irrigate our factory greenery.',
    specs: [
      { label: 'Botanical Sources', value: 'Pomegranate & Marigold' },
      { label: 'Heavy Metals', value: '0% Chromium & Lead' },
      { label: 'Effluent Safety', value: '100% Biodegradable' },
      { label: 'Water Recycling', value: 'Closed-Loop Tank' },
    ],
  },
  {
    id: 'vegan',
    name: 'Vegan Silk & Vegan Leather',
    category: 'Cruelty-Free Biomaterials',
    icon: Layers,
    benefit: 'Zero Animal Exploitation',
    origin: 'Sustainable Bio-Cellulosic Mills',
    image: '/images/ecosystem/material-vegan-silk-leather.jpg',
    caption: 'Plant-derived cellulosic vegan leather and silk alternatives with zero toxic tanning baths.',
    desc: 'Reimagining luxury tactile finishes without harming a single animal or coating clothes in toxic plastic polyurethane. Our vegan silks flow with butter-soft drape, while our vegan leathers provide structural firmness for jackets, tags, and accessories.',
    specs: [
      { label: 'Animal Products', value: '0% Animal Harm' },
      { label: 'Tanning Toxins', value: 'Zero Chromium Salts' },
      { label: 'Drape & Feel', value: 'Ultra-Fluid Texture' },
      { label: 'Lifecycle', value: 'Recyclable Biomass' },
    ],
  },
  {
    id: 'packaging',
    name: 'Plantable Seed Tags & Packaging',
    category: 'Circular Living Artifacts',
    icon: Package,
    benefit: 'Grows Sweet Basil on Your Sill',
    origin: 'Post-Consumer Cotton Pulp',
    image: '/images/ecosystem/material-plantable-seed-tags.jpg',
    caption: 'Recycled cotton hangtags embedded with live seeds ready to be planted in soil.',
    desc: 'Why should a price tag end up in a trash can? We make our tags from recycled factory cotton offcuts embedded with live non-GMO sweet basil and wildflower seeds. Customers tear up the tag, press it into potting soil, water it, and harvest fresh herbs within weeks.',
    specs: [
      { label: 'Live Seed Types', value: 'Sweet Basil & Wildflowers' },
      { label: 'Tag Base', value: '100% Recycled Cotton Rag' },
      { label: 'Print Ink', value: 'Non-Toxic Soy Pigments' },
      { label: 'Plastic Polybags', value: 'Eliminated completely' },
    ],
  },
];

export default function EcosystemBioCircularity() {
  const [selectedId, setSelectedId] = useState('hemp');
  const activeMaterial = MATERIALS.find((m) => m.id === selectedId) || MATERIALS[0];
  const Icon = activeMaterial.icon;

  return (
    <section className="biocircularity-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10" id="materials">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header with AOS Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              The Real Materials <br />
              <span className="text-gradient-shimmer">Inside Our Looms</span>
            </h2>
          </div>
          <p className="text-[#888] font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            Tangible sustainability from Tirupur. Tap any material below to inspect its origin, tactile feel, and environmental footprint.
          </p>
        </motion.div>

        {/* Material Selection Tabs with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          {MATERIALS.map((item) => {
            const ItemIcon = item.icon;
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border font-mono text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#00a859] border-[#00a859] text-black shadow-[0_0_25px_rgba(0,168,89,0.3)]'
                    : 'bg-[#141414] border-white/10 text-[#aaa] hover:text-white hover:border-white/20'
                }`}
              >
                <ItemIcon size={16} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Material Showcase Card with Photo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMaterial.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Human Story & Specs */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00a859]/15 border border-[#00a859]/30 flex items-center justify-center text-[#00a859] flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#00a859] font-bold block">
                      {activeMaterial.category}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                      {activeMaterial.name}
                    </h3>
                  </div>
                </div>

                <p className="font-mono text-xs sm:text-sm text-[#bbb] leading-relaxed">
                  {activeMaterial.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10 text-white flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#00a859]" />
                    <span>Origin: {activeMaterial.origin}</span>
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#00a859]/15 border border-[#00a859]/30 text-[#00a859] font-bold">
                    {activeMaterial.benefit}
                  </span>
                </div>

                {/* 4 Specs Tiles */}
                <div className="grid grid-cols-2 gap-3.5 pt-2 font-mono">
                  {activeMaterial.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-black/50 border border-white/5 flex flex-col justify-between"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#777] block mb-1">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-Res Real Material Photograph */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative group bg-[#141414] media-placeholder">
                  <img
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onLoad={(e) => {
                      e.currentTarget.parentElement?.classList.remove('media-placeholder');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Floating Photo Snapshot Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#ddd]">
                    <span className="text-[#00a859] font-bold block mb-0.5">Tirupur Archive Photo</span>
                    <span>{activeMaterial.caption}</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
