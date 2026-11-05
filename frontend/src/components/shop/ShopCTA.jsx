'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { useAutoplayVideo } from '@/hooks';

export default function ShopCTA() {
  const { videoRef, containerRef, isVideoLoaded, setIsVideoLoaded, isNearViewport } =
    useAutoplayVideo({ lazy: true });

  const ctaVideoSrc = '/videos/clothing-manufacturing-contact.mp4';
  const ctaVideoFallback = '/videos/fashion-brand-contact.mp4';

  return (
    <section
      ref={containerRef}
      id="shop-cta"
      className="relative w-full py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#080808] text-white border-t border-white/10"
      aria-label="Connect for Custom Manufacturing CTA"
    >
      {/* 1. Background Video — Bright, Vibrant & Clearly Visible (Not in the dark) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#080808]">
        <video
          ref={videoRef}
          src={isNearViewport ? ctaVideoSrc : undefined}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload={isNearViewport ? 'auto' : 'none'}
          onLoadedData={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] saturate-[1.1] transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/images/case-studies/strains-fashions.jpg"
        >
          {isNearViewport && (
            <>
              <source src={ctaVideoSrc} type="video/mp4" />
              {ctaVideoFallback && <source src={ctaVideoFallback} type="video/mp4" />}
            </>
          )}
        </video>

        {/* 2. Soft Scrim to guarantee text contrast without hiding video action */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none z-[1]" />

        {/* Brand Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00a859]/20 blur-[170px] rounded-full pointer-events-none z-[1]" />
      </div>

      {/* 3. Foreground Content with AOS Animations */}
      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        <h2
          data-aos="fade-down"
          data-aos-duration="900"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight uppercase leading-[1.08] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          Have a Custom Cut or Brand in Mind? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] via-[#00a859] to-emerald-400 drop-shadow-[0_0_25px_rgba(0,230,118,0.45)]">
            Let’s Build Your Collection.
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          className="max-w-2xl text-neutral-100 font-sans text-sm sm:text-base md:text-lg leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          From custom GSM fabric spinning and botanical dye formulation to tech pack grading and plantable packaging—connect with our Tirupur textile engineers to bring your vision to life.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="250"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact?inquiry=apparel-manufacturing"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,168,89,0.35)] hover:shadow-[0_0_35px_rgba(0,230,118,0.6)] hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>Connect to Inquire</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/clothing-manufacturing"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-black/60 hover:bg-black/80 text-white border border-white/25 hover:border-white/50 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <span>Explore Stitchery Hub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
