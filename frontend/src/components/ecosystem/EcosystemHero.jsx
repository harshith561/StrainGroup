'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const PILLARS = [
  {
    id: 'creative',
    name: 'Brand & Identity Atelier',
    location: 'Hyderabad Studio',
    lead: 'Praharsha Govindu',
    role: 'Crafting unforgettable identities, typography, and visual systems.',
    image: '/images/ecosystem/hero-creative.jpg',
    tag: 'IDEATION',
    stat: '250+ Brand Systems',
  },
  {
    id: 'film',
    name: 'Cinematic Media Wing',
    location: 'Danny & Pavan Studio',
    lead: 'Danny & Pavan',
    role: 'Commercial brand films, drone videography, and DaVinci color grading.',
    image: '/images/ecosystem/hero-film.jpg',
    tag: 'CINEMA',
    stat: '4K Commercial Reels',
  },
  {
    id: 'stitchery',
    name: 'Strains Stitchery Factory',
    location: 'Tirupur Manufacturing Hub',
    lead: 'Master Tailors & Cutters',
    role: 'Zero-discharge organic cotton, hemp, and cruelty-free garment manufacturing.',
    image: '/images/ecosystem/hero-factory.jpg',
    tag: 'CRAFT',
    stat: '100% Zero Effluent',
  },
  {
    id: 'marketing',
    name: 'Data & Growth Engine',
    location: 'Digital Command Desk',
    lead: 'Prasad (Head of Growth)',
    role: 'High-ROI Google Ads, Meta campaigns, and funnel conversion optimization.',
    image: '/images/ecosystem/hero-growth.jpg',
    tag: 'SCALE',
    stat: '90.8% Ads Score',
  },
];

export default function EcosystemHero() {
  const [hoveredPillar, setHoveredPillar] = useState(0);

  return (
    <section className="ecosystem-hero-section relative bg-[#080808] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-white/10" id="ecosystem-hero">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00a859]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-[#00e676]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">


        {/* Hero Title & Pitch with AOS unblur animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.02] uppercase">
              The Creative Studio That Owns The <br />
              <span className="text-gradient-shimmer">
                Factory Floor.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-[#aaa] font-mono text-xs sm:text-sm leading-relaxed mb-6">
              Most creative agencies live and die on Figma screens. We built a living ecosystem where ideas born on Monday in our <strong className="text-white font-semibold">Hyderabad studio</strong> are filmed on cinema cameras and sewn in our own <strong className="text-white font-semibold">Tirupur garment facility</strong> within weeks.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="pill-button"
                style={{ backgroundColor: '#00a859', borderColor: '#00a859', color: '#000', fontSize: '12px', padding: '12px 28px' }}
              >
                <span>BUILD WITH OUR ECOSYSTEM</span>
                <ArrowRight size={14} style={{ marginLeft: '8px' }} />
              </Link>
              <Link
                href="#closed-loop"
                className="text-xs font-mono text-white/70 hover:text-[#00a859] transition-colors underline underline-offset-4"
              >
                Explore 5-Phase Flow &darr;
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Interactive Visual Pillars (Local Downloaded Photos with AOS Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const isHovered = hoveredPillar === idx;
            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setHoveredPillar(idx)}
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`ecosystem-photo-card group cursor-pointer flex flex-col justify-between ${isHovered ? 'ring-2 ring-[#00a859]' : ''
                  }`}
                style={{ minHeight: '380px' }}
              >
                {/* Background Photo Container with Vignette */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={pillar.image}
                    alt={pillar.name}
                    className="w-full h-full object-cover filter brightness-[0.45] group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
                </div>

                {/* Top Badge Overlay */}
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#00a859] border border-white/10">
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-xs text-white/70 bg-black/60 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-10 p-6 pt-0">
                  <span className="font-mono text-[11px] text-[#00a859] block mb-1">
                    {pillar.location}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#00a859] transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="font-mono text-xs text-[#bbb] line-clamp-2 mb-4 leading-relaxed">
                    {pillar.role}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#888]">Leader: {pillar.lead}</span>
                    <span className="font-bold text-[#00a859]">{pillar.stat}</span>
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
