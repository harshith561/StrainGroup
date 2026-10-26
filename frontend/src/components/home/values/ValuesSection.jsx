'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ValuesSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initial check in case section is already in or near viewport on mount
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        setRevealed(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
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

  const headline = "We believe in quality, not quantity, that's why we're great ever.";
  const words = headline.split(' ');

  // Global char index tracker for smooth wave transition
  let cumulativeCharCount = 0;

  return (
    <section
      ref={sectionRef}
      className={`values-banner-section relative w-full py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden border-t border-b border-white/5 bg-[radial-gradient(circle_at_center,_#1c1c1c_0%,_#0c0c0c_100%)] ${
        revealed ? 'reveal' : ''
      }`}
    >
      <div className="values-banner-inner w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
        <h5
          className={`values-subtitle font-mono text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#00a859] max-w-2xl uppercase transition-all duration-700 ease-out ${
            revealed ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          HELPING BRANDS GROW AND SHARE THEIR SUCCESS STORIES TO THE WORLD
        </h5>

        <h2 className="values-title font-sans font-black uppercase text-center leading-[1.15] sm:leading-[1.1] tracking-tight flex flex-wrap justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {words.map((word, wordIdx) => {
            const isQuality = word.toLowerCase().includes('quality');
            const wordChars = word.split('');

            return (
              <span key={wordIdx} className="word-wrapper inline-flex whitespace-nowrap">
                {wordChars.map((char, charIdx) => {
                  const delay = (cumulativeCharCount * 0.022).toFixed(3);
                  cumulativeCharCount += 1;

                  return (
                    <span
                      key={charIdx}
                      className="char-fill inline-block select-none"
                      style={{
                        color: revealed ? (isQuality ? '#00a859' : '#ffffff') : 'transparent',
                        WebkitTextStroke: revealed
                          ? '1px transparent'
                          : isQuality
                          ? '1px rgba(0, 168, 89, 0.5)'
                          : '1px rgba(255, 255, 255, 0.22)',
                        transitionProperty: 'color, -webkit-text-stroke, opacity, transform',
                        transitionDuration: '550ms',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        transitionDelay: `${delay}s`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
                <span className="char-space inline-block">&nbsp;</span>
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
