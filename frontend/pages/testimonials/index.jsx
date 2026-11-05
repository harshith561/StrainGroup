import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import { AboutBrandsMarqueeSection } from '@/components/about';
import {
  TestimonialsHero,
  TestimonialsStatsBar,
  FeaturedClientSpotlight,
  TestimonialsFilterTabs,
  ClientTestimonialsGrid,
  HumanTestimonialsSection,
  ShareStoryModal,
} from '@/components/testimonials';
import {
  CLIENT_TESTIMONIALS,
  HUMAN_TESTIMONIALS,
} from '@/constant/testimonialsData';

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Filter client testimonials by tab
  const filteredClients = useMemo(() => {
    if (activeTab === 'clients' || activeTab === 'all') {
      return CLIENT_TESTIMONIALS;
    }
    return [];
  }, [activeTab]);

  // Filter human testimonials by tab
  const filteredHuman = useMemo(() => {
    if (activeTab === 'human' || activeTab === 'all') {
      return HUMAN_TESTIMONIALS;
    }
    if (activeTab === 'artisans') {
      return HUMAN_TESTIMONIALS.filter(
        (item) => item.category === 'Artisan & Maker' || item.category === 'Creator & Artist'
      );
    }
    return [];
  }, [activeTab]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    if (tab === 'human') {
      scrollToSection('human-testimonials');
    } else if (tab === 'clients') {
      scrollToSection('client-testimonials');
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>Client & Human Testimonials | Strains Group Reviews & Verified Outcomes</title>
        <meta
          name="description"
          content="Explore verified testimonials from enterprise leaders, industrial clients, sustainable fashion customers, and Tirupur artisans at Strains Group."
        />
        <meta property="og:title" content="Testimonials & Human Stories — Strains Group" />
        <meta
          property="og:description"
          content="4.9/5 satisfaction across 200+ reviews. Verified B2B growth metrics, customer stories, and behind-the-scenes artisan experiences."
        />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Strains Group testimonials, client reviews, human testimonials, sustainable fashion reviews, video production reviews, marketing ROI" />
      </Head>

      <div className="testimonials-page-wrapper bg-[#0c0c0c] text-white">
        
        {/* Section 1: Hero Header */}
        <TestimonialsHero
          activeTab={activeTab}
          onTabSelect={handleTabSelect}
          onOpenShareModal={() => setIsShareModalOpen(true)}
        />

        {/* Section 2: Key Proof Metrics */}
        <TestimonialsStatsBar />

        {/* Section 3: Featured Client Flagship Transformations */}
        <FeaturedClientSpotlight />

        {/* Section 4: Esteemed Client Logos Marquee */}
        <AboutBrandsMarqueeSection
          title="TRUSTED BY MARKET LEADERS ACROSS SECTORS"
          subtitle="Partnering with heavy industry, healthcare, luxury jewelry, and sustainable fashion labels."
        />

        {/* Section 5: Filter Tabs & Interactive Directory */}
        <div id="client-testimonials" className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 py-12 sm:py-16">
          <TestimonialsFilterTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Client Testimonials Grid */}
          {(activeTab === 'all' || activeTab === 'clients') && (
            <div className="mb-8">
              <ClientTestimonialsGrid testimonials={filteredClients} />
            </div>
          )}
        </div>

        {/* Section 6: Human Testimonials & Artisan Stories */}
        {(activeTab === 'all' || activeTab === 'human' || activeTab === 'artisans') && (
          <HumanTestimonialsSection testimonials={filteredHuman} />
        )}

        {/* Interactive "Share Your Story" Modal */}
        <ShareStoryModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />

      </div>
    </MainLayout>
  );
}
