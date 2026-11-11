'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'What are your Minimum Order Quantities (MOQs) for custom garment manufacturing?',
    answer:
      'We support both emerging fashion labels and established brands. For our certified organic cotton and pure hemp standard collections, our starter minimum order quantity is typically 100 to 250 pieces per style/colorway. For custom botanical dyed lots and bespoke weaves, minimums start at 300 pieces. We also offer prototype sampling runs before bulk commitment.',
  },
  {
    question: 'What is the standard production turnaround time from tech pack to finished delivery?',
    answer:
      'Sample development and fit approval take approximately 7 to 12 business days once tech packs are locked. Bulk CMT production (cutting, sewing, botanical dyeing, and inspection) typically takes 3 to 5 weeks depending on order volume and custom finishing requirements.',
  },
  {
    question: 'How do you achieve Zero Liquid Discharge (ZLD) in your Tirupur dyeing unit?',
    answer:
      'Our Tirupur facility is equipped with a modern multi-stage biological and reverse osmosis (RO) effluent treatment plant with mechanical vapor recompression evaporators. 100% of the wastewater from the dyeing and washing processes is purified and returned to the production cycle, leaving zero hazardous liquid discharge in local waterways.',
  },
  {
    question: 'Are botanical natural dyes colorfast when washed by everyday consumers?',
    answer:
      'Yes. Unlike primitive home-dyeing methods, our industrial botanical dyeing process utilizes non-toxic mineral mordants (such as alum) and automated temperature-controlled paddle vats. Our finished fabrics achieve commercial Grade 4+ colorfastness to washing and perspiration, compliant with international textile standards.',
  },
  {
    question: 'How do the plantable seed tags work and what seeds are embedded?',
    answer:
      'Our price tags are crafted from 100% post-consumer recycled cotton paper embedded with viable, non-GMO basil and marigold seeds, printed with non-toxic vegetable inks. When buyers receive their garment, they moisten the tag, plant it under a thin layer of soil, and watch fresh herbs sprout within 7 to 14 days.',
  },
  {
    question: 'Can you help us build tech packs if we only have initial sketches or mood boards?',
    answer:
      'Yes. Our in-house technical fashion designers convert your hand sketches, mood boards, or physical reference garments into complete production-ready tech packs with grading increments, stitch specifications, seam constructions, and bill of materials.',
  },
  {
    question: 'Can prospective brand partners visit your manufacturing facility in Tirupur?',
    answer:
      'Yes, absolutely. We welcome verified brand partners and founders for scheduled tours of our Tirupur facility to inspect fabric knitting, pattern drafting, eco-dyeing vats, and CMT sewing lines firsthand. Virtual walkthroughs are also available.',
  },
];

export default function ClothingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="clothing-faq"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions About Clothing Manufacturing"
    >
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Sustainable Manufacturing <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Questions &amp; Answers</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Everything you need to know about our Tirupur facility MOQs, lead times, botanical dye processes, plantable seed tags, and organic certifications.
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
              <h3 className="text-white font-sans font-bold text-base">
                Looking to order fabric swatch kits or book a factory inspection?
              </h3>
              <p className="text-neutral-400 font-sans text-xs sm:text-sm">
                Connect directly with our Tirupur textile production engineers to receive physical fabric swatches.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:border-white/30 flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Fabric Swatches</span>
            <ArrowRight className="w-4 h-4 text-[#00e676]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

