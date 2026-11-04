'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EXPERTISE_CARDS = [
  {
    id: '01',
    title: 'Video\nProduction',
    href: '/video-production',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="14" width="24" height="20" rx="4" />
        <path d="M30 21l12-7v20l-12-7v-6z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Commercial &\nFashion Photography',
    href: '/fashion-brand',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M42 38H6a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2h7l3-6h12l3 6h7a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2z" />
        <circle cx="24" cy="27" r="8" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Digital Marketing &\nGoogle Ads',
    href: '/advertising-marketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 4v4" />
        <path d="M24 40v4" />
        <path d="M4 24h4" />
        <path d="M40 24h4" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Creative Strategy &\nBrand Development',
    href: '/start-your-brand',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <path d="M6 14l18 10 18-10" />
        <path d="M24 24v20" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'SEO & Social\nMedia Marketing',
    href: '/advertising-marketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 38h36" />
        <rect x="8" y="26" width="6" height="12" rx="1" />
        <rect x="18" y="20" width="6" height="18" rx="1" />
        <rect x="28" y="14" width="6" height="24" rx="1" />
        <rect x="38" y="8" width="6" height="30" rx="1" />
        <path d="M10 20l12-10 10 6 8-8" />
        <path d="M34 8h6v6" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Sustainable Fashion &\nManufacturing',
    href: '/clothing-manufacturing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 4C14 4 6 12 6 22c0 14 18 22 18 22s18-8 18-22c0-10-8-18-18-18z" />
        <path d="M24 14v16M18 20l6-6 6 6" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ServiceExpertise() {
  return (
    <section
      id="service-expertise"
      className="service-expertise-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Our Core Services & Expertise"
    >
      {/* Ambient Decorative Rings */}
      <div className="absolute right-[5%] top-[15%] w-[420px] h-[420px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute right-[12%] top-[25%] w-[280px] h-[280px] rounded-full border border-white/[0.03] pointer-events-none" />
      {/* Floating accent dots */}
      <div className="absolute top-[20%] right-[32%] w-3 h-3 bg-[#a855f7] rounded-[2px] transform rotate-45 animate-float-1 pointer-events-none opacity-80" />
      <div className="absolute top-[8%] right-[8%] w-3.5 h-3.5 bg-[#38bdf8] rounded-[2px] transform rotate-12 animate-float-2 pointer-events-none opacity-80" />
      <div className="absolute top-[48%] right-[5%] w-2.5 h-2.5 rounded-full bg-[#818cf8] animate-float-3 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Asymmetric bento-grid layout: 2 cards | heading block | 2 cards | 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 — Video Production */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[0].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[0].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[0].title}
              </h3>
            </Link>
          </motion.div>

          {/* Card 2 — Commercial Photography */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[1].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[1].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[1].title}
              </h3>
            </Link>
          </motion.div>

          {/* Heading Block — spans 2 cols */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="sm:col-span-2 lg:col-span-2 flex flex-col justify-center px-2 lg:px-6 py-4"
          >
            {/* Eyebrow label */}
            <span className="text-xs font-mono uppercase tracking-[2px] text-[#00a859] font-bold block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              What We
              <br />
              <span className="text-gradient-expertise">Offer</span>
            </h2>
            <p className="text-[#8c8c8c] text-sm sm:text-base font-sans leading-relaxed max-w-lg">
              Strains Associates provides creative, branding, digital marketing, video production and sustainable fashion solutions. We help businesses build their brands through creative content, strategic marketing, professional production and sustainable manufacturing.
            </p>
          </motion.div>

          {/* Card 3 — Digital Marketing */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[2].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[2].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[2].title}
              </h3>
            </Link>
          </motion.div>

          {/* Card 4 — Creative Strategy */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[3].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[3].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[3].title}
              </h3>
            </Link>
          </motion.div>

          {/* Card 5 — SEO & Social Media */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[4].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[4].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[4].title}
              </h3>
            </Link>
          </motion.div>

          {/* Card 6 — Sustainable Fashion */}
          <motion.div
            custom={6}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <Link
              href={EXPERTISE_CARDS[5].href}
              className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.12)] cursor-pointer block"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
                  {EXPERTISE_CARDS[5].icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00a859] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
                {EXPERTISE_CARDS[5].title}
              </h3>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
