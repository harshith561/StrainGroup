import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import {
  ClothingHero,
  ClothingProcess,
  ClothingShowcase,
  ClothingWhyChoose,
  ClothingFAQ,
  ClothingCTA,
} from '@/components/clothing-manufacturing';

export default function ClothingManufacturingServicePage() {
  return (
    <MainLayout>
      <SEO
        title="Clothing Manufacturing & Fabric Engineering | Strains Stitchery"
        description="Strains Stitchery is the independent garment manufacturing business of Strains Group in Tirupur. Fabric engineering, CAD tech packs, rapid sampling, Zero Liquid Discharge (ZLD), and low-MOQ to scale production."
        keywords={[
          'Strains Stitchery clothing manufacturing',
          'garment manufacturing Tirupur',
          'sustainable clothing manufacturer India',
          'low MOQ garment factory',
          'CAD tech pack development',
          'zero discharge apparel manufacturing',
        ]}
        canonical="/strains-stitchery/clothing-manufacturing"
        ogImage="/images/ecosystem/material-organic-cotton.jpg"
      />

      <div className="video-production-page bg-[#050505] text-white">
        <ClothingHero />
        <ClothingProcess />
        <ClothingShowcase />
        <ClothingWhyChoose />
        <ClothingFAQ />
        <ClothingCTA />
      </div>
    </MainLayout>
  );
}
