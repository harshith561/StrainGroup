
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function PortfolioHero() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => { });
      });
    }
  }, []);

  const scrollToRecentWork = () => {
    const el = document.getElementById('portfolio-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[78vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#080808] text-white border-b border-white/10 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-[#080808]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover brightness-[0.75] contrast-[1.1] transition-opacity duration-1000 ease-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          poster="/images/case-studies/haraa-jewellers.jpg"
        >
          <source src="/videos/portfolio-hero-bg.mp4" type="video/mp4" />
          <source src="/videos/about-hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-[#080808]/20 to-[#0c0c0c]/80 z-[1]" />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />

        {/* Green Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00a859]/10 blur-[160px] pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col items-center justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center items-center my-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5vw] xl:text-[10.5rem] 2xl:text-[12rem] font-sans font-black uppercase leading-none select-none text-center m-0 p-0 drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)] tracking-[-0.015em]">
            <span className="text-white">PORT</span>
            <span className="text-[#00a859]">FOLIO</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex flex-col items-center"
        >
          <button
            type="button"
            onClick={scrollToRecentWork}
            className="group inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer focus:outline-none"
            aria-label="Scroll to recent work section"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase font-semibold text-neutral-400 group-hover:text-white transition-colors">
              EXPLORE <span className="text-[#00a859]">WORK</span>
            </span>

            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#00a859] group-hover:bg-[#00a859]/10 transition-all duration-300">
              <ArrowDown size={14} className="text-[#00a859] animate-bounce" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
