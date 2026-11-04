'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Target,
  Palette,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: TrendingUp,
    tag: 'VERIFIED PERFORMANCE',
    title: 'Proven Enterprise B2B Case Study Benchmarks',
    description:
      'We demonstrate real financial impact: sustained 90.8% optimization score with 4.64% CTR over 3.5 years for Aastu Refrigeration (21,800 clicks, 471,000 impressions) and ₹13.01 average CPC for Pioneer Cranes.',
    highlight: 'Real revenue metrics, transparent cost per acquisition',
  },
  {
    icon: Target,
    tag: 'ALGORITHMIC MASTERY',
    title: 'Data Scientists Managing Bids, Not Amateurs',
    description:
      'Headed by Prasad (Head of Digital Marketing), our media buyers continually tune match types, negative keywords, audience segments, and bid strategies to capture high-intent buyers without ad spend leakage.',
    highlight: 'Zero ad waste, granular single-intent ad groupings',
  },
  {
    icon: Palette,
    tag: 'CREATIVE SYNERGY',
    title: 'In-House Studio Production Built For Ad Conversions',
    description:
      'Unlike traditional ad agencies that rely on bland stock photos, our integrated Hyderabad studio shoots custom 4K commercial videos and high-converting visual assets engineered specifically to win ad platform auctions.',
    highlight: 'Creative direction natively integrated with performance media',
  },
  {
    icon: ShieldCheck,
    tag: 'TOTAL TRANSPARENCY',
    title: '100% Client Account Ownership & Zero Hidden Margins',
    description:
      'You maintain full admin ownership of your Google Ads, Meta Business Manager, and analytics accounts. We report exact platform costs with zero hidden markups and provide transparent live dashboards.',
    highlight: 'Direct ad account access and daily conversion reporting',
  },
];

const CLIENT_ROSTER = [
  { name: 'Aastu Refrigeration', category: 'HVAC & Cold-Chain' },
  { name: 'Pioneer Cranes', category: 'Industrial Machinery' },
  { name: 'JSW Cement', category: 'Heavy Infrastructure' },
  { name: 'Sri Bioaesthetics', category: 'Biotech & Agro' },
  { name: 'Partha Dentals', category: 'Healthcare Network' },
  { name: 'Pakka Non Veg', category: 'Hospitality & Dining' },
  { name: 'Royal EV', category: 'Clean Mobility' },
  { name: 'Industry ARC', category: 'Market Intelligence' },
];

export default function AdvertisingWhyChoose() {
  return (
    <section
      id="advertising-why-choose"
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Why Choose Strains Associates for Advertising and Marketing"
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
            Why Industry Leaders Choose <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Strains Associates</span> For Digital Growth
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Most marketing agencies charge high retainers while burning budget on irrelevant clicks. We build disciplined, data-first acquisition engines engineered to maximize pipeline revenue and verified customer lifetime value.
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
                Verified Client Roster
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-black uppercase text-white mt-1">
                Trusted By Enterprise Leaders Across Sectors
              </h4>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00e676] hover:text-white transition-colors"
            >
              <span>View Verified Case Studies</span>
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

