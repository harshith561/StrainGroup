import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import { CaseStudiesListing } from '@/components/case-studies';

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      <Head>
        <title>Case Studies | Strains Associates & Strains Stitchery — Strains Group</title>
        <meta
          name="description"
          content="Explore authentic case studies from Strains Group: high-impact video production, Google & Meta advertising ROI, zero-discharge Tirupur garment manufacturing, and sustainable fashion brands."
        />
        <meta property="og:title" content="Case Studies | Strains Group" />
        <meta
          property="og:description"
          content="Explore real impact and proven case studies across our 4 core pillars: Video Production, Advertising & Marketing, Clothing Manufacturing, and Fashion Brand."
        />
      </Head>

      <CaseStudiesListing />
    </MainLayout>
  );
}
