import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  ContactHero,
  ContactHeadline,
  ContactInfo,
  ContactForm,
} from '@/components/contact';

export default function BookConsultationPage() {
  return (
    <MainLayout>
      <Head>
        <title>Book a Consultation | Strains Group</title>
        <meta
          name="description"
          content="Schedule a strategic consultation with Strains Group for creative marketing, video production, or sustainable apparel manufacturing."
        />
        <meta property="og:title" content="Book a Consultation | Strains Group" />
      </Head>

      <div className="contact-page-wrapper">
        <ContactHero />
        <ContactHeadline />
        <section className="contact-content-section" aria-label="Contact Information and Inquiries">
          <div className="contact-content-grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
