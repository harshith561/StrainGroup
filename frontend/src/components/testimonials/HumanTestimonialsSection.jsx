'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Feather, Droplet, Sun, Sprout } from 'lucide-react';
import { HUMAN_TESTIMONIALS } from '@/constant/testimonialsData';

const HUMAN_PILLARS = [
  {
    icon: Sun,
    title: 'Sunlit Ateliers',
    desc: 'Fair livable wages and ventilated, chemical-free workspaces in Tirupur.',
  },
  {
    icon: Droplet,
    title: 'Zero-Discharge Dyes',
    desc: '100% closed-loop recycled water with organic botanical colorways.',
  },
  {
    icon: Feather,
    title: 'Hypoallergenic Purity',
    desc: 'Pure GOTS organic cotton and raw Himalayan hemp soft on sensitive skin.',
  },
  {
    icon: Sprout,
    title: 'Living Seed Tags',
    desc: 'Compostable packaging with embedded heirloom seeds that grow into plants.',
  },
];

export default function HumanTestimonialsSection({ testimonials = HUMAN_TESTIMONIALS }) {
  return (
    <section 
      id="human-testimonials"
      className="relative py-14 sm:py-24 lg:py-32 bg-[#090909] border-b border-white/10 overflow-hidden"
    >
      {/* Warm Ambient Orbs */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#dfba73]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#00a859]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6"
          >
            Real People. Real Experiences.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfba73] via-amber-200 to-amber-400">
              Real Impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs sm:text-base md:text-lg text-neutral-400 font-sans leading-relaxed px-2"
          >
            Beyond enterprise balance sheets lies our deepest commitment: the artisans who weave
            our fabrics with pride, the creators empowered behind the lens, and the conscious
            individuals who wear our garments against their skin every day.
          </motion.p>
        </div>

        {/* 4 Pillars of Human Impact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {HUMAN_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-[#131313] border border-white/5 hover:border-[#dfba73]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#dfba73]/10 text-[#dfba73] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Grid of Human Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl bg-[#141414] border border-white/10 hover:border-[#dfba73]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(223,186,115,0.12)]"
              >
                <div>
                  {/* Top: Star Rating */}
                  <div className="flex items-center text-amber-400 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm font-sans font-medium text-white/95 leading-relaxed mb-5">
                    "{item.quote}"
                  </blockquote>

                  {/* Human Aspect / Highlight Pill */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                    <p className="text-[10px] font-mono text-[#dfba73] uppercase tracking-wider font-semibold mb-1">
                      Key Highlight
                    </p>
                    <p className="text-xs text-neutral-300 font-sans">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Footer: Human Author Portrait & Meta */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#dfba73]/70 bg-neutral-900 shrink-0 shadow-sm"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#dfba73] transition-colors truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 truncate">
                        {item.role}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-mono mt-0.5">
                        <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
