'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'How do you structure Google Ads campaigns for heavy industrial and B2B sectors?',
    answer:
      'In technical B2B sectors (such as HVAC, machinery, and manufacturing), broad matching wastes budget on irrelevant consumer queries. We build hyper-focused single-intent keyword groups, execute exhaustive negative keyword scrubbing, and optimize landing pages exclusively around high-ticket procurement intent. This is the exact methodology that generated a 90.8% optimization score and 4.64% CTR for Aastu Refrigeration and a ₹13.01 CPC for Pioneer Cranes.',
  },
  {
    question: 'What is the minimum recommended monthly ad budget to see meaningful results?',
    answer:
      'We generally recommend a minimum monthly media spend of ₹50,000 to ₹1,50,000 for focused regional B2B campaigns, and ₹2,00,000+ for national scale and e-commerce campaigns. This ensures enough auction conversion volume for Google and Meta smart bidding algorithms to exit the learning phase within the first 14 days.',
  },
  {
    question: 'How quickly can we expect to see qualified leads from Google and Meta Ads?',
    answer:
      'Because paid search and social campaigns drive targeted traffic immediately upon activation, client accounts typically begin capturing verified lead inquiries within 48 to 72 hours of campaign launch. Full algorithmic efficiency and lowest target CPA are typically achieved by week 3 to 4.',
  },
  {
    question: 'Do you create the landing pages and ad creative assets in-house?',
    answer:
      'Yes, 100%. Our integrated Hyderabad creative studio designs responsive high-speed landing pages, visual banners, and 4K video ads. By pairing direct-response copywriting with on-set video production, our creatives are engineered specifically to beat platform auction benchmarks.',
  },
  {
    question: 'Do we maintain direct ownership and administrative access to our ad accounts?',
    answer:
      'Absolutely. You own 100% of your Google Ads, Meta Business Suite, Google Analytics 4, and search console assets. You pay media spend directly to Google and Meta with your corporate card, ensuring complete financial transparency and historical data retention.',
  },
  {
    question: 'How do you track and verify offline or phone call conversions for enterprise clients?',
    answer:
      'We install dynamic number insertion (DNI) call tracking, server-side Conversion APIs (CAPI), and CRM webhook integrations (HubSpot, Zoho, Salesforce, or WhatsApp Business API). Every phone call, quote request, and WhatsApp inquiry is attributed back to the exact search keyword and ad creative that triggered it.',
  },
  {
    question: 'What reporting cadence and executive analytics dashboards do you provide?',
    answer:
      'Clients receive real-time access to a 24/7 live Looker Studio dashboard tracking impressions, clicks, CTR, cost-per-acquisition (CPA), and conversion pipeline value. Additionally, Head of Digital Marketing Prasad leads bi-weekly strategic review calls to review performance and upcoming scaling initiatives.',
  },
];

export default function AdvertisingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="advertising-faq"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions About Advertising and Marketing"
    >
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Digital Growth &amp; Advertising <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Questions &amp; Answers</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Everything you need to know about our data-driven Google Ads management, Meta campaign funnels, B2B lead generation, and analytics reporting.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                data-aos-duration="600"
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
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
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#00e676] text-black' : 'bg-white/10 text-white'
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

        {/* Bottom Support Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00a859]/20 text-[#00e676] flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-sans font-bold text-base">
                Have a custom growth inquiry or existing account audit?
              </h3>
              <p className="text-neutral-400 font-sans text-xs sm:text-sm">
                Get an unbiased audit of your current ad account and keyword waste from our senior media buyers.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:border-white/30 flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Free Account Audit</span>
            <ArrowRight className="w-4 h-4 text-[#00e676]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

