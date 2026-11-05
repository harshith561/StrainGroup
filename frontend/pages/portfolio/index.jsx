import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  PortfolioHero,
  PortfolioIntro,
  PortfolioShowcase,
} from '@/components/portfolio';

export default function PortfolioPage() {
  return (
    <MainLayout>
      <Head>
        <title>Portfolio & Curated Work | Strains Associates</title>
        <meta
          name="description"
          content="Explore recent works by Strains Associates: design, development, marketing, and brand storytelling across visionary partners and innovative brands."
        />
        <meta property="og:title" content="Portfolio & Curated Work | Strains Associates" />
        <meta
          property="og:description"
          content="Creative works with our incredible people — Design, Development, Marketing, and Writing."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="portfolio-page-main bg-[#0c0c0c] text-white min-h-screen">
        {/* SECTION 1: HERO HEADER (Centered "PORTFOLIO" with background video) */}
        <PortfolioHero />

        {/* SECTION 2: INTRODUCTION & SERVICES SPLIT (Asymmetrical 2-Column Grid) */}
        <PortfolioIntro />

        {/* SECTION 3: PORTFOLIO SHOWCASE (Symmetrical 2-Column Grid with Floating Cursor Badge) */}
        <PortfolioShowcase />
      </div>
    </MainLayout>
  );
}
