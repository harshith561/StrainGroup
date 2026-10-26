'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Saudi Lime Green',
    category: 'Branding & Campaigns',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Panda Automap',
    category: 'UI/UX Mobile Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Saudi Venture Capital',
    category: 'Corporate Platforms',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Rebrand Lawberry',
    category: 'Web Development & Identity',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Selicon Cloud Cave',
    category: 'Cloud Engineering & Security',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Mountain Upwork',
    category: 'Creative Marketing & Direction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
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
              2017- 2025
              <br />
              <span className="accent-text text-green">Work</span>
            </h2>
          </div>

          <div className="work-desc-area">
            <p className="work-desc font-sans">
              We help brands and people be part of the solution. As a cause-led branding and communications agency, we harness the power of technology and creativity to drive positive changes.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Link
              href="/portfolio"
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
