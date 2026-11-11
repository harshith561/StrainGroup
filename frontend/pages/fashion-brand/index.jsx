import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  FashionBrandHero,
  FashionBrandProcess,
  FashionBrandShowcase,
  FashionBrandWhyChoose,
  FashionBrandFAQ,
  FashionBrandCTA,
} from '@/components/fashion-brand';

export default function FashionBrandPage() {
  return (
    <MainLayout>
      <SEO
        title="Fashion Brand Architecture & Luxury D2C"
        description="Build iconic luxury and direct-to-consumer fashion brands: haute couture positioning, editorial lookbooks, 4K runway films, and sustainable manufacturing."
        keywords={[
          'fashion brand design agency',
          'luxury D2C apparel branding',
          'fashion runway films',
          'apparel brand identity studio',
          'fashion e-commerce growth',
        ]}
        canonical="/fashion-brand"
      />

      <div className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with Video Background, Green Subheading, White Main Heading */}
        <FashionBrandHero />

        {/* Section 2: Step-Wise Fashion Brand Architecture (5-Phase Roadmap) */}
        <FashionBrandProcess />

        {/* Section 3: Split Feature Showcase — Left: Headings & 6 Services, Right: Video Player */}
        <FashionBrandShowcase />

        {/* Section 4: Why Choose Strains Associates for Fashion Brand Architecture */}
        <FashionBrandWhyChoose />

        {/* Section 5: Questions & Answers (Interactive FAQ Accordion) */}
        <FashionBrandFAQ />

        {/* Section 6: High-Impact Consultation Call To Action */}
        <FashionBrandCTA />
      </div>
    </MainLayout>
  );
}
