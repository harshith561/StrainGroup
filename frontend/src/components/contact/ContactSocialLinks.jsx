'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constant';

const SOCIAL_CHANNELS = [
  { label: 'Facebook', href: SITE_CONFIG?.socials?.facebook || 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: SITE_CONFIG?.socials?.linkedin || 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Twitter / X', href: SITE_CONFIG?.socials?.twitter || 'https://twitter.com' },
];

/**
 * Social media link stack for the Contact Information column
 */
export default function ContactSocialLinks() {
  return (
    <div className="contact-block">
      <h3 className="contact-block-title">Follow</h3>
      <ul className="contact-social-list" role="list">
        {SOCIAL_CHANNELS.map((item) => (
          <li key={item.label} className="contact-social-item">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link group"
              aria-label={`Visit Strains on ${item.label}`}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} className="social-arrow-icon" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
