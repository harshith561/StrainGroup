import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
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
      <SEO
        title="Sustainable Fashion & Eco Products | Strains Group"
        description="100% organic cotton, Himalayan hemp, vegan silk & leather, natural botanical dyeing, plantable basil seed tags, and zero-discharge Tirupur manufacturing."
        keywords={[
          'organic cotton clothing manufacturer',
          'hemp clothing India',
          'vegan silk apparel',
          'plantable seed tags',
          'botanical natural dyeing',
          'zero discharge clothing factory Tirupur',
        ]}
        canonical="/sustainability"
      />

      <div className="video-production-page bg-[#050505] text-white">
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
      </div>
    </MainLayout>
  );
}
