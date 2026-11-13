'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Factory,
  Scissors,
  Settings,
  Droplet,
  Boxes,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_ASSETS } from '@/constant/businessAssetsConfig';

const MANUFACTURING_PILLARS = [
  {
    id: 'fabric-eng',
    title: 'Fabric Engineering & Material Formulation',
    subtitle: 'Custom GSM & Yarn Counts',
    description:
      'We engineer custom textile formulations directly from raw natural fibers: high-tenacity Himalayan hemp weaves, organic single jersey, and premium french terry. Every fabric lot undergoes strict lab testing for tensile strength, yarn integrity, shrinkage control, and zero synthetic sizing.',
    image: BUSINESS_ASSETS.stitchery.fabricEngineering.src,
    alt: BUSINESS_ASSETS.stitchery.fabricEngineering.alt,
    icon: Settings,
    badge: 'TEXTILE LAB SPECS',
  },
  {
    id: 'tech-packs',
    title: 'CAD Tech Pack Development & Rapid Sampling',
    subtitle: '6 to 10 Day Physical Prototype Turnaround',
    description:
      'Our Tirupur pattern masters convert design sketches and vector flats into precision digital CAD tech packs, comprehensive size grading charts, and 3D digital drape simulations. Approved physical prototype counter-samples are delivered within 6 to 10 business days.',
    image: BUSINESS_ASSETS.stitchery.techPackSampling.src,
    alt: BUSINESS_ASSETS.stitchery.techPackSampling.alt,
    icon: Scissors,
    badge: 'AGILE PROTOTYPING',
  },
  {
    id: 'stitching-quality',
    title: 'Precision Stitching & AQL 2.5 Quality Audits',
    subtitle: 'Automated Cutting & Flatlock Seaming',
    description:
      'Our skilled craft lines operate computer-controlled low-wastage fabric cutting tables, high-speed flatlock, overlock, and twin-needle seam reinforcement machines. Every production batch is governed by strict AQL 2.5 zero-tolerance inline and final defect inspections.',
    image: BUSINESS_ASSETS.stitchery.garmentManufacturing.src,
    alt: BUSINESS_ASSETS.stitchery.garmentManufacturing.alt,
    icon: Factory,
    badge: 'PRECISION CRAFTSMANSHIP',
  },
  {
    id: 'low-moq-zld',
    title: 'Low-MOQ Agility & 100% Zero Liquid Discharge',
    subtitle: 'From Boutique Capsules to Container Export',
    description:
      'We accommodate modern brands testing new silhouettes with low minimum order quantities (MOQs), while maintaining the industrial capacity to scale into container-load exports. Our facility features a certified Zero Liquid Discharge (ZLD) plant that purifies and recycles 100% of process water.',
    image: BUSINESS_ASSETS.stitchery.zeroDischarge.src,
    alt: BUSINESS_ASSETS.stitchery.zeroDischarge.alt,
    icon: Droplet,
    badge: 'CIRCULAR INFRASTRUCTURE',
  },
];

const STITCHERY_CAPABILITIES = [
  'Direct facility ownership in Tirupur — zero agent markups or broker delays',
  'Flexible low-MOQ starter collections with seamless container export scaling',
  '100% Zero Liquid Discharge (ZLD) biological water recycling infrastructure',
  'Fast 6 to 10-day physical counter-sample and fit prototype turnaround',
  'Full Cut-Make-Trim (CMT), bespoke trims, screen printing & embroidery',
  'Strict AQL 2.5 intermediate and pre-shipment quality audit certification',
];

export default function EcosystemStitcherySection() {
  return (
    <section
      id="strains-stitchery"
      className="ecosystem-company-section relative bg-[#070707] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Strains Stitchery - Independent Company Profile"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#00a859]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Division Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#00e676] tracking-wider">
              DIVISION 02
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e676]">
            <Factory size={14} />
            <span>Garment Manufacturing Hub</span>
          </div>
        </div>

        {/* Company Title & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight text-white leading-[1.05] mb-4">
              Strains <span className="text-[#00e676]">Stitchery</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#00e676] font-semibold mb-6">
              Garment Manufacturing & Product Development
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#cccccc] leading-relaxed mb-6">
              Strains Stitchery is an independent apparel manufacturing business operating directly out of Tirupur, Tamil Nadu—the historic knitwear capital of India. Equipped with modern industrial machinery and seasoned master tailors, the facility handles end-to-end garment engineering, sample development, and scale production for independent fashion labels and enterprise clients.
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#999999] leading-relaxed">
              By removing trading agents, brokers, and middlemen, Strains Stitchery offers global fashion designers and corporate brands direct, transparent access to the manufacturing floor. Whether fulfilling low-MOQ test capsules or high-volume export containers, the factory pairs engineering precision with certified Zero Liquid Discharge environmental compliance.
            </p>
          </div>

          {/* Hero Image Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121212] group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={BUSINESS_ASSETS.stitchery.hero.src}
                  alt={BUSINESS_ASSETS.stitchery.hero.alt}
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
                    Tirupur Production Hub
                  </span>
                  <span className="font-mono text-xs text-[#888]">Tamil Nadu, India</span>
                </div>
                <p className="font-mono text-xs text-[#b8b8b8] leading-relaxed mb-4">
                  Master cutters, flatlock seams, and 100% Zero Liquid Discharge closed-loop water treatment.
                </p>
                <Link
                  href="/strains-stitchery/clothing-manufacturing"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#00e676] transition-colors"
                >
                  <span>Explore Strains Stitchery Factory Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Technical Manufacturing Pillars */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white mb-2">
              Garment Manufacturing & Technical Capabilities
            </h3>
            <p className="font-mono text-xs text-[#888]">
              From digital CAD specs and rapid prototyping to automated sewing and container exports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {MANUFACTURING_PILLARS.map((item) => {
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
                Manufacturing Strengths
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold uppercase text-white leading-tight mb-4">
                Why Brands Choose Strains Stitchery
              </h3>
              <p className="font-mono text-xs text-[#999] leading-relaxed mb-6">
                Direct factory pricing, low minimum order quantities, and 100% Zero Liquid Discharge closed-loop water treatment right on the factory floor.
              </p>

              <Link
                href="/strains-stitchery/clothing-manufacturing"
                className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wider bg-[#00a859] hover:bg-[#00e676] text-black transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>EXPLORE STRAINS STITCHERY</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STITCHERY_CAPABILITIES.map((cap, i) => (
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

