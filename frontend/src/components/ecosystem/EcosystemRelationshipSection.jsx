'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GitMerge,
  Maximize2,
  Sparkles,
  Factory,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Zap,
} from 'lucide-react';

export default function EcosystemRelationshipSection() {
  const [activeTab, setActiveTab] = useState('independent'); // 'independent' | 'collaborative'

  return (
    <section
      id="ecosystem-relationship"
      className="ecosystem-relationship-section relative bg-[#070707] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Relationship between the three businesses under Strains Group"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#00a859]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00e676] font-bold mb-3 flex items-center justify-center gap-2">
            <GitMerge size={14} />
            <span>Strains Group Architecture</span>
          </p>

          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold uppercase tracking-tight text-white leading-tight mb-5">
            How The Businesses Connect <br />
            <span className="text-gradient-shimmer">Under Strains Group</span>
          </h2>

          <p className="text-[#a0a0a0] font-mono text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Strains Group is the umbrella enterprise unifying three specialized companies. Each business maintains dedicated infrastructure and autonomous client services, while collaborating seamlessly when a project demands complete full-lifecycle execution.
          </p>
        </div>

        {/* 3 Domain Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Fashions Focus */}
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00e676]/50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#00e676] mb-4">
                <Sparkles size={20} />
              </div>
              <span className="font-mono text-[11px] text-[#00e676] uppercase tracking-wider block mb-1">
                Domain Specialization
              </span>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-2">
                Strains Fashions
              </h3>
              <p className="font-mono text-xs text-[#00e676] font-semibold mb-3">
                Focus: Sustainable Fashion
              </p>
              <p className="font-mono text-xs text-[#999] leading-relaxed">
                Dedicated exclusively to designing, curating, and distributing conscious clothing made with certified Himalayan hemp, organic cotton, cruelty-free vegan silks, and natural botanical dyes—with collections manufactured and stitched directly by Strains Stitchery.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-[#777]">Autonomous Entity</span>
              <Link href="/strains-fashions/fashion-design" className="text-[#00e676] hover:underline font-bold">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Stitchery Focus */}
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00e676]/50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#00e676] mb-4">
                <Factory size={20} />
              </div>
              <span className="font-mono text-[11px] text-[#00e676] uppercase tracking-wider block mb-1">
                Domain Specialization
              </span>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-2">
                Strains Stitchery
              </h3>
              <p className="font-mono text-xs text-[#00e676] font-semibold mb-3">
                Focus: Garment Manufacturing
              </p>
              <p className="font-mono text-xs text-[#999] leading-relaxed">
                Dedicated exclusively to physical textile manufacturing, fabric engineering, CAD tech pack drafting, rapid prototype sampling, and zero-discharge apparel production in Tirupur.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-[#777]">Autonomous Entity</span>
              <Link href="/strains-stitchery/clothing-manufacturing" className="text-[#00e676] hover:underline font-bold">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Associates Focus */}
          <div className="rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#00e676]/50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#00e676] mb-4">
                <TrendingUp size={20} />
              </div>
              <span className="font-mono text-[11px] text-[#00e676] uppercase tracking-wider block mb-1">
                Domain Specialization
              </span>
              <h3 className="text-xl font-sans font-black text-white uppercase mb-2">
                Strains Associates
              </h3>
              <p className="font-mono text-xs text-[#00e676] font-semibold mb-3">
                Focus: Digital Creativity & Marketing
              </p>
              <p className="font-mono text-xs text-[#999] leading-relaxed">
                Dedicated exclusively to brand strategy, 4K broadcast-quality commercial cinematography, Google and Meta performance advertising, and full-funnel digital audience growth.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              <span className="text-[#777]">Autonomous Entity</span>
              <Link href="/strains-associates/digital-marketing" className="text-[#00e676] hover:underline font-bold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Dual-Mode Architecture View */}
        <div className="rounded-3xl border border-white/10 bg-[#121212] overflow-hidden p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] mb-12">
          {/* Mode Switcher Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-[#00e676] uppercase tracking-wider block mb-1 font-semibold">
                Operational Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase">
                Two Operational Modes
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-black/60 border border-white/10 font-mono text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('independent')}
                className={`py-2 px-4 rounded-lg font-bold transition-all ${
                  activeTab === 'independent'
                    ? 'bg-[#00a859] text-black shadow-sm'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                1. Independent Mode
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('collaborative')}
                className={`py-2 px-4 rounded-lg font-bold transition-all ${
                  activeTab === 'collaborative'
                    ? 'bg-[#00a859] text-black shadow-sm'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                2. Collaborative Synergy
              </button>
            </div>
          </div>

          {/* Mode 1: Independent Operations */}
          {activeTab === 'independent' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <h4 className="font-sans text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                  <span>Each Business Serves Its Own Independent Client Base</span>
                </h4>
                <p className="font-mono text-xs sm:text-sm text-[#a8a8a8] leading-relaxed">
                  No client is forced into an all-in-one bundle. Each business operates with full independence, maintaining its own commercial relationships, transparent contracts, and dedicated operational managers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-black/30 border border-white/5">
                  <span className="text-[#00e676] font-bold block mb-2">Strains Fashions Client Base</span>
                  <p className="text-[#999] leading-relaxed">
                    Direct-to-consumer shoppers and eco-conscious boutique retail partners seeking premium ready-to-wear hemp and organic cotton wardrobe pieces.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/30 border border-white/5">
                  <span className="text-[#00e676] font-bold block mb-2">Strains Stitchery Client Base</span>
                  <p className="text-[#999] leading-relaxed">
                    Third-party fashion designers, international streetwear labels, and corporate apparel buyers who have their own branding and only need reliable Tirupur garment manufacturing.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-black/30 border border-white/5">
                  <span className="text-[#00e676] font-bold block mb-2">Strains Associates Client Base</span>
                  <p className="text-[#999] leading-relaxed">
                    Heavy industrial enterprises, healthcare clinic chains (Partha Dentals), and infrastructure giants (JSW Cement, Pioneer Cranes) needing high-ROI Google Ads and 4K commercial cinematography.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Mode 2: Collaborative Closed-Loop Synergy */}
          {activeTab === 'collaborative' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <h4 className="font-sans text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                  <span>Unified Closed-Loop Power When A Project Demands It</span>
                </h4>
                <p className="font-mono text-xs sm:text-sm text-[#a8a8a8] leading-relaxed">
                  When a client requires an unbroken journey—launching a modern apparel brand or executing an enterprise merchandise campaign—the three businesses synchronize seamlessly without agency-manufacturer friction.
                </p>
              </div>

              {/* Collaborative Workflow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-5 rounded-2xl bg-[#00a859]/10 border border-[#00a859]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00e676] font-bold">Step 1: Ideation & Film</span>
                    <span className="text-white/60">Strains Associates</span>
                  </div>
                  <p className="text-[#cccccc] leading-relaxed">
                    Engineers the brand bible, typography, e-commerce UX, and shoots broadcast 4K commercial films and social ad hooks on cinema cameras.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#00a859]/10 border border-[#00a859]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00e676] font-bold">Step 2: Manufacturing</span>
                    <span className="text-white/60">Strains Stitchery</span>
                  </div>
                  <p className="text-[#cccccc] leading-relaxed">
                    Translates designer flats into CAD tech-packs, weaves custom hemp and organic knits, and stitches the physical collection in Tirupur.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#00a859]/10 border border-[#00a859]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00e676] font-bold">Step 3: Eco Curation</span>
                    <span className="text-white/60">Strains Fashions</span>
                  </div>
                  <p className="text-[#cccccc] leading-relaxed">
                    Validates regenerative textile integrity, oversees non-toxic botanical dye vats, and hand-tags every piece with living sweet basil seed tags.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

