'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'James David',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    profileUrl: '/team/james-david',
  },
  {
    id: 2,
    name: 'Brenda C. Janet',
    role: 'Lead UX Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    profileUrl: '/team/brenda-janet',
  },
  {
    id: 3,
    name: 'Martin Carlos',
    role: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    profileUrl: '/team/martin-carlos',
  },
  {
    id: 4,
    name: 'Garry J. Coburn',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    profileUrl: '/team/garry-j-coburn',
  },
];

export default function TeamSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Immediate fallback to ensure visibility on mobile/tablet
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
    <section ref={sectionRef} className={`team-section ${revealed ? 'reveal' : ''}`}>
      <div className="team-inner">
        <div className="team-header">
          <h2 className="team-title font-sans">
            Meet the talented squad,
            <br />
            behind the <span className="accent-text text-green">creativity</span>
          </h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <Link
              key={member.id}
              href={member.profileUrl}
              className="team-card-item block"
              style={{ transitionDelay: `${idx * 0.1}s` }}
              aria-label={`View profile of ${member.name}, ${member.role}`}
            >
              <div className="member-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-info-overlay">
                  <h4 className="member-name font-sans">{member.name}</h4>
                  <span className="member-role font-mono">{member.role}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
