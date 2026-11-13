import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  FashionBrandHero,
  FashionBrandProcess,
  FashionBrandShowcase,
  FashionBrandWhyChoose,
  FashionBrandFAQ,
  FashionBrandCTA,
} from '@/components/fashion-brand';

export default function FashionDesignServicePage() {
  return (
    <MainLayout>
      <SEO
        title="Fashion Design & Sustainable Clothing | Strains Fashions"
        description="Strains Fashions is the independent sustainable fashion business of Strains Group. Conscious clothing from certified Himalayan hemp, organic cotton, vegan silk, and botanical dyes. Manufactured by Strains Stitchery."
        keywords={[
          'Strains Fashions',
          'sustainable fashion design',
          'responsible clothing India',
          'hemp apparel brand',
          'organic cotton fashion design',
          'vegan silk clothing',
          'haute couture brand architecture',
        ]}
        canonical="/strains-fashions/fashion-design"
        ogImage="/images/ecosystem/material-organic-cotton.jpg"
      />

      <div className="video-production-page bg-[#050505] text-white">
        <FashionBrandHero />
        <FashionBrandProcess />
        <FashionBrandShowcase />
        <FashionBrandWhyChoose />
        <FashionBrandFAQ />
        <FashionBrandCTA />
      </div>
    </MainLayout>
  );
}
