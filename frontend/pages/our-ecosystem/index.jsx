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
        title="Our Ecosystem | Closed-Loop Creative & Manufacturing Engine"
        description="Explore the Strains Associates ecosystem: a closed-loop matrix linking creative brand strategy, cinematic video production, and performance marketing in Hyderabad with zero-discharge manufacturing in Tirupur."
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

      <main className="ecosystem-page-wrapper bg-[#080808] min-h-screen">
        <EcosystemHero />
        <EcosystemClosedLoop />
        <EcosystemSynergyMatrix />
        <EcosystemBioCircularity />
        <EcosystemDualHub />
        <EcosystemIntegrationTiers />
        <EcosystemBottomCTA />
      </main>
    </MainLayout>
  );
}
