'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Camera,
  Shirt,
  ShoppingBag,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: Sparkles,
    tag: 'UNBROKEN ECOSYSTEM',
    title: 'From Brand Concept To Consumer Closet',
    description:
      'Most creative agencies hand over a logo and abandon you to find manufacturers and ad buyers. We unify luxury branding, Tirupur garment production, editorial video shoots, and performance e-commerce under one roof.',
    highlight: 'Zero creative dilution, 100% unified vision execution',
  },
  {
    icon: Camera,
    tag: 'EDITORIAL ARTISTRY',
    title: 'Vogue-Standard Photography & Motion Direction',
    description:
      'Led by Danny (Direction & Post-production) and Pavan (Head of Photography & Videography), we craft lookbooks and fashion campaign films with high-contrast cinematic lighting and runway-grade aesthetic refinement.',
    highlight: 'Professional model casting, high-end styling, and 4K cinema capture',
  },
  {
    icon: Shirt,
    tag: 'CIRCULAR CREDIBILITY',
    title: 'Backed By Zero-Discharge Sustainable Manufacturing',
    description:
      'We empower fashion brands with genuine sustainability credentials: 100% organic cotton, Himalayan hemp, chemical-free botanical dyeing, and living plantable seed tags produced in our Tirupur facility.',
    highlight: 'Authentic eco-storytelling backed by certified factory processes',
  },
  {
    icon: ShoppingBag,
    tag: 'D2C SCALE SCIENCE',
    title: 'E-Commerce Built For High Average Order Value',
    description:
      'Guided by Prasad (Digital Marketing Head), our fashion e-commerce storefronts and Meta ad funnels are optimized for high average order values (AOV), luxury customer retention, and profitable VIP drops.',
    highlight: 'Conversion-engineered Shopify & Next.js digital flagship stores',
  },
];

const CLIENT_ROSTER = [
  { name: 'Xiti Fashion', category: 'Sustainable Haute Couture' },
  { name: 'Haraa', category: 'Luxury Gold & Diamonds' },
  { name: 'Bhama Emporio', category: 'Designer Fashion & Retail' },
  { name: 'Pakka Non Veg', category: 'Hospitality Brand Concepts' },
  { name: 'TripZada', category: 'Lifestyle Travel Apparel' },
  { name: 'Cornileus Pharma', category: 'Wellness & Bio-Aesthetics' },
  { name: 'Savin International', category: 'International Fashion Trade' },
  { name: 'Tejas Elite', category: 'Premium Lifestyle' },
];

export default function FashionBrandWhyChoose() {
  return (
    <section
      id="fashion-brand-why-choose"
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Why Choose Strains Associates for Fashion Brand Architecture"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00a859]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Why Fashion Visionaries Choose <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Strains Associates</span> For Brand Architecture
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Building an enduring fashion brand demands more than just aesthetic taste—it requires flawless garment construction, evocative editorial storytelling, and scientific customer acquisition.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            const aosAnim = index % 2 === 0 ? 'fade-right' : 'fade-left';
            return (
              <div
                key={item.title}
                data-aos={aosAnim}
                data-aos-duration="800"
                className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00e676]/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#00a859]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#00e676] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-black uppercase text-white mb-4 group-hover:text-[#00e676] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Roster Showcase */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#00e676]">
                Fashion &amp; Luxury Portfolio
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-black uppercase text-white mt-1">
                Trusted By Iconic Fashion &amp; Luxury Labels
              </h4>
            </div>

            <Link
              href="/case-studies/xiti-fashion"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00e676] hover:text-white transition-colors"
            >
              <span>Explore Xiti Fashion Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENT_ROSTER.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-center"
              >
                <div className="text-white font-sans font-bold text-sm sm:text-base mb-1">
                  {client.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  {client.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

