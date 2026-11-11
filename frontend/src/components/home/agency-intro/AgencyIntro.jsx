'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function AgencyIntro() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.2 }
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

  const headlineWords = 'Design Edge Creative Agency'.split(' ');

  return (
    <section
      ref={sectionRef}
      className={`agency-intro-container ${revealed ? 'reveal' : ''}`}
    >
      <div className="agency-intro-inner">
        <div className="intro-header">
          <h1 className="intro-title font-sans">
            {headlineWords.map((word, wordIndex) => {
              const wordStartIndex = headlineWords
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length + 1, 0);

              return (
                <span
                  key={wordIndex}
                  className="intro-word inline-flex items-center whitespace-nowrap"
                  style={{
                    marginRight: wordIndex < headlineWords.length - 1 ? '0.32em' : '0',
                  }}
                >
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="char-span"
                      style={{ transitionDelay: `${(wordStartIndex + charIndex) * 0.03}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </h1>
          <p className="intro-tagline font-mono">
            Creative Agency, Digital Marketing, Video Production and Sustainable Fashion in Hyderabad & Tirupur
          </p>
        </div>

        <div className="intro-content-grid">
          <div className="intro-grid-left">
            <h2 className="intro-main-pitch font-sans">
              Strains Associates provides creative, branding, digital marketing, video production and sustainable fashion solutions. We help businesses build their brands through creative content, strategic marketing, professional production and sustainable manufacturing.
            </h2>
          </div>

          <div className="intro-grid-right">
            <h2 className="intro-sub-pitch font-sans">
              Empowering category-defining brands with creative storytelling and sustainable craft since
            </h2>
            <div className="intro-stats">
              <span className="stat-number font-display">2018</span>
              <span className="stat-label font-mono">ESTABLISHED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
