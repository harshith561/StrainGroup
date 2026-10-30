'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CLIENT_LOGOS_DATA } from './client-logos/EsteemedClientsLogos';

/* ==========================================================================
   ESTEEMED CLIENTS - SINGLE LINE INFINITE MARQUEE
   Clean, simple, flat vector logos without background fills or filters.
   Flows in one single continuous horizontal line as requested.
   ========================================================================== */

export default function AboutBrandsMarqueeSection({
  title = 'OUR CLIENTS',
  subtitle = 'Trusted by industry leaders, growing enterprises, and visionary creators across India and worldwide.',
  clients = CLIENT_LOGOS_DATA,
}) {
  const [revealed, setRevealed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold: 0.1,
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

  return (
    <section
      id="esteemed-clients-section"
      ref={sectionRef}
      className={`about-esteemed-clients-section ${revealed ? 'is-revealed' : ''}`}
    >
      <div className="esteemed-clients-container">
        {/* Section Header */}
        <div className="esteemed-clients-header">
          <h2 className="esteemed-clients-title font-sans">{title}</h2>
          <p className="esteemed-clients-subtitle font-sans">
            {subtitle}
          </p>
        </div>

        {/* SINGLE CONTINUOUS MARQUEE LINE - NO FILLS, NO FILTERS, PURE SIMPLE LOGOS */}
        <div
          className={`single-line-marquee-wrapper ${isPaused ? 'is-paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="single-line-marquee-track">
            {/* 3 identical sets of all 24 simple logos for 100% seamless infinite glide */}
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={`simple-logo-${client.id}-${i}`}
                className="simple-marquee-logo-item"
                title={`${client.name} — ${client.category || client.subtext}`}
              >
                <div className="simple-logo-inner">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
