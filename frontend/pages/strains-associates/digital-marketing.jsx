import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  AdvertisingHero,
  AdvertisingProcess,
  AdvertisingShowcase,
  AdvertisingWhyChoose,
  AdvertisingFAQ,
  AdvertisingCTA,
} from '@/components/advertising-marketing';

export default function DigitalMarketingServicePage() {
  return (
    <MainLayout>
      <SEO
        title="Digital Marketing, Google Ads & Brand Growth | Strains Associates"
        description="Strains Associates is the independent digital and creative business of Strains Group. High-intent Google Ads management, Meta growth funnels, enterprise B2B advertising, and SEO in Hyderabad with verified 90.8% optimization score."
        keywords={[
          'Strains Associates digital marketing',
          'performance marketing agency Hyderabad',
          'Google ads agency Hyderabad',
          'creative digital agency India',
          'Meta ads management',
          'brand growth marketing',
        ]}
        canonical="/strains-associates/digital-marketing"
        ogImage="/images/ecosystem/hero-creative.jpg"
      />

      <div className="video-production-page bg-[#050505] text-white">
        <AdvertisingHero />
        <AdvertisingProcess />
        <AdvertisingShowcase />
        <AdvertisingWhyChoose />
        <AdvertisingFAQ />
        <AdvertisingCTA />
      </div>
    </MainLayout>
  );
}
