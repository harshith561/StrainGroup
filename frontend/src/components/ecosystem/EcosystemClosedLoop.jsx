'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  Sparkles,
  Camera,
  Scissors,
  Leaf,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

const PHASES = [
  {
    num: '01',
    title: 'Brand Genetics & Positioning',
    hub: 'Hyderabad Strategy Atelier',
    lead: 'Praharsha Govindu',
    icon: Sparkles,
    tag: 'IDEATION',
    timeline: 'Weeks 1 - 2',
    image: '/images/ecosystem/phase-strategy.jpg',
    caption: 'Moodboards, color swatches, and visual architecture crafted in our Hyderabad studio.',
    summary:
      'We don’t believe in generic branding templates. We sit down with founders to dig up the raw soul of their business—mapping customer psychology, category opportunities, voice, typography, and packaging concepts before writing a single line of copy.',
    inputs: ['Founder Discovery Workshops', 'Competitive Market Gap Analysis', 'Brand Ethos & Core Mission'],
    processes: ['Narrative & Voice Engineering', 'Typography & Visual Design Systems', 'Technical Packaging Architecture'],
    outputs: ['Complete Brand Bible', 'Design Token System', 'Garment Pattern & Trim Specs'],
  },
  {
    num: '02',
    title: 'Cinematic Media & Content Studio',
    hub: 'Hyderabad Sets & On-Location',
    lead: 'Danny (Direction) & Pavan (Cinematography)',
    icon: Camera,
    tag: 'FILM & PHOTO',
    timeline: 'Weeks 2 - 4',
    image: '/images/ecosystem/phase-film.jpg',
    caption: 'Cinema cameras and precision studio lighting capturing high-fidelity brand films.',
    summary:
      'Pavan and Danny take over our in-house production floors. Equipping cinema cameras, lighting rigs, and professional drone gear, we capture TV commercials, fashion lookbooks, product videos, and social reels tailored to hook viewers in the first 2 seconds.',
    inputs: ['Creative Scripts & Storyboards', 'Talent Scouting & Set Direction', 'Shot Lists & Aspect Ratios'],
    processes: ['Cinema-Grade 4K Filming', 'Drone Aerial Videography', 'DaVinci Resolve Color Grading & Sound FX'],
    outputs: ['Broadcast Brand Films', 'High-Res E-Commerce Lookbooks', 'Social Reels with Native Hooks'],
  },
  {
    num: '03',
    title: 'Strains Stitchery Industrial Core',
    hub: 'Tirupur Manufacturing Hub',
    lead: 'Stitchery Floor Engineers',
    icon: Scissors,
    tag: 'MANUFACTURING',
    timeline: 'Weeks 4 - 6',
    image: '/images/ecosystem/phase-stitchery.jpg',
    caption: 'Master tailors operating high-speed flatlock machines in our Tirupur facility.',
    summary:
      'Instead of outsourcing to third-party mills with endless email ping-pong, our own factory floor in Tirupur spins into action. Master cutters and tailors sew organic hemp, organic cotton, and cruelty-free garments directly from our designer tech-packs.',
    inputs: ['Digital CAD Tech-Packs', 'Yarn Count & Fabric Selections', 'B2B Sizing & Grading Tables'],
    processes: ['Automated Laser Cutting', 'Precision Flatlock & Overlock Stitching', 'Inline Zero-Tolerance Quality Check'],
    outputs: ['Ready-to-Wear Sustainable Apparel', 'Low-MOQ Test Collections', 'High-Volume Enterprise Runs'],
  },
  {
    num: '04',
    title: 'Bio-Circular Finishing & Seed Tags',
    hub: 'Tirupur Eco-Processing Vats',
    lead: 'Eco-Innovation Crew',
    icon: Leaf,
    tag: 'CIRCULARITY',
    timeline: 'Continuous',
    image: '/images/ecosystem/phase-dyes.jpg',
    caption: 'Natural dye pigments extracted from fruits and flowers with 100% biodegradable runoff.',
    summary:
      'Zero toxic effluent. We dye fabrics naturally using boiled pomegranate rinds, marigold flowers, turmeric, and beetroot. Then we package everything in recycled materials with price tags embedded with real basil seeds that customers plant to grow herbs.',
    inputs: ['Botanical Pigments (Fruits & Flowers)', 'Recycled Cotton-Rag Paper', 'Non-GMO Sweet Basil & Wildflower Seeds'],
    processes: ['Closed-Loop Natural Dye Baths', 'Water Recycling & Bio-Filtration', 'Seed Impregnation for Hangtags'],
    outputs: ['Naturally Tinted Garments', 'Compostable Kraft Packaging', 'Plantable Price Tags that Sprout'],
  },
  {
    num: '05',
    title: 'Performance Growth & Analytics Engine',
    hub: 'Digital Growth Desk',
    lead: 'Prasad (Head of Digital Marketing)',
    icon: BarChart3,
    tag: 'CONVERSION',
    timeline: 'Always-On',
    image: '/images/ecosystem/phase-analytics.jpg',
    caption: 'Live performance dashboards tuning daily Google Ads bids and funnel retargeting.',
    summary:
      'Prasad and the digital team deploy performance ad funnels powered by Danny and Pavan’s video assets. We track average CPC (driving ₹13.01 for Pioneer Cranes), push CTR to 4.64%, and fine-tune Google Ads to deliver immediate revenue.',
    inputs: ['Video Ad Hooks & Variations', 'Conversion Tracking Pixels', 'Daily Campaign Ad Spend'],
    processes: ['Algorithmic Bid Optimisation', 'Multi-Variant Creative Testing', 'WhatsApp & CRM Funnel Retargeting'],
    outputs: ['90.8% Optimisation Score', 'Low CPC Customer Acquisition', 'Verified B2B Procurement Orders'],
  },
];

