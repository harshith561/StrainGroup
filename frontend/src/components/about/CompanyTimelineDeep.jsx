'use client';

import React from 'react';
import { History, Award, CheckCircle2, Globe, Sparkles, Building2, Layers } from 'lucide-react';

const DEEP_CHRONICLES = [
  {
    year: '2012',
    title: 'The Foundation in Germany & India',
    era: 'Genesis Era',
    narrative:
      'Strains Associates is founded as an international creative consultancy. Focusing initially on corporate identity, digital architectures, and brand positioning, Strains quickly established a reputation for uncompromising aesthetic precision and bold typography.',
    highlights: ['Corporate Identity Frameworks', 'First 15 European & Indian Clients', 'Foundational Design System'],
  },
  {
    year: '2015',
    title: 'Strains Stitchery — The Tirupur Revolution',
    era: 'Industrial Expansion',
    narrative:
      'Recognizing that modern brands need tangible, physical quality, founder Naga Praharsha Govindu commissioned the Strains Stitchery manufacturing factory in Tirupur, India’s textile heartland. The facility was designed around zero-discharge processes and organic apparel fabrication.',
    highlights: ['State-of-the-Art Garment Hub', 'Launch of Private Label Manufacturing', 'Zero Toxic Runoff Pledge'],
  },
  {
    year: '2018',
    title: 'Industrial Titans & High-Volume Campaigns',
    era: 'Scale & Authority',
    narrative:
      'Strains expanded into heavy enterprise markets, managing multi-year digital and creative accounts for industrial leaders such as JSW Cement and Pioneer Cranes. Combining high CTR digital campaigns with high-impact video reels.',
    highlights: ['JSW Cement Infrastructure Campaigns', 'Pioneer Cranes Performance Optimization', '3.5-Year High-ROI Accounts'],
  },
  {
    year: '2021',
    title: 'Strains Fashions & Eco-Innovation Launch',
    era: 'Sustainable Innovation',
    narrative:
      'The launch of Strains Fashions marked our entry into consumer conscious apparel. Introducing garments fabricated from organic hemp, vegan silk, fruit & vegetable dyeing, and biodegradable plantable seed tags.',
    highlights: ['Hemp & Vegan Silk Fabrics', 'Fruit & Flower Natural Dyeing', 'Green Collar Employment Network'],
  },
  {
    year: '2024',
    title: 'Full-Fidelity Commercial Video Production',
    era: 'Media Elevation',
    narrative:
      'Consolidating our media wing with dedicated cinema cameras, professional line production, and direction. Delivering television commercials, fashion lookbooks, and high-conversion social film assets.',
    highlights: ['Cinema-Grade Direction by Danny', 'Lighting & Photography by Pavan', '50+ Commercial Film Assets'],
  },
  {
    year: '2026',
    title: 'The Integrated Creative Ecosystem',
    era: 'Present & Beyond',
    narrative:
      'Strains Group stands as a rare, full-stack creative engine. Uniting strategy, design, film, and ethical manufacturing under one roof—empowering next-generation brands to launch, scale, and dominate globally.',
    highlights: ['Global Client Footprint', '3D Interactive Product Catalogues', 'Next-Gen Brand Incubation'],
  },
];

export default function CompanyTimelineDeep() {
  return (
    <section className="about-section alt-bg">
      <div className="about-container">
        <span className="section-kicker font-mono">
          <History size={14} />
          02 / The Strains Chronicles
        </span>
        <h2 className="section-main-heading font-sans">
          14 Years of Relentless Evolution
        </h2>
        <p className="section-lead-paragraph font-sans">
          Explore the defining chapters that built the Strains Group into an internationally
          recognized design and manufacturing ecosystem.
        </p>

        <div className="deep-timeline-list">
          {DEEP_CHRONICLES.map((item) => (
            <div key={item.year} className="deep-milestone-item">
              <div className="milestone-year-badge font-timeline">
                {item.year}
              </div>

              <div className="milestone-card-body">
                <div className="milestone-header-row">
                  <h3 className="milestone-heading font-sans">{item.title}</h3>
                  <span className="milestone-era-tag font-mono">{item.era}</span>
                </div>

                <p className="milestone-narrative font-mono">{item.narrative}</p>

                <div className="milestone-highlights-list font-mono">
                  {item.highlights.map((chip, idx) => (
                    <span key={idx} className="milestone-chip">
                      <CheckCircle2 size={13} className="text-[#00a859]" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
