'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Xiti',
    category: 'Premium Fashion & Video Production',
    image: '/images/case-studies/xiti-fashion.jpg',
    slug: '/case-studies/xiti-fashion',
  },
  {
    id: 2,
    title: 'Haraa Gold & Diamonds',
    category: 'Jewellery & Cinematic Storytelling',
    image: '/images/case-studies/haraa-jewellers.jpg',
    slug: '/case-studies/haraa-jewellers',
  },
  {
    id: 3,
    title: 'Pakka Non Veg',
    category: 'Restaurant Chain & Food Videography',
    image: '/images/case-studies/pakka-non-veg.jpg',
    slug: '/case-studies/pakka-non-veg',
  },
  {
    id: 4,
    title: 'JSW Cement',
    category: 'Infrastructure & Corporate Production',
    image: '/images/case-studies/jsw-cement.jpeg',
    slug: '/case-studies/jsw-cement',
  },
  {
    id: 5,
    title: 'Sri Bioaesthetics',
    category: 'Microbial Company & B2B Growth',
    image: '/images/case-studies/sri-bioaesthetics.jpg',
    slug: '/case-studies/sri-bioaesthetics',
  },
  {
    id: 6,
    title: 'Partha Dentals',
    category: 'Healthcare & Digital Marketing',
    image: '/images/case-studies/partha-dentals.jpg',
    slug: '/case-studies/partha-dentals',
  },
];


export default function PortfolioSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 250);

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
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`work-section ${revealed ? 'reveal' : ''}`}>
      <div className="work-inner">
        <div className="work-header-block">
          <div className="work-title-area">
            <h2 className="work-title font-sans">
              2018 - 2026
              <br />
              <span className="accent-text text-green">Work</span>
            </h2>
          </div>

          <div className="work-desc-area">
            <p className="work-desc font-sans">
              Strains Associates helps businesses build their brands through creative content, strategic digital marketing, professional video production, and sustainable fashion solutions.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Link
              href={project.slug}
              key={project.id}
              className="project-card"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="project-image-wrapper media-placeholder bg-[#141414]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => {
                    e.currentTarget.parentElement?.classList.remove('media-placeholder');
                  }}
                />
                <div className="project-hover-overlay">
                  <span className="hover-explore-btn font-mono">
                    EXPLORE PROJECT
                  </span>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category font-mono">
                  {project.category}
                </span>
                <h3 className="project-name font-sans">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="work-footer-cta">
          <Link href="/work" className="browse-all-btn pill-button font-mono">
            BROWSE MORE (20) <ArrowRight size={16} style={{ marginLeft: '10px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