export default function EcosystemClosedLoop() {
  const [activeTab, setActiveTab] = useState(0);
  const activePhase = PHASES[activeTab];
  const IconComponent = activePhase.icon;

  return (
    <section className="closed-loop-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10" id="closed-loop">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header with AOS Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              The 5-Phase <span className="text-gradient-shimmer">Circular Flow</span>
            </h2>
          </div>
          <p className="text-[#888] font-mono text-xs sm:text-sm max-w-md leading-relaxed">
            How real ideas travel through our hands: from sketchpads in Hyderabad to master looms in Tirupur and straight into performance-driven customer growth.
          </p>
        </motion.div>

        {/* Phase Tabs Selector with Staggered Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10"
        >
          {PHASES.map((phase, idx) => {
            const PhaseIcon = phase.icon;
            const isCurrent = activeTab === idx;
            return (
              <button
                key={phase.num}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isCurrent
                    ? 'bg-[#00a859]/15 border-[#00a859] shadow-[0_0_25px_rgba(0,168,89,0.2)]'
                    : 'bg-[#141414] border-white/10 hover:border-white/20 hover:bg-[#181818]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#00a859]">
                    PHASE {phase.num}
                  </span>
                  <PhaseIcon size={16} className={isCurrent ? 'text-[#00a859]' : 'text-neutral-500'} />
                </div>
                <h4 className="font-sans text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {phase.title}
                </h4>
                <span className="font-mono text-[10px] text-[#777] block mt-1">
                  {phase.timeline}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Phase Interactive Dashboard (Content + Local Photo Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase.num}
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/10 bg-[#141414] p-6 sm:p-10 lg:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
          >
            {/* Top Row: Title & Metadata */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00a859]/15 border border-[#00a859]/30 flex items-center justify-center text-[#00a859] flex-shrink-0">
                  <IconComponent size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs font-bold text-[#00a859]">
                      PHASE {activePhase.num} of 05
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-[#aaa]">
                      {activePhase.hub}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                    {activePhase.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-[#777] block text-[10px]">Orchestrator</span>
                  <span className="text-white font-bold">{activePhase.lead}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <span className="text-[#777] block text-[10px]">Timeline</span>
                  <span className="text-[#00a859] font-bold">{activePhase.timeline}</span>
                </div>
              </div>
            </div>

            {/* Main Body Grid: Narrative & Local Photography */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
              {/* Left Column: Human Story */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-[#ddd] font-mono text-sm sm:text-base leading-relaxed">
                  {activePhase.summary}
                </p>

                {/* 3-Column Deliverables Pill Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs pt-2">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] font-bold block mb-2 uppercase text-[11px]">Inputs</span>
                    <ul className="space-y-1.5 text-[#888]">
                      {activePhase.inputs.map((item, i) => (
                        <li key={i}>&bull; {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] font-bold block mb-2 uppercase text-[11px]">Operations</span>
                    <ul className="space-y-1.5 text-[#888]">
                      {activePhase.processes.map((item, i) => (
                        <li key={i}>&bull; {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] font-bold block mb-2 uppercase text-[11px]">Outputs</span>
                    <ul className="space-y-1.5 text-white">
                      {activePhase.outputs.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-[#00a859] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Res Local Real Photo */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative group bg-[#141414] media-placeholder">
                  <img
                    src={activePhase.image}
                    alt={activePhase.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onLoad={(e) => {
                      e.currentTarget.parentElement?.classList.remove('media-placeholder');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Photo Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#ccc]">
                    <span className="text-[#00a859] font-bold block mb-0.5">Live Production Snapshot</span>
                    <span>{activePhase.caption}</span>
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
