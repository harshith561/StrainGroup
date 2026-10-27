'use client';

import React from 'react';
import { Target, Leaf, Cpu, Award } from 'lucide-react';

const CORE_VALUES = [
  {
    num: '01',
    title: 'Uncompromising Craft',
    desc: 'We refuse generic shortcuts and cookie-cutter templates. Every identity system, commercial frame, and tailored garment is engineered with obsessive devotion to detail.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Zero-Discharge Ethics',
    desc: 'From natural fruit and vegetable dyes to organic cotton and hemp, our manufacturing hub in Tirupur proves that enterprise-scale production can be 100% sustainable.',
    icon: Leaf,
  },
  {
    num: '03',
    title: 'Symbiotic Full-Stack',
    desc: 'We eliminate the friction between conceptual designers and factory floors. An idea born on Monday can be filmed on cinema cameras by Thursday and sewn into sample garments by next week.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Radical Accountability',
    desc: 'We hold ourselves strictly to real business metrics: authentic conversion rates, durable brand equity, and verifiable supply chain integrity.',
    icon: Award,
  },
];

export default function AboutValues() {
  return (
    <section className="about-section">
      <div className="about-container">
        <span className="section-kicker font-mono">
          <Award size={14} />
          05 / Our Cardinal Codes
        </span>
        <h2 className="section-main-heading font-sans">
          Principles That Define Us
        </h2>
        <p className="section-lead-paragraph font-sans">
          The non-negotiable principles that guide every decision across our branding atelier,
          film production sets, and industrial textile looms.
        </p>

        <div className="values-four-grid">
          {CORE_VALUES.map((val) => {
            const IconComponent = val.icon;
            return (
              <div key={val.num} className="value-tenet-card">
                <div className="tenet-number font-timeline">{val.num}</div>
                <h4 className="tenet-title font-sans">{val.title}</h4>
                <p className="tenet-desc font-mono">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
