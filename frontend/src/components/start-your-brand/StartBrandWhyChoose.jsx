'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Factory,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    tag: 'SINGLE ACCOUNTABILITY',
    title: 'One Partner, Zero Finger-Pointing Across Vendors',
    description:
      'Instead of bouncing between freelance graphic designers who don’t understand tech packs and distant factories that ignore small creators, you work with a single unified leadership team managing the complete execution.',
    highlight: 'Comprehensive project management from initial sketch to checkout',
  },
  {
    icon: Factory,
    tag: 'FACTORY FLOOR INTEGRATION',
    title: 'Direct Access To Our Tirupur Eco-Apparel Facility',
    description:
      'Gain immediate access to India’s textile heartland in Tirupur, Tamil Nadu. We provide low-barrier prototype runs with certified organic cotton, hemp, and zero liquid discharge botanical dyeing with plantable seed tags.',
    highlight: 'Zero middleman markups, verified circular supply chain',
  },
  {
    icon: TrendingUp,
    tag: 'GROWTH BLUEPRINTS',
    title: 'Battle-Tested Customer Acquisition Frameworks',
    description:
      'A great garment without an audience is just dead inventory. Led by Prasad, our performance team deploys proven direct-to-consumer ad funnels, high-converting social creative hooks, and automated email nurturing on Day 1.',
    highlight: 'Proven campaign architectures that generate early cash-flow',
  },
  {
    icon: UserCheck,
    tag: 'FOUNDER-FIRST PHILOSOPHY',
    title: 'Direct Strategic Mentorship With Strains Leadership',
    description:
      'You collaborate directly with Naga Praharsha Govindu (Founder & Strategy Maker) and our senior department heads, receiving honest product feedback, unit-economic reviews, and category-defining positioning guidance.',
    highlight: 'Strategic guidance tailored to sustainable long-term scale',
  },
];

const CLIENT_ROSTER = [
  { name: 'Xiti Fashion', category: 'Sustainable Haute Couture' },
  { name: 'Haraa Jewellery', category: 'Luxury Brand Identity' },
  { name: 'Bhama Emporio', category: 'Designer Fashion & Retail' },
  { name: 'Pakka Non Veg', category: 'Culinary Brand Experience' },
  { name: 'Pioneer Cranes', category: 'B2B Enterprise Positioning' },
  { name: 'Aastu Refrigeration', category: 'Industrial Performance Scaling' },
  { name: 'Sri Bioaesthetics', category: 'Agricultural Bio-solutions' },
  { name: 'Royal EV', category: 'Clean Mobility Systems' },
];

export default function StartBrandWhyChoose() {
  return (
    <section
      id="start-brand-why-choose"
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Why Choose Strains Associates Incubator to Start Your Brand"
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
            Why Ambitious Founders Choose <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Strains Associates</span> To Launch Their Brand
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Over 90% of new apparel and consumer brands fail due to fragmented supply chains, defective garment sampling, or inability to acquire paying customers. Our incubator dismantles every single one of those failure points.
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
                Incubated Brands &amp; Brand Alumni
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-black uppercase text-white mt-1">
                From Visionary Napkin Sketch To Thriving Market Leaders
              </h4>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00e676] hover:text-white transition-colors"
            >
              <span>Explore Brand Portfolio</span>
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

