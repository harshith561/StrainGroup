import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
      <Head>
        <title>Our Ecosystem | Strains Associates — Closed-Loop Creative & Manufacturing Engine</title>
        <meta
          name="description"
          content="Explore the Strains Associates ecosystem: a closed-loop matrix linking creative brand strategy, cinematic video production, and performance marketing in Hyderabad directly with zero-discharge garment manufacturing in Tirupur."
        />
        <meta
          name="keywords"
          content="Strains ecosystem, sustainable fashion, video production, Tirupur garment manufacturing, Hyderabad creative agency, zero-discharge apparel, organic hemp clothing, vegan silk"
        />
        <link rel="canonical" href="https://strains.in/our-ecosystem" />
      </Head>

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
