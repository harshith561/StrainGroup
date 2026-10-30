'use client';

import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Factory } from 'lucide-react';
import { SITE_CONFIG } from '@/constant';
import ContactSocialLinks from './ContactSocialLinks';

/**
 * Left Column – Contact Information Panel (approx 35% width on desktop)
 * Represents both Strains Fashions (Sustainable apparel & Stitchery in Tirupur)
 * and Strains Associates (Creative studio & digital production).
 */
export default function ContactInfo() {
  const email = SITE_CONFIG?.contactEmail || 'info@strains.in';
  const phone = SITE_CONFIG?.contactPhone || '+49 123 456 789';

  return (
    <aside className="contact-info-panel" aria-label="Contact Information">
      {/* 1. Get in touch */}
      <div className="contact-block">
        <h3 className="contact-block-title">Get in touch</h3>
        <p className="contact-block-description">
          We&apos;re excited to hear from you and let&apos;s start something special together.
        </p>
      </div>

      {/* 2. Official Strains Contact Email & Phone */}
      <div className="contact-block">
        <span className="font-mono text-xs uppercase tracking-widest text-[#777777] font-semibold">
          Electronic Mail
        </span>
        <a
          href={`mailto:${email}`}
          className="contact-email-link"
          aria-label={`Send email to ${email}`}
        >
          {email}
        </a>

        <div className="mt-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#777777] font-semibold block mb-1">
            Direct Line
          </span>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="contact-phone-link"
            aria-label={`Call ${phone}`}
          >
            {phone}
          </a>
        </div>
      </div>

      {/* 3. Strains Ecosystem Facilities */}
      <div className="flex flex-col gap-3">
        {/* Creative Headquarters */}
        <div className="contact-division-badge">
          <div className="flex items-center gap-2 text-[#00D765]">
            <MapPin size={15} />
            <span className="font-mono text-xs uppercase tracking-wider font-bold">
              Creative Headquarters
            </span>
          </div>
          <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed">
            Strains Tower, Sector 5, Creative District, Germany
          </p>
        </div>

        {/* Sustainable Garment Manufacturing (Stitchery) */}
        <div className="contact-division-badge">
          <div className="flex items-center gap-2 text-[#00D765]">
            <Factory size={15} />
            <span className="font-mono text-xs uppercase tracking-wider font-bold">
              Strains Stitchery Manufacturing
            </span>
          </div>
          <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed">
            Zero-discharge organic cotton, hemp, and natural dye garment manufacturing facility in Tirupur, India.
          </p>
        </div>
      </div>

      {/* 4. Follow Social Channels */}
      <ContactSocialLinks />
    </aside>
  );
}
