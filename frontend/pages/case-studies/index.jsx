import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { CaseStudiesListing } from '@/components/case-studies';

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <SEO
        title="Case Studies | Strains Associates & Strains Stitchery"
        description="Explore authentic case studies from Strains Group: high-impact video production, Google & Meta advertising ROI, and zero-discharge Tirupur garment manufacturing."
        keywords={[
          'Strains Group case studies',
          'video production portfolio Hyderabad',
          'sustainable garment manufacturing case study',
          'performance marketing case studies',
          'D2C brand scale metrics',
        ]}
        canonical="/case-studies"
      />

      <CaseStudiesListing />
    </MainLayout>
  );
}
