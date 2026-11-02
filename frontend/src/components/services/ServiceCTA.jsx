'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <section className="service-cta-section py-24 sm:py-32 bg-gradient-to-b from-[#0c0c0c] to-[#050505] text-white relative overflow-hidden" aria-label="Start a Project">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a859]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-[#00a859] font-mono text-xs uppercase tracking-widest font-bold mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let's Build Together</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-white leading-tight mb-6">
          Ready to Elevate Your Brand Beyond the Expected?
        </h2>

        <p className="text-[#999999] text-base sm:text-lg max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Whether you need a full digital marketing engine, cinematic campaign production, or ethical circular apparel manufacturing, Strains Group is ready to deliver.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00a859] hover:bg-[#00c266] text-black font-sans font-bold text-base px-10 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,168,89,0.35)]"
            id="service-cta-contact-btn"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about-strains-group"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
