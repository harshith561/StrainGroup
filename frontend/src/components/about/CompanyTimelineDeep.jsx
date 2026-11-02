'use client';

import React from 'react';
import { History, Award, CheckCircle2, Globe, Sparkles, Building2, Layers } from 'lucide-react';

const DEEP_CHRONICLES = [
  {
    year: '2018',
    title: 'Genesis: Incorporated in Hyderabad',
    era: 'Genesis Era',
    narrative:
      'Strains was officially incorporated on 13 November 2018 (Strains Fashions Private Limited) in Hyderabad, Telangana. Founded with a forward-looking vision: bridging modern brand design, digital marketing, and video production with sustainable enterprise.',
    highlights: ['Registered Corporate Entity', 'Creative Agency Launch', 'Foundational Design System'],
  },
  {
    year: '2019',
    title: 'Strains Stitchery — The Tirupur Facility',
    era: 'Industrial Expansion',
    narrative:
      'Recognizing that modern brands need tangible, physical quality, the company commissioned the sustainable garment manufacturing facility in Tirupur, Tamil Nadu. The facility was designed around zero-discharge processes, organic cotton, and eco-friendly fabrication.',
    highlights: ['State-of-the-Art Garment Hub', 'Eco-Friendly Manufacturing', 'Zero Toxic Runoff Pledge'],
  },
  {
    year: '2020',
    title: 'Industrial Titans & Proven Performance',
    era: 'Scale & Authority',
    narrative:
      'Strains expanded into enterprise markets, managing multi-year digital and creative accounts for industrial leaders such as Pioneer Cranes and Aastu Refrigeration. Delivering 90.8% Google Ads optimization scores and high CTR performance.',
    highlights: ['JSW Cement Infrastructure Campaigns', 'Pioneer Cranes Performance Optimization', '3.5-Year High-ROI Accounts'],
  },
  {
    year: '2022',
    title: 'Sustainable Fashion & Material Innovation',
    era: 'Sustainable Innovation',
    narrative:
      'Pioneered conscious apparel with products fabricated from organic hemp, organic cotton, vegan silk, vegan leather, natural dyeing using fruits and vegetables, and biodegradable plantable seed tags.',
    highlights: ['Hemp, Vegan Silk & Vegan Leather', 'Fruit & Flower Natural Dyeing', 'Plantable Seed Price Tags'],
  },
  {
    year: '2024',
    title: 'Commercial Video Production & Studio Photography',
    era: 'Media Elevation',
    narrative:
      'Consolidating our full media wing with cinema-grade cameras, drone videography, line production, and sound design. Delivering corporate films, commercials, lookbooks, and high-conversion social video assets.',
    highlights: ['Direction & Post-Production by Danny', 'Photography & Videography by Pavan', 'Corporate, Drone & Commercial Films'],
  },
  {
    year: '2026',
    title: 'Integrated Creative Agency & Sustainable Fashion Hub',
    era: 'Present & Beyond',
    narrative:
      'Strains Associates stands as a comprehensive powerhouse: creative branding, digital marketing, video production, and sustainable fashion solutions uniting Hyderabad strategic direction with Tirupur manufacturing.',
    highlights: ['Complete Creative & Digital Stack', 'End-to-End Video Production', 'Sustainable Manufacturing Hub'],
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
          8+ Years of Relentless Evolution
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
