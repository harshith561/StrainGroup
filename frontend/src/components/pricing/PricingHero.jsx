'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PricingHero({ billingCycle, setBillingCycle }) {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 px-6 sm:px-10 lg:px-16 bg-[#0c0c0c] text-white overflow-hidden border-b border-white/10">
      {/* Background ambient radial gradients */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00a859]/15 blur-[120px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-[-100px] w-[500px] h-[300px] bg-[#00a859]/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-sans font-extrabold tracking-tight leading-[1.12] text-white mb-6 max-w-4xl"
        >
          Simple, flexible plans for <span className="text-[#00a859]">extraordinary outcomes.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-[#b5b5b5] max-w-2xl font-sans leading-relaxed mb-10"
        >
          Select an integrated partnership tier or modular services across cinematic video production, performance marketing, and zero-discharge apparel manufacturing.
        </motion.p>

        {/* Retainer vs Project Basis Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center p-1.5 rounded-full bg-[#161616] border border-white/10 shadow-inner"
          role="group"
          aria-label="Billing cycle selector"
        >
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 ${
              billingCycle === 'monthly'
                ? 'bg-[#00a859] text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            MONTHLY RETAINER
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('project')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              billingCycle === 'project'
                ? 'bg-[#00a859] text-black font-bold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>PROJECT / SPRINT</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-mono uppercase">
              Milestone
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

