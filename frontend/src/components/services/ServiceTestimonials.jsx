'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'R. Ananthakrishnan',
    role: 'Director of Operations, Aastu Refrigeration',
    company: 'Aastu Refrigeration',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    quote: 'Strains achieved an unprecedented 90.8% campaign optimization score for our industrial refrigeration lines. Generating 471,000 targeted impressions with a 4.64% CTR transformed our B2B cold chain pipeline.',
  },
  {
    id: 2,
    name: 'Suresh Narayanan',
    role: 'Head of Business Development, Pioneer Cranes',
    company: 'Pioneer Cranes & Hoists',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    quote: 'In the heavy industrial sector, achieving an average CPC of ₹13.01 with 18,800 high-intent clicks is phenomenal. Strains consistently delivers surgical targeting and measurable tender bid inquiries.',
  },
  {
    id: 3,
    name: 'Meera Sen',
    role: 'Creative Director, Xiti Weaves',
    company: 'Xiti (Jubilee Hills / Vijayawada)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    quote: 'Having our ethical organic cotton & hemp collections manufactured at their Tirupur facility alongside high-end 4K fashion lookbook cinematography gave our brand launch an extraordinary 4.2x ROAS.',
  },
  {
    id: 4,
    name: 'Shanila Reddy',
    role: 'Founder & Managing Director, Haraa Gold & Diamonds',
    company: 'Haraa Gold & Diamonds (Road 55, Jubilee Hills)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    quote: 'Their cinematic three-part bridal narrative films and geo-targeted festive campaigns resonated deeply across high-net-worth families, driving 1.2M targeted views and a 68% surge in bridal showroom consultations.',
  },
  {
    id: 5,
    name: 'Corporate Communications Head',
    role: 'Head of Corporate Media, JSW Cement',
    company: 'JSW Cement Ltd',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    quote: 'Strains Associates captured the monumental engineering scale and sustainability of our green slag cement facilities with professional drone aerials and corporate brand films that received unanimous acclaim at investor summits.',
  },
  {
    id: 6,
    name: 'Operations Director',
    role: 'Operations Director, Partha Dental Clinics',
    company: 'Partha Dental, Skin & Hair Clinics',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80',
    quote: 'Their geo-radius Google Ads architecture mapped across our 130+ South India clinics combined with automated WhatsApp booking delivered a +175% surge in patient appointments while slashing our CPA by 42%.',
  },
  {
    id: 7,
    name: 'Dr. K.R.K. Reddy',
    role: 'Founder & Managing Director, Sri BioAesthetics',
    company: 'Sri BioAesthetics (IDA Sultanpur)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    quote: 'Strains translated our complex microbial biotechnology and SoilFirst regenerative agriculture IP into crisp 3D explainer animations and targeted B2B campaigns, driving a +210% surge in enterprise distributor inquiries.',
  },
  {
    id: 8,
    name: 'Managing Partner',
    role: 'Executive Partner, Pakka Non Veg',
    company: 'Pakka Non Veg Restaurant Chain',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    quote: 'The high-speed 4K culinary videography, macro slow-mo gravy pours, and ASMR sizzle audio engineered by Danny and Pavan generated 850,000+ organic impressions and a massive 340% increase in weekend dining footfall.',
  },
];


export default function ServiceTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = TESTIMONIALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay slideshow every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section 
      className="service-testimonials-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden" 
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-[#00a859]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header with AOS Text Animation & Slideshow Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
            >
              Testimonials
            </motion.h2>
          </div>

          {/* Navigation Controls: Prev / Next Slideshow Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              id="testimonial-prev-btn"
              className="w-12 h-12 rounded-full bg-[#161616] hover:bg-[#00a859] border border-white/10 hover:border-[#00a859] text-white hover:text-black flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              id="testimonial-next-btn"
              className="w-12 h-12 rounded-full bg-[#161616] hover:bg-[#00a859] border border-white/10 hover:border-[#00a859] text-white hover:text-black flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Animated Carousel Track */}
        <div className="relative w-full overflow-hidden mb-12 py-6 -my-6 px-4 -mx-4">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-3 sm:px-4"
              >
                <div className="service-testimonial-card bg-[#141414] border border-white/10 hover:border-[#00a859]/40 rounded-3xl p-8 sm:p-12 lg:p-14 relative transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  {/* Decorative Quote Icon & Star Rating */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-1.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#00a859] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="text-white/15 text-5xl sm:text-6xl font-serif font-bold select-none leading-none">
                      “
                    </div>
                  </div>

                  {/* Testimonial Quote Text */}
                  <blockquote className="text-lg sm:text-2xl lg:text-3xl font-sans font-medium text-white/95 leading-relaxed sm:leading-snug mb-10 max-w-4xl">
                    "{item.quote}"
                  </blockquote>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 sm:gap-5 pt-6 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#00a859] shrink-0 shadow-[0_0_20px_rgba(0,168,89,0.3)] bg-neutral-900"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h3 className="text-base sm:text-lg font-sans font-bold text-white leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#888888] font-sans mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Progress Indicators */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`service-progress-dot h-1.5 rounded-full transition-all duration-500 ${
                  currentIndex === idx
                    ? 'active w-12 bg-[#00a859] shadow-[0_0_12px_rgba(0,168,89,0.5)]'
                    : 'w-6 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-xs font-mono text-[#777777] tracking-wider">
            <span className="text-white font-bold">{currentIndex + 1}</span> / {totalSlides}
          </div>
        </div>

      </div>
    </section>
  );
}
