'use client';

import React from 'react';
import { Droplets, Sparkles, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';
import { SHOP_TRUST_METRICS } from '@/constant';

const iconMap = {
  droplets: Droplets,
  sparkles: Sparkles,
  'shield-check': ShieldCheck,
  factory: Factory,
};

export default function ShopValueProps() {
  return (
    <section
      className="relative w-full py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#0a0a0a] border-t border-b border-white/10 text-white overflow-hidden"
      aria-label="Manufacturing Standards and Trust Factors"
    >
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Fade-Down */}
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase">
            Why Visionary Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#00e676]">
              Source With Strains
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 font-sans leading-relaxed">
            We operate our own industrial facilities to give labels complete transparency, certified biological traceability, and commercial execution from raw fiber to retail rack.
          </p>
        </div>

        {/* 4 Value Proposition Cards with Staggered AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOP_TRUST_METRICS.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Sparkles;
            return (
              <div
                key={metric.title}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 120}
                className="p-7 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#00e676]/40 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,168,89,0.12)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00a859]/10 border border-[#00a859]/30 flex items-center justify-center text-[#00e676] mb-6 group-hover:scale-110 group-hover:bg-[#00a859]/20 transition-all duration-300 shadow-md">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2.5 group-hover:text-[#00e676] transition-colors">
                    {metric.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                    {metric.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#00e676]">
                  <CheckCircle2 size={14} className="text-[#00a859]" />
                  <span>Strains Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
