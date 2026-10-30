import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  AboutHero,
  AboutStudioSection,
  AboutApproachSection,
  AboutWhoWeAreSection,
  AboutBrandsMarqueeSection,
} from '@/components/about';

export default function AboutStrainsGroupPage() {
  return (
    <MainLayout>
      <Head>
        <title>About Strains Group | Since 2012 — Creative Studio & Digital Craft</title>
        <meta
          name="description"
          content="Crafting digital products with a unique vision of making user experience better. Strains Group since 2012."
        />
        <meta property="og:title" content="About Strains Group | Since 2012" />
        <meta
          property="og:description"
          content="Crafting digital products with a unique vision of making user experience better. Art Direction, Capability, and Sustainability."
        />
      </Head>

      <div className="about-page-main bg-[#000000] text-white">
        {/* Simple Black Screen with Animated "SINCE 2012" alone */}
        <AboutHero />

        {/* Studio Section with Zigzag Photo Gallery */}
        <AboutStudioSection />

        {/* Method of Making Better Result (Approach Section) */}
        <AboutApproachSection />

        {/* Who We Are & Performance Metrics */}
        <AboutWhoWeAreSection />

        {/* Client Brands Marquee Showcase */}
        <AboutBrandsMarqueeSection />
      </div>
    </MainLayout>
  );
}
