'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Settings,
  Leaf,
  Sparkles,
  Heart,
  Shield,
  Truck,
  Ruler,
  Package,
} from 'lucide-react';

export default function StitcherySection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        setRevealed(true);
      }
    }

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
      className={`stitchery-section ${revealed ? 'reveal section-visible' : ''}`}
      id="stitchery-manufacturing"
    >
      <div className="stitchery-inner">
        <div className="stitchery-header">
          <span className="stitchery-tag font-mono reveal-item">Industrial Manufacturing</span>
          <h2 className="stitchery-title font-sans reveal-item">Strains Stitchery Manufacturing Hub</h2>
          <p className="stitchery-desc font-mono reveal-item">
            Bridging scale manufacturing with sustainability to empower conscious brands.
          </p>
        </div>

        {/* 01 - Tirupur Production Hub */}
        <div className="stitchery-block reveal-item">
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

        {/* 02 - Organic & Alternative Fabrics */}
        <div className="stitchery-block alternate reveal-item">
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

        {/* 03 - Eco-Dyeing & Circular Process */}
        <div className="stitchery-block reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">03</span>
            <h3 className="block-heading font-sans reveal-item">
              Eco-Dyeing & Circular Process
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              All coloring processes utilize non-toxic dyes derived from fruits, flowers, and vegetables. We operate a zero-waste loop, packaging finished garments in recycled paper sleeves with plantable seed price tags that consumers can grow at home.
            </p>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Sparkles className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Natural Botanical Pigments</h4>
              <p className="showcase-desc font-mono">
                Natural dyeing reduces chemical waste, preserving clean groundwater channels in Tirupur while yielding beautiful earthy tones.
              </p>
            </div>
          </div>
        </div>

        {/* 04 - Green Collar Jobs & Fair Trade */}
        <div className="stitchery-block alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">04</span>
            <h3 className="block-heading font-sans reveal-item">
              Green Collar Jobs & Fair Trade
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Strains Stitchery maintains strict ethical workplace standards. We focus on fair living wages, healthy working conditions, local skill development, and fostering stable green collar jobs within India's textile capital.
            </p>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Heart className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Ethical Manufacturing</h4>
              <p className="showcase-desc font-mono">
                Prioritizing safety, transparency, and social welfare, ensuring that our clothing is ethically made from seed to stitch.
              </p>
            </div>
          </div>
        </div>

        {/* 05 - Rigorous Quality Control */}
        <div className="stitchery-block reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">05</span>
            <h3 className="block-heading font-sans reveal-item">
              Rigorous Quality Control
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Every garment undergoes multi-stage inspection — from fabric testing and stitching precision checks to final packaging review. Our dedicated QC team ensures that each piece meets international standards before dispatch.
            </p>
            <ul className="stitchery-feature-list font-mono">
              <li className="reveal-item">• 4-stage QC inspection process</li>
              <li className="reveal-item">• Fabric strength & colorfastness testing</li>
              <li className="reveal-item">• AQL-based random sampling audits</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Shield className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Uncompromising Standards</h4>
              <p className="showcase-desc font-mono">
                Zero-defect philosophy backed by trained inspectors, precision measuring tools, and digital tracking systems that flag deviations in real time.
              </p>
            </div>
          </div>
        </div>

        {/* 06 - Global Logistics & Supply Chain */}
        <div className="stitchery-block alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">06</span>
            <h3 className="block-heading font-sans reveal-item">
              Global Logistics & Supply Chain
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              We manage end-to-end shipping and customs clearance for international clients. From Tirupur to Tokyo, London to New York — our logistics partners ensure timely delivery with full shipment tracking and consolidated freight options.
            </p>
            <ul className="stitchery-feature-list font-mono">
              <li className="reveal-item">• Air & sea freight consolidation</li>
              <li className="reveal-item">• Real-time shipment tracking portal</li>
              <li className="reveal-item">• Customs documentation & compliance</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Truck className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Seamless Worldwide Delivery</h4>
              <p className="showcase-desc font-mono">
                Strategic warehousing partnerships and optimized shipping routes that reduce transit times and costs for bulk and sample orders alike.
              </p>
            </div>
          </div>
        </div>

        {/* 07 - Custom Design & Pattern Engineering */}
        <div className="stitchery-block reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">07</span>
            <h3 className="block-heading font-sans reveal-item">
              Custom Design & Pattern Engineering
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              Our in-house design studio offers end-to-end pattern making, grading, and sampling. From tech packs to finished prototypes, we help emerging and established brands bring their vision to life with precision and speed.
            </p>
            <ul className="stitchery-feature-list font-mono">
              <li className="reveal-item">• Digital pattern grading & marker making</li>
              <li className="reveal-item">• Rapid sampling within 7-10 days</li>
              <li className="reveal-item">• Tech pack development & consultation</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Ruler className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">From Concept to Creation</h4>
              <p className="showcase-desc font-mono">
                Expert pattern engineers using industry-grade CAD software to ensure accurate fits, minimal fabric waste, and seamless transition from sample to mass production.
              </p>
            </div>
          </div>
        </div>

        {/* 08 - Bulk Ordering & Wholesale Programs */}
        <div className="stitchery-block alternate reveal-item">
          <div className="block-meta">
            <span className="block-num font-mono reveal-item">08</span>
            <h3 className="block-heading font-sans reveal-item">
              Bulk Ordering & Wholesale Programs
            </h3>
            <p className="block-paragraph font-mono reveal-item">
              We offer scalable production capacities with flexible minimum order quantities. Our wholesale program provides tiered pricing, dedicated account management, and priority production slots for recurring partners.
            </p>
            <ul className="stitchery-feature-list font-mono">
              <li className="reveal-item">• Low MOQ starting from 50 units</li>
              <li className="reveal-item">• Volume-based pricing tiers</li>
              <li className="reveal-item">• Dedicated account management</li>
            </ul>
          </div>
          <div className="block-showcase">
            <div className="showcase-card reveal-item">
              <Package className="showcase-icon text-green" size={32} />
              <h4 className="showcase-title font-sans">Partnership-First Approach</h4>
              <p className="showcase-desc font-mono">
                Transparent pricing, flexible payment terms, and dedicated support teams ensure that scaling your production is smooth, predictable, and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
