'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'What is the minimum upfront capital required to launch an apparel brand through the incubator?',
    answer:
      'Total capital depends on collection depth and initial batch volume. We design our incubator with low-barrier modularity: founders can start with a focused 3-to-5 silhouette capsule with initial production batches as low as 100 to 200 units per style in our Tirupur facility. During your initial consultation, we provide an itemized budget roadmap covering sampling, production, content shoots, and launch ad spend.',
  },
  {
    question: 'How long does the entire incubator journey take from initial idea to first customer sale?',
    answer:
      'Typically 8 to 12 weeks. Weeks 1-3 focus on brand identity, positioning, and tech pack drafting; Weeks 4-7 cover sampling approval and Tirupur zero-discharge production; Weeks 8-9 execute Hyderabad studio photo/video shoots and e-commerce build; Weeks 10-12 launch the pre-order waitlist and paid media drop.',
  },
  {
    question: 'Do I need fashion design experience or technical CAD software skills?',
    answer:
      'Not at all. You provide the vision, target market idea, and aesthetic direction. Our in-house technical fashion designers handle pattern drafting, fabric GSM calculations, measurement sizing charts, tech pack engineering, and factory-ready CAD files.',
  },
  {
    question: 'Who owns the brand identity, website, and clothing patterns created during incubation?',
    answer:
      'You do. You retain 100% intellectual property (IP) and legal ownership of your brand name, trademarks, logos, garment tech packs, e-commerce storefront, domain, ad accounts, and customer lists. We do not claim equity unless explicitly agreed upon in a co-venture agreement.',
  },
  {
    question: 'Can I choose sustainable and organic fabrics like hemp and botanical dyes?',
    answer:
      'Yes, absolutely. That is our core superpower. Through our Tirupur manufacturing unit, you have direct access to GOTS-certified organic cotton, Himalayan hemp textiles, vegan silk, vegan leather, chemical-free botanical natural dyes, and living plantable seed tags embedded with herbs.',
  },
  {
    question: 'What happens after the initial product drop sells out?',
    answer:
      'Because your production is already integrated with our Tirupur facility, re-ordering bestselling styles and grading new colorways is seamless and fast. Concurrently, Prasad’s performance digital marketing team continues optimizing ad scale, lookalike funnels, and retention email flows to compound your monthly recurring revenue.',
  },
  {
    question: 'How do I apply to join the Strains Brand Incubator?',
    answer:
      'Simply schedule an initial discovery call through our website or connect directly with our founder desk. We review your concept, evaluate market whitespace, discuss production feasibility, and deliver an actionable launch blueprint within 48 hours.',
  },
];

export default function StartBrandFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="start-brand-faq"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions About Launching Your Brand"
    >
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Brand Incubator <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Questions &amp; Answers</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Everything you need to know about our turnkey founder incubator, Tirupur production minimums, capital requirements, and launch timelines.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                data-aos-duration="600"
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#121212] border-[#00e676]/40 shadow-[0_4px_25px_rgba(0,168,89,0.12)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#00e676] text-black' : 'bg-white/10 text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00a859]/20 text-[#00e676] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-sans font-bold text-base">
                Have a brand concept ready to bring to market?
              </h4>
              <p className="text-neutral-400 font-sans text-xs sm:text-sm">
                Pitch your concept directly to Naga Praharsha and explore incubator feasibility within 48 hours.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:border-white/30 flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply For Brand Incubator</span>
            <ArrowRight className="w-4 h-4 text-[#00e676]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

