'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Video, Palette, Sparkles, Layers } from 'lucide-react';
import Link from 'next/link';

const CAPABILITIES = [
  {
    id: '01',
    category: 'Digital Strategy',
    icon: TrendingUp,
    title: 'Performance Digital Marketing & Growth',
    shortDesc: 'Precision ad campaigns, multi-channel growth funnels, and data analytics that convert audiences into loyal advocates.',
    deliverables: [
      'Meta & Google Ads Performance Scaling',
      'Omnichannel Retargeting Architecture',
      'SEO & Content Authority Engineering',
      'Full-Funnel Conversion Rate Optimization (CRO)',
    ],
    highlight: '+185% Avg. ROAS across clients',
  },
  {
    id: '02',
    category: 'Media Production',
    icon: Video,
    title: 'Cinematic Fashion & Video Production',
    shortDesc: 'High-production fashion films, commercial product photography, and dynamic social storytelling that define category leaders.',
    deliverables: [
      'Editorial Fashion & Lookbook Direction',
      'Cinematic 4K/8K Brand Commercials',
      'High-Speed High-Res Product Visuals',
      'Social-First Vertical Video Architecture',
    ],
    highlight: 'Award-winning visual storytelling',
  },
  {
    id: '03',
    category: 'Brand Architecture',
    icon: Palette,
    title: 'Art Direction & Strategic Brand Identity',
    shortDesc: 'End-to-end aesthetic design systems, packaging engineering, and typography standards crafted to stand the test of time.',
    deliverables: [
      'Visual Identity & Logo Engineering',
      'Design Systems & Type Hierarchy',
      'Eco-Friendly Luxury Packaging Design',
      'Complete Brand Book & Style Guides',
    ],
    highlight: 'Distinctive brand positioning',
  },
  {
    id: '04',
    category: 'Garment Manufacturing',
    icon: Sparkles,
    title: 'Zero-Discharge Sustainable Stitchery',
    shortDesc: 'World-class circular apparel production from our state-of-the-art facility in Tirupur, blending ethical craft with industrial scale.',
    deliverables: [
      'Organic & Recycled Fiber Sourcing',
      'Zero Liquid Discharge (ZLD) Wet Processing',
      'Low Minimum Order Quantity (MOQ) Agility',
      'Global Export Compliance & Quality Assurance',
    ],
    highlight: '100% Zero-Discharge Certified',
  },
  {
    id: '05',
    category: 'Digital Engineering',
    icon: Layers,
    title: 'Modern Web & Interactive Platforms',
    shortDesc: 'Fast, responsive, fluid web applications and e-commerce ecosystems engineered for seamless conversions and stunning user experiences.',
    deliverables: [
      'Headless Next.js & React Web Apps',
      'Shopify & Custom E-Commerce Integration',
      'Micro-Animations & Smooth Motion Design',
      'High Performance Core Web Vitals Optimization',
    ],
    highlight: '<0.8s First Contentful Paint',
  },
];

export default function ServiceCapabilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="service-capabilities-section py-24 sm:py-32 bg-[#090909] text-white border-b border-white/10" aria-label="Our Full Capabilities">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-[#00a859] font-mono text-xs uppercase tracking-[3px] font-bold block mb-3">
              Capabilities & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight">
              Full-Spectrum Creative & Production
            </h2>
          </div>
          <p className="text-[#8a8a8a] max-w-md text-sm sm:text-base font-sans leading-relaxed">
            From strategic brand architecture to industrial-grade zero-discharge manufacturing, we provide the complete engine modern brands require.
          </p>
        </div>

        {/* Interactive Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const isSelected = activeTab === idx;

            return (
              <div
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`group relative rounded-2xl p-8 border transition-all duration-400 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#121212] border-[#00a859] shadow-[0_10px_30px_rgba(0,168,89,0.15)] -translate-y-1'
                    : 'bg-[#0f0f0f] border-white/5 hover:border-white/20 hover:bg-[#141414] hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#00a859]/10 border border-white/10 group-hover:border-[#00a859]/30 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#00a859]" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-[#666666] font-bold">
                      {cap.id}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#00a859] font-bold block mb-2">
                    {cap.category}
                  </span>

                  <h3 className="text-xl font-sans font-bold text-white mb-4 group-hover:text-[#00a859] transition-colors leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-[#8c8c8c] text-sm leading-relaxed mb-6 font-sans">
                    {cap.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {cap.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#b0b0b0]">
                        <CheckCircle2 className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Tag & Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-[#00a859] font-bold">
                    {cap.highlight}
                  </span>
                  <Link
                    href="/contact"
                    className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#00a859] group-hover:bg-[#00a859] flex items-center justify-center transition-all duration-300"
                    aria-label={`Inquire about ${cap.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
