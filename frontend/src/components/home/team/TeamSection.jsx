'use client';

import React, { useState, useEffect, useRef } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'James David',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 2,
    name: 'Brenda C. Janet',
    role: 'Lead UX Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 3,
    name: 'Martin Carlos',
    role: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    id: 4,
    name: 'Garry J. Coburn',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
  },
];

export default function TeamSection() {
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
            <div
              key={member.id}
              className="team-card-item"
              style={{ transitionDelay: `${idx * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
