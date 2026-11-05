'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PhoneCall, Award, Layers, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constant';

export default function TestimonialsCTA() {
  const googleReviewUrl =
    SITE_CONFIG?.googleReviewUrl ||
    'https://www.google.com/search?q=Strains+Associates+Hyderabad+reviews#lrd=0x0:0x0,3,,,';
  return (
    <section className="relative py-24 sm:py-32 bg-[#0c0c0c] border-b border-white/10 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00a859]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#181818] to-[#121212] border border-white/15 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center">
          
          {/* Subtle Decorative Ring */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-[#00a859]/10 pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-xs font-mono text-[#00a859] uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Client & Creator Ecosystem</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6"
          >
            Ready to Write Your Own{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-emerald-300 to-teal-200">
              Success Story
            </span>
            ?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Whether you need a high-intent B2B performance marketing architecture,
            cinematic 4K brand media, or zero-discharge sustainable apparel production,
            our unified team brings your vision to life.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00a859] hover:bg-[#00914c] text-black font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#00a859]/30 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm sm:text-base transition-all duration-300"
            >
              <Award className="w-4 h-4 text-[#dfba73]" />
              <span>Explore All Case Studies</span>
            </Link>

            <Link
              href="/start-your-brand"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm sm:text-base transition-all duration-300"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Start Your Fashion Brand</span>
            </Link>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 hover:border-[#4285F4]/70 font-semibold text-sm sm:text-base transition-all duration-300 shadow-md group"
            >
              <svg className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Add Google Review</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00a859]" />
              Zero Minimum Obligation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00a859]" />
              Direct Founder Access
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00a859]" />
              100% Verified Outcomes
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

