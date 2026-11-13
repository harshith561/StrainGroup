'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Factory, TrendingUp } from 'lucide-react';
import { BUSINESS_ASSETS } from '@/constant/businessAssetsConfig';

const DIVISIONS = [
  {
    id: 'fashions',
    number: '01',
    name: 'STRAINS FASHIONS',
    tagline: 'Sustainable Fashion & Responsible Clothing',
    roleTag: 'SUSTAINABLE FASHION BRAND',
    description:
      'An independent sustainable fashion business creating conscious clothing from certified Himalayan hemp, heirloom organic cotton, and botanical dyes—manufactured and stitched directly in Tirupur by Strains Stitchery.',
    highlights: [
      'Organic Cotton & Hemp Silhouettes',
      'Engineered & Stitched by Strains Stitchery',
      'Vegan Silk & Botanical Non-Toxic Dyes',
      'Zero-Plastic Circular Lifecycle',
    ],
    image: BUSINESS_ASSETS.fashions.hero.src,
    alt: BUSINESS_ASSETS.fashions.hero.alt,
    href: '/strains-fashions/fashion-design',
    icon: Sparkles,
    accentColor: '#00e676',
  },
  {
    id: 'stitchery',
    number: '02',
    name: 'STRAINS STITCHERY',
    tagline: 'Garment Manufacturing & Product Development',
    roleTag: 'TIRUPUR MANUFACTURING HUB',
    description:
      'An independent apparel manufacturing facility operating in Tirupur, India’s knitwear capital. Providing fabric engineering, precision CAD tech packs, rapid sampling, and zero-discharge low-to-high MOQ production.',
    highlights: [
      'Direct Tirupur Factory Floor',
      'CAD Tech Packs & 6-Day Sampling',
      'Low-MOQ to Scale Container Runs',
      'Zero Liquid Discharge (ZLD)',
    ],
    image: BUSINESS_ASSETS.stitchery.hero.src,
    alt: BUSINESS_ASSETS.stitchery.hero.alt,
    href: '/strains-stitchery/clothing-manufacturing',
    icon: Factory,
    accentColor: '#00a859',
  },
  {
    id: 'associates',
    number: '03',
    name: 'STRAINS ASSOCIATES',
    tagline: 'Creative Strategy, Digital Marketing & Brand Growth',
    roleTag: 'CREATIVE & GROWTH AGENCY',
    description:
      'An independent creative agency and digital powerhouse in Hyderabad. Delivering brand strategy, 4K cinematic commercial video production, full-funnel digital marketing, and high-ROI performance advertising.',
    highlights: [
      'Brand Identity & Genetic Strategy',
      '4K Commercial Video & Drone Filming',
      'High-Intent Google Ads & Meta SMM',
      '90.8% Ads Optimization Benchmark',
    ],
    image: BUSINESS_ASSETS.associates.hero.src,
    alt: BUSINESS_ASSETS.associates.hero.alt,
    href: '/strains-associates/digital-marketing',
    icon: TrendingUp,
    accentColor: '#00e676',
  },
];

export default function HeroBusinessDivisions() {
  return (
    <section
      id="hero-business-divisions"
      className="hero-business-divisions relative bg-[#070707] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden"
      aria-label="Strains Group Three Business Divisions"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#00a859]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#00e676]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00e676] font-bold mb-3">
            STRAINS GROUP ECOSYSTEM
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-4">
            Three Independent Businesses. <br />
            <span className="text-gradient-shimmer">One Collective Power.</span>
          </h2>

          <p className="division-desc text-[#a0a0a0] font-mono text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Strains Group represents three autonomous companies—each operating with dedicated facilities, specialized leadership, and distinct client rosters, while uniting seamlessly for end-to-end ventures.
          </p>
        </div>

        {/* 3 Business Division Cards Grid — Equal Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {DIVISIONS.map((division) => {
            const Icon = division.icon;
            return (
              <div
                key={division.id}
                className="division-card group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#111111]/90 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#00e676]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,230,118,0.12)] hover:-translate-y-1.5"
              >
                {/* Visual Imagery Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <img
                    src={division.image}
                    alt={division.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-center filter brightness-[0.6] group-hover:brightness-[0.8] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="division-card-overlay absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

                  {/* Clean Number Overlay */}
                  <div className="division-number absolute top-4 right-5 z-10 font-mono text-xs font-bold text-white/70">
                    {division.number}
                  </div>

                  {/* Icon badge floating bottom-left */}
                  <div className="division-icon-badge absolute bottom-3 left-5 z-10 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#00e676]">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#00e676] uppercase block mb-1">
                      {division.roleTag}
                    </span>
                    <h3 className="division-name font-sans text-xl sm:text-2xl font-black text-white tracking-tight uppercase mb-1.5 group-hover:text-[#00e676] transition-colors">
                      {division.name}
                    </h3>
                    <p className="division-tagline font-mono text-xs sm:text-[13px] text-[#00e676] font-semibold mb-3 leading-snug">
                      {division.tagline}
                    </p>
                    <p className="division-desc font-mono text-xs text-[#a0a0a0] leading-relaxed mb-5">
                      {division.description}
                    </p>

                    {/* Highlights bullet chips */}
                    <div className="division-highlights space-y-1.5 mb-6 pt-3 border-t border-white/10">
                      {division.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 font-mono text-[11px] text-[#cccccc]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a859] shrink-0" />
                          <span className="division-highlight-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore More Link Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={division.href}
                      className="division-btn inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#00a859] text-white hover:text-black font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 group/link border border-white/10 hover:border-[#00a859]"
                    >
                      <span>Explore More</span>
                      <ArrowRight
                        size={16}
                        className="transform transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
