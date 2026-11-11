'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'R. Ananthakrishnan',
    role: 'Director, Aastu Refrigeration',
    text: 'Strains Associates delivered phenomenal performance over our 3.5-year campaign. Achieving a 90.8% optimization score with 21,800 high-intent clicks and 471,000 targeted impressions transformed our cold chain infrastructure lead pipeline.',
  },
  {
    id: 2,
    name: 'Suresh Narayanan',
    role: 'Head of Marketing, Pioneer Cranes',
    text: 'Achieving an average CPC of ₹13.01 in the heavy overhead cranes sector is unmatched. Generating 18,800 procurement clicks and 368,000 impressions on a ₹2.45L spend proves Strains Associates understands B2B industrial acquisition inside out.',
  },
  {
    id: 3,
    name: 'Xiti Fashion',
    role: 'Creative Director, Xiti',
    text: 'Strains Associates seamlessly united sustainable Tirupur garment manufacturing using organic cotton and hemp with high-end cinematic lookbook films and digital launch funnels. They helped us build an authentic eco-fashion brand.',
  },
  {
    id: 4,
    name: 'Shanila Reddy',
    role: 'Founder & Managing Director, Haraa Gold & Diamonds',
    text: 'Their cinematic brand films and targeted advertising campaigns resonated deeply across regional audiences. Danny and Pavan brought unmatched visual grandeur to our heritage bridal jewellery collections.',
  },
  {
    id: 5,
    name: 'Dr. K.R.K. Reddy',
    role: 'Founder & Managing Director, Sri BioAesthetics',
    text: 'Strains Associates translated our sophisticated microbial formulations and agricultural biotechnology into compelling visual explainers and high-converting B2B digital lead pipelines.',
  },
  {
    id: 6,
    name: 'Managing Partner',
    role: 'Pakka Non Veg Restaurant Chain',
    text: 'The cinematic 4K culinary videos and ASMR reels produced by Strains Associates drove over 850,000 views and a massive footfall surge across our restaurant branches.',
  },
];


export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.15 }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className={`testimonials-section ${revealed ? 'reveal' : ''}`}>
      <div className="testimonials-inner">
        <div className="testimonials-left">
          <h2 className="testimonials-title font-sans">
            Our happy clients
            <br />
            always say, how they
            <br />
            are satisfied with
            <br />
            our service.
          </h2>

          <div className="testimonials-arrows font-mono">
            <button
              className="testimonial-arrow-btn"
              onClick={prevTestimonial}
              aria-label="Previous client"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="testimonials-indicator">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <button
              className="testimonial-arrow-btn"
              onClick={nextTestimonial}
              aria-label="Next client"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="testimonials-right">
          <div className="testimonial-card-viewport">
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-card ${idx === currentIndex ? 'active' : ''}`}
              >
                <div className="quote-icon-wrapper">
                  <Quote className="quote-icon" size={48} />
                </div>
                <p className="testimonial-text font-sans">&quot;{item.text}&quot;</p>
                <div className="testimonial-author">
                  <h3 className="author-name font-sans">{item.name}</h3>
                  <span className="author-role font-mono">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
