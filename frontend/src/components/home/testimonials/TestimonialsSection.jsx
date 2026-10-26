'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Mahanay',
    role: 'CEO, TechVentures',
    text: 'They took the time to understand my brand and target audience and developed a marketing strategy that perfectly captured our essence. Their creative campaigns led to a significant increase in sales, and their expertise helped us secure a valuable partnership.',
  },
  {
    id: 2,
    name: 'Daryl Mitchell',
    role: 'Founder, Apex Digital',
    text: 'Their mission is to empower the brands we believe in with tailor-made approaches that ignite creativity and growth without limits. We discovered more funny quality work. The detail and execution of their designs was top tier.',
  },
  {
    id: 3,
    name: 'Tom Banton',
    role: 'Marketing Lead, Redox Corp',
    text: 'Strains Associates is always eager to collaborate with forward-thinking individuals and organizations, using the power of design and technology to tackle today’s challenges and shape a better future. From sleek websites to memorable branding, they offer creative solutions.',
  },
  {
    id: 4,
    name: 'Lance Petter',
    role: 'Product Director, VibeScale',
    text: 'Design is a team effort, and I believe in a true partnership. By working closely with Strains Associates, understanding our vision and core message, we managed to build an identity that sets us apart globally.',
  },
  {
    id: 5,
    name: 'Henrik Klassen',
    role: 'Creative VP, Synapse',
    text: "We're passionate about partnering with visionary individuals and organizations to harness the power of design and technology. Strains delivered a bold identity that connects, engages, and drives long-term customer values.",
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
                <p className="testimonial-text font-sans">"{item.text}"</p>
                <div className="testimonial-author">
                  <h4 className="author-name font-sans">{item.name}</h4>
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
