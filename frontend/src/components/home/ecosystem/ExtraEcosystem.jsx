'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Recycle,
  Factory,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

function useReveal(threshold = 0.1) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed];
}

function AnimatedNumber({ value, revealed }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    const isK = typeof value === 'string' && value.endsWith('K');
    const isL = typeof value === 'string' && value.endsWith('L');
    const isPercent = typeof value === 'string' && value.endsWith('%');
    const isRupee = typeof value === 'string' && value.startsWith('₹');
    let target = 0;

    if (isPercent) {
      target = parseFloat(value);
    } else if (isK) {
      target = parseFloat(value) * 1000;
    } else if (isL) {
      target = parseFloat(value.replace('₹', '').replace('L', '')) * 100000;
    } else if (isRupee) {
      const clean = value.replace('₹', '').replace(/,/g, '');
      target = parseFloat(clean);
    } else {
      target = parseFloat(String(value).replace(/,/g, ''));
    }

    if (isNaN(target)) {
      setDisplayValue(0);
      return;
    }

    const steps = 60;
    const stepVal = target / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentVal = Math.min(stepVal * currentStep, target);
      setDisplayValue(currentVal);
      if (currentStep >= steps) clearInterval(timer);
    }, 1500 / steps);

    return () => clearInterval(timer);
  }, [revealed, value]);

  if (displayValue === 0) return '0';
  if (typeof value === 'string' && value.startsWith('₹') && value.includes('L')) {
    return `₹${(displayValue / 100000).toFixed(2)}L`;
  }
  if (typeof value === 'string' && value.startsWith('₹')) {
    return `₹${displayValue.toFixed(2)}`;
  }
  if (typeof value === 'string' && value.endsWith('%')) {
    return `${displayValue.toFixed(2)}%`;
  }
  if (typeof value === 'string' && value.endsWith('K')) {
    return `${(displayValue / 1000).toFixed(0)}K`;
  }
  if (typeof value === 'string' && value.includes(',')) {
    return Math.round(displayValue).toLocaleString();
  }
  return displayValue.toFixed(displayValue % 1 === 0 ? 0 : 2);
}

