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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const headlineText = 'DesignEdgeCreativeAgency';

  return (
    <section
      ref={sectionRef}
      className={`agency-intro-container ${revealed ? 'reveal' : ''}`}
    >
      <div className="agency-intro-inner">
        <div className="intro-header">
          <h1 className="intro-title font-sans">
            {headlineText.split('').map((char, index) => (
              <span
                key={index}
                className="char-span"
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="intro-tagline font-mono">
            An award winning creative agency, working based in Germany...
          </p>
        </div>

        <div className="intro-content-grid">
          <div className="intro-grid-left">
            <h3 className="intro-main-pitch font-sans">
              Redox is the first and only creative agency for your real exploration. It's one private place to save everything you can realize about digital beautifully design.
            </h3>
          </div>

          <div className="intro-grid-right">
            <h2 className="intro-sub-pitch font-sans">
              Creating virtual emotion in the universe, for the largest brands & market since
            </h2>
            <div className="intro-stats">
              <span className="stat-number font-display">2017</span>
              <span className="stat-label font-mono">ESTABLISHED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
