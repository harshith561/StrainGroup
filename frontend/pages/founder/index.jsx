import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
    image: '/images/ecosystem/team-praharsha.jpg',
    url: 'https://strains.in/founder',
    sameAs: [
      'https://www.linkedin.com',
      'https://instagram.com/strainsassociates',
    ],
  };

  return (
    <MainLayout>
      <Head>
        <title>Naga Praharsha Govindu — Founder's Story &amp; Message | Strains Group</title>
        <meta
          name="description"
          content="Discover the journey of Naga Praharsha Govindu, Founder of Strains Associates &amp; Strains Fashions. How he resigned corporate sales management in 2018 to build a dual-hub ecosystem: cinematic video production &amp; performance marketing in Hyderabad paired with zero-discharge garment manufacturing in Tirupur."
        />
        <meta
          name="keywords"
          content="Naga Praharsha Govindu, Strains founder, Strains Associates, Strains Fashions, sustainable fashion Tirupur, video production Hyderabad, zero-discharge manufacturing, botanical dyes clothing"
        />
        <meta property="og:title" content="Naga Praharsha Govindu — Founder's Story &amp; Message | Strains Group" />
        <meta
          property="og:description"
          content="From corporate sales to the mill floors of Tirupur. The human story of how Naga Praharsha Govindu built Strains into an integrated creative and zero-discharge manufacturing ecosystem."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://strains.in/founder" />
        <meta property="og:image" content="/images/ecosystem/team-praharsha.jpg" />
        <link rel="canonical" href="https://strains.in/founder" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
      </Head>

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
