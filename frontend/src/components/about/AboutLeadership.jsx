'use client';

import React from 'react';
import Link from 'next/link';
import { Users, Award, Target, TrendingUp, Camera, Clapperboard, ArrowRight } from 'lucide-react';

export default function AboutLeadership() {
  return (
    <section className="about-section alt-bg">
      <div className="about-container">
        <span className="section-kicker font-mono">
          <Users size={14} />
          04 / Vision & Leadership
        </span>
        <h2 className="section-main-heading font-sans">
          The Minds Shaping Strains
        </h2>
        <p className="section-lead-paragraph font-sans">
          Steered by visionary creative directors, line producers, and sustainable manufacturing
          veterans committed to redefining what an agency can accomplish.
        </p>

        {/* Founder Spotlight Card */}
        <div className="founder-profile-card">
          <div className="founder-info-left">
            <span className="founder-role-tag font-mono">
              Founder & Line Producer
            </span>
            <h3 className="founder-name-large font-sans">
              <Link href="/team/naga-praharsha" className="hover:text-strain-green transition-colors">
                Naga Praharsha Govindu
              </Link>
            </h3>
            <p className="founder-bio-text font-mono">
              Founded Strains in 2012 with a bold multi-disciplinary vision: uniting cutting-edge
              brand design with real industrial apparel manufacturing in Tirupur. Praharsha acts
              as chief strategist and line producer, managing multi-tier client engagements,
              creative direction, and global eco-fashion initiatives.
            </p>
            <blockquote className="founder-quote font-sans">
              "We didn't set out to build another advertising firm. We set out to build an ecosystem
              where an idea born in the studio can be filmed on cinema cameras and sewn in our own
              zero-discharge factory within weeks."
            </blockquote>

            <div style={{ marginTop: '28px' }}>
              <Link href="/founder" className="division-link font-sans">
                <span>View Full Founder Biography</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="founder-metrics-sidebar font-mono">
            <div className="founder-metric-entry">
              <h5 className="font-timeline text-[#00a859]">14+</h5>
              <p>Years Strategic Leadership</p>
            </div>
            <div className="founder-metric-entry">
              <h5 className="font-timeline text-[#00a859]">250+</h5>
              <p>High-Fidelity Campaigns</p>
            </div>
            <div className="founder-metric-entry">
              <h5 className="font-timeline text-[#00a859]">100%</h5>
              <p>Zero-Discharge Operations</p>
            </div>
          </div>
        </div>

        {/* Key Department Leads Grid */}
        <div className="teams-structure-grid font-sans" style={{ marginTop: '50px' }}>
          <div className="team-struct-card">
            <div className="struct-header">
              <Clapperboard size={20} className="text-green" />
              <h4 className="struct-title">Direction & Film</h4>
            </div>
            <p className="struct-subtitle font-mono">Direction & Post-Production</p>
            <ul className="struct-list font-mono">
              <li>
                <Link href="/team/danny-cooper" className="hover:text-strain-green transition-colors">
                  <strong>Danny</strong> — Head of Direction & Post-Production
                </Link>
              </li>
              <li>High-End Colorists & Motion Artists</li>
              <li>VFX & Compositing Specialists</li>
            </ul>
          </div>

          <div className="team-struct-card">
            <div className="struct-header">
              <Camera size={20} className="text-green" />
              <h4 className="struct-title">Cinematography</h4>
            </div>
            <p className="struct-subtitle font-mono">Camera, Lighting & Visuals</p>
            <ul className="struct-list font-mono">
              <li>
                <Link href="/team/pavan-kumar" className="hover:text-strain-green transition-colors">
                  <strong>Pavan</strong> — Head of Photography & Videography
                </Link>
              </li>
              <li>Professional Studio Photographers</li>
              <li>Gaffers & Lighting Engineers</li>
            </ul>
          </div>

          <div className="team-struct-card">
            <div className="struct-header">
              <TrendingUp size={20} className="text-green" />
              <h4 className="struct-title">Growth & Performance</h4>
            </div>
            <p className="struct-subtitle font-mono">Digital Media & Conversion</p>
            <ul className="struct-list font-mono">
              <li>
                <Link href="/team/prasad-varma" className="hover:text-strain-green transition-colors">
                  <strong>Prasad</strong> — Head of Digital Marketing
                </Link>
              </li>
              <li>Performance Advertising Strategists</li>
              <li>UI/UX & Interactive Engineers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
