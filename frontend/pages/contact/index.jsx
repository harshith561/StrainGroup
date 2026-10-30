import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  ContactHero,
  ContactHeadline,
  ContactInfo,
  ContactForm,
} from '@/components/contact';

/**
 * Strains Group – Contact Page
 * Represents both Strains Fashions (sustainable garment manufacturing & Stitchery in Tirupur)
 * and Strains Associates (sustainable brand solutions & creative digital agency).
 */
export default function ContactPage() {
  return (
    <MainLayout>
      <Head>
        <title>Contact Strains Group | Sustainable Fashion & Creative Production</title>
        <meta
          name="description"
          content="Connect with Strains Group for sustainable garment manufacturing, brand strategy, cinematic video production, and creative digital campaigns."
        />
        <meta
          property="og:title"
          content="Contact Strains Group | Sustainable Fashion & Creative Production"
        />
        <meta
          property="og:description"
          content="Let's start something special together. Sustainable apparel manufacturing and cinematic brand creative agency."
        />
        <meta property="og:type" content="website" />
      </Head>

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
      </div>
    </MainLayout>
  );
}
