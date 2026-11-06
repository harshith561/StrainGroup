import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { SITE_CONFIG } from '@/constant/siteConfig';
import {
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

// dynamic(): For heavy components with complex animations or browser-only functionality
const HeroSlider = dynamic(
  () => import('@/components/home/hero/HeroSlider'),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen min-h-[700px] w-full bg-[#080808] flex items-center justify-center text-neutral-500 font-mono text-xs">
        Loading Kinetic Hero...
      </div>
    ),
  }
);

// dynamic(): For interactive 3D product configurator requiring canvas & browser DOM APIs
const ProductViewer = dynamic(
  () => import('@/components/home/product-viewer/ProductViewer'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[600px] w-full bg-[#111111] flex items-center justify-center text-neutral-500 font-mono text-xs">
        Loading 3D Product Configurator...
      </div>
    ),
  }
);

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
        'https://linkedin.com',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Strains Group',
      url: 'https://strains.in',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://strains.in/portfolio?query={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="Strains Group | Creative Agency & Sustainable Garment Manufacturing"
        description="Award-winning creative agency, cinematic video production, performance digital marketing, and zero-discharge sustainable apparel manufacturing in Hyderabad & Tirupur."
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
