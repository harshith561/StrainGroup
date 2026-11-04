'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '@/constant/caseStudiesData';

export default function CaseStudiesListing() {
  return (
    <div className="case-studies-listing-page bg-[#0c0c0c] text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute left-[15%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#00a859]/5 blur-[140px] pointer-events-none" />
        <div className="absolute right-[10%] top-[30%] w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Proven Impact & <span className="text-gradient-shimmer">Case Studies</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#999] text-base sm:text-lg md:text-xl font-sans leading-relaxed"
            >
              Real outcomes from real partnerships. Discover how Strains Associates and Strains Stitchery empower industrial manufacturers, heavy engineering leaders, food innovators, and sustainable fashion brands to scale sustainably.
            </motion.p>
          </div>

          {/* Key Proof Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-[#00a859]">90.8%</span>
              <span className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 block">Google Ads Optimization Score</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">₹13.01</span>
              <span className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 block">Heavy Industrial Average CPC</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-[#00a859]">4.2x ROAS</span>
              <span className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 block">Fashion E-Commerce Launch</span>
            </div>
            <div>
              <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">Zero Liquid</span>
              <span className="text-xs sm:text-sm text-neutral-400 font-sans mt-1 block">Discharge Tirupur Stitchery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Case Studies Grid (Filter Tabs Removed, Zero Pills) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <Link
                  href={`/work/${study.slug}`}
                  className="group flex flex-col h-full bg-[#121212] hover:bg-[#161616] border border-white/5 hover:border-[#00a859]/40 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Clean Image Container with No Overlay Pills */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1a1a1a] media-placeholder">
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) => e.currentTarget.parentElement?.classList.remove('media-placeholder')}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Content Wrap */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-sans font-bold text-white mb-2 group-hover:text-[#00a859] transition-colors leading-snug flex items-center justify-between">
                        <span>{study.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-[#00a859] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                      </h2>

                      <p className="text-neutral-400 text-sm leading-relaxed font-sans line-clamp-3 mb-5">
                        {study.summary}
                      </p>
                    </div>

                    {/* Top 2 Metrics */}
                    <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                      {study.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-white/[0.02] rounded-lg p-2.5 border border-white/5">
                          <span className="font-mono text-base font-bold text-white block">
                            {m.value}
                          </span>
                          <span className="text-[11px] text-neutral-400 block truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Bottom Consultation Callout */}
      <section className="py-20 border-t border-white/10 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white mb-4">
            Ready to achieve measurable growth for your brand?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base mb-8">
            Whether you need enterprise lead acquisition, high-impact video production, or ethical garment manufacturing in Tirupur, let’s build sustainably together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="pill-button px-8 py-3.5 bg-[#00a859] hover:bg-[#00c266] text-black font-sans font-bold text-sm rounded-full transition-all"
            >
              Book a Strategy Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-sm rounded-full transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
