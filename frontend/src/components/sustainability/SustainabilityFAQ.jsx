'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { SUSTAINABILITY_FAQS } from '@/constant';

export default function SustainabilityFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="sustainability-faq"
      className="relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions on Sustainability"
    >
      {/* Background radial gradient */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#00a859]/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase leading-tight text-white mb-6">
            Frequently Asked <br />
            <span className="text-[#00e676]">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            Detailed answers regarding our closed-loop ZLD water facility, natural botanical dyes, seed-embedded hangtags, and minimum order quantities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {SUSTAINABILITY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-white hover:text-[#00e676] transition-colors pr-2">
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00e676] bg-[#00a859]/20 border-[#00e676]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5">
                        <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00a859]/20 border border-[#00e676]/30 flex items-center justify-center text-[#00e676] shrink-0 mx-auto sm:mx-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-sans font-bold text-white mb-1">
                Have specific technical or chemical certification questions?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans">
                Our Tirupur textile engineers and compliance directors are available for video consultations.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap text-center flex items-center justify-center gap-2"
          >
            <span>Talk to Factory Engineers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

