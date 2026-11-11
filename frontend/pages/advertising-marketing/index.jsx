import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
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
      <SEO
        title="Advertising & Performance Digital Marketing"
        description="High-intent Google Ads, Meta SMM campaigns, enterprise B2B PPC, and SEO engines with verified industry-leading conversion metrics and transparent reporting."
        keywords={[
          'performance marketing agency Hyderabad',
          'Google ads management India',
          'Meta paid advertising agency',
          'B2B PPC lead generation',
          'full funnel growth marketing',
        ]}
        canonical="/advertising-marketing"
      />

      <div className="video-production-page bg-[#050505] text-white">
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
      </div>
    </MainLayout>
  );
}
