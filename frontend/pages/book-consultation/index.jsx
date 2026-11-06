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

export default function BookConsultationPage() {
  return (
    <MainLayout>
      <SEO
        title="Book a Consultation | Strains Group"
        description="Schedule a strategic consultation with Strains Group for creative marketing, video production, or sustainable apparel manufacturing."
        canonical="/contact"
      />

      <div className="contact-page-wrapper">
        <ContactHero />
        <ContactHeadline />
        <section className="contact-content-section" aria-label="Contact Information and Inquiries">
          <div className="contact-content-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
        <ContactMap />
      </div>
    </MainLayout>
  );
}
