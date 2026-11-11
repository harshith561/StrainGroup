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

export default function AboutStrainsGroupPage() {
  return (
    <MainLayout>
      <SEO
        title="About Strains Group | Creative Studio & Eco Apparel"
        description="Crafting digital products, commercial films, and sustainable textiles. Learn the story, vision, and team squad behind Strains Group since 2017."
        keywords={[
          'About Strains Group',
          'Strains Associates story',
          'creative agency team Hyderabad',
          'sustainable apparel founders',
          'Tirupur manufacturing heritage',
        ]}
        canonical="/about-strains-group"
      />

      <div className="about-page-main bg-[#000000] text-white">
        {/* Simple Black Screen with Animated "SINCE 2017" alone */}
        <AboutHero />

        {/* Studio Section with Zigzag Photo Gallery */}
        <AboutStudioSection />

        {/* Method of Making Better Result (Approach Section) */}
        <AboutApproachSection />

        {/* Who We Are & Performance Metrics */}
        <AboutWhoWeAreSection />

        {/* Client Brands Marquee Showcase */}
        <AboutBrandsMarqueeSection />

        {/* Team Members 3D Coverflow Section */}
        <AboutTeamCoverflowSection />
      </div>
    </MainLayout>
  );
}
