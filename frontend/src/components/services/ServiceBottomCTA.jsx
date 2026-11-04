'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceBottomCTA() {
  return (
    <section className="service-bottom-cta-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 overflow-hidden" aria-label="Contact Creative Digital Marketing Agency">

      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00a859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN: Typography & Action Row with Modern AOS Animations ================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-20">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px] font-sans font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              Have a project
              <br />
              in your <span className="text-gradient-shimmer">mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#9a9a9a] text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-sans"
            >
              Let’s grow sustainably together with Strains Associates. Whether scaling your brand through performance digital marketing, end-to-end video production, or ethical Tirupur garment manufacturing — connect directly with our leadership team today.
            </motion.p>

            {/* Action Row: Contact Button + "Or" + Phone Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#00a859] hover:bg-[#00c266] text-[#000000] font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,168,89,0.35)] active:translate-y-0"
                id="bottom-cta-contact-btn"
              >
                Contact us
              </Link>

              <span className="text-sm font-sans text-[#888888] font-medium">Or</span>

              <a
                href="tel:+918686819898"
                className="inline-flex items-center gap-2.5 text-white hover:text-[#00a859] transition-colors font-sans font-bold text-base group"
                aria-label="Call Strains Associates directly"
              >
                <div className="w-8 h-8 rounded-full bg-[#00a859]/15 flex items-center justify-center group-hover:bg-[#00a859] transition-colors">
                  <Phone className="w-4 h-4 text-[#00a859] group-hover:text-black transition-colors" />
                </div>
                <span>+91 8686819898</span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: Striped Shirt Man Pointing Left ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual Canvas Container */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/5] flex items-end justify-center">

              {/* 1. Dark Maroon/Wine Circle Backdrop (Behind head & right shoulder) */}
              <div
                className="absolute top-[16%] right-[8%] w-[200px] sm:w-[230px] h-[200px] sm:h-[230px] rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at 45% 45%, #421c25 0%, #280e15 100%)',
                }}
              />

              {/* 2. Dark Rounded Capsule (Bottom Left behind arm) */}
              <div
                className="absolute bottom-[10%] left-[8%] w-[120px] sm:w-[140px] h-[75px] rounded-[24px] pointer-events-none z-0"
                style={{
                  background: '#19202a',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              />

              {/* 3. Floating Orange Diamond (Mid Left) */}
              <div
                className="absolute top-[42%] left-[4%] w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#ff9a3d] to-[#ff5722] rounded-[3px] transform rotate-[32deg] animate-float-1 z-20 shadow-[0_4px_12px_rgba(255,87,34,0.4)] pointer-events-none"
              />

              {/* 4. Floating Purple Cube (Top Right) */}
              <div
                className="absolute top-[10%] right-[4%] w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#c084fc] to-[#7c3aed] rounded-[3px] transform rotate-[18deg] animate-float-2 z-20 shadow-[0_4px_12px_rgba(124,58,237,0.4)] pointer-events-none"
              />

              {/* 5. Portrait of Man in Striped T-Shirt Pointing Left */}
              <div className="relative w-full h-full flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/contact_image_service.png"
                  alt="Creative Agency Consultant Pointing Left"
                  width={395}
                  height={399}
                  sizes="(max-width: 768px) 100vw, 395px"
                  loading="lazy"
                  className="w-full h-auto max-h-[500px] lg:max-h-[560px] object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                />
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
