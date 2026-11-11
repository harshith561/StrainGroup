'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SUSTAINABILITY_ASSETS } from '@/constant';

export default function SustainabilityCTA({ backgroundImage }) {
  const bgImgSrc =
    backgroundImage ||
    SUSTAINABILITY_ASSETS.ctaImage?.src ||
    '/images/ecosystem/hub-tirupur.jpg';

  return (
    <section
      id="sustainability-cta"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#050505] text-white"
      aria-label="Sustainability Call to Action"
    >
      {/* 1. Background Image - Clearly visible with natural brightness */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src={bgImgSrc}
          alt={SUSTAINABILITY_ASSETS.ctaImage?.alt || 'Sustainable Manufacturing Facility'}
          width={800}
          height={600}
          className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.08] saturate-[1.1]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* 2. Soft Gradient Overlay to ensure text readability without hiding the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-[#050505]/60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00a859]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* 3. Main Call to Action Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase leading-[1.08] text-white mb-6 max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Ready to Build an <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d1fae5] to-[#00e676] drop-shadow-[0_0_20px_rgba(0,230,118,0.4)]">
            Uncompromisingly Sustainable
          </span>{' '}
          Fashion Brand?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white font-sans max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Whether you are launching your debut 250-piece capsule or transitioning an enterprise catalog to circular textiles, 
          Strains provides end-to-end design, natural dyeing, zero-discharge manufacturing, and live seed packaging.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-[0_10px_35px_rgba(0,168,89,0.4)] hover:shadow-[0_15px_45px_rgba(0,230,118,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Factory Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white font-sans font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Pricing &amp; Packages</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
