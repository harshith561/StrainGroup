import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  ContactHero,
  ContactHeadline,
  ContactInfo,
  ContactForm,
  ContactMap,
} from '@/components/contact';
import { SITE_CONFIG } from '@/constant/siteConfig';

/**
 * Strains Group – Contact Page
 * Represents both Strains Fashions (sustainable garment manufacturing & Stitchery in Tirupur)
 * and Strains Associates (sustainable brand solutions & creative digital agency).
 */
export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Strains Associates & Strains Fashions',
    image: 'https://strains.in/assets/strainsassociates-CfG1A0jo.webp',
    telephone: SITE_CONFIG?.contactPhone || '+91 8686819898',
    email: SITE_CONFIG?.contactEmail || 'hello@strainsassociates.com',
    url: 'https://strains.in/contact',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vengalrao Nagar',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500038',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4378',
      longitude: '78.4358',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
    priceRange: '₹₹₹',
  };

  return (
    <MainLayout>
      <SEO
        title="Contact Strains Group | Sustainable Fashion & Creative Production"
        description="Connect with Strains Group for sustainable garment manufacturing in Tirupur and brand strategy, cinematic video production & digital marketing in Hyderabad."
        keywords={[
          'contact Strains Group',
          'Tirupur garment manufacturers contact',
          'creative agency Hyderabad office',
          'apparel production inquiry',
          'commercial film consultation',
        ]}
        canonical="/contact"
        structuredData={contactSchema}
      />

      <div className="contact-page-wrapper">
        {/* Section One: Cinematic Video-Background CONTACT Hero */}
        <ContactHero />

        {/* Section Two: Main Editorial Headline */}
        <ContactHeadline />

        {/* Section Three: Two-Column Contact Information & Minimalist Form */}
        <section className="contact-content-section" aria-label="Contact Information and Inquiries">
          <div className="contact-content-grid">
            {/* Left Column: Contact Details, Email, Phone, Facilities & Socials (35%) */}
            <ContactInfo />

            {/* Right Column: Minimalist Contact Form (65%) */}
            <ContactForm />
          </div>
        </section>

        {/* Section Four: Google Verified Locations with Embedded Map */}
        <ContactMap />
      </div>
    </MainLayout>
  );
}
