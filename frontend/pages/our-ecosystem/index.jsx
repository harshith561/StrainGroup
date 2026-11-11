import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  EcosystemHero,
  EcosystemClosedLoop,
  EcosystemSynergyMatrix,
  EcosystemBioCircularity,
  EcosystemDualHub,
  EcosystemIntegrationTiers,
  EcosystemBottomCTA,
} from '@/components/ecosystem';

export default function OurEcosystemPage() {
  return (
    <MainLayout>
      <SEO
        title="Our Ecosystem | Closed-Loop Creative & Apparel"
        description="Explore Strains Associates' closed-loop ecosystem: brand strategy, 4K video production, and marketing in Hyderabad with Tirupur eco manufacturing."
        keywords={[
          'Strains ecosystem',
          'sustainable fashion manufacturing',
          'video production Hyderabad',
          'Tirupur garment manufacturing',
          'zero-discharge apparel',
          'closed loop creative engine',
        ]}
        canonical="/our-ecosystem"
      />

      <div className="ecosystem-page-wrapper bg-[#080808] min-h-screen">
        <EcosystemHero />
        <EcosystemClosedLoop />
        <EcosystemSynergyMatrix />
        <EcosystemBioCircularity />
        <EcosystemDualHub />
        <EcosystemIntegrationTiers />
        <EcosystemBottomCTA />
      </div>
    </MainLayout>
  );
}
