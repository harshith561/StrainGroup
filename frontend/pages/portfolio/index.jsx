import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  PortfolioHero,
  PortfolioIntro,
  PortfolioShowcase,
} from '@/components/portfolio';

export default function PortfolioPage() {
  return (
    <MainLayout>
      <SEO
        title="Portfolio & Curated Work | Strains Associates"
        description="Explore recent works by Strains Associates: design, web development, marketing campaigns, and brand storytelling across visionary partners."
        keywords={[
          'creative portfolio Strains Associates',
          'branding design showcase',
          'video production portfolio',
          'sustainable apparel portfolio',
          'digital marketing case work',
        ]}
        canonical="/portfolio"
      />

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
