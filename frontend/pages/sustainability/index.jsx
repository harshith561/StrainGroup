import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  SustainabilityHero,
  SustainabilityProducts,
  SustainabilityPractices,
  SustainabilityCertifications,
  SustainabilityFAQ,
  SustainabilityCTA,
} from '@/components/sustainability';

export default function SustainabilityPage() {
  return (
    <MainLayout>
      <Head>
        <title>Sustainable Fashion &amp; Eco Products | Strains Group</title>
        <meta
          name="description"
          content="Discover Strains Group's sustainable fashion solutions: 100% organic cotton, Himalayan hemp clothing, vegan silk & leather, natural botanical dyeing, plantable basil seed tags, and zero-discharge manufacturing in Tirupur."
        />
        <meta
          property="og:title"
          content="Sustainable Fashion &amp; Eco Products | Strains Group"
        />
        <meta
          property="og:description"
          content="Ethical and sustainable clothing manufacturing: organic cotton, hemp apparel, fruit & flower natural dyes, plantable seed price tags, and zero toxic discharge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://strains.in/sustainability" />
        <meta
          name="keywords"
          content="organic cotton clothing, hemp clothing, vegan silk, vegan leather, plantable seed tags, botanical dyeing, zero discharge clothing manufacturing, tirupur eco factory"
        />
      </Head>

      <main className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with Video Background, Subheading & Quick Benchmarks */}
        <SustainabilityHero />

        {/* Section 2: Clear, Visual Showcase of the Sustainable Products & Materials We Use */}
        <SustainabilityProducts />

        {/* Section 3: Honest, Simple Sustainable Practices (Zero Discharge, Natural Dyes, Plantable Tags, Plastic-Free) */}
        <SustainabilityPractices />

        {/* Section 4: Verifiable Third-Party Certifications & Ethical Standards */}
        <SustainabilityCertifications />

        {/* Section 5: Frequently Asked Questions */}
        <SustainabilityFAQ />

        {/* Section 6: Direct Consultation Call To Action & Factory Contact */}
        <SustainabilityCTA />
      </main>
    </MainLayout>
  );
}
