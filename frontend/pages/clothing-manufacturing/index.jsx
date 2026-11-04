import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
      <Head>
        <title>Sustainable Clothing Manufacturing &amp; Tirupur Hub | Strains Associates</title>
        <meta
          name="description"
          content="Strains Associates operates a zero-discharge sustainable apparel manufacturing hub in Tirupur, producing organic cotton, hemp, vegan silk, botanical-dyed garments, and plantable seed tags."
        />
        <meta
          property="og:title"
          content="Sustainable Clothing Manufacturing &amp; Tirupur Hub | Strains Associates"
        />
        <meta
          property="og:description"
          content="Zero-discharge garment manufacturing in Tirupur: organic cotton, hemp, plantable seed tags, and botanical natural dyes by Strains Associates."
        />
        <meta property="og:type" content="website" />
      </Head>

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
