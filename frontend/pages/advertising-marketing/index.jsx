import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  AdvertisingHero,
  AdvertisingProcess,
  AdvertisingShowcase,
  AdvertisingWhyChoose,
  AdvertisingFAQ,
  AdvertisingCTA,
} from '@/components/advertising-marketing';

export default function AdvertisingMarketingPage() {
  return (
    <MainLayout>
      <Head>
        <title>Advertising &amp; Performance Digital Marketing | Strains Associates</title>
        <meta
          name="description"
          content="Strains Associates delivers high-intent Google Ads, Meta SMM campaigns, enterprise B2B PPC, and SEO engines with verified industry-leading conversion metrics and transparent reporting."
        />
        <meta
          property="og:title"
          content="Advertising &amp; Performance Digital Marketing | Strains Associates"
        />
        <meta
          property="og:description"
          content="High-intent Google Ads, B2B PPC management, Meta advertising, and SEO engines engineered for verified revenue by Strains Associates."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with Video Background, Green Subheading, White Main Heading */}
        <AdvertisingHero />

        {/* Section 2: Step-Wise Marketing Growth Process (5-Phase Roadmap) */}
        <AdvertisingProcess />

        {/* Section 3: Split Feature Showcase — Left: Headings & 6 Services, Right: Video Player */}
        <AdvertisingShowcase />

        {/* Section 4: Why Choose Strains Associates for Advertising & Marketing */}
        <AdvertisingWhyChoose />

        {/* Section 5: Questions & Answers (Interactive FAQ Accordion) */}
        <AdvertisingFAQ />

        {/* Section 6: High-Impact Consultation Call To Action */}
        <AdvertisingCTA />
      </main>
    </MainLayout>
  );
}
