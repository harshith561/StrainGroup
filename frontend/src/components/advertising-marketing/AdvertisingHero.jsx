'use client';

import React, { useState } from 'react';
import { ArrowDown, TrendingUp } from 'lucide-react';
import { ADVERTISING_MARKETING_ASSETS } from '@/constant';
import { useAutoplayVideo } from '@/hooks';

export default function AdvertisingHero() {
  const { videoRef, isVideoLoaded, setIsVideoLoaded } = useAutoplayVideo();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="video-hero-viewport relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-28 pb-16"
      aria-label="Advertising and Marketing Hero"
    >
      {/* 1. Cinematic Background Video with Smooth Fade-in Transition */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out bg-[#050505]"
        style={{
          transform: `scale(1.05) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
        }}
      >
        <video
          ref={videoRef}
          src={ADVERTISING_MARKETING_ASSETS.heroVideo.src}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`video-hero-bg absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-[1.15] saturate-[1.1] transition-opacity duration-1000 ease-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <source src={ADVERTISING_MARKETING_ASSETS.heroVideo.src} type="video/mp4" />
          {ADVERTISING_MARKETING_ASSETS.heroVideo.fallbackSrc && (
            <source src={ADVERTISING_MARKETING_ASSETS.heroVideo.fallbackSrc} type="video/mp4" />
          )}
        </video>
      </div>

      {/* 2. Reticle Overlay & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/20" />

        <div className="video-hero-vignette" />
        <div className="absolute inset-0 cinema-scanlines opacity-10" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[450px] bg-[#00a859]/15 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* 3. Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex flex-col justify-center items-center text-center">
        {/* Green Subheading */}
        <div className="mb-4" data-aos="fade-down" data-aos-duration="900">
          <span className="inline-block text-[#00e676] font-mono text-sm sm:text-base md:text-lg uppercase tracking-[3px] font-bold drop-shadow-[0_0_15px_rgba(0,230,118,0.4)]">
            Performance Digital Marketing &amp; Full-Funnel Advertising
          </span>
        </div>

        {/* Main Heading */}
        <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-sans font-black tracking-tight uppercase leading-[1.05] text-white mb-6">
            Scientific Growth &amp; <br className="hidden sm:inline" />
            High-Converting Campaigns
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-natural-300 font-sans max-w-3xl mx-auto leading-relaxed mb-10 font-light drop-shadow-md">
            Under the leadership of Prasad (Head of Digital Marketing) and Praharsha (Strategy Maker), we architect high-intent Google Ads, Meta SMM campaigns, enterprise B2B PPC, and SEO engines delivering verified high-ROI revenue.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="800"
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection('advertising-process')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,168,89,0.35)] hover:shadow-[0_15px_40px_rgba(0,230,118,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore 5-Step Engine</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={() => scrollToSection('advertising-showcase')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white font-sans font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 text-[#00e676]" />
            <span>Watch Ads Showcase</span>
          </button>
        </div>
      </div>
    </section>
  );
}

