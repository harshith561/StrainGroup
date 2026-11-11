import React, { useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { SITE_CONFIG } from '@/constant/siteConfig';
import {
  HeroSlider,
  ProductViewer,
  AgencyIntro,
  PortfolioSection,
  ServicesSection,
  TestimonialsSection,
  ValuesSection,
  TeamSection,
  ExtraEcosystem,
  StitcherySection,
  DigitalMarketing,
  Marquee,
} from '@/components/home';

export default function HomePage() {
  useEffect(() => {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeSections.forEach((el) => observer.observe(el));

    return () => {
      fadeSections.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_CONFIG?.name || 'Strains Associates',
      legalName: SITE_CONFIG?.legalName || 'Strains Fashions Private Limited',
      url: SITE_CONFIG?.website || 'https://strains.in',
      logo: 'https://strains.in/assets/strainsassociates-CfG1A0jo.webp',
      description: SITE_CONFIG?.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE_CONFIG?.contactPhone || '+91 8686819898',
        contactType: 'customer service',
        email: SITE_CONFIG?.contactEmail || 'hello@strainsassociates.com',
      },
      sameAs: [
        'https://instagram.com/strainsassociates',
        'https://youtube.com/@strainsassociates',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Strains Group',
      url: 'https://strains.in',
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="Strains Group | Creative Agency & Apparel Manufacturing"
        description="Award-winning creative agency, 4K video production, performance marketing, and zero-discharge sustainable apparel manufacturing in Hyderabad & Tirupur."
        keywords={[
          'Strains Associates',
          'Strains Group',
          'Strains Fashions',
          'sustainable apparel manufacturing Tirupur',
          'creative digital agency Hyderabad',
          'commercial video production India',
          'ethical fashion supply chain',
          'D2C brand incubator',
        ]}
        canonical="/"
        structuredData={homeSchema}
      />
      <Head>
        <link
          rel="preload"
          as="image"
          href="https://strains.in/wp-content/uploads/revslider/Animated-Type-Hero-Collection/1bg-texture.png"
          fetchPriority="high"
        />
      </Head>
      <HeroSlider />
      <ProductViewer />
      <AgencyIntro />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ValuesSection />
      <TeamSection />
      <ExtraEcosystem />
      <StitcherySection />
      <DigitalMarketing />
      <Marquee />
    </MainLayout>
  );
}
