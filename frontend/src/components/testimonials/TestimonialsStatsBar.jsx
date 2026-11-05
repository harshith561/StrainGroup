'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS_STATS } from '@/constant/testimonialsData';

const ICON_MAP = {
  star: Star,
  building: Building2,
  trending: TrendingUp,
  sparkles: Sparkles,
};

export default function TestimonialsStatsBar() {
  return (
    <section className="relative py-10 sm:py-12 bg-[#0e0e0e] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14">
        {/* Mobile View: Single Unified Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:hidden rounded-2xl bg-[#141414] border border-white/10 divide-y divide-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {TESTIMONIALS_STATS.map((stat) => {
            const Icon = ICON_MAP[stat.icon] || Sparkles;
            return (
              <div key={stat.id} className="p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-sans font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00a859]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h2 className="text-sm font-semibold text-white/95 mb-1">
                  {stat.label}
                </h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Desktop View: 4 Individual Cards */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {TESTIMONIALS_STATS.map((stat, idx) => {
            const Icon = ICON_MAP[stat.icon] || Sparkles;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#00a859]/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight group-hover:text-[#00a859] transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#00a859]/20 flex items-center justify-center text-white/60 group-hover:text-[#00a859] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h2 className="text-sm font-semibold text-white/90 mb-1">
                  {stat.label}
                </h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

