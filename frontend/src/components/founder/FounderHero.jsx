'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, Award, ShieldCheck } from 'lucide-react';

export default function FounderHero() {
  const founderImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85';

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#0a0a0a] border-b border-white/10">
      {/* Ambient Glows */}
      <div className="founder-ambient-glow founder-ambient-glow-green w-[550px] h-[550px] -top-20 -left-20" />
      <div className="founder-ambient-glow founder-ambient-glow-gold w-[400px] h-[400px] top-1/3 -right-20" />
      <div className="founder-grain-overlay" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Human narrative intro & founder credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              We didn’t build an agency.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-[#84cc16] to-[#4ade80] mt-2">
                We built what was missing.
              </span>
            </motion.h1>

            {/* Narrative Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-neutral-300 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-6"
            >
              In late 2018, I walked away from corporate sales management with a stubborn conviction: 
              that world-class creative cinematography and honest, zero-discharge manufacturing 
              could live under a single roof. No outsourcing. No vanity metrics. Just pure craft.
            </motion.p>

            {/* Pull Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-5 rounded-xl bg-white/[0.03] border-l-4 border-[#00a859] border-y border-r border-white/10 mb-8"
            >
              <p className="text-white/90 italic font-sans text-sm sm:text-base leading-relaxed">
                “Fashion doesn’t need to poison rivers to look breathtaking. And brand films don’t need to be hollow to drive millions in growth.”
              </p>
              <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="text-[#00a859] font-bold">— Naga Praharsha Govindu</span>
                <span>Founder &amp; Strategy Maker</span>
              </div>
            </motion.div>

            {/* Credential Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400 mb-8"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-[#00a859]" />
                <span>HQ: Hyderabad &amp; Tirupur</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00a859]" />
                <span>CIN: U51494TG2018PTC128277</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5">
                <Award className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>Featured in Telangana Today</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('founder-letter')}
                className="px-6 py-3.5 rounded-full bg-[#00a859] hover:bg-[#008f4c] text-black font-sans font-bold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg shadow-[#00a859]/20 cursor-pointer"
              >
                <span>Read Founder's Letter</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('origin-story')}
                className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-sans font-medium text-sm transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>How We Started</span>
                <Sparkles className="w-4 h-4 text-[#84cc16]" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Founder Portrait Card (Simple, Modern, High-End) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full max-w-md"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#181818] to-[#101010] p-3 border border-white/10 shadow-2xl group transition-all duration-500 hover:border-[#00a859]/40">
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/5">
                  <img
                    src={founderImage}
                    alt="Naga Praharsha Govindu — Founder & Director, Strains Group"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient shadow over photo bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom Portrait Info Card */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-left">
                    <span className="inline-block text-[#00a859] font-mono text-[11px] tracking-wider uppercase font-semibold mb-1">
                      Founder &amp; Strategy Maker
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                      Naga Praharsha Govindu
                    </h3>
                    <p className="text-xs text-neutral-300 font-mono mt-1">
                      Strains Associates LLP &amp; Strains Fashions Pvt Ltd
                    </p>
                  </div>
                </div>

                {/* Sub-ribbon under image */}
                <div className="mt-3 pt-2.5 px-2 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>ROC Hyderabad Regd.</span>
                  <span className="text-[#00a859] font-medium">Est. November 2018</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* 4 Bottom Key Metrics / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-[#00a859]">2018</span>
            <span className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 block font-medium">Inception Year</span>
            <span className="text-[11px] text-neutral-500 font-mono mt-0.5 block">Resigned corporate sales</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">0%</span>
            <span className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 block font-medium">Chemical Effluent</span>
            <span className="text-[11px] text-neutral-500 font-mono mt-0.5 block">100% botanical dyes pledge</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-[#00a859]">2 Hubs</span>
            <span className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 block font-medium">Dual Closed-Loop</span>
            <span className="text-[11px] text-neutral-500 font-mono mt-0.5 block">Studio HYD × Mill Tirupur</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white">100+</span>
            <span className="text-xs sm:text-sm text-neutral-300 font-sans mt-1 block font-medium">Client Partnerships</span>
            <span className="text-[11px] text-neutral-500 font-mono mt-0.5 block">JSW, Pakka, Haraa, Xiti</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
