'use client';

import React from 'react';

// Even number of items guarantees seamless alternating across the loop
// Text alternates: Green -> White -> Green -> White
// Dots alternate:  White -> Green -> White -> Green
const MARQUEE_ITEMS = [
  { text: "Let's work together", isGreen: true, dotColor: 'white' },
  { text: "Let's work together", isGreen: false, dotColor: 'green' },
  { text: "Let's work together", isGreen: true, dotColor: 'white' },
  { text: "Let's work together", isGreen: false, dotColor: 'green' },
  { text: "Let's work together", isGreen: true, dotColor: 'white' },
  { text: "Let's work together", isGreen: false, dotColor: 'green' },
];

export default function Marquee() {
  const renderMarqueeContent = () => (
    <>
      {MARQUEE_ITEMS.map((item, index) => (
        <span
          key={index}
          className={item.isGreen ? 'marquee-item-green' : 'marquee-item-white'}
          style={{
            color: item.isGreen ? 'var(--accent-green, #00a859)' : '#ffffff',
            WebkitTextStroke: '1px transparent',
          }}
        >
          {item.text}
          <span
            className={`marquee-bullet ${item.dotColor === 'white' ? 'bullet-white' : 'bullet-green'}`}
            style={{
              color: item.dotColor === 'white' ? '#ffffff' : 'var(--accent-green, #00a859)',
            }}
          >
            •
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-section" aria-label="Let's work together marquee banner">
      <div className="marquee-container-custom">
        <div className="marquee-track">
          <h2 className="marquee-text-custom font-sans">
            {renderMarqueeContent()}
          </h2>
          <h2 className="marquee-text-custom font-sans" aria-hidden="true">
            {renderMarqueeContent()}
          </h2>
        </div>
      </div>
    </div>
  );
}