export default function ExtraEcosystem() {
  const [activeTab, setActiveTab] = useState('aastu');
  const [sec1Ref, sec1Visible] = useReveal(0.1);
  const [sec2Ref, sec2Visible] = useReveal(0.1);
  const [sec3Ref, sec3Visible] = useReveal(0.1);
  const [sec4Ref, sec4Visible] = useReveal(0.1);
  const [wrapperRef, wrapperVisible] = useReveal(0.05);

  return (
    <div ref={wrapperRef} className={`pdf-extra-wrapper ${wrapperVisible ? 'reveal' : ''}`}>
      {/* 01 / Fashion & Manufacturing */}
      <section
        ref={sec1Ref}
        className={`extra-section fashion-manufacturing ${sec1Visible ? 'section-visible' : ''}`}
      >
        <div className="section-header">
          <span className="section-tag font-mono reveal-item">
            01 / Fashion & Manufacturing
          </span>
          <h2 className="section-title font-sans reveal-item">
            Strains Fashions & Stitchery
          </h2>
        </div>

        <div className="fashion-grid">
          {/* Strains Fashions Brand Card */}
          <div className="fashion-card brand-card reveal-item">
            <div className="card-icon">
              <Recycle size={28} className="text-green" />
            </div>
            <h3 className="card-heading font-sans">
              Introducing Strains Fashions
            </h3>
            <p className="card-subheading font-mono">
              Sustainable Fashion Brand
            </p>

            <div className="detail-item">
              <span className="detail-title font-sans">Organic Materials</span>
              <p className="detail-desc font-mono">
                Premium customized clothing made from organic cotton, hemp, vegan silk, and vegan leather for conscious consumers.
              </p>
            </div>

            <div className="detail-item">
              <span className="detail-title font-sans">Eco-Friendly Process</span>
              <p className="detail-desc font-mono">
                Natural dyeing sourced from fruits, flowers, and vegetables with recycled packaging and plantable price tags.
              </p>
            </div>
          </div>

          {/* Strains Stitchery Factory Card */}
          <div className="fashion-card factory-card reveal-item">
            <div className="card-icon">
              <Factory size={28} className="text-green" />
            </div>
            <h3 className="card-heading font-sans">
              Manufacturing Excellence
            </h3>
            <p className="card-subheading font-mono">
              Strains Stitchery Factory
            </p>
            <p className="detail-desc font-mono main-desc">
              Operating our own state-of-the-art garments manufacturing factory in{' '}
              <strong>Tirupur</strong>, the textile capital of India, supporting new-age fashion brands globally.
            </p>

            <div className="badge-grid font-sans">
              <div className="mfg-badge reveal-item">
                <CheckCircle2 size={14} /> Premium Hemp Shirts
              </div>
              <div className="mfg-badge reveal-item">
                <CheckCircle2 size={14} /> Green Collar Jobs
              </div>
              <div className="mfg-badge reveal-item">
                <CheckCircle2 size={14} /> Sustainable Manufacturing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / Campaign Performance */}
      <section
        ref={sec2Ref}
        className={`extra-section case-studies ${sec2Visible ? 'section-visible' : ''}`}
      >
        <div className="section-header">
          <span className="section-tag font-mono reveal-item">
            02 / Campaign Performance
          </span>
          <h2 className="section-title font-sans reveal-item">
            Case Studies & Performance Metrics
          </h2>
        </div>

        <div className="tab-control font-mono reveal-item">
          <button
            className={`tab-btn ${activeTab === 'aastu' ? 'active' : ''}`}
            onClick={() => setActiveTab('aastu')}
          >
            Aastu Refrigeration
          </button>
          <button
            className={`tab-btn ${activeTab === 'pioneer' ? 'active' : ''}`}
            onClick={() => setActiveTab('pioneer')}
          >
            Pioneer Cranes
          </button>
        </div>

        <div className="dashboard-container reveal-item">
          {activeTab === 'aastu' && (
            <div className="dashboard-view aastu-view animate-fade">
              <div className="dashboard-metrics">
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="4.64%" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Click Through Rate</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="90.8%" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Optimization Score</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="21,800" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Total Clicks</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="471K" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Impressions</span>
                </div>
              </div>

              <div className="dashboard-summary font-mono">
                <h4 className="summary-title font-sans">Campaign Insights</h4>
                <p>
                  Achieved outstanding performance over a <strong>3.5-year campaign duration</strong>. Reached high audience engagement and structural CTR metrics at an extremely cost-efficient spend of <strong>₹287,000</strong>.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'pioneer' && (
            <div className="dashboard-view pioneer-view animate-fade">
              <div className="dashboard-metrics">
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="₹13.01" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Average CPC</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="18,800" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Total Clicks</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="368K" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Impressions</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value text-green font-sans">
                    <AnimatedNumber value="₹2.45L" revealed={sec2Visible} />
                  </span>
                  <span className="metric-label font-mono">Total Campaign Spend</span>
                </div>
              </div>

              <div className="dashboard-summary font-mono">
                <h4 className="summary-title font-sans">Campaign Insights</h4>
                <p>
                  Demonstrated exceptional cost-efficiency and conversion optimization. Reached outstanding ROI with strong industrial sector engagement and structural CPC optimization at a minimal total investment.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 03 / Leadership & Structure */}
      <section
        ref={sec3Ref}
        className={`extra-section founder-team ${sec3Visible ? 'section-visible' : ''}`}
      >
        <div className="section-header">
          <span className="section-tag font-mono reveal-item">
            03 / Leadership & Structure
          </span>
          <h2 className="section-title font-sans reveal-item">
            Founder & Core Team Excellence
          </h2>
        </div>

        <div className="founder-spotlight reveal-item">
          <div className="founder-info">
            <span className="founder-title font-mono">Founder & Line Producer</span>
            <h3 className="founder-name font-sans">Naga Praharsha Govindu</h3>
            <p className="founder-bio font-mono">
              Leading Strains Group with a vision centered on sustainable growth, organic brand architectures, production excellence, and high-fidelity industrial creative solutions.
            </p>
          </div>
        </div>

        <div className="teams-structure-grid font-sans">
          <div className="team-struct-card reveal-item">
            <div className="struct-header">
              <Target size={20} className="text-green" />
              <h4 className="struct-title">Strategy Team</h4>
            </div>
            <p className="struct-subtitle font-mono">Strategic Leadership & Direction</p>
            <ul className="struct-list font-mono">
              <li><strong>Praharsha</strong> - Strategy Maker & Line Producer</li>
              <li><strong>Pavan</strong> - Head of Photography & Videography</li>
              <li><strong>Danny</strong> - Head of Direction & Post-production</li>
            </ul>
          </div>

          <div className="team-struct-card reveal-item">
            <div className="struct-header">
              <TrendingUp size={20} className="text-green" />
              <h4 className="struct-title">Digital Marketing</h4>
            </div>
            <p className="struct-subtitle font-mono">Creative & Digital Solutions</p>
            <ul className="struct-list font-mono">
              <li><strong>Prasad</strong> - Head of Digital Marketing</li>
              <li>Video & Photo Editors</li>
              <li>Graphic Designers & Illustrators</li>
            </ul>
          </div>

          <div className="team-struct-card reveal-item">
            <div className="struct-header">
              <Users size={20} className="text-green" />
              <h4 className="struct-title">Production Team</h4>
            </div>
            <p className="struct-subtitle font-mono">Technical & Production Support</p>
            <ul className="struct-list font-mono">
              <li>Professional Photographers</li>
              <li>Videographers & Light Technicians</li>
              <li>Dedicated Support Staff</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 04 / Brands We Worked With */}
      <section
        ref={sec4Ref}
        className={`extra-section client-portfolio ${sec4Visible ? 'section-visible' : ''}`}
      >
        <div className="section-header">
          <span className="section-tag font-mono reveal-item">
            04 / Brands We Worked With
          </span>
          <h2 className="section-title font-sans reveal-item">
            Our Client Portfolio
          </h2>
        </div>

        <div className="portfolio-categories">
          <div className="category-block reveal-item">
            <h3 className="category-title font-sans">Fashion & Food Brands</h3>
            <div className="brand-list font-mono">
              <div className="brand-badge reveal-item">
                Xiti <span className="brand-tag">Premium Fashion</span>
              </div>
              <div className="brand-badge reveal-item">
                Haraa <span className="brand-tag">Gold & Jewellers</span>
              </div>
              <div className="brand-badge reveal-item">
                Pakka Non Veg <span className="brand-tag">Restaurant</span>
              </div>
            </div>
          </div>

          <div className="category-block reveal-item">
            <h3 className="category-title font-sans">Industrial & Corporate</h3>
            <div className="brand-list font-mono">
              <div className="brand-badge reveal-item">
                JSW Cement <span className="brand-tag">Infrastructure</span>
              </div>
              <div className="brand-badge reveal-item">
                Sri Bioaesthetics <span className="brand-tag">Microbial Company</span>
              </div>
              <div className="brand-badge reveal-item">
                Partha Dentals <span className="brand-tag">Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
