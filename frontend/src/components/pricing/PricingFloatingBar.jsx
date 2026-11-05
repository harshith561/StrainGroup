'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X, Calendar } from 'lucide-react';

const PLAN_NAMES = {
  launchpad: 'Launchpad',
  scale: 'Growth & Scale',
  enterprise: 'Enterprise Ecosystem',
};

export default function PricingFloatingBar({
  selectedPlan,
  selectedAddons = [],
  billingCycle,
  onClearSelection,
}) {
  const hasSelection = Boolean(selectedPlan) || selectedAddons.length > 0;
  if (!hasSelection) return null;

  const planTitle = selectedPlan ? PLAN_NAMES[selectedPlan] || selectedPlan : '';
  const addonsCount = selectedAddons.length;

  const queryParams = new URLSearchParams();
  if (planTitle) queryParams.set('plan', planTitle);
  if (billingCycle) queryParams.set('cycle', billingCycle);
  if (addonsCount > 0) queryParams.set('addons', selectedAddons.join(', '));

  const contactUrl = `/contact?${queryParams.toString()}`;
  const consultationUrl = `/book-consultation?${queryParams.toString()}`;

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        aria-label="Selected plan actions"
        className="fixed bottom-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none"
      >
        <div className="relative max-w-4xl mx-auto pointer-events-auto bg-[#141414]/95 backdrop-blur-xl border border-[#00a859]/60 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(0,168,89,0.25)] rounded-2xl p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {/* Left info */}
          <div className="flex items-center gap-3 pr-8 sm:pr-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00a859]/15 border border-[#00a859]/40 flex items-center justify-center shrink-0">
              <CheckCircle2 size={16} className="text-[#00a859]" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                  SELECTED:
                </span>
                <span className="text-sm sm:text-base font-sans font-bold text-white whitespace-normal">
                  {planTitle || 'Custom Configuration'}
                </span>
                {addonsCount > 0 && (
                  <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-neutral-300">
                    +{addonsCount} Add-on{addonsCount > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#a0a0a0] font-sans hidden sm:block">
                Ready to review requirements & set up next steps.
              </p>
            </div>
          </div>

          {/* Right Action Buttons & Close Icon */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href={consultationUrl}
              className="hidden md:inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wide transition-all shrink-0"
            >
              <Calendar size={13} />
              <span>Book Call</span>
            </Link>

            <Link
              href={contactUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 sm:py-2.5 px-6 rounded-xl bg-[#00a859] hover:bg-[#008f4c] text-black font-sans text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:scale-[1.01] whitespace-nowrap"
            >
              <span>Proceed to Contact Page</span>
              <ArrowRight size={15} />
            </Link>

            {/* Close button: Top-right corner on mobile, far right end on desktop */}
            <button
              type="button"
              onClick={onClearSelection}
              className="absolute top-3 right-3 sm:static p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-10 shrink-0"
              title="Clear selection"
              aria-label="Clear plan selection"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}

