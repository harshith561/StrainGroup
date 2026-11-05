'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  'Video Production',
  'Advertising & Marketing',
  'Clothing Manufacturing',
  'Sustainable Fashion',
];

export default function PortfolioIntro() {
  return (
    <section
      id="portfolio-intro"
      className="relative w-full bg-[#0c0c0c] text-white border-b border-white/10 py-16 sm:py-24 lg:py-32 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column (~25% width / 3-4 cols): Label "RECENT WORK" with Green Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 xl:col-span-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold">
                <span className="text-white">RECENT WORK</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column (~75% width / 8-9 cols) */}
          <div className="lg:col-span-9 xl:col-span-9">

            {/* Row 1: Statement Headline with Green & White Typography */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-sans font-bold text-white tracking-tight leading-[1.12] mb-10 sm:mb-14 lg:mb-16 max-w-4xl"
            >
              Creative works with our <span className="text-[#00a859]">incredible people.</span>
            </motion.h2>

            {/* Row 2: Sub-Split (50/50 Nested Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 pt-6 sm:pt-8 border-t border-white/10">

              {/* Left Sub-Col: Real Strains Services List with Green '+' Accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col space-y-3 sm:space-y-4"
              >
                {SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className="group inline-flex items-center text-lg sm:text-xl md:text-2xl font-sans font-medium text-white hover:text-[#00a859] hover:translate-x-1 transition-all duration-300 cursor-default"
                  >
                    <span className="text-[#00a859] mr-3 font-bold select-none">+</span>
                    <span className="tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Right Sub-Col: Brief Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-sans leading-relaxed">
                  Strains Associates unites cinematic video production, performance advertising, zero-discharge Tirupur garment manufacturing, and sustainable fashion incubation. We partner with visionary industrial leaders, enterprise manufacturers, and creative labels to engineer enduring brand value.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
