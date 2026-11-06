import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  ClothingHero,
  ClothingProcess,
  ClothingShowcase,
  ClothingWhyChoose,
  ClothingFAQ,
  ClothingCTA,
} from '@/components/clothing-manufacturing';

export default function ClothingManufacturingPage() {
  return (
    <MainLayout>
      <SEO
        title="Sustainable Clothing Manufacturing & Tirupur Hub | Strains Associates"
        description="Zero-discharge sustainable apparel manufacturing hub in Tirupur, producing organic cotton, hemp, vegan silk, botanical-dyed garments, and plantable seed tags."
        keywords={[
          'sustainable clothing manufacturer Tirupur',
          'zero discharge garment manufacturing',
          'organic cotton clothing manufacturer India',
          'botanical dyes clothing supplier',
          'ethical apparel supply chain',
        ]}
        canonical="/clothing-manufacturing"
      />

      <main className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with Video Background, Green Subheading, White Main Heading */}
        <ClothingHero />

        {/* Section 2: Step-Wise Sustainable Apparel Pipeline (5-Phase Roadmap) */}
        <ClothingProcess />

        {/* Section 3: Split Feature Showcase — Left: Headings & 6 Services, Right: Video Player */}
        <ClothingShowcase />

        {/* Section 4: Why Choose Strains Associates for Apparel Manufacturing */}
        <ClothingWhyChoose />

        {/* Section 5: Questions & Answers (Interactive FAQ Accordion) */}
        <ClothingFAQ />

        {/* Section 6: High-Impact Consultation Call To Action */}
        <ClothingCTA />
      </main>
    </MainLayout>
  );
}
