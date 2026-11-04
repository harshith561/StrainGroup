import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
      <Head>
        <title>Fashion Brand Architecture &amp; Luxury D2C | Strains Associates</title>
        <meta
          name="description"
          content="Strains Associates builds iconic luxury and direct-to-consumer fashion brands: haute couture positioning, editorial lookbooks, 4K runway films, Tirupur sustainable manufacturing, and e-commerce flagships."
        />
        <meta
          property="og:title"
          content="Fashion Brand Architecture &amp; Luxury D2C | Strains Associates"
        />
        <meta
          property="og:description"
          content="From runway concept to consumer closet: luxury fashion brand architecture, editorial photography, 4K fashion films, and sustainable manufacturing by Strains Associates."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="video-production-page bg-[#050505] text-white">
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
      </main>
    </MainLayout>
  );
}
