'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: 'Commercial Film & Media',
    quote: 'People do not buy goods and services. They buy relations, stories, and magic.',
    author: 'Seth Godin',
    note: 'We script, film, and direct cinematic commercial films in 4K/8K that capture the authentic human craft behind what you build — giving clients real reasons to trust your brand.',
    image: '/images/ecosystem/synergy-camera-cinematography.jpg',
    imageAlt: 'Cinema camera and lighting set on commercial video production stage',
    href: '/strains-associates/videography',
    btnLabel: 'Explore Video Production',
  },
  {
    id: 2,
    tag: 'Ethical Manufacturing',
    quote: 'Quality is never an accident. It is always the result of intelligent effort and sincere craft.',
    author: 'John Ruskin',
    note: 'Real trust starts behind the scenes. In our Tirupur facility, we craft custom garments using 100% certified organic cotton, pure hemp, and natural botanical dyes with zero effluent discharge.',
    image: '/images/ecosystem/material-organic-cotton.jpg',
    imageAlt: 'Natural organic cotton and sustainable textile craftsmanship',
    href: '/strains-stitchery/clothing-manufacturing',
    btnLabel: 'Explore Garment Manufacturing',
  },
  {
    id: 3,
    tag: 'Brand & Digital Growth',
    quote: 'A brand is no longer what we tell the consumer it is — it is what consumers tell each other it is.',
    author: 'Scott Cook',
    note: 'No vanity metrics or empty promises. We build enduring visual identities and scientific ad campaigns grounded in verified revenue, high search intent, and long-term customer relationships.',
    image: '/images/ecosystem/hero-creative.jpg',
    imageAlt: 'Creative design atelier and strategic brand workspace',
    href: '/strains-associates/digital-marketing',
    btnLabel: 'Explore Strategy & Marketing',
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide for auto-scroll

export default function ServiceHero() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [current]);

  const active = SLIDES[current];

  return (
    <section
      className="service-hero-fullscreen relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808] text-white pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-white/10"
      id="service-hero"
      aria-label="Services Hero Carousel"
    >
      {/* Full-bleed text-related background image with cinematic slow zoom & crossfade */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image
            src={active.image}
            alt={active.imageAlt}
            fill
            priority
            className="object-cover object-center filter brightness-[2] contrast-[1.12]"
            sizes="100vw"
          />
          {/* Layered cinematic gradient overlay: deep solid contrast for text on left, translucent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 via-55% to-[#080808]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/60" />
          <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        </motion.div>
      </AnimatePresence>

      {/* Ambient Radial Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#00a859]/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-[400px] h-[400px] bg-[#00e676]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-matrix opacity-20 pointer-events-none" />

      {/* Main Full-Screen Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10 flex-1 flex flex-col justify-center py-8 sm:py-12">


        {/* The Heading inside the Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-sans font-extrabold text-white tracking-tight leading-[1.05]">
            Our Services &amp; <span className="text-gradient-expertise">Expertise</span>
          </h1>
        </motion.div>

        {/* Slide-Specific Quotation & Trust Narrative */}
        <div className="max-w-2xl sm:max-w-3xl min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Active Discipline Pill */}
              <div className="inline-block px-3 py-1 rounded-md bg-[#00a859]/15 border border-[#00a859]/30 text-xs font-mono font-semibold text-[#00e676] tracking-wide mb-3">
                {active.tag}
              </div>

              {/* Quotation */}
              <div className="mb-4">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-white leading-snug tracking-tight drop-shadow-md">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2 mt-2.5">
                  <span className="w-5 h-[2px] bg-[#00a859]" />
                  <span className="text-xs sm:text-sm font-mono text-[#00e676] font-semibold tracking-wide">
                    {active.author}
                  </span>
                </div>
              </div>

              {/* Trust Note */}
              <p className="text-sm sm:text-base font-sans text-neutral-300 leading-relaxed mb-6 max-w-2xl drop-shadow-sm">
                {active.note}
              </p>

              {/* Action Button */}
              <div>
                <Link
                  href={active.href}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#00a859] hover:bg-[#00c266] text-black font-sans font-bold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(0,168,89,0.45)] active:scale-95"
                >
                  <span>{active.btnLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
