'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceWhyChoose() {
  return (
    <section className="service-why-choose-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden" aria-label="Why should you choose Strains">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Visual Composition with Pointing Portrait ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Visual Canvas */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[4/5] flex items-end justify-center">

              {/* 1. Warm Bronze/Brown Rounded Rectangle Backdrop */}
              <div 
                className="absolute top-[16%] left-[10%] w-[78%] h-[74%] rounded-[48px] pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(145deg, #443118 0%, #2f2110 100%)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
                }}
              />

              {/* 2. Floating Cyan Diamond (Top Left) */}
              <div 
                className="absolute top-[8%] left-[4%] w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-[#67e8f9] to-[#06b6d4] rounded-[4px] transform rotate-45 animate-float-1 z-20 shadow-[0_6px_16px_rgba(6,182,212,0.4)] pointer-events-none" 
              />

              {/* 3. Floating Orange Diamond (Top Center) */}
              <div 
                className="absolute top-[4%] left-[48%] w-3.5 h-3.5 bg-gradient-to-br from-[#fb923c] to-[#ea580c] rounded-[2px] transform rotate-[25deg] animate-float-2 z-20 shadow-[0_4px_12px_rgba(234,88,12,0.4)] pointer-events-none" 
              />

              {/* 4. Floating Small Orange Square (Mid Right) */}
              <div 
                className="absolute top-[52%] right-[4%] w-3 h-3 bg-gradient-to-br from-[#f97316] to-[#c2410c] rounded-[2px] transform rotate-12 animate-float-3 z-20 pointer-events-none" 
              />

              {/* 5. Floating "Our Customers" Badge (Top Right) */}
              <div className="absolute top-[18%] right-0 sm:-right-4 z-20 animate-float-slow">
                <div className="bg-[#181818]/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col gap-1.5">
                  <span className="text-[11px] font-sans text-[#a0a0a0] font-medium">Our Customers</span>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Customer" />
                      <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Customer" />
                      <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Customer" />
                      <img className="w-6 h-6 rounded-full border border-black object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Customer" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#f97316]">+25K</span>
                  </div>
                </div>
              </div>

              {/* 6. Floating "Revenue" Card (Bottom Left) */}
              <div className="absolute bottom-[14%] left-0 sm:-left-4 z-20 animate-float-1">
                <div className="bg-white text-black rounded-2xl p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] w-[210px] sm:w-[230px] font-sans">
                  {/* Optimization & Performance Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-800">Optimization Score</span>
                    <span className="text-xs font-bold text-[#16a34a] flex items-center gap-0.5">
                      ↑ 90.8%
                    </span>
                  </div>
                  {/* Performance Rows */}
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full border-2 border-[#9333ea]" />
                        <span className="font-bold text-[#9333ea]">4.64% CTR</span>
                      </div>
                      <span className="text-gray-400 text-[10px]">Aastu Refrigeration</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full border-2 border-[#ec4899]" />
                        <span className="font-bold text-[#ec4899]">₹13.01 CPC</span>
                      </div>
                      <span className="text-gray-400 text-[10px]">Pioneer Cranes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Foreground Portrait of Man Pointing Right */}
              <div className="relative w-full h-full flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/images/why_you_choose_service.svg"
                  alt="Why Choose Strains - Creative Professional"
                  width={395}
                  height={621}
                  unoptimized
                  className="w-full h-auto max-h-[580px] lg:max-h-[620px] object-contain select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                />
              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT COLUMN: Typography & CTA with AOS Text Animation ================= */}
          <div className="lg:col-span-6 flex flex-col items-start z-20 lg:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-sans font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Why should you
              <br />
              choose <span className="text-gradient-shimmer">Strains</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#9a9a9a] text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-sans"
            >
              Strains Associates provides creative, branding, digital marketing, video production and sustainable fashion solutions. With creative direction in Hyderabad, Telangana and eco-friendly garment manufacturing in Tirupur, Tamil Nadu, our specialized leadership team—Praharsha (Strategy & Line Producer), Pavan (Head of Photography & Videography), Danny (Head of Direction & Post-production), and Prasad (Head of Digital Marketing)—delivers proven ROI and creative excellence under one roof.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#00a859] hover:bg-[#00c266] text-[#000000] font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,168,89,0.35)] active:translate-y-0"
                id="why-choose-contact-btn"
              >
                Contact us
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
