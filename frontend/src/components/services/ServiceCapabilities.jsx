'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Video, Palette, Sparkles, Layers } from 'lucide-react';
import Link from 'next/link';

const CAPABILITIES = [
  {
    id: '01',
    category: 'Video Production',
    icon: Video,
    title: 'Cinematic & Corporate Video Production',
    shortDesc: 'Corporate video production, brand films, commercial advertisements, product & industrial videos, and cinematic visual storytelling.',
    deliverables: [
      'Corporate Video Production & Brand Films',
      'Commercial Ads, Product & Industrial Videos',
      'Drone Videography & Event Coverage',
      'Video Editing, Colour Grading, VFX & Sound Design',
    ],
    highlight: '4K/8K High-Fidelity Cinematic Capture',
  },
  {
    id: '02',
    category: 'Photography',
    icon: Palette,
    title: 'Professional Commercial & Fashion Photography',
    shortDesc: 'Product photography, fashion lookbooks, commercial shoots, and advertising imagery crafted with deliberate studio lighting.',
    deliverables: [
      'Product & Commercial Photography',
      'High-Fashion Lookbooks & Editorial Shoots',
      'Corporate & Event Photography',
      'Professional In-House Studio Photography',
    ],
    highlight: 'Editorial Lighting & Studio Precision',
  },
  {
    id: '03',
    category: 'Digital Marketing',
    icon: TrendingUp,
    title: 'Performance Digital Marketing & Google Ads',
    shortDesc: 'Precision Google Ads, Meta campaigns, SEO, and multi-channel marketing models that transform attention into measurable revenue.',
    deliverables: [
      'Google Ads & Search Engine Optimisation (SEO)',
      'Facebook & Instagram Paid Advertising',
      'Pay-Per-Click (PPC) & Landing Page Funnels',
      'Influencer, WhatsApp, Email Marketing & Reporting',
    ],
    highlight: '90.8% Avg. Optimization Score',
  },
  {
    id: '04',
    category: 'Creative & Branding',
    icon: Sparkles,
    title: 'Brand Strategy, Creative Design & Visual Identity',
    shortDesc: 'Brand strategy, brand development, creative advertising, graphic design, logo & visual design, and AI-powered video advertisements.',
    deliverables: [
      'Brand Strategy & Complete Identity Development',
      'Logo Engineering & Visual Design Systems',
      'Creative Advertising & Social Media Creatives',
      'AI-Powered Video Ads & Brand Storytelling',
    ],
    highlight: 'Enduring Brand Equity & Identity',
  },
  {
    id: '05',
    category: 'Sustainable Fashion',
    icon: Layers,
    title: 'Sustainable Garment Manufacturing (Tirupur)',
    shortDesc: 'Organic cotton, hemp clothing, vegan silk and vegan leather custom garments manufactured in our zero-discharge factory in Tirupur.',
    deliverables: [
      'Organic Cotton & Hemp Apparel Production',
      'Vegan Silk & Vegan Leather Customized Garments',
      'Natural Dyeing Using Fruits, Flowers & Vegetables',
      'Recycled Packaging & Plantable Price Tags',
    ],
    highlight: 'Zero-Discharge Eco Manufacturing',
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
                className={`group relative rounded-2xl p-8 border transition-all duration-400 cursor-pointer flex flex-col justify-between ${isSelected
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
