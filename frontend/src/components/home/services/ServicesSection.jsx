'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Art Direction',
    description: 'Our aim is to nurture brands and help them grow. And just like human brands need to grow.',
    details: 'Creative styling, visual storytelling, and aesthetic design systems built to establish a dominant brand footprint.',
  },
  {
    id: '02',
    title: 'Interaction Design',
    description: "Whether your inquiries are big or small, we're prepared to engage, focusing on complex problems.",
    details: 'Immersive user experience flows, micro-interactions, and state transitions that make websites feel dynamic and alive.',
  },
  {
    id: '03',
    title: 'Web & Mobile Development',
    description: 'Every opportunity comes with unique factors are the mainstream we can offer your brand.',
    details: 'Robust frontend code structures, scalable backend integrations, and responsive architectures utilizing modern web principles.',
  },
  {
    id: '04',
    title: 'Digital Marketing',
    description: 'We offer digital marketing that connect, engage, and drive results. Let’s turn your vision into reality.',
    details: 'Conversion-driven campaigns, data-led analytics modeling, search engine visibility mapping, and social media ecosystems.',
  },
  {
    id: '05',
    title: 'Brand Guideline',
    description: 'We always eager to collaborate with forward thinking individuals and the organizations.',
    details: 'A practical guide explaining how and why Strains should be part of every project to ensure its high quality and coherence.',
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
