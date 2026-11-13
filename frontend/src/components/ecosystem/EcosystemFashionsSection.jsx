'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Leaf,
  Droplet,
  Layers,
  Sprout,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Factory,
} from 'lucide-react';
import { BUSINESS_ASSETS } from '@/constant/businessAssetsConfig';

const EXPERTISE_AREAS = [
  {
    id: 'hemp',
    title: 'Himalayan Hemp & Bast Textiles',
    subtitle: '80% Lower Water Footprint',
    description:
      'Grown without synthetic fertilizers or chemical pesticides in Himalayan foothills, hemp is one of nature’s most regenerative bast fibers. It offers 3x the tensile strength of conventional cotton, provides natural UV resistance, and gets softer with every wash while shedding zero microplastics.',
    image: BUSINESS_ASSETS.fashions.hempFabrics.src,
    alt: BUSINESS_ASSETS.fashions.hempFabrics.alt,
    icon: Leaf,
    badge: 'REGENERATIVE FIBER',
  },
  {
    id: 'cotton',
    title: 'Certified Heirloom Organic Cotton',
    subtitle: 'Non-GMO & Chemical-Free',
    description:
      'Harvested from fair-wage Deccan Plateau agricultural cooperatives, our organic cotton is spun strictly from non-GMO seeds without neurotoxic defoliants or synthetic sizing agents. The resulting single-jersey and french terry fabrics offer breathable, hypoallergenic skin comfort.',
    image: BUSINESS_ASSETS.fashions.organicCotton.src,
    alt: BUSINESS_ASSETS.fashions.organicCotton.alt,
    icon: Sprout,
    badge: 'GOTS COMPLIANT',
  },
  {
    id: 'vegan',
    title: 'Vegan Silk & Plant Leather Alternatives',
    subtitle: '100% Cruelty-Free Biomaterials',
    description:
      'Reimagining luxury tactile aesthetics without animal exploitation or toxic synthetic polyurethane coatings. Our plant-derived cellulosic vegan silks achieve fluid drape and breathability, while bio-based vegan leathers provide durable structure for jackets, collars, and lifestyle accessories.',
    image: BUSINESS_ASSETS.fashions.veganSilkLeather.src,
    alt: BUSINESS_ASSETS.fashions.veganSilkLeather.alt,
    icon: Layers,
    badge: 'BIO-BASED LUXURY',
  },
  {
    id: 'dyes-tags',
    title: 'Botanical Dyes & Plantable Seed Tags',
    subtitle: 'Pure Fruit & Flower Pigments',
    description:
      'We extract warm earthen palettes from boiled pomegranate rinds, marigold flowers, turmeric, and madder root with 100% biodegradable runoff. Every garment is tagged with recycled cotton pulp embedded with live sweet basil seeds that customers plant to grow kitchen herbs.',
    image: BUSINESS_ASSETS.fashions.naturalDyes.src,
    alt: BUSINESS_ASSETS.fashions.naturalDyes.alt,
    icon: Droplet,
    badge: 'ZERO TOXIC EFFLUENT',
  },
];

const CAPABILITIES = [
  'Independent D2C capsule collections & bespoke designer wardrobe drops',
  'Strict zero-plastic supply chain with non-toxic botanical colorways',
  'Verified material traceability from farmer cooperatives to final garment',
  'Circular packaging with live non-GMO sweet basil plantable price tags',
  'Hypoallergenic, breathable silhouettes engineered for everyday conscious living',
  'Dedicated styling atelier creating sustainable fashion without aesthetic compromise',
];

