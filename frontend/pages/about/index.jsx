import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
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
      <Head>
        <title>About Strains Group | Since 2017 — Creative Studio & Digital Craft</title>
        <meta
          name="description"
          content="Crafting digital products with a unique vision of making user experience better. Strains Group since 2017."
        />
        <meta property="og:title" content="About Strains Group | Since 2017" />
        <meta
          property="og:description"
          content="Crafting digital products with a unique vision of making user experience better. Art Direction, Capability, and Sustainability."
        />
      </Head>

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
