'use client';

import React, { useEffect, useRef, useState } from 'react';

const WORDS = [
  { word: 'WORK', letters: ['W', 'O', 'R', 'K'], startIndex: 0 },
  { word: 'WITH', letters: ['W', 'I', 'T', 'H'], startIndex: 4 },
  { word: 'US', letters: ['U', 'S'], startIndex: 8 },
];

/**
 * Section One – Cinematic Contact Hero
 * Features:
 * - Full-width HD background video with deep black shadows & subtle emerald atmosphere
 * - Guaranteed removal of any colorful red/purple/cyan gradient
 * - Tall, condensed typography (Bebas Neue / Oswald) with visible character separation (tracking-[0.02em])
 * - Cinematic letter-by-letter entrance animation (left-to-right stagger)
 * - Clean border-b border-white/10 divider
 */
export default function ContactHero() {
  const videoRef = useRef(null);
  const [videoExists, setVideoExists] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Slow, graceful cinematic textile flow
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully if browser blocks unmuted autoplay
        });
      }
    }
  }, []);

  return (
    <section
      className="contact-hero-container relative overflow-hidden bg-[#0D0D0D] border-b border-white/10"
      aria-label="Work With Us Strains Group Hero"
    >
      {/* 1. Cinematic Background Video (35-45% opacity, deep monochrome/black shadows) */}
      {videoExists && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoExists(false)}
          className="contact-hero-video absolute inset-0 h-full w-full object-cover pointer-events-none"
          poster="/images/contact-hero-poster.jpg"
        >
          <source src="/videos/contact-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* 2. Dark Overlay: Ensures white WORK WITH US heading is readable over any footage */}
      <div className="contact-hero-overlay absolute inset-0 bg-black/60 pointer-events-none" />

      {/* 3. Centered Monumental Typography: WORK WITH US with Letter-by-Letter Entrance */}
      <div className="contact-hero-heading-wrap relative z-10 w-full flex items-center justify-center select-none">
        <h1
          className="contact-hero-title font-bold uppercase text-white"
          aria-label="Work With Us"
        >
          {WORDS.map((item) => (
            <span key={item.word} className="contact-word inline-flex items-center">
              {item.letters.map((letter, letterIdx) => {
                const globalIndex = item.startIndex + letterIdx;
                return (
                  <span
                    key={`${letter}-${globalIndex}`}
                    className="contact-letter inline-block"
                    aria-hidden="true"
                    style={{
                      animationDelay: `${globalIndex * 0.07}s`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
