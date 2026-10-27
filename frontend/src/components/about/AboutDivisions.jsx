'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Factory, Sparkles, Video, CheckCircle2 } from 'lucide-react';

const DIVISIONS = [
  {
    num: '01',
    name: 'Strains Associates',
    subtitle: 'Brand Atelier & Digital Architecture',
    desc: 'The conceptual foundation of our group. Crafting distinct identity systems, web experiences, positioning strategies, and commercial advertising for market leaders.',
    capabilities: [
      'Visual Identity & Design Systems',
      'High-Conversion Digital Marketing',
      'Enterprise Strategy & Positioning',
      'Art Direction & Copywriting',
    ],
    link: '/services',
    linkText: 'Explore Agency Services',
  },
  {
    num: '02',
    name: 'Strains Stitchery',
    subtitle: 'Garments Manufacturing Hub in Tirupur',
    desc: 'Our own industrial apparel factory in Tirupur, India. Powering emerging and established brands with zero-discharge manufacturing, precision stitching, and custom private labeling.',
    capabilities: [
      'End-to-End Apparel Manufacturing',
      'Zero Toxic Discharge Compliance',
      'Low MOQ & High Volume Capabilities',
      'Global Export Logistics',
    ],
    link: '/clothing-manufacturing',
    linkText: 'Discover Stitchery Factory',
  },
  {
    num: '03',
    name: 'Strains Fashions',
    subtitle: 'Sustainable Apparel Brand',
    desc: 'Our consumer-facing organic clothing line. Demonstrating that modern fashion can thrive without ecological harm through hemp fabrics, vegan leather, and plantable seeded tags.',
    capabilities: [
      '100% Organic Hemp & Cotton',
      'Natural Fruit & Vegetable Dyes',
      'Biodegradable Packaging',
      'Zero Microplastic Formulations',
    ],
    link: '/fashion-brand',
    linkText: 'View Fashion Brand',
  },
  {
    num: '04',
    name: 'Strains Video Production',
    subtitle: 'Cinematic Film & Commercial Media',
    desc: 'Our in-house media house equipped with cinema-grade cameras, professional line producers, and post-production suites to produce television commercials, lookbooks, and brand films.',
    capabilities: [
      'Commercial Direction & Concept',
      'Professional Line Production',
      'Cinema Lighting & Drone Videography',
      'Post-Production & Color Grading',
    ],
    link: '/video-production',
    linkText: 'Watch Production Reel',
  },
];

export default function AboutDivisions() {
  return (
    <section className="about-section">
      <div className="about-container">
        <span className="section-kicker font-mono">
          <Layers size={14} />
          03 / The Four Pillars
        </span>
        <h2 className="section-main-heading font-sans">
          The Strains Creative Ecosystem
        </h2>
        <p className="section-lead-paragraph font-sans">
          Four distinct verticals operating as a unified engine. We bridge high-concept design,
          cinematic media, and industrial apparel manufacturing.
        </p>

        <div className="divisions-grid">
          {DIVISIONS.map((item) => (
            <div key={item.num} className="division-box">
              <span className="division-num font-mono">{item.num} / VERTICAL</span>
              <h3 className="division-name font-sans">{item.name}</h3>
              <p className="division-subtitle font-mono">{item.subtitle}</p>
              <p className="division-desc font-mono">{item.desc}</p>

              <ul className="division-capabilities font-mono">
                {item.capabilities.map((cap, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={14} className="text-[#00a859]" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <Link href={item.link} className="division-link font-sans">
                <span>{item.linkText}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
