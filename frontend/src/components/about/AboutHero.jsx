'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function AboutHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [displayYear, setDisplayYear] = useState('2000');

  useEffect(() => {
    // Trigger entrance animation on page mount
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    // Odometer year roll: 2000 -> 2012
    let step = 2000;
    const target = 2012;
    const counterTimer = setInterval(() => {
      step += 1;
      if (step <= target) {
        setDisplayYear(String(step));
      } else {
        setDisplayYear('2012');
        clearInterval(counterTimer);
      }
    }, 90);

    return () => {
      clearTimeout(mountTimer);
      clearInterval(counterTimer);
    };
  }, []);

  const wordSince = 'SINCE';
  const yearDigits = displayYear.split('');

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-studio-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`simple-hero-screen ${isMounted ? 'is-mounted' : ''}`}>
      {/* Background Video with Cinematic Dark Overlay */}
      <div className="simple-hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="simple-hero-bg-video"
          poster="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="/videos/about-hero-bg.mp4" type="video/mp4" />
          <source src="https://raw.githubusercontent.com/solodev/hero-with-video-bg/master/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Cinematic Vignette Overlay for High Typography Contrast */}
        <div className="simple-hero-video-overlay" />
      </div>

      {/* Center Monumental Typography: "SINCE 2012" */}
      <div className="simple-hero-center">
        <h1 className="simple-hero-title font-timeline" aria-label={`SINCE ${displayYear}`}>
          {/* Word: SINCE in Bold White */}
          <span className="since-letters-wrap">
            {wordSince.split('').map((char, index) => (
              <span key={`since-${index}`} className="simple-letter-mask">
                <span
                  className="simple-letter-char text-white"
                  style={{
                    animationDelay: `${0.12 + index * 0.08}s`,
                  }}
                >
                  {char}
                </span>
              </span>
            ))}
          </span>

          {/* Spacer */}
          <span className="simple-hero-space" />

          {/* Year: 2012 in Strains Emerald Green with Animation */}
          <span className="year-digits-wrap text-[#00a859]">
            {yearDigits.map((digit, index) => (
              <span key={`year-digit-${displayYear}-${index}`} className="simple-letter-mask">
                <span
                  className="simple-letter-char text-[#00a859]"
                  style={{
                    animationDelay: `${0.55 + index * 0.08}s`,
                  }}
                >
                  {digit}
                </span>
              </span>
            ))}
          </span>
        </h1>
      </div>

      {/* Downward Scroll Arrow */}
      <button
        type="button"
        onClick={scrollToNext}
        className="simple-hero-scroll-btn font-mono"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] tracking-[3px] uppercase opacity-60">Scroll</span>
        <ArrowDown size={16} className="simple-arrow-bounce text-[#00a859]" />
      </button>
    </section>
  );
}
