import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/common/MainLayout';
import {
  AgencyIntro,
  PortfolioSection,
  ServicesSection,
  TestimonialsSection,
  ValuesSection,
  TeamSection,
  ExtraEcosystem,
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

  return (
    <MainLayout>
      <HeroSlider />
      <ProductViewer />
      <AgencyIntro />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ValuesSection />
      <TeamSection />
      <ExtraEcosystem />
      <DigitalMarketing />
      <Marquee />
    </MainLayout>
  );
}
