'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Check,
  ArrowRight,
  Sparkles,
  Rocket,
  Shield,
  Layers,
  HeartHandshake,
} from 'lucide-react';

const TIERS = [
  {
    level: 'TIER 01',
    name: 'The Brand Incubator',
    badge: 'FOR EMERGING LABELS',
    focus: 'From Zero to High-Fashion Launch',
    desc: 'You have a bold concept for a sustainable fashion brand or modern consumer line. We formulate your identity in Hyderabad, weave and stitch your first apparel collection in Tirupur, shoot your lookbook on cinema cameras, and launch your e-commerce store.',
    timeline: '6 to 8 Weeks Turnaround',
    deliverables: [
      'Full Brand Bible: Typography, Palette, Tone & Packaging',
      'Custom Apparel Collection Sewn in Tirupur (Low-MOQ)',
      'Hemp, Organic Cotton or Vegan Silk Formulations',
      'Cinematic Commercial Reel & Fashion Lookbook by Danny & Pavan',
      'Conversion-Optimized E-Commerce Store Architecture',
    ],
    featured: false,
  },
  {
    level: 'TIER 02',
    name: 'The Enterprise Growth Engine',
    badge: 'MOST DEPLOYED',
    focus: 'For Industrial Leaders & Multi-Location Brands',
    desc: 'For established giants like JSW Cement, Pioneer Cranes, and Partha Dentals. We take over high-stakes performance advertising, shoot broadcast-grade industrial and corporate video reels, and manufacture enterprise-scale sustainable corporate apparel.',
    timeline: 'Ongoing / Dedicated Team',
    deliverables: [
      'High-CTR Google Ads & PPC Performance Tuning (Targeting ₹13.01 Avg CPC)',
      'Cinema-Grade Corporate & Drone Brand Films',
      'High-Volume Zero-Discharge Uniforms & Corporate Garments in Tirupur',
      'Daily Conversion Tracking, Attribution & Analytics Dashboards',
      'Dedicated Line Producer (Praharsha) & Account Director',
    ],
    featured: true,
  },
  {
    level: 'TIER 03',
    name: 'The Sovereign Retainer',
    badge: 'COMPLETE CLOSED-LOOP',
    focus: 'Full Multi-Vertical Custody',
    desc: 'Acting as your internal creative atelier, video production house, and dedicated garment manufacturing partner. Continuous quarterly film releases, continuous digital advertising optimization, and continuous agile textile production runs.',
    timeline: 'Annual Retainer Partnership',
    deliverables: [
      'Quarterly Cinematic TV Commercials & Ongoing Social Video Reels',
      'On-Demand Agile Textile Batching & Private Label Manufacturing',
      'Always-On Multi-Platform Digital Growth & Search Ranking Strategy',
      'Plastic-Free Packaging Audits & Plantable Seed Tag Integration',
      'Direct Weekly Creative War-Room Sessions with Core Leadership',
    ],
    featured: false,
  },
];

export default function EcosystemIntegrationTiers() {
  return (
    <section className="integration-tiers-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10" id="tiers">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header with AOS Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Choose Your <span className="text-gradient-shimmer">Integration Path</span>
          </h2>
          <p className="text-[#888] font-mono text-xs sm:text-sm mt-4 leading-relaxed">
            No bloated agency contracts or mystery middleman fees. Transparent deliverables, predictable timelines, and direct cell phone access to our lead directors.
          </p>
        </motion.div>

        {/* 3-Card Collaboration Tiers Grid with AOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative ${
                tier.featured
                  ? 'bg-[#151515] border-2 border-[#00a859] shadow-[0_20px_60px_rgba(0,168,89,0.2)] lg:-translate-y-3'
                  : 'bg-[#111111] border border-white/10 hover:border-white/25 hover:bg-[#141414]'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00a859] text-black font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                  Most Chosen Model
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#00a859]">
                    {tier.level}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#aaa]">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-sans text-2xl font-extrabold text-white mb-1">
                  {tier.name}
                </h3>
                <span className="font-mono text-xs text-[#00a859] block mb-3 font-semibold">
                  {tier.focus}
                </span>

                <div className="p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs text-[#00a859] mb-6">
                  &bull; Timeline: {tier.timeline}
                </div>

                <p className="font-mono text-xs sm:text-sm text-[#999] leading-relaxed mb-8">
                  {tier.desc}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-3 font-mono text-xs text-[#ddd] mb-8">
                  {tier.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#00a859]/20 flex items-center justify-center text-[#00a859] flex-shrink-0 mt-0.5">
                        <Check size={11} />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <Link
                  href="/contact"
                  className="pill-button w-full justify-center text-xs"
                  style={
                    tier.featured
                      ? { backgroundColor: '#00a859', borderColor: '#00a859', color: '#000', fontWeight: '800' }
                      : {}
                  }
                >
                  <span>START WITH {tier.name.toUpperCase()}</span>
                  <ArrowRight size={14} style={{ marginLeft: '8px' }} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
