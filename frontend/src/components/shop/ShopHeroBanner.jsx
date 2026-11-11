'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { SHOP_HERO_CONFIG } from '@/constant';

export default function ShopHeroBanner() {
  const scrollToCatalog = () => {
    const el = document.getElementById('shop-catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full min-h-[72vh] sm:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#0c0c0c] text-white pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-white/10"
      aria-label="Shop and Apparel Hero Banner"
    >
      {/* Background Image: Vivid, Bright, and Clearly Visible */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <img
          src={SHOP_HERO_CONFIG.bannerImage}
          alt="Strains Apparel and Textile Manufacturing"
          width={1200}
          height={1661}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center brightness-95 contrast-[1.05] scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Scrim Gradient for text contrast while preserving video/photo vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-[#0c0c0c] z-[1]" />

        {/* Ambient Brand Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-[#00a859]/20 blur-[170px] pointer-events-none z-[2]" />
      </div>

      {/* Content Container with Staggered AOS Animations */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full text-center flex flex-col items-center">
        {/* Main Title with Smooth Fade-Down Animation */}
        <h1
          data-aos="fade-down"
          data-aos-duration="900"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-sans font-black tracking-tight uppercase leading-[1.04] max-w-5xl text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          {SHOP_HERO_CONFIG.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] via-[#00a859] to-emerald-400 drop-shadow-[0_2px_20px_rgba(0,230,118,0.35)]">
            {SHOP_HERO_CONFIG.titleHighlight}
          </span>
        </h1>

        {/* Subtitle with Fade-Up */}
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-100 font-sans leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          {SHOP_HERO_CONFIG.subtitle}
        </p>

        {/* Action Buttons with Zoom-In */}
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="250"
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={scrollToCatalog}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00a859] text-black font-sans font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#00e676] hover:shadow-[0_0_35px_rgba(0,230,118,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xl"
          >
            <span>Browse Products & Fabrics</span>
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </button>

          <Link
            href="/contact?inquiry=custom-apparel"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/25 hover:border-white/50 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
          >
            <span>Custom Bulk Inquiries</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Metrics Bar with Staggered Fade-Up */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="350"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-white/15 text-left"
        >
          {SHOP_HERO_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-black/45 border border-white/10 hover:border-[#00a859]/50 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-[11px] sm:text-xs font-mono uppercase text-[#00e676] tracking-wider mb-1 flex items-center justify-between">
                <span>{stat.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a859] group-hover:scale-150 transition-transform" />
              </div>
              <div className="text-sm sm:text-base font-sans font-bold text-white group-hover:text-[#00e676] transition-colors">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
