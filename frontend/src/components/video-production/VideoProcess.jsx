'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CalendarCheck,
  Camera,
  Sliders,
  Send,
  CheckCircle2,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Concept Scripting',
    subtitle: 'Brand Narrative Architecture',
    description:
      "We extract your brand essence and market objectives to draft bespoke narrative treatments. We don't shoot without an airtight concept, complete with two-column commercial scripts, moodboards, and director notes.",
    deliverables: ['Creative Treatment', '2-Column Commercial Script', 'Visual Storyboards', 'Tone & Mood Deck'],
    icon: FileText,
    accent: '#00e676',
  },
  {
    step: '02',
    title: 'Pre-Production & Line Logistics',
    subtitle: 'Airtight Shoot Preparation',
    description:
      'Led by Strategy Maker and Line Producer Praharsha. We scout industrial facilities, secure drone clearances, cast talent, and assemble specialized cinema camera packages with zero scheduling friction.',
    deliverables: ['Location Permits & Recce', 'Talent Casting & Wardrobe', 'Master Shot List & Call Sheets', 'Gear & Crew Coordination'],
    icon: CalendarCheck,
    accent: '#00e676',
  },
  {
    step: '03',
    title: '4K/6K Cinema Shoot & Drone Capture',
    subtitle: 'High-Fidelity Visual Execution',
    description:
      'Under the direction of Danny and Head of Videography Pavan, our crews capture footage with dynamic camera movements, Hollywood lighting setups, high-fidelity wireless audio, and cinematic aerial drone sequences.',
    deliverables: ['Cinema Raw 4K/6K Capture', 'FPV & Aerial Drone Footage', 'Studio & High-CRI Lighting', 'Multi-Track Spatial Audio'],
    icon: Camera,
    accent: '#00e676',
  },
  {
    step: '04',
    title: 'DaVinci Color, VFX & Sound Design',
    subtitle: 'Complete In-House Finishing Suite',
    description:
      'Our in-house post-production wing executes offline assembly, precision DaVinci Resolve color timing, 3D motion graphics, and immersive cinematic sound design that draws viewers into the experience.',
    deliverables: ['Precision Assembly & Offline Cut', 'DaVinci Resolve Color Grading', 'Motion Graphics & VFX Compositing', 'Immersive Sound Design & Mix'],
    icon: Sliders,
    accent: '#00e676',
  },
  {
    step: '05',
    title: 'Multi-Format Delivery & Scaling',
    subtitle: 'Conversion-Optimized Distribution',
    description:
      'We master your video for maximum impact across every screen: widescreen 16:9 for television and website heroes, and vertical 9:16 hook-driven cuts for Meta and YouTube Shorts ad campaigns.',
    deliverables: ['4K DCI Master ProRes Exports', '9:16 Vertical Social Ad Cuts', 'Compressed Web & Social Deliverables', 'Raw Archive Retention'],
    icon: Send,
    accent: '#00e676',
  },
];

export default function VideoProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="video-process"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="5-Step Video Production Process"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header — fade down from top */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Our 5-Step Video <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Production Process</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            From the initial creative napkin sketch to multi-format cinema mastering, we follow a disciplined, five-phase roadmap that eliminates delays and delivers category-defining visual assets.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          {/* Top Step Selector Pill Bar on Desktop */}
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="700"
            className="hidden lg:flex items-center justify-between mb-12 bg-white/[0.02] border border-white/10 rounded-2xl p-2 backdrop-blur-md"
          >
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl font-sans text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#00a859] text-black shadow-[0_4px_20px_rgba(0,168,89,0.35)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${isActive ? 'bg-black/20 text-black font-extrabold' : 'bg-white/10 text-[#00e676]'}`}>
                    {step.step}
                  </span>
                  <span className="truncate">{step.title.split(' ')[0]} {step.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Highlight Step Feature Card (Desktop) */}
          <div className="hidden lg:block mb-14">
            {(() => {
              const current = PROCESS_STEPS[activeStep];
              const Icon = current.icon;
              return (
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="cinema-card p-10 bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-white/15 rounded-3xl grid grid-cols-12 gap-8 items-center"
                >
                  <div className="col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-md bg-[#00a859]/20 border border-[#00a859]/40 text-[#00e676] font-mono text-xs font-bold tracking-widest">
                        PHASE {current.step} // {current.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl font-sans font-extrabold text-white mb-4">
                      {current.title}
                    </h3>
                    <p className="text-neutral-300 font-sans text-base leading-relaxed mb-6">
                      {current.description}
                    </p>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#00e676] mb-3 font-semibold">
                        Phase Deliverables &amp; Milestones:
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {current.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-200 bg-white/[0.03] border border-white/5 px-3.5 py-2 rounded-lg">
                            <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 flex flex-col items-center justify-center border-l border-white/10 pl-8">
                    <div className="w-24 h-24 rounded-2xl bg-[#00a859]/15 border border-[#00a859]/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(0,168,89,0.2)]">
                      <Icon className="w-12 h-12 text-[#00e676]" />
                    </div>
                    <div className="font-mono text-6xl font-black text-white/10 select-none">
                      {current.step}
                    </div>
                    <div className="text-xs font-mono text-neutral-400 mt-2 text-center uppercase tracking-widest">
                      Standard Phase Duration: 3-5 Working Days
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>

          {/* All 5 Cards Step Grid — each card fades up with staggered delay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  data-aos-duration="700"
                  className="cinema-card p-8 rounded-2xl flex flex-col justify-between group hover:border-[#00e676]/40 transition-all duration-300"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-3xl font-black text-[#00e676]">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00e676]/40 transition-all">
                        <Icon className="w-5 h-5 text-[#00e676]" />
                      </div>
                    </div>

                    <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2">
                      {item.subtitle}
                    </div>

                    <h4 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-[#00e676] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables tags */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.deliverables.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono bg-white/[0.04] text-neutral-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
