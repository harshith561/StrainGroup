'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIAL_CATEGORIES } from '@/constant/testimonialsData';

export default function TestimonialsFilterTabs({ activeTab, onTabChange }) {
  return (
    <div className="w-full mb-8 sm:mb-12">
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 pb-6 border-b border-white/10 overflow-x-auto scrollbar-none">
        {TESTIMONIAL_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onTabChange(cat.id)}
              className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all duration-300 ${
                isActive
                  ? 'text-black font-bold shadow-lg shadow-[#00a859]/20'
                  : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-[#00a859] to-emerald-400 rounded-full z-0"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
