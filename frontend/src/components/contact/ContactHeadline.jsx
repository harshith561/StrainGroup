'use client';

import React from 'react';

/**
 * Section Two – Main Contact Headline
 * Editorial layout with category label on the left and large multi-line headline.
 * Treatment:
 * - "Let's drop us a line" – White
 * - "and get the project" – Strains Green (#00D765)
 * - "started." – White
 */
export default function ContactHeadline() {
  return (
    <section className="contact-headline-section" aria-label="Let's get the project started">
      <div className="contact-headline-grid">
        {/* Small Category Label */}
        <div className="contact-kicker-label">
          <span>CONTACT</span>
        </div>

        {/* Main Editorial Headline */}
        <h2 className="contact-main-headline">
          Let's drop us a line
          <br />
          <span className="headline-green-accent">and get the project</span>
          <br />
          started.
        </h2>
      </div>
    </section>
  );
}
