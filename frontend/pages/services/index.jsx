import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  ServiceHero,
  ServiceExpertise,
  ServiceWhyChoose,
  ServiceLatestWork,
  ServiceTestimonials,
  ServiceBottomCTA,
} from '@/components/services';
import { AboutBrandsMarqueeSection } from '@/components/about';

export default function ServicesPage() {
  return (
    <MainLayout>
      <SEO
        title="Services | Creative Digital Marketing & Sustainable Apparel Production"
        description="Strains Group delivers creative digital marketing, SEO, PPC, web design, video production, and zero-discharge sustainable apparel manufacturing."
        keywords={[
          'creative digital marketing agency',
          'video production services Hyderabad',
          'sustainable garment production Tirupur',
          'PPC and performance marketing',
          'brand architecture studio',
        ]}
        canonical="/services"
      />

      <div className="services-page-main bg-[#0c0c0c] text-white">
        {/* Section 1: Hero — Creative Digital Marketing Agency */}
        <ServiceHero />

        {/* Section 2: Our Digital Marketing Expertise (6 Cards + Asymmetric Header) */}
        <ServiceExpertise />

        {/* Section 3: Why should you choose Strains (Pointing Man + Revenue Card + Customers Pill) */}
        <ServiceWhyChoose />

        {/* Client Brands Marquee Showcase */}
        <AboutBrandsMarqueeSection
          title="TRUSTED BY INDUSTRY LEADERS"
          subtitle="Partnering with market leaders, infrastructure giants, and visionary labels across India."
        />

        {/* Section 4: Our latest work (6 Portfolio Showcase Cards) */}
        <ServiceLatestWork />

        {/* Section 5: Testimonials (3 Client Reviews + Carousel Indicators) */}
        <ServiceTestimonials />

        {/* Section 6: Bottom CTA — Creative Digital Marketing Agency (Striped Shirt Man + Phone) */}
        <ServiceBottomCTA />
      </div>
    </MainLayout>
  );
}
