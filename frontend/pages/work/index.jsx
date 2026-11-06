import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { CaseStudiesListing } from '@/components/case-studies';

export default function WorkPage() {
  return (
    <MainLayout>
      <SEO
        title="Case Studies & Work | Creative Marketing & Sustainable Manufacturing"
        description="Explore authentic case studies from Strains Group: high-impact video production, Google & Meta advertising ROI, zero-discharge Tirupur garment manufacturing."
        canonical="/case-studies"
      />

      <CaseStudiesListing />
    </MainLayout>
  );
}
