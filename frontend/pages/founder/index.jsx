import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  FounderHero,
  FounderLetter,
  FounderOriginStory,
  FounderPhilosophy,
} from '@/components/founder';

export default function FounderPage() {
  // Structured JSON-LD schema for Person & Founder Entity
  const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Naga Praharsha Govindu',
    jobTitle: 'Founder & Director, Strategy Maker & Line Producer',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Strains Associates LLP',
        url: 'https://strains.in',
      },
      {
        '@type': 'Organization',
        name: 'Strains Fashions Private Limited',
        url: 'https://strains.in',
      },
    ],
    description:
      'Founder and Director of Strains Associates and Strains Fashions Private Limited. Strategy maker and line producer driving cinematic commercial films, full-funnel digital growth, and zero-discharge sustainable apparel manufacturing in Hyderabad and Tirupur.',
    image: 'https://strains.in/images/ecosystem/team-praharsha.jpg',
    url: 'https://strains.in/founder',
    sameAs: [
      'https://instagram.com/strainsassociates',
      'https://youtube.com/@strainsassociates',
    ],
  };

  return (
    <MainLayout>
      <SEO
        title="Naga Praharsha Govindu — Founder's Story | Strains Group"
        description="Meet Naga Praharsha Govindu, Founder of Strains Associates & Strains Fashions: pairing Hyderabad video production with zero-discharge Tirupur manufacturing."
        keywords={[
          'Naga Praharsha Govindu',
          'Strains founder',
          'Strains Associates',
          'Strains Fashions',
          'sustainable fashion Tirupur',
          'video production Hyderabad',
          'zero-discharge manufacturing',
          'botanical dyes clothing',
        ]}
        canonical="/founder"
        ogImage="/images/ecosystem/team-praharsha.jpg"
        ogType="profile"
        structuredData={founderSchema}
      />

      <div className="founder-page-wrapper">
        {/* 1. Hero Section with Founder Portrait & Key Highlights */}
        <FounderHero />

        {/* 2. Personal Letter from the Desk of Naga Praharsha */}
        <FounderLetter />

        {/* 3. Chronological Origin Story (How He Started: 2017 to Today) */}
        <FounderOriginStory />

        {/* 4. The 4 Non-Negotiable Founding Rules */}
        <FounderPhilosophy />
      </div>
    </MainLayout>
  );
}
