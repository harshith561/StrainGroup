'use client';

import React from 'react';
import Link from 'next/link';
import {
  Factory,
  Droplet,
  Flower2,
  Boxes,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: Factory,
    tag: 'DIRECT FACILITY OWNERSHIP',
    title: 'Manufacturing in Tirupur, India’s Knitwear Capital',
    description:
      'We operate our own sustainable production facility in Tirupur, Tamil Nadu. By eliminating layers of brokers, buying agents, and trading middlemen, you communicate directly with production managers on the factory floor.',
    highlight: 'Direct factory pricing, zero agency broker markups',
  },
  {
    icon: Droplet,
    tag: 'CLOSED-LOOP CIRCULARITY',
    title: '100% Zero Liquid Discharge (ZLD) Effluent System',
    description:
      'Unlike conventional mills that pollute local water tables, our dyehouse features an advanced Zero Liquid Discharge treatment plant that recovers and purifies 100% of process water for continuous recycling.',
    highlight: 'Zero water pollution, certified eco-friendly processing',
  },
  {
    icon: Flower2,
    tag: 'NATURAL BOTANICAL DYES',
    title: 'Pure Plant Pigments & Living Plantable Seed Tags',
    description:
      'We extract rich earthen hues using madder root, pomegranate, indigo, and marigold. Each garment is finished with price tags made from handmade recycled seed paper that customers plant to grow fresh herbs.',
    highlight: 'Chemical-free natural colors and biodegradable plantable tags',
  },
  {
    icon: Boxes,
    tag: 'FLEXIBLE SCALABILITY',
    title: 'From Low-MOQ Emerging Drops to High-Volume Export',
    description:
      'We accommodate modern brands testing new silhouettes with manageable minimum order quantities (MOQs), while possessing the industrial capacity to scale into container-load exports seamlessly.',
    highlight: 'Low MOQ starter batches with enterprise production capacity',
  },
];

const CLIENT_ROSTER = [
  { name: 'Xiti Fashion', category: 'Sustainable Haute Couture' },
  { name: 'Bhama Emporio', category: 'Luxury Retail & Apparel' },
  { name: 'Savin International', category: 'Global Trade & Export' },
  { name: 'Ship AtoZ', category: 'Supply Chain & Logistics' },
  { name: 'Pakka Non Veg', category: 'Hospitality Uniforms' },
  { name: 'Haraa', category: 'Luxury Brand Merchandising' },
  { name: 'TripZada', category: 'Adventure & Travel Apparel' },
  { name: 'Tejas Elite', category: 'Corporate Workwear' },
];

export default function ClothingWhyChoose() {
  return (
    <section
      id="clothing-why-choose"
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Why Choose Strains Associates for Clothing Manufacturing"
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
            Why Conscious Brands Choose <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Strains Associates</span> For Manufacturing
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Most garment manufacturers either greenwash with synthetic blends or fail on delivery timelines and fit consistency. We deliver certified circular apparel with industrial execution discipline.
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
                Apparel &amp; Fashion Client Roster
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-black uppercase text-white mt-1">
                Trusted By Designers &amp; Global Retailers
              </h4>
            </div>

            <Link
              href="/our-ecosystem"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00e676] hover:text-white transition-colors"
            >
              <span>Explore Tirupur Facility Hub</span>
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

