'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  FileCheck2,
  Factory,
  Video,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Market Feasibility',
    subtitle: 'Niche Positioning & Unit Economics',
    description:
      'We validate your concept with real market data: defining target customer demographics, analyzing competitive whitespace, establishing price points, and forecasting unit economics to ensure healthy gross margins.',
    deliverables: ['Product-Market Fit Validation', 'Competitor Whitespace Matrix', 'Unit Economics & Margin Model', 'Launch Timeline & Capital Budget'],
    icon: Lightbulb,
    accent: '#00e676',
  },
  {
    step: '02',
    title: 'Brand Identity & Tech Packs',
    subtitle: 'Visual Systems & Specification Grading',
    description:
      'We design your visual brand identity (logo, color palette, custom labels, plantable tags) while simultaneously drafting factory-ready garment tech packs with exact measurements, seams, and fabric specs.',
    deliverables: ['Brand Visual Identity System', 'Complete Garment Tech Packs', 'Custom Neck Labels & Packaging Design', 'Living Plantable Seed Tag Proofs'],
    icon: FileCheck2,
    accent: '#00e676',
  },
  {
    step: '03',
    title: 'Rapid Sampling & Tirupur Production',
    subtitle: 'Low-Risk Starter Batches in Tirupur',
    description:
      'Our Tirupur manufacturing facility knits, samples, fits, and produces your debut inventory batch using 100% certified organic cotton, pure hemp, and zero-discharge botanical dyeing with low MOQ flexibility.',
    deliverables: ['First Fit & Golden Master Samples', '100% Zero-Discharge Factory Run', 'Strict AQL 2.5 Quality Assurance', 'Custom Barcode & Polybag Packaging'],
    icon: Factory,
    accent: '#00e676',
  },
  {
    step: '04',
    title: 'Commercial Shoots & Storefront Build',
    subtitle: 'High-Impact Content & Flagship Web',
    description:
      'Danny and Pavan shoot your launch video commercial and e-commerce lookbook in our Hyderabad studio, while our tech team deploys a high-speed Shopify or custom Next.js storefront equipped with secure payments.',
    deliverables: ['4K Launch Commercial Film', 'High-Res E-Commerce Product Photos', 'Turnkey Shopify/Next.js Storefront', 'Integrated Payment Gateway & Logistics'],
    icon: Video,
    accent: '#00e676',
  },
  {
    step: '05',
    title: 'Go-To-Market Drop & Customer Scaling',
    subtitle: 'Selling Out Your First Collection Drop',
    description:
      'Guided by Prasad, we execute a high-converting go-to-market drop: pre-launch VIP email captures, influencer seeding, and precision Meta/Google ad campaigns designed to sell out your first inventory drop.',
    deliverables: ['Pre-Launch Waitlist & Email Funnel', 'Creator Gifting & Influencer Sprints', 'High-ROAS Meta & Google Ad Campaigns', 'Post-Purchase Retention & Re-Orders'],
    icon: TrendingUp,
    accent: '#00e676',
  },
];

export default function StartBrandProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="start-brand-process"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="5-Step Brand Launch Roadmap"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Our 5-Step Brand <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Launch Roadmap</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Launch with confidence. We eliminate the traditional headaches of coordinating disconnected designers, overseas factories, and advertising agencies by executing the complete pipeline under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
                  Key Founder Deliverables:
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

