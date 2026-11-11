'use client';

import React, { useState, useEffect, useRef } from 'react';

/* ==========================================================================
   EASY-TO-EDIT SECTION CONFIGURATION
   ✏️ Change any text, headline, or statistics directly here:
   ========================================================================== */
export const WHO_WE_ARE_DATA = {
  tag: 'WHO ARE WE?',
  headline: 'Creative Agency,\nDigital Marketing &\nSustainable Fashion.',
  stats: [
    {
      id: 'stat-1',
      label: 'Google Ads Optimization',
      displayValue: '90.8%',
      target: 90.8,
      decimals: 1,
      suffix: '%',
    },
    {
      id: 'stat-2',
      label: 'Procurement Inquiries',
      displayValue: '40.6K',
      target: 40.6,
      decimals: 1,
      suffix: 'K',
    },
    {
      id: 'stat-3',
      label: 'Audience Impressions',
      displayValue: '839K',
      target: 839,
      decimals: 0,
      suffix: 'K',
    },
    {
      id: 'stat-4',
      label: 'Campaign Engagement',
      displayValue: '3.5 Yrs',
      target: 3.5,
      decimals: 1,
      suffix: ' Yrs',
    },
  ],
};


function StatCard({ stat, isRevealed, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isRevealed) {
      setCount(0);
      return;
    }

    let animFrame = null;
    const startDelay = index * 130;

    const delayTimer = setTimeout(() => {
      let startTime = null;
      const duration = 1400; // 1.4s smooth easing animation

      const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = easeOutExpo(progress);
        const current = eased * stat.target;

        setCount(current);

        if (progress < 1) {
          animFrame = requestAnimationFrame(step);
        } else {
          setCount(stat.target);
        }
      };

      animFrame = requestAnimationFrame(step);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [isRevealed, stat.target, index]);

  const formattedValue =
    count.toFixed(stat.decimals) + stat.suffix;

  return (
    <div
      className="about-stat-card"
      style={{ '--stat-index': index }}
    >
      <span className="about-stat-label font-sans">{stat.label}</span>
      <div className="about-stat-value-wrap">
        <span className="about-stat-value font-sans">{formattedValue}</span>
        <span className="about-stat-sparkle" />
      </div>
    </div>
  );
}

export default function AboutWhoWeAreSection({ data = WHO_WE_ARE_DATA }) {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  return (
    <section
      id="about-who-we-are-section"
      ref={sectionRef}
      className={`about-who-we-are-section ${revealed ? 'is-revealed' : ''}`}
    >
      <div className="about-who-we-are-container">
        {/* Main Grid: Left Column for Tag | Right Column for Headline & Stats Cards */}
        <div className="about-who-we-are-layout-grid">
          {/* Left Column: WHO ARE WE? Tag */}
          <div className="about-who-we-are-left-col">
            <span className="about-who-we-are-kicker font-sans">
              {data.tag}
            </span>
          </div>

          {/* Right Column: Giant Headline & 4 Stats Cards */}
          <div className="about-who-we-are-right-col">
            {/* Giant Headline */}
            <h2 className="about-who-we-are-headline font-sans">
              {typeof data.headline === 'string' && data.headline.includes('\n')
                ? data.headline.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < data.headline.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))
                : data.headline}
            </h2>

            {/* 4 Stats Cards Grid */}
            <div className="about-stats-grid">
              {data.stats.map((stat, idx) => (
                <StatCard
                  key={stat.id || idx}
                  stat={stat}
                  isRevealed={revealed}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
