'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Check, ArrowRight } from 'lucide-react';

const ADDONS = [
  {
    id: 'film-reel',
    title: '4K Cinematic Brand Reel & Drone Footage',
    description: 'High-concept creative direction, on-location cinematography, and cinema-grade color grading.',
    price: '+$1,800',
    category: 'Video Production',
  },
  {
    id: 'apparel-sample',
    title: 'Tirupur Apparel Prototyping & Tech Pack',
    description: 'Custom pattern drafting, fabric sampling, zero-discharge wash testing, and physical prototype delivery.',
    price: '+$1,200',
    category: 'Clothing Manufacturing',
  },
  {
    id: 'ad-engine',
    title: 'Performance Marketing Growth Engine',
    description: 'Conversion tracking setup, high-intent audience funnels, A/B creative testing on Meta & Google Ads.',
    price: '+$2,200',
    category: 'Advertising & Marketing',
  },
  {
    id: 'custom-web',
    title: 'Custom Headless Storefront & CRO Audit',
    description: 'Next.js high-performance web experience, conversion rate optimization, and seamless checkout flow.',
    price: '+$3,400',
    category: 'Digital Engineering',
  },
  {
    id: 'sustainable-sourcing',
    title: 'Zero-Discharge Organic Fabric Sourcing',
    description: 'GOTS-certified organic cotton, hemp, vegan silk, and zero liquid discharge dyeing documentation.',
    price: 'Custom Scope',
    category: 'Sustainability',
  },
  {
    id: 'influencer-seeding',
    title: 'Creator Seeding & PR Outreach',
    description: 'Curated micro and tier-1 influencer partnerships with genuine aesthetic and ethical alignment.',
    price: '+$1,500',
    category: 'Brand Strategy',
  },
];

export default function PricingAddons({
  selectedAddons,
  onToggleAddon,
  selectedPlan,
}) {
  const hasAddons = selectedAddons.length > 0;

  // Build query string for contact page
  const addonsParam = encodeURIComponent(selectedAddons.join(', '));
  const planParam = selectedPlan ? encodeURIComponent(selectedPlan) : '';
  const contactUrl = `/contact?${planParam ? `plan=${planParam}&` : ''}addons=${addonsParam}`;

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#0f0f0f] border-t border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-white tracking-tight">
              Modular capabilities & <span className="text-[#00a859]">add-ons.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#b5b5b5] max-w-xl mt-2 font-sans">
              Need individual services or specific modules alongside your plan? Select what you need below to include them in your inquiry.
            </p>
          </div>

          {/* Contact Button when add-ons are selected */}
          {hasAddons && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-[#18231c] border border-[#00a859]/40 p-3 rounded-xl"
            >
              <div className="text-xs font-mono text-neutral-300">
                <span className="text-[#00a859] font-bold">{selectedAddons.length}</span> add-on{selectedAddons.length > 1 ? 's' : ''} selected
              </div>
              <Link
                href={contactUrl}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-[#00a859] text-black font-sans font-bold text-xs tracking-wider uppercase hover:bg-[#008f4c] transition-colors"
              >
                <span>Inquire With Add-ons</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Add-ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDONS.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);

            return (
              <div
                key={addon.id}
                onClick={() => onToggleAddon(addon.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggleAddon(addon.id);
                  }
                }}
                tabIndex={0}
                role="checkbox"
                aria-checked={isSelected}
                className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#142219] border-[#00a859] shadow-[0_0_20px_rgba(0,168,89,0.2)]'
                    : 'bg-[#141414] border-white/10 hover:border-white/20 hover:bg-[#181818]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                      {addon.category}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#00a859] text-black'
                          : 'border border-white/20 text-neutral-400'
                      }`}
                    >
                      {isSelected ? <Check size={14} /> : <Plus size={14} />}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                    {addon.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b5b5b5] font-sans leading-relaxed mb-4">
                    {addon.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm font-mono font-bold text-white">
                    {addon.price}
                  </span>
                  <span className="text-xs font-mono text-[#00a859]">
                    {isSelected ? '✓ Added to Inquiry' : '+ Click to Add'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner if needed */}
        {hasAddons && (
          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs sm:text-sm font-sans text-neutral-300">
              Ready with your customized package? We will tailor the exact deliverable timeline in our initial strategy call.
            </p>
            <Link
              href={contactUrl}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#00a859] hover:bg-[#008f4c] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Contact Us With Selected Items</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

