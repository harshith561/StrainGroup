import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  VideoHero,
  VideoProcess,
  VideoShowcase,
  VideoWhyChoose,
  VideoFAQ,
  VideoCTA,
} from '@/components/video-production';

export default function VideoProductionPage() {
  return (
    <MainLayout>
      <Head>
        <title>Video Production &amp; Cinematic Brand Films | Strains Associates</title>
        <meta
          name="description"
          content="Strains Associates directs, shoots, and produces 4K cinematic brand films, high-converting commercial advertisements, industrial documentaries, aerial drone videography, and in-house DaVinci post-production in Hyderabad &amp; Tirupur."
        />
        <meta
          property="og:title"
          content="Video Production &amp; Cinematic Brand Films | Strains Associates"
        />
        <meta
          property="og:description"
          content="Commercial video production, 4K aerial cinematography, industrial films, and complete in-house DaVinci post-production by Strains Associates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/ecosystem/synergy-camera-cinematography.jpg" />
      </Head>

      <main className="video-production-page bg-[#050505] text-white">
        {/* Section 1: Hero with 3D Video Ad Background, Green Subheading, White Main Heading */}
        <VideoHero />

        {/* Section 2: Step-Wise Video Production Process (5-Phase Roadmap) */}
        <VideoProcess />

        {/* Section 3: Split Feature Showcase — Left: Headings & About Services, Right: Interactive 3D Video Player */}
        <VideoShowcase />

        {/* Section 4: Why Choose Strains Associates for Video Production */}
        <VideoWhyChoose />

        {/* Section 5: Questions & Answers (Interactive FAQ Accordion) */}
        <VideoFAQ />

        {/* Section 6: High-Impact Video Consultation Call To Action */}
        <VideoCTA />
      </main>
    </MainLayout>
  );
}
