import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
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
      <SEO
        title="Video Production & Cinematic Brand Films | Strains Associates"
        description="4K cinematic brand films, high-converting commercial advertisements, industrial documentaries, aerial drone videography, and in-house DaVinci post-production in Hyderabad."
        keywords={[
          'video production company Hyderabad',
          'commercial film production India',
          'corporate video maker',
          '4K brand storytelling films',
          'aerial drone videography studio',
        ]}
        canonical="/video-production"
        ogImage="/images/ecosystem/synergy-camera-cinematography.jpg"
      />

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
