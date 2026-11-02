'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceHero() {
  return (
    <section className="service-hero-section relative bg-[#0c0c0c] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Ambient Background Circles & Glows */}
      <div className="absolute top-[8%] left-[6%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#143221] opacity-90 blur-sm pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00a859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="service-hero-container max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-20 lg:py-28 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Typography & CTA ================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-20">
            {/* Main Title with modern blur fade-up */}
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="service-hero-headline font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              Creative <span className="text-gradient-shimmer">Digital Marketing</span>
              <br />
              & Production Excellence
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="service-hero-desc text-[#9a9a9a] text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-sans"
            >
              Pioneering organic marketing strategies, cinematic video direction, and ethical garment manufacturing from Tirupur — delivering tailored brand strategies, end-to-end production, and measurable business growth.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="service-hero-btn inline-flex items-center justify-center bg-[#00a859] hover:bg-[#00c266] text-[#000000] font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,168,89,0.35)] active:translate-y-0"
                id="service-hero-contact-btn"
              >
                Contact us
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Hero Portrait & Floating Graphics ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center"
          >
            
            {/* Visual Canvas Container */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/5] flex items-end justify-center">

              {/* 1. Large Warm Bronze/Gold Circle Backdrop (Behind head & right shoulder) */}
              {/* 1. Subtle Ambient Warm Glow */}
              <div 
                className="absolute top-[14%] right-[4%] w-[260px] sm:w-[300px] h-[260px] sm:h-[300px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 171, 54, 0.15) 0%, transparent 70%)',
                }}
              />

              {/* 2. Small Dark Blue Dot (Upper center) */}
              <div className="absolute top-[12%] left-[42%] w-3 h-3 rounded-full bg-[#3d5af1] opacity-80 animate-float-slow pointer-events-none z-10" />

              {/* 3. Google "G" Floating Logo (Mid-Left of person) */}
              <div className="absolute top-[32%] left-[6%] sm:left-[8%] z-20 animate-float-1 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <svg viewBox="0 0 24 24" width="32" height="32" className="w-8 h-8 sm:w-9 sm:h-9">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.36 7.31 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>

              {/* 4. Facebook "f" Floating Logo (Lower-Left) */}
              <div className="absolute bottom-[24%] left-[4%] sm:left-[6%] z-20 animate-float-2 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="#1877F2" className="w-7 h-7 sm:w-8 sm:h-8">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              {/* 5. Slack Floating Logo (Right side) */}
              <div className="absolute top-[38%] -right-[2%] sm:right-[1%] z-20 animate-float-3 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <svg viewBox="0 0 24 24" width="32" height="32" className="w-8 h-8 sm:w-9 sm:h-9">
                  <path fill="#E01E5A" d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 2 2v-5a2 2 0 0 1-2 2z"/>
                  <path fill="#36C5F0" d="M9 6a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 1 1-2 2h5a2 2 0 0 1-2-2z"/>
                  <path fill="#2EB67D" d="M18 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-2-2v5a2 2 0 0 1 2-2z"/>
                  <path fill="#ECB22E" d="M15 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 2-2h-5a2 2 0 0 1 2 2z"/>
                </svg>
              </div>

              {/* 6. Floating 3D Geometric Shapes */}
              {/* Orange Tilted Diamond (Top Right) */}
              <div 
                className="absolute top-[16%] right-[8%] w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#ff9a3d] to-[#ff5722] rounded-[3px] transform rotate-[32deg] animate-float-2 z-20 shadow-[0_4px_12px_rgba(255,87,34,0.4)] pointer-events-none" 
              />

              {/* Cyan / Blue Rhombus (Mid Left) */}
              <div 
                className="absolute top-[58%] left-[2%] w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#60a5fa] to-[#2563eb] rounded-[3px] transform rotate-[45deg] animate-float-3 z-20 shadow-[0_4px_12px_rgba(37,99,235,0.4)] pointer-events-none" 
              />

              {/* Purple Cube (Bottom Right) */}
              <div 
                className="absolute bottom-[16%] right-[2%] w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#c084fc] to-[#7c3aed] rounded-[3px] transform rotate-[18deg] animate-float-1 z-20 shadow-[0_4px_12px_rgba(124,58,237,0.4)] pointer-events-none" 
              />

              {/* 7. Professional Hero Vector Image */}
              <div className="relative w-full h-full flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/hero_image.svg"
                  alt="Creative Digital Marketing Professional - Strains Group"
                  width={444}
                  height={652}
                  priority
                  unoptimized
                  className="w-full h-auto max-h-[580px] lg:max-h-[640px] object-contain select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
                />
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
