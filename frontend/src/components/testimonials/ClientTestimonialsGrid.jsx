'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function ClientTestimonialsGrid({ testimonials = [] }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (!testimonials.length) {
    return (
      <div className="py-16 text-center text-neutral-500 font-mono text-sm">
        No client testimonials matched your search.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Subheader */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-white tracking-tight">
          Enterprise Client Testimonials
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {testimonials.map((item, index) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#141414] border border-white/10 hover:border-[#00a859]/50 transition-all duration-300 flex flex-col justify-between p-5 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,168,89,0.15)] overflow-hidden"
            >
              {/* Background watermark quote icon */}
              <div className="absolute top-4 right-6 text-white/[0.03] group-hover:text-[#00a859]/[0.08] text-6xl sm:text-7xl font-serif select-none pointer-events-none transition-colors duration-300 leading-none">
                “
              </div>

              <div>
                {/* Header: Stars & Metric Pill */}
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
                  <div className="flex items-center gap-1 text-[#00a859]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-[11px] sm:text-xs font-mono font-bold text-[#00a859]">
                    <TrendingUp className="w-3 h-3" />
                    {item.metric}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-sm sm:text-base font-sans font-medium text-white/90 leading-relaxed mb-4 sm:mb-6">
                  "{item.quote}"
                </blockquote>

                {/* Expandable Story Dropdown */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-neutral-300 leading-relaxed font-sans space-y-2">
                        <p className="font-semibold text-white/90">Detailed Overview:</p>
                        <p>{item.fullStory}</p>
                        {item.metricDetail && (
                          <p className="text-[#00a859] font-mono pt-1">
                            Impact: {item.metricDetail}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-[#00a859] transition-colors mb-6"
                >
                  <span>{isExpanded ? 'Hide context' : 'Read campaign impact'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Footer Meta: Avatar + Author Details */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      width={52}
                      height={52}
                      className="w-13 h-13 rounded-full object-cover border-2 border-[#00a859]/60 bg-neutral-900 shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0c0c0c] flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00a859]" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-white truncate group-hover:text-[#00a859] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                      {item.role}
                    </p>
                    <p className="text-xs text-neutral-500 font-mono truncate">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

