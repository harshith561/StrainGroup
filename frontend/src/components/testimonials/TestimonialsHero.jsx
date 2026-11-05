'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building2, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constant';

export default function TestimonialsHero({ activeTab, onTabSelect }) {
  const googleReviewUrl =
    SITE_CONFIG?.googleReviewUrl ||
    'https://www.google.com/search?q=Strains+Associates+Hyderabad+reviews#lrd=0x0:0x0,3,,,';

  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/10 bg-[#0c0c0c]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00a859]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#dfba73]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e0e0e0] to-[#00a859]">Visionaries</span>.
            <br />
            Cherished by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfba73] via-[#f7e3af] to-amber-200">Humans</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-xl text-neutral-400 font-sans leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Discover verified stories from enterprise leaders whose bottom lines we expanded,
            alongside heartfelt words from conscious customers, master weavers, and independent creators
            who experience Strains every single day.
          </motion.p>

          {/* Action & Filter Switcher Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => onTabSelect('clients')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg ${
                activeTab === 'clients'
                  ? 'bg-[#00a859] text-black shadow-[#00a859]/30 ring-2 ring-[#00a859]/50 scale-105'
                  : 'bg-[#181818] hover:bg-[#222222] text-white border border-white/10 hover:border-[#00a859]/40'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Enterprise Client Reviews</span>
            </button>

            <button
              type="button"
              onClick={() => onTabSelect('human')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg ${
                activeTab === 'human'
                  ? 'bg-[#dfba73] text-black shadow-[#dfba73]/30 ring-2 ring-[#dfba73]/50 scale-105'
                  : 'bg-[#181818] hover:bg-[#222222] text-white border border-white/10 hover:border-[#dfba73]/40'
              }`}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 fill-current" />
              <span>Human & Community Voices</span>
            </button>

            {/* Direct Google Reviews Action Button */}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct Google Reviews link to add feedback"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#4285F4]/70 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(66,133,244,0.25)] group"
            >
              {/* Authentic Google 'G' Vector */}
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Add Google Review</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
