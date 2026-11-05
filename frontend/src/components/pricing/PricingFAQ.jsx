'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';

const FAQS = [
  {
    q: 'How does engagement work between Monthly Retainer and Project Sprints?',
    a: 'Monthly Retainers provide ongoing, continuous allocation of our creative, production, and media buying pods with weekly sprints and dynamic resource scaling. Project Sprints are milestone-based engagements focused on specific single-focus deliverables such as a flagship commercial film, launch collection prototyping, or an initial ad funnel setup.',
  },
  {
    q: 'Can we bundle Video Production, Marketing, and Garment Manufacturing?',
    a: 'Yes, that is the core superpower of Strains Group. Rather than juggling disconnected video production agencies, ad buyers, and apparel mills, our ecosystem connects all three under one roof—ensuring your clothing samples, brand lookbooks, cinema commercials, and ad campaigns align seamlessly.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) for Tirupur Clothing Manufacturing?',
    a: 'For our Launchpad clients, we support custom sample prototyping and trial production runs starting from 100-300 units per style. For Growth & Enterprise clients, our Tirupur facility (Strains Stitchery) comfortably handles high-volume bulk orders in tens of thousands of units with zero liquid discharge standards.',
  },
  {
    q: 'Are there hidden setup fees or contracts?',
    a: 'No hidden fees. Every proposal includes a comprehensive scope of work, milestone breakdown, and asset ownership transfer upon project completion. For retainers, we work on standard monthly agreements with simple 30-day notice terms.',
  },
  {
    q: 'What happens immediately after I select a plan and submit the contact form?',
    a: 'Our executive team reviews your brief within 24 hours. We arrange a 30-minute discovery session with our Creative Director and Growth Lead to confirm timelines, establish milestones, and begin onboarding.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#0c0c0c] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Frequently Asked <span className="text-[#00a859]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b5b5b5] max-w-lg mx-auto mt-3 font-sans">
            Everything you need to know about partnering with Strains Group across creative, digital, and manufacturing verticals.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#121212] overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-semibold text-base sm:text-lg text-white pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00a859]/20 border-[#00a859]/40 text-[#00a859]' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#b5b5b5] font-sans leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need a Custom Plan / Bottom CTA Card */}
        <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#141d17] via-[#121212] to-[#141414] border border-[#00a859]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-2">
              Need a custom scope or specific enterprise contract?
            </h3>
            <p className="text-xs sm:text-sm text-[#b5b5b5] font-sans">
              Our partners frequently require hybrid engagements blending brand incubation, heavy industrial marketing, and global supply lines.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-[#00a859] hover:bg-[#008f4c] text-black font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

