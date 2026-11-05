'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: 'Praharsha',
    role: 'Strategy Maker and Line Producer',
    image: '/images/ecosystem/team-praharsha.jpg',
    profileUrl: '/team/naga-praharsha',
  },
  {
    id: 2,
    name: 'Pavan',
    role: 'Head of Photography and Videography',
    image: '/images/ecosystem/team-pavan.jpg',
    profileUrl: '/team/pavan-kumar',
  },
  {
    id: 3,
    name: 'Danny',
    role: 'Head of Direction and Post-production',
    image: '/images/ecosystem/team-danny.jpg',
    profileUrl: '/team/danny-cooper',
  },
  {
    id: 4,
    name: 'Prasad',
    role: 'Head of Digital Marketing Team',
    image: '/images/ecosystem/team-prasad.jpg',
    profileUrl: '/team/prasad-varma',
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
              <div className="member-image-wrapper media-placeholder bg-[#141414]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image object-cover object-top w-full h-full"
                  loading="lazy"
                  decoding="async"
                  onLoad={(e) => {
                    e.currentTarget.parentElement?.classList.remove('media-placeholder');
                  }}
                />
                <div className="member-info-overlay">
                  <h3 className="member-name font-sans">{member.name}</h3>
                  <p className="member-role font-mono">{member.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
