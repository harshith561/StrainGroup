'use client';

import React from 'react';
import { Droplets, Flower2, Sprout, Package, CheckCircle2 } from 'lucide-react';

const PRACTICES = [
  {
    step: '01',
    title: 'Zero Liquid Discharge (ZLD)',
    subtitle: '100% Water Recycling in Tirupur',
    icon: Droplets,
    description:
      'We run an advanced closed-loop effluent treatment plant. All water used in washing and natural dyeing is filtered and purified through multi-stage reverse osmosis, then recirculated back into production. Zero wastewater is released into nature.',
    benefits: [
      '100% of process water is purified and reused',
      'Zero chemical sludge dumped into local rivers or aquifers',
      'Approved and monitored by Tamil Nadu Pollution Control Board',
    ],
  },
  {
    step: '02',
    title: 'Fruit & Flower Natural Dyeing',
    subtitle: '100% Plant & Vegetable Pigments',
    icon: Flower2,
    description:
      'We extract rich colors by simmering upcycled pomegranate rinds, temple marigold flowers, turmeric, and madder roots. Unlike synthetic petroleum dyes, our botanical colors are completely non-toxic and hypoallergenic.',
    benefits: [
      'Zero synthetic azo dyes, formaldehyde, or toxic heavy metals',
      'Safe for sensitive skin and infant wear',
      'The spent botanical broth is 100% organic and returned to soil as compost',
    ],
  },
  {
    step: '03',
    title: 'Plantable Basil Seed Hangtags',
    subtitle: 'Turning Paper Tags into Fresh Herbs',
    icon: Sprout,
    description:
      'We collect our factory cotton fabric scraps, pulp them into handmade paper, and embed them with live non-GMO sweet basil seeds. Instead of throwing the price tag away, customers simply plant it in soil, water it, and grow fresh basil.',
    benefits: [
      'Made from 100% post-consumer recycled cotton rag paper',
      'Live sweet basil seeds sprout within 7 to 10 days in sunlight',
      'Printed with water-based, non-toxic soy inks',
    ],
  },
  {
    step: '04',
    title: '100% Plastic-Free Packaging',
    subtitle: 'Compostable Bags & Recycled Boxes',
    icon: Package,
    description:
      'From garment polybags to outer shipping cartons, we avoid single-use plastics entirely. Garments are sealed in plant-derived cornstarch bags and packed into recycled unbleached kraft paper cartons.',
    benefits: [
      'Cornstarch polybags that decompose naturally within 180 days',
      '100% recyclable corrugated shipping cartons',
      'Water-activated paper tape instead of plastic tape',
    ],
  },
];

export default function SustainabilityPractices() {
  return (
    <section
      id="sustainable-practices"
      className="relative bg-[#0b0b0b] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Our Sustainable Manufacturing Practices"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00a859]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase leading-tight text-white mb-6">
            Simple, Honest <br />
            <span className="text-[#00e676]">Sustainable Practices</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            No greenwashing or complicated jargon. Here are the four practical steps we take in every single production run to ensure our garments respect the planet.
          </p>
        </div>

        {/* 4 Practices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRACTICES.map((practice, idx) => {
            const IconComponent = practice.icon || Droplets;

            return (
              <div
                key={practice.step}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 hover:border-[#00e676]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#00a859]/20 border border-[#00e676]/30 flex items-center justify-center text-[#00e676] group-hover:bg-[#00a859] group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">
                      STEP {practice.step}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-black text-white mb-1 group-hover:text-[#00e676] transition-colors">
                    {practice.title}
                  </h3>
                  <div className="text-xs font-mono text-[#00e676] mb-4">
                    {practice.subtitle}
                  </div>

                  <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {practice.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00e676] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-300 font-sans">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

