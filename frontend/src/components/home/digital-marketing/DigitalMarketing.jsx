'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Settings,
  Leaf,
  Video,
  BarChart3,
  Users,
  Search,
  Send,
} from 'lucide-react';

export default function DigitalMarketing() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.1 }
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
      ref={sectionRef}
      className={`digital-marketing-section ${revealed ? 'reveal section-visible' : ''}`}
      id="digital-marketing"
    >
      <div className="digital-marketing-inner">
        <div className="digital-marketing-header">
          <span className="dm-tag font-mono reveal-item">Industrial Manufacturing</span>
          <h2 className="dm-title font-sans reveal-item">Strains Stitchery Manufacturing Hub</h2>
          <p className="dm-desc font-mono reveal-item">
            Bridging scale manufacturing with sustainability to empower conscious brands.
          </p>
        </div>

        {/* 01 - Strategy & Organic Brand Building */}
        <div className="dm-block section-strategy reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">01</span>
            <h3 className="block-heading font-sans reveal-item">
              Tirupur Production Hub
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Located in Tirupur, the textile capital of India, our garments manufacturing facility is equipped with modern, automated precision sewing and cutting machinery. We provide low-minimum and scale production runs to support global, new-age fashion brands.
            </p>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Settings className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">State of the Art Factory</h4>
              <p className="showcase-desc font-mono">
                Equipped with specialized high-speed flatlock, overlock, and custom cutting tables optimized for knitwear and heavy hemp weaves.
              </p>
            </div>
          </div>
        </div>

        {/* 02 - Cinematic Video & Photo Production */}
        <div className="dm-block section-production alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">02</span>
            <h3 className="block-heading font-sans reveal-item">
              Organic & Alternative Fabrics
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              We specialize in sourcing and processing alternative raw materials. We create garments using premium organic cotton, highly durable hemp fabrics, natural vegan silk, and premium biodegradable vegan leather.
            </p>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Leaf className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Premium Hemp Shirts</h4>
              <p className="showcase-desc font-mono">
                Crafting customized hemp shirts that are naturally breathable, antimicrobial, UV resistant, and require 80% less water to grow than conventional fibers.
              </p>
            </div>
          </div>
        </div>

        {/* 03 - Data-Driven Performance Analytics */}
        <div className="dm-block section-analytics reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">03</span>
            <h3 className="block-heading font-sans reveal-item">
              Data-Driven Performance Analytics
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Under Prasad's leadership, our marketing team implements cost-efficient PPC advertising models. We monitor and optimize conversion rates, average cost-per-click, and click-through rates to deliver stellar ROI.
            </p>
            <div className="dm-stats-row">
              <div className="dm-stat-box reveal-item">
                <span className="stat-val text-green font-sans">4.64%</span>
                <span className="stat-label font-mono">CTR Optimization</span>
              </div>
              <div className="dm-stat-box reveal-item">
                <span className="stat-val text-green font-sans">₹13.01</span>
                <span className="stat-label font-mono">Avg CPC Target</span>
              </div>
            </div>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <BarChart3 className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Measurable Campaign Performance</h4>
              <p className="showcase-desc font-mono">
                Using deep tracking systems, real-time attribution, and daily budget optimizations to minimize waste and maximize customer acquisition.
              </p>
            </div>
          </div>
        </div>

        {/* 04 - Social Media & Community Management */}
        <div className="dm-block section-social alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">04</span>
            <h3 className="block-heading font-sans reveal-item">
              Social Media & Community Management
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              We build thriving brand communities across Instagram, LinkedIn, Twitter, and emerging platforms. Our team manages content calendars, engagement strategies, influencer collaborations, and real-time social listening to keep your brand culturally relevant.
            </p>
            <ul className="dm-feature-list font-mono">
              <li className="reveal-item">• Platform-specific content strategy</li>
              <li className="reveal-item">• Influencer & creator partnership programs</li>
              <li className="reveal-item">• Social listening & sentiment analysis</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Users className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Community-First Growth</h4>
              <p className="showcase-desc font-mono">
                Turning followers into advocates through authentic engagement, UGC campaigns, and data-backed posting schedules tailored to each platform's algorithm.
              </p>
            </div>
          </div>
        </div>

        {/* 05 - SEO & Content Marketing */}
        <div className="dm-block section-seo reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">05</span>
            <h3 className="block-heading font-sans reveal-item">
              SEO & Content Marketing
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Our SEO-driven content marketing strategy ensures your brand ranks high on search engines while delivering genuine value. We cover keyword research, on-page optimization, technical SEO audits, and high-quality editorial content creation.
            </p>
            <ul className="dm-feature-list font-mono">
              <li className="reveal-item">• Technical SEO & site architecture audits</li>
              <li className="reveal-item">• Long-form editorial & blog content</li>
              <li className="reveal-item">• Backlink strategy & authority building</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Search className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Search-First Visibility</h4>
              <p className="showcase-desc font-mono">
                Comprehensive keyword mapping and content clusters that drive organic traffic, reduce bounce rates, and establish your brand as an industry authority.
              </p>
            </div>
          </div>
        </div>

        {/* 06 - Email Marketing & Automation */}
        <div className="dm-block section-email alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">06</span>
            <h3 className="block-heading font-sans reveal-item">
              Email Marketing & Automation
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              We design personalized email funnels that nurture leads from first touch to loyal customer. Our automated workflows include welcome sequences, abandoned cart recovery, post-purchase follow-ups, and segmented newsletter campaigns.
            </p>
            <ul className="dm-feature-list font-mono">
              <li className="reveal-item">• Custom automation workflow design</li>
              <li className="reveal-item">• A/B tested subject lines & CTAs</li>
              <li className="reveal-item">• Detailed performance & ROI reporting</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Send className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Automated Revenue Engines</h4>
              <p className="showcase-desc font-mono">
                Smart segmentation and behavioral triggers that deliver the right message at the right time, maximizing open rates, click-throughs, and lifetime customer value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
