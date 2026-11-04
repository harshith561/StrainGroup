'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'Can Strains Associates help launch a fashion brand entirely from scratch?',
    answer:
      'Yes, absolutely. We specialize in zero-to-one fashion brand creation. We assist with brand naming, trademark strategy, visual brand identity, fabric sourcing, tech pack development, prototype sampling in Tirupur, editorial campaign production in Hyderabad, e-commerce storefront development, and launch ad campaigns.',
  },
  {
    question: 'How many pieces or styles should be in a debut capsule collection?',
    answer:
      'For a debut direct-to-consumer fashion launch, we typically advise starting with a focused capsule collection of 4 to 8 signature silhouettes (e.g., 2 luxury tees, 2 hoodies/sweats, 2 trousers, and 1-2 outerwear or dress pieces). This concentrates your production capital on perfecting fit and quality while giving early buyers clear style cohesion.',
  },
  {
    question: 'Who arranges the models, styling, and makeup for the editorial lookbook shoot?',
    answer:
      'Our in-house creative production team led by Danny and Pavan manages the entire editorial line production: casting professional agency runway models, hiring certified fashion stylists, wardrobe steaming, HMU (hair & makeup artists), studio booking, and on-set art direction.',
  },
  {
    question: 'Which e-commerce platforms do you build fashion storefronts on?',
    answer:
      'We build high-performance fashion stores primarily on Shopify Plus (custom Liquid themes with headless capability) or bespoke Next.js web applications. All storefronts feature instant sub-second page loads, interactive lookbook shoppable hotspots, multi-currency international billing, and seamless Klaviyo email marketing integration.',
  },
  {
    question: 'Can we manufacture with you in Tirupur even if we only need low initial batch quantities?',
    answer:
      'Yes. Through our integrated closed-loop model, fashion brands we incubate receive priority low-MOQ manufacturing access in our Tirupur facility (typically starting at 100 to 200 units per style), allowing you to validate consumer demand before investing in container-scale production runs.',
  },
  {
    question: 'How do you safeguard our clothing designs and intellectual property?',
    answer:
      'We execute comprehensive Non-Disclosure Agreements (NDAs) and proprietary design ownership contracts prior to initiating design or technical prototyping. All silhouettes, tech packs, CAD patterns, and campaign creative assets belong 100% to your brand entity.',
  },
  {
    question: 'What is the typical timeline to launch a new fashion label from concept to first drop?',
    answer:
      'A complete concept-to-launch cycle typically spans 8 to 14 weeks: 2-3 weeks for brand identity and tech pack engineering, 3-4 weeks for prototype sample approval and botanical dyeing in Tirupur, 1-2 weeks for Hyderabad editorial photo/video production, and 2-3 weeks for e-commerce website development and pre-launch teaser marketing.',
  },
];

export default function FashionBrandFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="fashion-brand-faq"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions About Fashion Brand Architecture"
    >
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Fashion Brand Architecture <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Questions &amp; Answers</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Everything you need to know about our luxury fashion positioning, capsule collection engineering, editorial shoots, and e-commerce growth.
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
                Have an ambitious fashion label idea or luxury capsule concept?
              </h4>
              <p className="text-neutral-400 font-sans text-xs sm:text-sm">
                Discuss your brand aesthetic and production feasibility directly with our executive creative directors.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:border-white/30 flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Fashion Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#00e676]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

