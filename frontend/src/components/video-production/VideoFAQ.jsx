'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'What is the typical turnaround time for a commercial brand film?',
    answer:
      'Standard commercial video production typically requires 2 to 4 weeks from concept approval to final mastered delivery. This includes 5-7 days for pre-production scripting and storyboard lock, 1-3 shoot days, and 7-10 days for offline assembly, DaVinci Resolve color grading, VFX compositing, and audio mastering. Expedited sprints can be accommodated for time-sensitive launches.',
  },
  {
    question: 'What cinema cameras, lenses, and drone packages do you shoot on?',
    answer:
      'We shoot on high-end cinema systems including RED Digital Cinema, ARRI, and Sony FX Cinema Line bodies paired with cinema prime lenses (Cooke, Zeiss, and Angenieux zooms). For aerial cinematography, our licensed pilots utilize DJI Inspire 3 full-frame systems and custom FPV quadcopters capable of capturing high-speed industrial facility sweeps.',
  },
  {
    question: 'Can Strains Associates handle the complete pipeline including scripting and casting?',
    answer:
      'Yes, 100%. Headed by Strategy Maker and Line Producer Praharsha, we manage the entire line production from blank page to final master. This covers narrative scriptwriting, two-column commercial script treatments, actor casting, voice-over recording, location scouting and clearances, on-set logistics, and full crew coordination.',
  },
  {
    question: 'Do you deliver multi-aspect ratio assets for both widescreen TV/Web (16:9) and vertical social ads (9:16)?',
    answer:
      'Yes. Our cinematographers compose every scene with dual-frame guide markers on set. We deliver pristine 16:9 4K DCI master files for broadcast television, investor presentations, and web heroes, as well as native 9:16 vertical cutdowns specifically paced for Meta (Instagram/Facebook) and YouTube Shorts advertising.',
  },
  {
    question: 'Are your drone pilots licensed and insured for industrial and commercial operations?',
    answer:
      'Absolutely. Our drone operators hold certified DGCA commercial drone pilot licenses and full third-party liability insurance. We routinely film on heavy industrial and active manufacturing facilities (including infrastructure sites like JSW Cement and Pioneer Cranes), maintaining strict PPE protocols and facility safety compliance.',
  },
  {
    question: 'How does your post-production revision and color grading process work?',
    answer:
      'We provide two comprehensive revision rounds at each post-production milestone: first at the Rough Assembly (picture lock stage), and second during the DaVinci Resolve color grading, VFX, and sound design review. All reviews are conducted via high-resolution frame-accurate video review portals for instantaneous timestamped feedback.',
  },
  {
    question: 'Where are your production studios and filming crews based?',
    answer:
      'Our creative direction, pre-production, and digital marketing teams operate out of Hyderabad, Telangana, while our specialized sustainable apparel and industrial production units operate out of Tirupur, Tamil Nadu. We deploy technical camera crews across India and internationally for commercial engagements.',
  },
];

export default function VideoFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="video-faq"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Frequently Asked Questions About Video Production"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header — fades down */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Video Production <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Questions &amp; Answers</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Everything you need to know about our commercial camera gear, production timelines, licensing, and post-production workflows.
          </p>
        </div>

        {/* FAQ Accordion List — each item fades up with stagger */}
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
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-sans font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#00a859] text-black' : 'bg-white/5 text-neutral-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-white/5 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom Inquiry Box — fades up */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#141414] to-[#101010] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#00a859]/20 border border-[#00a859]/30 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-[#00e676]" />
            </div>
            <div>
              <h4 className="text-lg font-sans font-bold text-white">
                Have a unique video concept or custom requirement?
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-0.5">
                Speak directly with Danny or Praharsha to scope your filming specifications.
              </p>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-[#00a859] hover:text-black border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group flex-shrink-0"
          >
            <span>Ask A Question</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
