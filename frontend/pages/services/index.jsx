import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  ServiceHero,
  ServiceExpertise,
  ServiceWhyChoose,
  ServiceLatestWork,
  ServiceTestimonials,
  ServiceBottomCTA,
} from '@/components/services';

export default function ServicesPage() {
  return (
    <MainLayout>
      <Head>
        <title>Services | Creative Digital Marketing Agency & Sustainable Production — Strains Group</title>
        <meta
          name="description"
          content="Strains Group delivers creative digital marketing, SEO, PPC, web design, video production, and zero-discharge sustainable apparel manufacturing."
        />
        <meta property="og:title" content="Services | Strains Group Creative Agency & Sustainable Manufacturing" />
        <meta
          property="og:description"
          content="Full-spectrum creative digital marketing, brand architecture, cinematic media, and circular apparel manufacturing."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="services-page-main bg-[#0c0c0c] text-white">
        {/* Section 1: Hero — Creative Digital Marketing Agency */}
        <ServiceHero />

        {/* Section 2: Our Digital Marketing Expertise (6 Cards + Asymmetric Header) */}
        <ServiceExpertise />

        {/* Section 3: Why should you choose Strains (Pointing Man + Revenue Card + Customers Pill) */}
        <ServiceWhyChoose />

        {/* Section 4: Our latest work (3 Portfolio Showcase Cards) */}
        <ServiceLatestWork />

        {/* Section 5: Testimonials (3 Client Reviews + Carousel Indicators) */}
        <ServiceTestimonials />

        {/* Section 6: Bottom CTA — Creative Digital Marketing Agency (Striped Shirt Man + Phone) */}
        <ServiceBottomCTA />
      </div>
    </MainLayout>
  );
}
