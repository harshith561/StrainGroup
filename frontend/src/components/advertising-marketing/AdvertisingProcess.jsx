'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Users,
  PenTool,
  Zap,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Account Audit & Intent Research',
    subtitle: 'Deep Forensic Campaign Inspection',
    description:
      'We conduct a deep forensic audit of past ad accounts, competitor auctions, and organic search landscapes. We identify negative keyword waste, audience mismatches, and discover untapped high-intent commercial keyword clusters.',
    deliverables: ['Full PPC/SEO Account Audit', 'Competitor Auction Intelligence', 'High-Intent Search Query Matrix', 'Budget & CPA Feasibility Deck'],
    icon: Search,
    accent: '#00e676',
  },
  {
    step: '02',
    title: 'Audience & Keyword Architecture',
    subtitle: 'Intent-Driven Funnel Segmentation',
    description:
      'Headed by Prasad, we structure granular campaign ad groups segmented by buyer intent: Top-of-Funnel discovery, Middle-of-Funnel evaluation, and Bottom-of-Funnel procurement search with strict negative match lists.',
    deliverables: ['Single-Theme Ad Group Structure', 'Negative Keyword Shielding', 'Custom Intent & Lookalike Audiences', 'Retargeting Funnel Sequences'],
    icon: Users,
    accent: '#00e676',
  },
  {
    step: '03',
    title: 'Creative Sprints & Ad Copywriting',
    subtitle: 'High-Converting Multi-Format Assets',
    description:
      'Our Hyderabad creative wing pairs psychological direct-response copywriting with eye-catching visual assets, producing responsive search ads, high-CTR display banners, and vertical 9:16 video hooks for Meta & YouTube.',
    deliverables: ['Responsive Search Ad Variations', 'High-CTR Social Ad Creatives', 'Dedicated B2B Landing Pages', 'Ad Video Hooks & Thumbnails'],
    icon: PenTool,
    accent: '#00e676',
  },
  {
    step: '04',
    title: 'Precision Launch & Smart Bidding',
    subtitle: 'Multi-Channel Campaign Activation',
    description:
      'We launch campaigns across Google Search, Display, Meta (Instagram & Facebook), and programmatic networks utilizing target CPA and maximize-conversions smart bidding with precise tracking pixel validation.',
    deliverables: ['Pixel & Conversion API Calibration', 'Google Ads Smart Bidding Setup', 'Meta Catalog & CBO Campaigns', 'Real-Time Lead Alert Integration'],
    icon: Zap,
    accent: '#00e676',
  },
  {
    step: '05',
    title: 'Algorithmic CRO & Scale',
    subtitle: 'Continuous ROAS & Volume Expansion',
    description:
      'We continuously optimize search terms, landing page conversion rates, and auction bid adjustments, sustaining an industry-leading 90.8% Google Ads optimization score and reducing average acquisition costs.',
    deliverables: ['90.8% Google Ads Optimization Standard', 'Daily Auction Pruning & Bid Adjustments', 'A/B Landing Page Split Testing', 'Live Executive ROI Reporting Dashboard'],
    icon: BarChart3,
    accent: '#00e676',
  },
];

export default function AdvertisingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="advertising-process"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="5-Step Advertising and Marketing Process"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Our 5-Step Performance <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Growth Engine</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            From deep forensic search auditing to continuous conversion rate optimization, we follow a disciplined five-phase scientific growth blueprint that turns clicks into profitable enterprise revenue.
          </p>
        </div>

        {/* 5 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.07] border-[#00e676]/60 shadow-[0_0_30px_rgba(0,230,118,0.15)] translate-x-1'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-[#00e676] text-black font-extrabold' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-sans font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <Icon className={`w-5 h-5 mt-1 transition-colors ${isActive ? 'text-[#00e676]' : 'text-neutral-500'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00e676]/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#00e676]">
                  Phase {PROCESS_STEPS[activeStep].step} Roadmap
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  Step {activeStep + 1} of {PROCESS_STEPS.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase text-white mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-neutral-300 font-sans text-base leading-relaxed mb-8">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                  Key Deliverables &amp; Outcomes:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-sans text-neutral-200">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

