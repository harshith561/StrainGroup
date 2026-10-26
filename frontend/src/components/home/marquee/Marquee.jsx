'use client';

import React from 'react';

export default function Marquee() {
  const phrase = "Let's work together • Let's work together • Let's work together • Let's work together • ";

  return (
    <div className="marquee-section">
      <div className="marquee-container-custom">
        <div className="marquee-track">
          <h2 className="marquee-text-custom font-sans">
            {phrase}
            <span>Let's work together • </span>
            {phrase}
            <span>Let's work together • </span>
          </h2>
          <h2 className="marquee-text-custom font-sans" aria-hidden="true">
            {phrase}
            <span>Let's work together • </span>
            {phrase}
            <span>Let's work together • </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
