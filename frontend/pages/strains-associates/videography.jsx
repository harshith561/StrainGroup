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

export default function VideographyServicePage() {
  return (
    <MainLayout>
      <SEO
        title="Videography & Commercial Brand Films | Strains Associates"
        description="Strains Associates is the creative agency & video production powerhouse of Strains Group. 4K cinematic brand films, commercial TV advertisements, industrial documentaries, aerial drone videography, and DaVinci color grading in Hyderabad."
        keywords={[
          'Strains Associates videography',
          'video production company Hyderabad',
          'commercial film production India',
          'corporate video maker Hyderabad',
          '4K brand storytelling films',
          'aerial drone videography studio',
        ]}
        canonical="/strains-associates/videography"
        ogImage="/images/ecosystem/synergy-camera-cinematography.jpg"
      />

      <div className="video-production-page bg-[#050505] text-white">
        <VideoHero />
        <VideoProcess />
        <VideoShowcase />
        <VideoWhyChoose />
        <VideoFAQ />
        <VideoCTA />
      </div>
    </MainLayout>
  );
}