export default function EcosystemFashionsSection() {
  return (
    <section
      id="strains-fashions"
      className="ecosystem-company-section relative bg-[#090909] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Strains Fashions - Independent Company Profile"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-[#00a859]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#00e676]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Division Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#00e676] tracking-wider">
              DIVISION 01
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e676]">
            <Sparkles size={14} />
            <span>Sustainable Fashion Brand</span>
          </div>
        </div>

        {/* Company Title & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight text-white leading-[1.05] mb-4">
              Strains <span className="text-[#00e676]">Fashions</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#00e676] font-semibold mb-6">
              Sustainable Fashion & Responsible Clothing
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#cccccc] leading-relaxed mb-6">
              Strains Fashions operates as an independent sustainable fashion business and direct-to-consumer label. Born from the belief that contemporary wardrobe essentials must honor planetary boundaries, the company creates customized conscious apparel from certified regenerative textiles, eliminating synthetic polymers, toxic chemical dyes, and exploitative supply chains.
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#999999] leading-relaxed mb-6">
              Operating with an uncompromising vision, Strains Fashions proves that conscious luxury is an aesthetic and tactile upgrade—delivering pieces that feel richer against the skin, age gracefully over years, and decompose safely back into the earth at the end of their lifecycle.
            </p>

            {/* Direct Link & Synergy with Strains Stitchery Manufacturing */}
            <div className="p-5 sm:p-6 rounded-2xl border border-[#00e676]/30 bg-[#00e676]/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#00e676] uppercase tracking-wider">
                <Factory size={16} />
                <span>Manufactured Directly By Strains Stitchery</span>
              </div>
              <p className="font-mono text-xs text-[#cccccc] leading-relaxed mb-3">
                While Strains Fashions curates the brand vision, silhouette design, and organic fabric standards, all physical garment engineering, precision pattern making, and eco-certified stitching are executed directly by our manufacturing division, <strong className="text-white">Strains Stitchery</strong>, at their Tirupur facility with Zero Liquid Discharge (ZLD) compliance.
              </p>
              <Link
                href="/strains-stitchery/clothing-manufacturing"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00e676] hover:underline font-bold"
              >
                <span>Learn about Strains Stitchery’s Tirupur facility</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121212] group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={BUSINESS_ASSETS.fashions.hero.src}
                  alt={BUSINESS_ASSETS.fashions.hero.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] group-hover:brightness-[0.9] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-[#00e676] uppercase tracking-wider">
                    Responsible Clothing Ethos
                  </span>
                  <span className="font-mono text-xs text-[#888]">100% Bio-Circular</span>
                </div>
                <p className="font-mono text-xs text-[#b8b8b8] leading-relaxed mb-4">
                  Every silhouette is engineered for durability, skin comfort, and absolute ecological integrity.
                </p>
                <Link
                  href="/strains-fashions/fashion-design"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#00e676] transition-colors"
                >
                  <span>Explore Strains Fashions Brand Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Sustainable Fashion Expertise Pillars */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white mb-2">
              Sustainable Fashion Expertise & Material Innovation
            </h3>
            <p className="font-mono text-xs text-[#888]">
              Natural fibers, cruelty-free alternatives, and non-toxic botanical chemistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {EXPERTISE_AREAS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-[#121212]/90 backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-[#00e676]/50 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                >
                  {/* Image header */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00e676] drop-shadow-md">
                        {item.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-[#00e676] border border-white/10">
                        <Icon size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[11px] text-[#00e676] font-semibold block mb-1">
                        {item.subtitle}
                      </span>
                      <h4 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-[#00e676] transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-mono text-xs text-[#a8a8a8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Individual Strengths & Capabilities */}
        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 sm:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-[#00e676] uppercase tracking-wider block mb-2 font-semibold">
                Company Strengths
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold uppercase text-white leading-tight mb-4">
                What Sets Strains Fashions Apart
              </h3>
              <p className="font-mono text-xs text-[#999] leading-relaxed mb-6">
                Unlike fast-fashion retailers greenwashing polyester with marketing buzzwords, Strains Fashions operates with direct material provenance and certified zero-discharge formulations.
              </p>

              <Link
                href="/strains-fashions/fashion-design"
                className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wider bg-[#00a859] hover:bg-[#00e676] text-black transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>EXPLORE STRAINS FASHIONS</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CAPABILITIES.map((cap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-[#00e676] shrink-0 mt-0.5" />
                    <span className="font-mono text-xs text-[#cccccc] leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

