'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Factory, TrendingUp } from 'lucide-react';
import { BUSINESS_ASSETS } from '@/constant/businessAssetsConfig';

const BUSINESS_PILLARS = [
  {
    id: 'fashions',
    number: '01',
    name: 'Strains Fashions',
    roleTag: 'SUSTAINABLE FASHION',
    tagline: 'Sustainable Fashion & Responsible Clothing',
    hub: 'Hyderabad Creative Studio',
    description:
      'Independent sustainable fashion house creating conscious apparel from certified Himalayan hemp, organic cotton, vegan silk, and botanical dyes.',
    image: BUSINESS_ASSETS.fashions.hero.src,
    alt: BUSINESS_ASSETS.fashions.hero.alt,
    linkTarget: '#strains-fashions',
    pageUrl: '/strains-fashions/fashion-design',
    icon: Sparkles,
  },
  {
    id: 'stitchery',
    number: '02',
    name: 'Strains Stitchery',
    roleTag: 'GARMENT MANUFACTURING',
    tagline: 'Garment Manufacturing & Product Development',
    hub: 'Tirupur Production Hub',
    description:
      'Independent apparel manufacturing facility in Tirupur. Specializing in fabric engineering, CAD tech packs, rapid sampling, and zero-discharge production.',
    image: BUSINESS_ASSETS.stitchery.hero.src,
    alt: BUSINESS_ASSETS.stitchery.hero.alt,
    linkTarget: '#strains-stitchery',
    pageUrl: '/strains-stitchery/clothing-manufacturing',
    icon: Factory,
  },
  {
    id: 'associates',
    number: '03',
    name: 'Strains Associates',
    roleTag: 'CREATIVE & DIGITAL',
    tagline: 'Creative Strategy, Digital Marketing & Brand Growth',
    hub: 'Hyderabad Growth Desk',
    description:
      'Independent creative agency and digital marketing engine. Leading 4K cinematic video production, brand strategy, and high-ROI Google/Meta advertising.',
    image: BUSINESS_ASSETS.associates.hero.src,
    alt: BUSINESS_ASSETS.associates.hero.alt,
    linkTarget: '#strains-associates',
    pageUrl: '/strains-associates/digital-marketing',
    icon: TrendingUp,
  },
];

export default function EcosystemHero() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section
      className="ecosystem-hero-section relative bg-[#080808] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10"
      id="ecosystem-hero"
      aria-label="Strains Group Ecosystem Overview"
    >
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00a859]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-[#00e676]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-widest text-[#00e676] font-bold mb-4">
          The Strains Group Ecosystem
        </p>

        {/* Hero Title & Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-16 sm:mb-20">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.02] uppercase">
              Three Autonomous Businesses. <br />
              <span className="text-gradient-shimmer">One Unified Ecosystem.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-[#a0a0a0] font-mono text-xs sm:text-sm leading-relaxed mb-6">
              Strains Group brings together three independent entities: <strong className="text-white">Strains Fashions</strong>, <strong className="text-white">Strains Stitchery</strong>, and <strong className="text-white">Strains Associates</strong>. Each functions as a dedicated company serving its own customers, while seamlessly synchronizing for clients requiring complete closed-loop execution.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#ecosystem-relationship"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-sans font-bold text-xs uppercase tracking-wider bg-[#00a859] hover:bg-[#00e676] text-black transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>HOW OUR BUSINESSES CONNECT</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Interactive Business Division Cards — Equal Prominence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_PILLARS.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                initial={false}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`ecosystem-photo-card group cursor-pointer flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121212] overflow-hidden transition-all duration-500 hover:border-[#00e676]/60 ${
                  isHovered ? 'ring-2 ring-[#00a859]' : ''
                }`}
                style={{ minHeight: '420px' }}
              >
                {/* Background Photo Container with Vignette */}
                <div className="absolute inset-0 z-0 bg-[#121212]">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={534}
                    className="w-full h-full object-cover object-center filter brightness-[0.4] group-hover:brightness-[0.65] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="ecosystem-card-gradient absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
                </div>

                {/* Top Clean Meta Line */}
                <div className="ecosystem-card-meta relative z-10 p-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00e676] drop-shadow-md">
                    {pillar.roleTag}
                  </span>
                  <span className="font-mono text-xs font-bold text-white/80">
                    {pillar.number}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="ecosystem-card-content relative z-10 p-6 pt-0">
                  <span className="font-mono text-[11px] text-[#00e676] block mb-1">
                    {pillar.hub}
                  </span>
                  <h2 className="font-sans text-2xl font-bold text-white mb-1.5 leading-tight group-hover:text-[#00e676] transition-colors">
                    {pillar.name}
                  </h2>
                  <p className="font-mono text-xs text-[#d0d0d0] font-medium mb-2.5 leading-snug">
                    {pillar.tagline}
                  </p>
                  <p className="font-mono text-xs text-[#a8a8a8] line-clamp-3 mb-5 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <a
                      href={pillar.linkTarget}
                      className="text-white/80 hover:text-[#00e676] transition-colors underline underline-offset-4"
                    >
                      Company Profile &darr;
                    </a>
                    <Link
                      href={pillar.pageUrl}
                      className="inline-flex items-center gap-1.5 text-[#00e676] font-bold hover:underline"
                    >
                      <span>Visit Page</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
