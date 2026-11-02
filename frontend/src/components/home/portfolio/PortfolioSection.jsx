'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Xiti',
    category: 'Premium Fashion & Video Production',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    slug: '/case-studies/xiti-fashion',
  },
  {
    id: 2,
    title: 'Haraa Gold & Diamonds',
    category: 'Jewellery & Cinematic Storytelling',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    slug: '/case-studies/haraa-jewellers',
  },
  {
    id: 3,
    title: 'Pakka Non Veg',
    category: 'Restaurant Chain & Food Videography',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    slug: '/case-studies/pakka-non-veg',
  },
  {
    id: 4,
    title: 'JSW Cement',
    category: 'Infrastructure & Corporate Production',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    slug: '/case-studies/jsw-cement',
  },
  {
    id: 5,
    title: 'Sri Bioaesthetics',
    category: 'Microbial Company & B2B Growth',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    slug: '/case-studies/sri-bioaesthetics',
  },
  {
    id: 6,
    title: 'Partha Dentals',
    category: 'Healthcare & Digital Marketing',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
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
              <div className="project-image-wrapper ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
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
