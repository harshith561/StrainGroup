'use client';

import React, { useState, useEffect, useRef } from 'react';

/* ==========================================================================
   EASY-TO-EDIT SECTION CONFIGURATION
   ✏️ Change any headline, steps, items, or badges directly here:
   ========================================================================== */
export const APPROACH_SECTION_DATA = {
  tag: 'APPROACH',
  headline: 'Method of making\nbetter result',
  steps: [
    {
      id: 'step-01',
      number: '01',
      title: 'Problem\ndiscovery',
      items: [
        'Usability Studies',
        'User Interviews',
        'Stakeholder Interviews',
        'Competitive Research',
        'Insights Report',
        'User Journey',
      ],
    },
    {
      id: 'step-02',
      number: '02',
      title: 'Design\nsystem ready',
      items: [
        'Thinking Workshops',
        'Sitemaps',
        'Concepts',
        'Designs',
        'Prototypes',
        'Usability Studies',
      ],
    },
    {
      id: 'step-03',
      number: '03',
      title: 'Design\nimplementation',
      items: [
        'Design',
        'Use Cases',
        'User Flows',
        'Various User Types',
        'Annotations',
        'Interactions',
      ],
    },
  ],
};

function AnimatedStepNumber({ target, isRevealed, delay = 0 }) {
  const [displayNum, setDisplayNum] = useState('00');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isRevealed) {
      setDisplayNum('00');
      setIsDone(false);
      return;
    }

    const timer = setTimeout(() => {
      const targetInt = parseInt(target, 10) || 1;
      const duration = 850;
      let startTime = null;

      const easeOutQuad = (t) => t * (2 - t);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(easeOutQuad(progress) * targetInt);

        setDisplayNum(currentVal < 10 ? `0${currentVal}` : `${currentVal}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          const finalStr = targetInt < 10 ? `0${targetInt}` : `${targetInt}`;
          setDisplayNum(finalStr);
          setIsDone(true);
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [isRevealed, target, delay]);

  return (
    <span className={`step-number-tag font-mono ${isDone ? 'number-ready' : 'number-counting'}`}>
      {displayNum}
    </span>
  );
}

export default function AboutApproachSection({ data = APPROACH_SECTION_DATA }) {
  const [revealed, setRevealed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      id="about-approach-section"
      ref={sectionRef}
      className={`about-approach-section ${revealed ? 'is-revealed' : ''}`}
    >
      <div className="about-approach-container">
        {/* Main Grid: Left Column for APPROACH Kicker | Right Column for Headline & Flow */}
        <div className="about-approach-layout-grid">
          {/* Left Column: Tag */}
          <div className="about-approach-left-col">
            <span className="about-approach-kicker font-sans">
              {data.tag}
            </span>
          </div>

          {/* Right Column: Giant Headline & 3-Step Methodology Grid */}
          <div className="about-approach-right-col">
            {/* Giant Headline */}
            <h2 className="about-approach-headline font-sans">
              {typeof data.headline === 'string' && data.headline.includes('\n')
                ? data.headline.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < data.headline.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))
                : data.headline}
            </h2>

            {/* 3-Step Process Columns Container */}
            <div className="about-approach-steps-wrapper">
              {data.steps.map((step, idx) => {
                const isLast = idx === data.steps.length - 1;
                const isActive = activeStep === idx;

                return (
                  <React.Fragment key={step.id || idx}>
                    <div
                      className={`about-approach-step-card ${isActive ? 'is-active' : ''}`}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveStep(idx);
                        }
                      }}
                      style={{ '--step-index': idx }}
                    >
                      {/* Step Header with Animated Step Number and Title */}
                      <div className="step-card-header">
                        <div className="step-badge-row">
                          <AnimatedStepNumber
                            target={step.number}
                            isRevealed={revealed}
                            delay={idx * 220}
                          />
                          <span className="step-pulse-dot" />
                        </div>

                        <h3 className="step-card-title font-sans">
                          {typeof step.title === 'string' && step.title.includes('\n')
                            ? step.title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  {i < step.title.split('\n').length - 1 && <br />}
                                </React.Fragment>
                              ))
                            : step.title}
                        </h3>
                      </div>

                      {/* Deliverables / Checklist Items */}
                      <ul className="step-items-list font-sans">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="step-item-row">
                            <span className="item-marker" />
                            <span className="item-label">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Horizontal Animated Connector Arrow (between steps 1-2 and 2-3) */}
                    {!isLast && (
                      <div className="about-approach-arrow-col" aria-hidden="true">
                        <div className="approach-connector-line">
                          <svg
                            className="arrow-svg"
                            viewBox="0 0 120 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Base Track Line */}
                            <line
                              x1="0"
                              y1="12"
                              x2="108"
                              y2="12"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              className="arrow-track"
                            />
                            {/* Animated Glowing Traveling Segment */}
                            <line
                              x1="0"
                              y1="12"
                              x2="108"
                              y2="12"
                              stroke="url(#arrowPulseGradient)"
                              strokeWidth="2"
                              className="arrow-animated-segment"
                            />
                            {/* Arrowhead */}
                            <path
                              d="M102 6L112 12L102 18"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="arrow-head"
                            />
                            <defs>
                              <linearGradient
                                id="arrowPulseGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#00a859" stopOpacity="0" />
                                <stop offset="50%" stopColor="#00a859" stopOpacity="1" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
