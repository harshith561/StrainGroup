import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  AboutHero,
  AboutStudioSection,
  AboutApproachSection,
  AboutWhoWeAreSection,
  AboutBrandsMarqueeSection,
  AboutTeamCoverflowSection,
} from '@/components/about';

export default function AboutPage() {
  return (
    <MainLayout>
      <SEO
        title="About Strains Group | Since 2017 — Creative Studio & Sustainable Manufacturing"
        description="Crafting digital products, commercial films, and sustainable textiles. Learn the story, vision, and team squad behind Strains Group since 2017."
        canonical="/about-strains-group"
      />

      <div className="about-page-main bg-[#000000] text-white">
        <AboutHero />
        <AboutStudioSection />
        <AboutApproachSection />
        <AboutWhoWeAreSection />
        <AboutBrandsMarqueeSection />
        <AboutTeamCoverflowSection />
      </div>
    </MainLayout>
  );
}
