import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  StartBrandHero,
  StartBrandProcess,
  StartBrandShowcase,
  StartBrandWhyChoose,
  StartBrandFAQ,
  StartBrandCTA,
} from '@/components/start-your-brand';

export default function StartYourBrandPage() {
  return (
    <MainLayout>
      <SEO
        title="Start Your Brand | Turnkey Apparel Incubator"
        description="Launch your apparel brand with Strains Associates: brand strategy, low-MOQ Tirupur sustainable manufacturing, 4K commercial videos, and growth."
        keywords={[
          'start an apparel brand India',
          'clothing line incubator',
          'low MOQ fashion production',
          'launch fashion brand Tirupur',
          'turnkey brand development',
        ]}
        canonical="/start-your-brand"
      />

      <div className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with Video Background, Green Subheading, White Main Heading */}
        <StartBrandHero />

        {/* Section 2: Step-Wise Brand Launch Roadmap (5-Phase Roadmap) */}
        <StartBrandProcess />

        {/* Section 3: Split Feature Showcase — Left: Headings & 6 Services, Right: Video Player */}
        <StartBrandShowcase />

        {/* Section 4: Why Choose Strains Associates Incubator to Start Your Brand */}
        <StartBrandWhyChoose />

        {/* Section 5: Questions & Answers (Interactive FAQ Accordion) */}
        <StartBrandFAQ />

        {/* Section 6: High-Impact Consultation Call To Action */}
        <StartBrandCTA />
      </div>
    </MainLayout>
  );
}
