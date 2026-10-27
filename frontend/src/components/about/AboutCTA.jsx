'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="about-section alt-bg">
      <div className="about-container">
        <div className="about-cta-box">
          <span className="section-kicker font-mono" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} />
            Let's Collaborate
          </span>
          <h2 className="about-cta-title font-sans">
            Ready to Build Your Brand's Next Chapter?
          </h2>
          <p className="about-cta-desc font-mono">
            Whether you need comprehensive brand positioning, cinematic commercial production,
            or sustainable private label apparel manufacturing in Tirupur, Strains Group is ready.
          </p>

          <div className="about-cta-buttons font-sans">
            <Link href="/book-consultation" className="pill-button" style={{ backgroundColor: '#00a859', borderColor: '#00a859', color: '#000000' }}>
              <Calendar size={16} style={{ marginRight: '8px' }} />
              <span>BOOK A CONSULTATION</span>
            </Link>

            <Link href="/services" className="pill-button">
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Link>

            <Link href="/start-your-brand" className="pill-button">
              <span>START YOUR BRAND</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
