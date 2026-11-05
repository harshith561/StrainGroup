'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Sprout, 
  Film, 
  TrendingUp, 
  Briefcase
} from 'lucide-react';

export default function FounderOriginStory() {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: 'corporate',
      year: '2017 – 2018',
      title: 'The Spark & The Frustration',
      subtitle: 'Inside Corporate Sales & The Agency Disconnect',
      icon: Briefcase,
      image: '/images/ecosystem/hero-growth.jpg',
      summary:
        'Working in corporate sales management, Praharsha saw clients spend lakhs on glossy agency campaigns that never delivered tangible growth, while manufacturing units worked tirelessly with zero story.',
      quote:
        '“Agencies were selling illusions, and factories were making commodities. Nobody was building the bridge between high aesthetic narrative and industrial reality.”',
      details: [
        'Corporate sales role exposed deep inefficiencies in traditional agency retainer models.',
        'Observed firsthand how marketing promises broke down because agencies had zero physical product understanding.',
        'Began researching sustainable alternatives to toxic textile manufacturing.',
      ],
      tag: 'The Catalyst',
    },
    {
      id: 'incorporation',
      year: 'November 2018',
      title: 'The Resignation & The Leap',
      subtitle: 'Self-Funded Incorporation of Strains Fashions',
      icon: Building2,
      image: '/images/ecosystem/hub-tirupur.jpg',
      summary:
        'Leaving the security of a corporate salary, Praharsha self-funded the inception of Strains. On 13 November 2018, Strains Fashions Private Limited was officially incorporated in Hyderabad.',
      quote:
        '“I had no angel investors. Just personal savings, stubborn belief, and a one-way train ticket down south to the textile mills.”',
      details: [
        'Official incorporation of Strains Fashions Private Limited.',
        'Initial setup focused on ethical supply chain architecture and fair artisan wages.',
        'Committed 100% of bootstrapping capital to sustainable fabric research.',
      ],
      tag: 'Zero Outside Funding',
    },
    {
      id: 'tirupur',
      year: '2019 – 2020',
      title: 'The Tirupur Clean-Tech Mill',
      subtitle: 'Pioneering Zero-Discharge Botanical Dyeing',
      icon: Sprout,
      image: '/images/ecosystem/material-botanical-dyes.jpg',
      summary:
        'Walking the banks of polluted rivers in Tirupur made the mission clear: zero chemical effluent discharge. Praharsha partnered with veteran weavers to master natural dyes from fruits and flowers.',
      quote:
        '“When other mills dumped sulfur into canals at midnight, we brewed dye vats with pomegranate peels, marigold, and turmeric. People said we were crazy—until they felt the fabric.”',
      details: [
        'Zero-discharge closed-loop manufacturing facility established in Tirupur, Tamil Nadu.',
        '100% natural botanical extracts: pomegranate rind, madder root, indigo, and turmeric.',
        'Introduced plantable basil seed price tags and biodegradable recycled packaging.',
      ],
      tag: 'Zero-Discharge Hub',
    },
    {
      id: 'creative',
      year: '2021 – 2023',
      title: 'Strains Associates & The Studio',
      subtitle: 'Hollywood-Grade Film Direction & Full-Funnel Growth',
      icon: Film,
      image: '/images/ecosystem/synergy-camera-cinematography.jpg',
      summary:
        'In early 2021, Praharsha realized green products fail if their brand films look amateur. He founded Strains Associates in Hyderabad, assembling Pavan, Danny, and Prasad.',
      quote:
        '“We realized sustainability won’t win on guilt; it wins on desire. We brought DaVinci color grading, cinematic camera crews, and high-performance Google Ads into our arsenal.”',
      details: [
        'In-house post-production wing equipped for DaVinci Resolve color grading & sound design.',
        'Cinematic 4K/6K camera packages, aerial drone cinematography, and editorial photography.',
        'Full-funnel digital marketing engine achieving 90.8% Google Ads optimization scores.',
      ],
      tag: 'Creative Synergy',
    },
    {
      id: 'present',
      year: 'Present & Beyond',
      title: 'The Integrated Ecosystem',
      subtitle: 'Powering Industry Icons from Concept to Shelf',
      icon: TrendingUp,
      image: '/images/case-studies/jsw-cement.jpeg',
      summary:
        'Today, Strains operates as an unmatched dual-hub powerhouse: high-craft creative storytelling in Hyderabad directly linked to ethical textile manufacturing in Tirupur, trusted by leaders like JSW and Pakka.',
      quote:
        '“We built the ecosystem we wished existed when we started. A home where art direction and clean manufacturing feed one another seamlessly.”',
      details: [
        'Proud creative and marketing partners to JSW Cement, Pakka Non Veg, Haraa, and Xiti.',
        'Over 100+ commercial film productions and enterprise marketing transformations completed.',
        'Continuous expansion into organic hemp, vegan silk, and circular closed-loop fashion.',
      ],
      tag: 'Dual-Hub Ecosystem',
    },
  ];

  const current = chapters[activeChapter];

  return (
    <section id="origin-story" className="relative py-24 sm:py-32 bg-[#0c0c0c] border-b border-white/10 overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="founder-ambient-glow founder-ambient-glow-green w-[500px] h-[500px] bottom-10 -left-20" />
      <div className="founder-grain-overlay" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            The Journey of Strains: <span className="text-[#00a859]">From 2017 to Today</span>
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base sm:text-lg leading-relaxed">
            Every company has a resume, but few tell the unfiltered story. Here is the unvarnished timeline 
            of how Praharsha resigned from corporate life, navigated the textile heartland of Tirupur, 
            and built an integrated creative-production engine.
          </p>
        </div>

        {/* Chapter Selection Tabs (Scrollable on Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            const isSelected = activeChapter === idx;
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChapter(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#00a859] text-black font-bold shadow-lg shadow-[#00a859]/20'
                    : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-[#00a859]'}`} />
                <span>{ch.year}</span>
                <span className="hidden md:inline opacity-70">• {ch.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Left Story Column */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 rounded-2xl bg-[#121212] border border-white/10">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-2.5 sm:gap-4 mb-4">
                  <span className="px-3 py-1 rounded bg-[#00a859]/15 border border-[#00a859]/30 text-[#4ade80] font-mono text-xs font-semibold tracking-wider uppercase inline-block">
                    Chapter 0{activeChapter + 1} • {current.year}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {current.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight mb-2">
                  {current.title}
                </h3>
                <p className="text-sm font-mono text-[#00a859] mb-6">
                  {current.subtitle}
                </p>

                <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed mb-6">
                  {current.summary}
                </p>

                {/* Personal Quote */}
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border-l-2 border-[#84cc16] text-white/90 italic font-sans text-sm sm:text-base mb-6 leading-relaxed">
                  {current.quote}
                </div>

                {/* Proof Points List */}
                <div className="space-y-2.5">
                  <span className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Key Milestones:
                  </span>
                  {current.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                      <span className="text-[#00a859] font-bold mt-0.5">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  disabled={activeChapter === 0}
                  onClick={() => setActiveChapter((prev) => Math.max(0, prev - 1))}
                  className={`px-3 py-1.5 rounded-lg border border-white/10 transition-colors ${
                    activeChapter === 0
                      ? 'opacity-30 cursor-not-allowed text-neutral-600'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5 cursor-pointer'
                  }`}
                >
                  ← Previous Chapter
                </button>

                <span className="text-neutral-500">
                  {activeChapter + 1} / {chapters.length}
                </span>

                <button
                  type="button"
                  disabled={activeChapter === chapters.length - 1}
                  onClick={() => setActiveChapter((prev) => Math.min(chapters.length - 1, prev + 1))}
                  className={`px-3 py-1.5 rounded-lg border border-white/10 transition-colors ${
                    activeChapter === chapters.length - 1
                      ? 'opacity-30 cursor-not-allowed text-neutral-600'
                      : 'text-[#00a859] hover:text-[#4ade80] hover:bg-white/5 cursor-pointer'
                  }`}
                >
                  Next Chapter →
                </button>
              </div>

            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 min-h-[360px] lg:min-h-full flex flex-col justify-end group">
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/ecosystem/hero-creative.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Caption Tag */}
              <div className="relative z-10 p-6 sm:p-8">
                <span className="inline-block px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] mb-2">
                  ARCHIVE VISUAL
                </span>
                <p className="text-white font-sans font-bold text-lg sm:text-xl">
                  {current.title}
                </p>
                <p className="text-xs text-neutral-300 font-mono mt-1">
                  {current.year} • Strains Historical Archive
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
