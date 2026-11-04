import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
      <Head>
        <title>Start Your Brand | Turnkey Fashion &amp; Apparel Incubator — Strains Associates</title>
        <meta
          name="description"
          content="Launch your apparel or consumer brand with Strains Associates: complete brand strategy, low-MOQ Tirupur sustainable manufacturing, 4K commercial videos, and customer acquisition."
        />
        <meta
          property="og:title"
          content="Start Your Brand | Turnkey Fashion &amp; Apparel Incubator — Strains Associates"
        />
        <meta
          property="og:description"
          content="The complete founder brand launchpad: brand identity, Tirupur garment manufacturing, 4K commercial media, and customer acquisition by Strains Associates."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="video-production-page bg-[#050505] text-white">
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
      </main>
    </MainLayout>
  );
}
