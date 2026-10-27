'use client';

import React from 'react';
import { ShieldCheck, Sparkles, Cpu, Award } from 'lucide-react';

export default function AboutStory() {
  return (
    <section id="about-story" className="about-section">
      <div className="about-container">
        <span className="section-kicker font-mono">
          <Sparkles size={14} />
          01 / The Strains Genesis
        </span>
        <h2 className="section-main-heading font-sans">
          Engineering Impact Beyond Aesthetics
        </h2>
        <p className="section-lead-paragraph font-sans">
          Most agencies stay within the comfortable confines of screen mockups. We believed that
          true brand power demands physical manifestation, uncompromising sustainability, and
          multi-disciplinary execution.
        </p>

        <div className="story-grid">
          {/* Left Column: Narrative & Philosophy */}
          <div className="story-left">
            <blockquote className="story-lead-quote font-sans">
              "Since 2012, our mission has remained uncompromised: to merge the conceptual genius of a
              top-tier design atelier with the industrial precision of a real manufacturing powerhouse."
            </blockquote>

            <div className="story-paragraphs font-mono">
              <p>
                When Strains was founded in 2012, the branding landscape was fragmented. Creative
                agencies conceptualized identities without understanding production logistics,
                while manufacturers executed without design sensitivity. Strains broke this divide.
              </p>
              <p>
                By building our own garments manufacturing facility in <strong>Tirupur</strong>,
                establishing an in-house commercial video production crew, and deploying data-driven
                performance marketing, we offer what no standard agency can: <strong>full-cycle custody of your brand</strong>.
              </p>
              <p>
                From corporate giants like JSW Cement to boutique fashion labels like Xiti, we bring
                the same obsessive craftsmanship to every pixel, frame, and stitch.
              </p>
            </div>
          </div>

          {/* Right Column: Key Core Tenets */}
          <div className="story-card-stack">
            <div className="story-feature-card">
              <div className="story-feature-header">
                <ShieldCheck size={22} className="story-feature-icon" />
                <h4 className="story-feature-title font-sans">Zero Compromise Ethics</h4>
              </div>
              <p className="story-feature-desc font-mono">
                Operating a 100% zero-discharge manufacturing hub using organic cotton, natural vegetable dyes, and fair-wage green-collar jobs.
              </p>
            </div>

            <div className="story-feature-card">
              <div className="story-feature-header">
                <Cpu size={22} className="story-feature-icon" />
                <h4 className="story-feature-title font-sans">Full Spectrum Synergy</h4>
              </div>
              <p className="story-feature-desc font-mono">
                Seamless transition from strategic brand book to commercial film production to physical retail merchandise delivery.
              </p>
            </div>

            <div className="story-feature-card">
              <div className="story-feature-header">
                <Award size={22} className="story-feature-icon" />
                <h4 className="story-feature-title font-sans">Proven Industrial Track Record</h4>
              </div>
              <p className="story-feature-desc font-mono">
                Over a decade of multi-million rupee campaign performance across infrastructure, healthcare, food, and global couture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
