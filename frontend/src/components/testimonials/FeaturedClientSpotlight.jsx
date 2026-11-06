'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Building2 } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '@/constant/testimonialsData';

export default function FeaturedClientSpotlight() {
  const featuredClients = CLIENT_TESTIMONIALS.filter((item) => item.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = featuredClients[currentIndex] || featuredClients[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredClients.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredClients.length) % featuredClients.length);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  return (
    <section 
      className="relative py-12 sm:py-20 lg:py-28 bg-[#0c0c0c] border-b border-white/10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00a859]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dfba73]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
              Featured Client Spotlights
            </h2>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured story"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181818] hover:bg-[#00a859] text-white hover:text-black border border-white/10 hover:border-[#00a859] flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured story"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181818] hover:bg-[#00a859] text-white hover:text-black border border-white/10 hover:border-[#00a859] flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Spotlight Showcase Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#131313] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-8 lg:p-14 items-center"
            >
              {/* Left Column: Visual Portrait & Metrics Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00a859]/30 to-[#dfba73]/30 rounded-3xl blur-xl opacity-60" />

                  {/* Main Portrait Card - 100% Unobscured in all screen sizes */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 aspect-[4/4.5] sm:aspect-[4/4.5]">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      width={400}
                      height={450}
                      className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                    {/* Bottom Author Snapshot on Portrait */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-5 z-10">
                      <p className="text-base sm:text-lg font-bold text-white leading-tight">
                        {current.name}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-[#00a859] mt-0.5 leading-snug">
                        {current.role}
                      </p>
                      <p className="text-[11px] sm:text-xs text-neutral-300 font-mono mt-0.5 leading-snug">
                        {current.company}
                      </p>
                    </div>
                  </div>

                  {/* Key Result Metric Box:
                      - In Mobile View: Appears cleanly BELOW the photo as a full-width card so the image is NEVER hidden
                      - In Desktop View (lg:): Floats seamlessly in the corner */}
                  <div className="mt-3 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-4 z-20 bg-[#181818] border border-[#00a859]/50 lg:border-2 lg:border-[#00a859] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-md w-full lg:max-w-[240px]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#00a859]" />
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#00a859] font-bold">
                        Key Result
                      </span>
                    </div>
                    <div className="text-base sm:text-xl font-black text-white leading-none mb-1">
                      {current.metric}
                    </div>
                    <div className="text-[11px] sm:text-xs text-neutral-400 leading-tight">
                      {current.metricDetail}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: In-Depth Quote & Project Insights */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Star Rating & Category Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-1 text-[#00a859]">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      ))}
                      <span className="text-[11px] sm:text-xs font-mono text-neutral-400 ml-1.5 font-medium">
                        5.0 Enterprise Review
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300">
                      <Building2 className="w-3 h-3 text-neutral-400" />
                      <span>{current.category}</span>
                    </div>
                  </div>

                  {/* Main Pull Quote - Fluid text size for mobile */}
                  <blockquote className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-sans font-medium text-white/95 leading-relaxed sm:leading-snug mb-4 sm:mb-6">
                    "{current.quote}"
                  </blockquote>

                  {/* Author & Designation Details Card */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {current.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#00a859] mt-0.5">
                      {current.role}
                    </p>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5">
                      {current.company}
                    </p>
                  </div>

                  {/* Project Full Story Context */}
                  <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 mb-6 sm:mb-8">
                    <p className="text-[11px] sm:text-xs font-mono text-[#00a859] uppercase tracking-wider font-semibold mb-1 sm:mb-2">
                      Behind The Numbers
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                      {current.fullStory}
                    </p>
                  </div>
                </div>

                {/* Case Study Link & Slide Indicators */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10">
                  {current.caseStudyUrl ? (
                    <Link
                      href={current.caseStudyUrl}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-[#00a859] transition-colors group"
                    >
                      <span>Read Full Verified Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-[11px] sm:text-xs text-neutral-500 font-mono">
                      Confidential Enterprise Agreement
                    </span>
                  )}

                  {/* Bullet Slide Pickers */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {featuredClients.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Jump to ${item.name}`}
                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                          currentIndex === idx
                            ? 'w-6 sm:w-8 bg-[#00a859]'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
