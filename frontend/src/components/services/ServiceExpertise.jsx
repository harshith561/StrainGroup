'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EXPERTISE_CARDS = [
  {
    id: '01',
    title: 'Search\nEngine Optimization',
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
    id: '02',
    title: 'Website design &\nDevelopment',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="10" y="10" width="28" height="20" rx="2" />
        <path d="M4 36h40" />
        <path d="M18 20l-4 4 4 4" />
        <path d="M30 20l4 4-4 4" />
        <path d="M26 18l-4 8" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Video editing &\nProduction',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="14" width="24" height="20" rx="4" />
        <path d="M30 21l12-7v20l-12-7v-6z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Content\nWriting',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M16 32l14-14 4 4-14 14h-4v-4z" />
        <path d="M30 18l4-4" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Social Media\nMarketing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="8" y="8" width="16" height="14" rx="2" />
        <rect x="24" y="26" width="16" height="14" rx="2" />
        <path d="M20 22h8" />
        <path d="M24 18v8" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Pay\nPer Click (PPC)',
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
];

export default function ServiceExpertise() {
  return (
    <section className="service-expertise-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden" aria-label="Our Digital Marketing Expertise">
      {/* Ambient Decorative Rings and Floating Polygons */}
      <div className="absolute right-[5%] top-[15%] w-[420px] h-[420px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute right-[12%] top-[25%] w-[280px] h-[280px] rounded-full border border-white/[0.03] pointer-events-none" />
      <div className="absolute top-[20%] right-[32%] w-3 h-3 bg-[#a855f7] rounded-[2px] transform rotate-45 animate-float-1 pointer-events-none opacity-80" />
      <div className="absolute top-[8%] right-[8%] w-3.5 h-3.5 bg-[#38bdf8] rounded-[2px] transform rotate-12 animate-float-2 pointer-events-none opacity-80" />
      <div className="absolute top-[48%] right-[5%] w-2.5 h-2.5 rounded-full bg-[#818cf8] animate-float-3 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Asymmetric 4-column layout matching reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[0].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[0].title}
            </h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[1].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[1].title}
            </h3>
          </motion.div>

          {/* Header Block (Spans 2 columns on desktop) with Modern AOS Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 lg:col-span-2 flex flex-col justify-center px-2 lg:px-6 py-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-[1.12] mb-4">
              Our Digital
              <br />
              Marketing <span className="text-gradient-shimmer">Expertise</span>
            </h2>
            <p className="text-[#8c8c8c] text-sm sm:text-base font-sans leading-relaxed max-w-lg">
              Comprehensive branding, end-to-end video production, and performance marketing delivered across diverse industries — from fashion & F&B to major infrastructure — with measurable growth and sustainable strategies.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[2].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[2].title}
            </h3>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[3].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[3].title}
            </h3>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[4].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[4].title}
            </h3>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="expertise-card group bg-[#141414] hover:bg-[#181818] border border-white/5 hover:border-[#00a859]/40 rounded-2xl p-8 sm:p-9 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,168,89,0.1)]"
          >
            <div className="w-12 h-12 flex items-center justify-center text-[#00a859] transition-transform duration-300 group-hover:scale-110">
              {EXPERTISE_CARDS[5].icon}
            </div>
            <h3 className="text-white text-lg font-sans font-bold leading-snug group-hover:text-[#00a859] transition-colors mt-6 whitespace-pre-line">
              {EXPERTISE_CARDS[5].title}
            </h3>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
