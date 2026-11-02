'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Video Production',
    description: 'Corporate video production, brand films, commercial advertisements, product & industrial videos, and cinematic storytelling.',
    details: 'Drone videography, event videography, high-speed 4K/8K capture, professional video editing, colour grading, motion graphics, visual effects, and sound design.',
  },
  {
    id: '02',
    title: 'Photography',
    description: 'Product, fashion, commercial, and advertising photography crafted with deliberate lighting and editorial mastery.',
    details: 'Corporate photography, event photography, high-definition lookbooks, ecommerce catalog shoots, and professional studio photography in Hyderabad & Tirupur.',
  },
  {
    id: '03',
    title: 'Digital Marketing',
    description: 'Google Ads, social media marketing, SEO, PPC campaigns, and conversion-focused growth ecosystems.',
    details: 'Facebook & Instagram advertising, search engine optimisation, influencer & WhatsApp marketing, email marketing, landing page creation, campaign management & ROI analytics.',
  },
  {
    id: '04',
    title: 'Creative & Branding',
    description: 'Brand strategy, brand development, creative advertising, graphic design, and cinematic brand storytelling.',
    details: 'Logo & visual identity design, social media creatives, high-converting advertising campaigns, brand guidelines, and AI-powered video advertisements.',
  },
  {
    id: '05',
    title: 'Sustainable Fashion',
    description: 'Organic cotton, hemp clothing, vegan silk, vegan leather, and premium customized garments manufactured in Tirupur.',
    details: 'Zero-discharge sustainable garment manufacturing, natural dyeing using fruits, flowers & vegetables, recycled packaging, plantable seed price tags, and ethical production.',
  },
];


export default function ServicesSection() {
  const [activeItem, setActiveItem] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.15 }
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
    <section ref={sectionRef} className={`services-section ${revealed ? 'reveal' : ''}`}>
      <div className="services-inner">
        <div className="services-title-area">
          <h2 className="services-section-title font-sans">
            What services
            <br />
            we provide you
            <br />
            <span className="accent-text text-green">actually</span>
          </h2>
        </div>

        <div className="services-list-container">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className={`service-item ${activeItem === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveItem(idx)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(activeItem === idx ? null : idx)}
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="service-row-header">
                <div className="service-id-title">
                  <span className="service-num font-mono">{item.id}</span>
                  <h3 className="service-title font-sans">{item.title}</h3>
                </div>
                <div className="service-arrow-wrapper">
                  <ArrowUpRight className="service-arrow" size={24} />
                </div>
              </div>

              <div className="service-row-details">
                <p className="service-desc font-sans">{item.description}</p>
                <p className="service-extended font-mono">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
