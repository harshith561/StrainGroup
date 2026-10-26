'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'bounce',
    bgImage: 'https://strains.in/wp-content/uploads/revslider/Animated-Type-Hero-Collection/1bg-texture.png',
    subheading: 'Leap Towards Dreams',
    paragraph:
      'Jump into the adventure that awaits, ready to rebound with more strength and joy than ever before.',
    word: 'QUALITY',
  },
  {
    id: 2,
    title: 'stretch',
    bgImage: 'https://strains.in/wp-content/uploads/revslider/Animated-Type-Hero-Collection/2woman-hop.jpg',
    subheading: 'Strength & Boundless Growth',
    paragraph:
      'Push the boundaries of imagination to discover tailor-made growth and ignite your inner potential.',
    word: 'STRETCH',
  },
  {
    id: 3,
    title: 'focus',
    bgImage: 'https://strains.in/wp-content/uploads/revslider/Animated-Type-Hero-Collection/focus_2254.jpeg',
    subheading: 'Precision In Every Element',
    paragraph:
      'Shape a better digital future with structured, pixel-perfect attention to detail and creative depth.',
    word: 'FOCUS',
  },
];

export default function KineticHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSlide = useCallback(() => {
    if (isChanging) return;
    setIsChanging(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [isChanging]);

  const prevSlide = useCallback(() => {
    if (isChanging) return;
    setIsChanging(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [isChanging]);

  // Transition timeout: reset isChanging after 1.2s to match reference
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsChanging(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [current]);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlide = slides[current];

  return (
    <section className="hero-slider-container">
      {/* Background Slides with Fade & Zoom */}
      <div className="slider-bg-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-bg-item ${index === current ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          />
        ))}
        <div className="slider-overlay" />
      </div>

      {/* Laptop Layout Center Content Row */}
      <div className="slider-content-inner">
        {/* Left Column: Kinetic Word Display */}
        <div className="slider-left-col">
          <div
            className={`word-container animation-${activeSlide.title} ${
              isChanging ? 'is-changing' : ''
            }`}
          >
            {activeSlide.word.split('').map((char, index) => (
              <span
                key={`${activeSlide.id}-${index}-${char}`}
                className="letter-item font-display"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Meta Pitch Block */}
        <div className="slider-right-col">
          <div className={`slide-meta-content ${isChanging ? 'exit' : 'enter'}`}>
            <div className="green-divider" />
            <h3 className="slide-subheading font-sans">
              {activeSlide.subheading}
            </h3>
            <p className="slide-paragraph font-mono">
              {activeSlide.paragraph}
            </p>
            <Link href="/services" className="explore-link font-sans">
              EXPLORE <ArrowRight className="arrow-icon" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Global UI Chrome: Pagination, Contact, Nav Arrows */}
      <div className="slider-global-ui">
        {/* Pagination Counter: 01 / 03 */}
        <div className="slider-pagination font-mono">
          <span className="current-num">0{current + 1}</span>
          <span className="divider-slash">/</span>
          <span className="total-num">0{slides.length}</span>
        </div>

        {/* Vertical Contact Link */}
        <div className="slider-contact font-mono">
          <Link href="/contact" className="contact-vertical-link">
            Contact
          </Link>
        </div>

        {/* Navigation Circles */}
        <div className="slider-nav-arrows">
          <button
            type="button"
            className="nav-arrow-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="nav-arrow-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
