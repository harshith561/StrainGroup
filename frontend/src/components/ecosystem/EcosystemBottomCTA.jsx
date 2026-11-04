'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Layers,
  MessageCircle,
} from 'lucide-react';

const TEAM_AVATARS = [
  { name: 'Praharsha', role: 'Strategy & Line Producer', img: '/images/ecosystem/team-praharsha.jpg' },
  { name: 'Danny', role: 'Head of Direction', img: '/images/ecosystem/team-danny.jpg' },
  { name: 'Pavan', role: 'Head of Cinematography', img: '/images/ecosystem/team-pavan.jpg' },
  { name: 'Prasad', role: 'Head of Digital Growth', img: '/images/ecosystem/team-prasad.jpg' },
];

export default function EcosystemBottomCTA() {
  return (
    <section className="ecosystem-cta-section relative bg-[#080808] text-white py-24 sm:py-32 overflow-hidden" id="ecosystem-cta">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#00a859]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-white/10 bg-[#121212]/90 backdrop-blur-2xl p-8 sm:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Top Subtle Beam Line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#00a859] to-transparent" />

          {/* Human Team Face Stack */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center -space-x-3 mb-3">
              {TEAM_AVATARS.map((member, i) => (
                <div
                  key={member.name}
                  className="w-12 h-12 rounded-full border-2 border-[#121212] overflow-hidden bg-neutral-800 relative shadow-md"
                  title={`${member.name} — ${member.role}`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8c8c8c]">
              <span className="w-2 h-2 rounded-full bg-[#00a859] animate-pulse" />
              <span>Praharsha, Danny, Pavan & Prasad &mdash; Live in Hyderabad Studio</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
            Let’s Build Something <br />
            <span className="text-gradient-shimmer">Unmistakably Real.</span>
          </h2>

          <p className="text-[#aaa] font-mono text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you want to launch an organic hemp fashion collection in Tirupur or run high-conversion cinema commercials for an enterprise infrastructure giant, we are ready to build with you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="pill-button"
              style={{ backgroundColor: '#00a859', borderColor: '#00a859', color: '#000', fontSize: '13px', padding: '14px 34px', fontWeight: '800' }}
            >
              <Calendar size={15} style={{ marginRight: '8px' }} />
              <span>BOOK A DIRECT STRATEGY SESSION</span>
            </Link>

            <Link
              href="/case-studies"
              className="pill-button"
              style={{ fontSize: '13px', padding: '14px 30px' }}
            >
              <span>BROWSE CLIENT CASE STUDIES</span>
              <ArrowRight size={15} style={{ marginLeft: '8px' }} />
            </Link>
          </div>

          {/* Human Contact Channels */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 font-mono text-xs text-[#888]">
            <a
              href="tel:+918686819898"
              className="flex items-center gap-2 text-white/90 hover:text-[#00a859] transition-colors"
            >
              <Phone size={14} className="text-[#00a859]" />
              <span>Call Us Direct: +91 8686819898</span>
            </a>

            <span className="hidden sm:inline text-white/20">&bull;</span>

            <a
              href="mailto:hello@strainsassociates.com"
              className="flex items-center gap-2 text-white/90 hover:text-[#00a859] transition-colors"
            >
              <Mail size={14} className="text-[#00a859]" />
              <span>hello@strainsassociates.com</span>
            </a>

            <span className="hidden sm:inline text-white/20">&bull;</span>

            <span className="text-[#777]">
              Headquarters: Vengalrao Nagar, Hyderabad
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
