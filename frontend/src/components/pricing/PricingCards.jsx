'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const TIERS = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    badge: 'STARTER SPRINT',
    monthlyPrice: '$2,450',
    projectPrice: '$4,500',
    periodMonthly: '/ month',
    periodProject: 'one-time milestone',
    description:
      'Ideal for emerging brands, product launches, or a focused high-impact creative & advertising sprint.',
    highlight: false,
    features: [
      '1 Cinematic 4K Commercial Reel + 3 Social Cutdowns',
      'Brand Visual Styleguide & High-Res Asset Pack',
      'Paid Ad Campaign Setup & Launch (Meta & Google)',
      'Audience Persona Modeling & Ad Copy Variations',
      'Bi-weekly Performance Analytics & Review',
      'Standard Email & Portal Support (24h response)',
    ],
  },
  {
    id: 'scale',
    name: 'Growth & Scale',
    badge: 'MOST POPULAR',
    monthlyPrice: '$5,800',
    projectPrice: '$9,800',
    periodMonthly: '/ month',
    periodProject: 'one-time milestone',
    description:
      'Engineered for ambitious brands scaling customer acquisition and regular high-fidelity creative output.',
    highlight: true,
    features: [
      'Continuous Monthly Cinematic Video & Lookbook Shoots',
      'Full-Funnel Performance Marketing (Meta, Google, YouTube)',
      'Tirupur Apparel Prototyping & Sampling Coordination',
      'E-Commerce CRO & High-Converting Landing Pages',
      'Dedicated Creative Director & Senior Media Buyer',
      'Weekly Agile Sprint Strategy & Live KPI Dashboards',
      'Dedicated Private Slack / WhatsApp Channel',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Ecosystem',
    badge: 'FULL ECOSYSTEM',
    monthlyPrice: 'Custom',
    projectPrice: 'Bespoke',
    periodMonthly: 'starting at $12,000 / mo',
    periodProject: 'tailored enterprise scope',
    description:
      'Turnkey creative, performance marketing, and zero-discharge manufacturing ecosystem for industry leaders.',
    highlight: false,
    features: [
      'Complete Brand Incubation & Global Distribution Roadmap',
      'Zero-Discharge Mass Garment Manufacturing (Strains Stitchery)',
      'Multi-Format Heavy Sector B2B & Luxury B2C Media Production',
      'Headless Storefront Engineering & Custom Systems Integration',
      'Dedicated Multi-Disciplinary Pod (Creative, Media, Production)',
      'Guaranteed SLAs, Executive Advisory & Board-Level Reporting',
      '24/7 Dedicated Account Executive & Priority Escalation',
    ],
  },
];

export default function PricingCards({
  billingCycle,
  selectedPlan,
  onSelectPlan,
}) {
  return (
    <section className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#0c0c0c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, index) => {
            const isSelected = selectedPlan === tier.id;
            const price =
              billingCycle === 'monthly' ? tier.monthlyPrice : tier.projectPrice;
            const period =
              billingCycle === 'monthly' ? tier.periodMonthly : tier.periodProject;

            const contactUrl = `/contact?plan=${encodeURIComponent(
              tier.name
            )}&cycle=${billingCycle}`;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => onSelectPlan(isSelected ? null : tier.id)}
                className={`relative flex flex-col justify-between rounded-2xl p-8 sm:p-10 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#141d17] border-2 border-[#00a859] shadow-[0_0_40px_rgba(0,168,89,0.25)] scale-[1.02]'
                    : tier.highlight
                    ? 'bg-[#151515] border border-[#00a859]/50 hover:border-[#00a859] shadow-[0_0_30px_rgba(0,168,89,0.1)]'
                    : 'bg-[#121212] border border-white/10 hover:border-white/25 hover:bg-[#161616]'
                }`}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectPlan(isSelected ? null : tier.id);
                  }
                }}
              >
                {/* Highlight / Popular / Selected Badges */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[11px] font-mono tracking-[0.2em] uppercase px-3 py-1 rounded-full font-bold ${
                      tier.highlight || isSelected
                        ? 'bg-[#00a859] text-black'
                        : 'bg-white/10 text-neutral-300'
                    }`}
                  >
                    {tier.badge}
                  </span>

                  {isSelected && (
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-[#00a859] bg-[#00a859]/10 border border-[#00a859]/30 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 size={13} />
                      SELECTED
                    </span>
                  )}
                </div>

                {/* Plan Title & Description */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-3">
                    {tier.name}
                  </h2>
                  <p className="text-sm text-[#b5b5b5] font-sans leading-relaxed mb-6 min-h-[48px]">
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 pb-8 border-b border-white/10 mb-8">
                    <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight text-white">
                      {price}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-neutral-400">
                      {period}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-10">
                    <p className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-400 font-semibold mb-3">
                      WHAT IS INCLUDED:
                    </p>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-[#00a859]" />
                        </div>
                        <span className="text-sm text-neutral-300 font-sans leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col gap-3">
                  {isSelected ? (
                    <Link
                      href={contactUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#00a859] hover:bg-[#008f4c] text-black font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#00a859]/20 hover:scale-[1.01]"
                    >
                      <span>Proceed to Contact Page</span>
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPlan(tier.id);
                      }}
                      className={`w-full py-3.5 px-6 rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300 ${
                        tier.highlight
                          ? 'bg-white/10 hover:bg-[#00a859] hover:text-black text-white'
                          : 'bg-white/5 hover:bg-white/15 text-white border border-white/10'
                      }`}
                    >
                      Select This Plan
                    </button>
                  )}

                  <Link
                    href={contactUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="text-center text-xs font-mono tracking-wider text-neutral-400 hover:text-[#00a859] transition-colors py-1 inline-flex items-center justify-center gap-1"
                  >
                    <span>Direct inquiry for {tier.name}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

