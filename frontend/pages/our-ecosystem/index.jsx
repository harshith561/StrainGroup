import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  EcosystemHero,
  EcosystemFashionsSection,
  EcosystemStitcherySection,
  EcosystemAssociatesSection,
  EcosystemRelationshipSection,
  EcosystemDualHub,
  EcosystemBottomCTA,
} from '@/components/ecosystem';

export default function OurEcosystemPage() {
  return (
    <MainLayout>
      <SEO
        title="Our Ecosystem | Three Independent Businesses | Strains Group"
        description="Explore the Strains Group ecosystem: Strains Fashions (sustainable fashion), Strains Stitchery (Tirupur garment manufacturing), and Strains Associates (creative strategy and digital marketing)."
        keywords={[
          'Strains Group ecosystem',
          'Strains Fashions',
          'Strains Stitchery',
          'Strains Associates',
          'sustainable fashion brand',
          'Tirupur garment manufacturing',
          'creative digital agency Hyderabad',
          'performance marketing India',
        ]}
        canonical="/our-ecosystem"
      />

      <div className="ecosystem-page-wrapper bg-[var(--bg-primary,#080808)] min-h-screen">
        {/* Section 1: Ecosystem Overview Hero */}
        <EcosystemHero />

        {/* Section 2A: Strains Fashions - Independent Company Profile */}
        <EcosystemFashionsSection />

        {/* Section 2B: Strains Stitchery - Independent Company Profile */}
        <EcosystemStitcherySection />

        {/* Section 2C: Strains Associates - Independent Company Profile */}
        <EcosystemAssociatesSection />

        {/* Section 3: Relationship Between the Businesses Under Strains Group */}
        <EcosystemRelationshipSection />

        {/* Section 4: Dual Physical Infrastructure (Hyderabad Studio & Tirupur Facility) */}
        <EcosystemDualHub />

        {/* Section 5: Consultation & Engagement Call to Action */}
        <EcosystemBottomCTA />
      </div>
    </MainLayout>
  );
}
