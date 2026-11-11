import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { CaseStudiesListing } from '@/components/case-studies';

export default function WorkPage() {
  return (
    <MainLayout>
      <SEO
        title="Case Studies & Work | Creative & Manufacturing"
        description="Browse Strains Associates and Strains Stitchery work portfolio covering commercial films, performance marketing, and sustainable apparel manufacturing."
        canonical="/case-studies"
      />

      <CaseStudiesListing />
    </MainLayout>
  );
}
