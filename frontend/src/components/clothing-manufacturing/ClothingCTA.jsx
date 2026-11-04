'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, CLOTHING_MANUFACTURING_ASSETS } from '@/constant';
import { useAutoplayVideo } from '@/hooks';

export default function ClothingCTA() {
  const { videoRef, isVideoLoaded, setIsVideoLoaded } = useAutoplayVideo();
  const phone = SITE_CONFIG?.contactPhone || '+91 8686819898';

  return (
    <section
      id="clothing-cta"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black text-white py-24 sm:py-32"
      aria-label="Start Your Clothing Manufacturing Project"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-black">
        <video
          ref={videoRef}
          src={CLOTHING_MANUFACTURING_ASSETS.ctaVideo?.src || CLOTHING_MANUFACTURING_ASSETS.heroVideo.src}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[1.5] contrast-[1.2] saturate-[1.1] transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={CLOTHING_MANUFACTURING_ASSETS.ctaVideo?.src || CLOTHING_MANUFACTURING_ASSETS.heroVideo.src} type="video/mp4" />
          {CLOTHING_MANUFACTURING_ASSETS.ctaVideo?.fallbackSrc && (
            <source src={CLOTHING_MANUFACTURING_ASSETS.ctaVideo.fallbackSrc} type="video/mp4" />
          )}
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80 pointer-events-none z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] bg-[#00a859]/15 blur-[160px] rounded-full pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 text-center w-full">
        <h2
          data-aos="fade-down"
          data-aos-duration="900"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-sans font-black tracking-tight uppercase text-white leading-[1.08] mb-6 max-w-5xl mx-auto drop-shadow-xl"
        >
          Ready To Produce Your Next <br />
          <span className="text-[#00e676]">Zero-Discharge</span> Apparel Collection?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="text-neutral-200 font-sans text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md font-light"
        >
          Connect directly with Praharsha (Director &amp; Strategy Maker) and our Tirupur textile production engineers to discuss fabric sourcing, sampling timelines, and custom factory production runs.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/book-consultation"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,168,89,0.4)] hover:shadow-[0_15px_40px_rgba(0,230,118,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Production Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-sans font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-300 hover:border-white/35 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
          >
            <Phone className="w-4 h-4 text-[#00e676]" />
            <span>Call Tirupur Desk: {phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

