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
            An award winning creative agency & sustainable fashion ecosystem based in India...
          </p>
        </div>

        <div className="intro-content-grid">
          <div className="intro-grid-left">
            <h3 className="intro-main-pitch font-sans">
              Strains Group is the first and only creative agency for your real exploration. It's one private place to save everything you can realize about digital beautifully design.
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
