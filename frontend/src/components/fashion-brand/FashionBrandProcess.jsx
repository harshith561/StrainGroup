'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Palette,
  Camera,
  ShoppingBag,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Brand DNA & Luxury Positioning',
    subtitle: 'Aesthetic Ethos & Market Whitespace',
    description:
      'We distill your creative vision into an unmistakable brand identity: core aesthetic pillars, target luxury demographic profiles, competitive whitespace mapping, and comprehensive brand bible guidelines.',
    deliverables: ['Haute Couture Brand Bible', 'Aesthetic Philosophy & Story', 'Luxury Demographic Segmentation', 'Bespoke Typography & Color Systems'],
    icon: Compass,
    accent: '#00e676',
  },
  {
    step: '02',
    title: 'Capsule Collection & Tech Packs',
    subtitle: 'Silhouettes, Fabrics & Bespoke Trims',
    description:
      'Our fashion ateliers draft silhouette flats, fabric drapes, and complete specification tech packs utilizing sustainable organic cotton, Himalayan hemp, vegan silk, and custom hardware buttons/zippers.',
    deliverables: ['Capsule Silhouette Spec Sheets', 'Fabric Sourcing & GSM Selection', 'Custom Embossed Hardware & Labels', 'Collection Colorway Cohesion'],
    icon: Palette,
    accent: '#00e676',
  },
  {
    step: '03',
    title: 'Editorial Photography & 4K Runway Films',
    subtitle: 'Directorial Visual Craft by Pavan & Danny',
    description:
      'We stage high-fashion editorial campaigns: casting professional runway models, curating avant-garde styling, capturing lookbooks, and shooting cinematic 4K motion films tailored for Instagram and web flagships.',
    deliverables: ['Model Casting & Wardrobe Styling', 'Studio & High-Fashion Location Shoots', 'High-Res E-Commerce Lookbook Assets', '4K Cinematic Fashion Reels & Teasers'],
    icon: Camera,
    accent: '#00e676',
  },
  {
    step: '04',
    title: 'Digital Flagship & E-Commerce Build',
    subtitle: 'Minimalist High-Conversion Storefronts',
    description:
      'We engineer ultra-fast, minimalist e-commerce storefronts (Shopify or headless Next.js) featuring interactive lookbook shopping, smooth micro-animations, multi-currency checkout, and instant mobile load speeds.',
    deliverables: ['Bespoke Luxury UI/UX Design', 'Interactive "Shop The Look" Features', 'Multi-Currency Global Checkout', 'Mobile-First Conversion Architecture'],
    icon: ShoppingBag,
    accent: '#00e676',
  },
  {
    step: '05',
    title: 'Creator Seeding & D2C Scaling Funnels',
    subtitle: 'VIP Drop Strategy & Performance Acquisition',
    description:
      'We orchestrate high-hype collection drop moments: targeted influencer seeding, VIP early-access email funnels, and precision Meta catalog ads managed by Prasad to achieve high initial sell-through rates.',
    deliverables: ['Limited-Drop Launch Campaign Strategy', 'VIP Early-Access Email Sequences', 'High-Converting Meta Lookbook Ads', 'Direct-to-Consumer ROAS Optimization'],
    icon: Rocket,
    accent: '#00e676',
  },
];

export default function FashionBrandProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="fashion-brand-process"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="5-Step Fashion Brand Architecture Process"
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
            Our 5-Step Fashion <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Brand Blueprint</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            From high-fashion positioning to bespoke editorial imagery, sustainable Tirupur manufacturing, and high-converting e-commerce storefronts, we build iconic modern fashion brands.
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
                  Key Brand Deliverables:
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

