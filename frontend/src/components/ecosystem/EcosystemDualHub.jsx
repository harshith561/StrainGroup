'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Building2,
  Factory,
  Radio,
  Users,
  Film,
  Scissors,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';

export default function EcosystemDualHub() {
  return (
    <section className="dual-hub-section relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10" id="hubs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

        {/* Section Header with AOS Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase leading-tight">
            Hyderabad Brain. <br />
            <span className="text-gradient-shimmer">Tirupur Muscle.</span>
          </h2>
          <p className="text-[#888] font-mono text-xs sm:text-sm leading-relaxed mt-4">
            We don’t believe in remote ghost agencies with no physical roots. Our team meets you face-to-face in our Hyderabad creative studio, while our own master tailors stitch your garments in Tirupur.
          </p>
        </motion.div>

        {/* 2-Column Physical Hubs with Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">

          {/* Hub Alpha: Hyderabad */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="dual-hub-card rounded-3xl border border-white/10 bg-[#121212] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-[#00a859]/50 transition-all duration-500"
          >
            {/* Top Photo Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black media-placeholder">
              <img
                src="/images/ecosystem/hub-hyderabad.jpg"
                alt="Hyderabad Studio"
                width={800}
                height={534}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                onLoad={(e) => {
                  e.currentTarget.parentElement?.classList.remove('media-placeholder');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">

                <span className="font-mono text-xs text-white/80 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  HYDERABAD
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-mono text-xs text-[#00a859] block mb-1">
                  Corporate Headquarters
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  Hyderabad Creative Studio
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs text-[#777] mb-4">
                  Registered Address: Vengalrao Nagar, Hyderabad, Telangana, India
                </p>

                <p className="font-mono text-xs sm:text-sm text-[#aaa] leading-relaxed mb-6">
                  Where Praharsha, Danny, Pavan, and Prasad engineer complete brand transformations. Housing our commercial film post-production suites, DaVinci Resolve color suites, sound design bays, and Google Ads PPC war room.
                </p>

                {/* Team Roster */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] block text-[10px] font-bold">Strategy & Line Producer</span>
                    <strong className="text-white text-xs">Praharsha Govindu</strong>
                  </div>
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] block text-[10px] font-bold">Direction & Post-Production</span>
                    <strong className="text-white text-xs">Danny Cooper</strong>
                  </div>
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] block text-[10px] font-bold">Head of Cinematography</span>
                    <strong className="text-white text-xs">Pavan Kumar</strong>
                  </div>
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[#00a859] block text-[10px] font-bold">Head of Digital Marketing</span>
                    <strong className="text-white text-xs">Prasad Varma</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#888]">
                <span>Entity: Strains Fashions Pvt Ltd</span>
              </div>
            </div>
          </motion.div>

          {/* Hub Beta: Tirupur */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="dual-hub-card rounded-3xl border border-white/10 bg-[#121212] overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-[#00a859]/50 transition-all duration-500"
          >
            {/* Top Photo Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black media-placeholder">
              <img
                src="/images/ecosystem/hub-tirupur.jpg"
                alt="Tirupur Stitchery Hub"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                onLoad={(e) => {
                  e.currentTarget.parentElement?.classList.remove('media-placeholder');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-xs text-white/80 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  TIRUPUR
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-mono text-xs text-[#00a859] block mb-1">
                  Textile Capital of India
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
                  Strains Stitchery Factory
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs text-[#777] mb-4">
                  Industrial Facility: Tirupur, Tamil Nadu, India
                </p>

                <p className="font-mono text-xs sm:text-sm text-[#aaa] leading-relaxed mb-6">
                  Our heavy manufacturing powerhouse. Over 100 master tailors, pattern masters, and finishing craftsmen operating automated cutting tables, precision flatlock machines, and closed-loop botanical dyeing vats with zero chemical effluent.
                </p>

                {/* Capability Badges */}
                <div className="space-y-2.5 font-mono text-xs mb-6">
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-white">
                    <CheckCircle2 size={15} className="text-[#00a859] flex-shrink-0" />
                    <span>Hemp, Organic Cotton & Vegan Leather Custom Cutting</span>
                  </div>
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-white">
                    <CheckCircle2 size={15} className="text-[#00a859] flex-shrink-0" />
                    <span>Natural Fruit/Flower Dyeing with Recycled Water Tanks</span>
                  </div>
                  <div className="dual-hub-team-tile p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-white">
                    <CheckCircle2 size={15} className="text-[#00a859] flex-shrink-0" />
                    <span>Plastic-Free Recycled Packaging & Plantable Seed Tags</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#888]">
                <span>Capacity: Low-MOQ & Large Enterprise</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
