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

export default function StartYourBrandServicePage() {
  return (
    <MainLayout>
      <SEO
        title="Start Your Brand | Turnkey Fashion Incubator | Strains Associates"
        description="Launch your fashion brand with Strains Associates: brand architecture, low-MOQ Tirupur sustainable manufacturing powered by Strains Stitchery, 4K editorial campaign videos, and high-converting e-commerce funnels."
        keywords={[
          'start an apparel brand India',
          'clothing line incubator',
          'low MOQ fashion production',
          'launch fashion brand Tirupur',
          'turnkey brand development',
          'Strains Associates brand incubator',
        ]}
        canonical="/strains-associates/start-your-brand"
        ogImage="/images/ecosystem/hero-creative.jpg"
      />

      <div className="video-production-page bg-[#050505] text-white">
        <StartBrandHero />
        <StartBrandProcess />
        <StartBrandShowcase />
        <StartBrandWhyChoose />
        <StartBrandFAQ />
        <StartBrandCTA />
      </div>
    </MainLayout>
  );
}
