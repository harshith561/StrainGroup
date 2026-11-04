'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CLOTHING_MANUFACTURING_ASSETS } from '@/constant';
import { useAutoplayVideo } from '@/hooks';

const SERVICES_LIST = [
  {
    title: 'Certified Organic Cotton Apparel',
    desc: 'Heavyweight tees, luxury hoodies, loungewear, and activewear crafted from 100% GOTS-certified combed organic cotton.',
    tag: 'Organic Cotton',
  },
  {
    title: 'Pure Himalayan Hemp Textiles',
    desc: 'Antimicrobial, UV-resistant, and high-tensile hemp linen garments that soften with each wash and endure for decades.',
    tag: 'Hemp Fabrics',
  },
  {
    title: 'Zero-Discharge Botanical Dyeing',
    desc: 'Chemical-free natural colors derived from fruits, roots, and flowers with closed-loop water treatment recycling 100% of effluent.',
    tag: 'Natural Dyes',
  },
  {
    title: 'Plantable Seed Price Tags',
    desc: 'Recycled seed paper tags embedded with marigold and basil seeds that consumers plant directly in soil after unboxing.',
    tag: 'Circular Tags',
  },
  {
    title: 'Private Label Cut-Make-Trim (CMT)',
    desc: 'Custom garment pattern design, bespoke inner neck labels, luxury embroidery, screen printing, and tailored silhouette grading.',
    tag: 'Private Label',
  },
  {
    title: 'Low-MOQ Sprints to Container Export',
    desc: 'Flexible production runs supporting emerging ethical designer collections up to high-volume commercial container exports.',
    tag: 'Global Scale',
  },
];

export default function ClothingShowcase() {
  const { videoRef, isVideoLoaded, setIsVideoLoaded } = useAutoplayVideo();

  return (
    <section
      id="clothing-showcase"
      className="relative bg-[#050505] text-white py-24 sm:py-32 border-b border-white/10 overflow-clip"
      aria-label="Clothing Manufacturing Capabilities and Factory Showcase"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a859]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT SIDE — Content & 6 Cards */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6">
              Tirupur Apparel Manufacturing <br className="hidden sm:inline" />
              Engineered For Circularity
            </h2>

            <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              At our manufacturing facility in Tirupur, Tamil Nadu, we prove that luxury craftsmanship and environmental stewardship coexist. From raw seed to finished export carton, our ethical supply chain eliminates hazardous chemistry, plastic waste, and worker exploitation.
            </p>

            {/* 6 Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SERVICES_LIST.map((srv, idx) => (
                <div
                  key={srv.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  data-aos-duration="600"
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00e676]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00e676] bg-[#00a859]/10 px-2 py-0.5 rounded">
                      {srv.tag}
                    </span>
                    <span className="text-white/20 font-mono text-xs group-hover:text-[#00e676] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-white font-sans font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#00e676] transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics & CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xl font-mono font-bold text-[#00e676]">100%</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Zero-Discharge ZLD</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-xl font-mono font-bold text-white">Tirupur</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Facility Hub</div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,168,89,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Request Sample Kit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — Sticky Video Panel */}
          <div className="lg:col-span-6 relative lg:self-stretch">
            <div className="lg:sticky lg:top-28 xl:top-32 transition-all duration-300 z-20">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00a859]/30 to-emerald-500/20 rounded-3xl blur-xl opacity-100 pointer-events-none" />

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#00e676]/50 shadow-2xl bg-black">
                  <video
                    ref={videoRef}
                    src={CLOTHING_MANUFACTURING_ASSETS.showcaseVideo.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    preload="auto"
                    onLoadedData={() => setIsVideoLoaded(true)}
                    onPlaying={() => setIsVideoLoaded(true)}
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
                      isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <source src={CLOTHING_MANUFACTURING_ASSETS.showcaseVideo.src} type="video/mp4" />
                    {CLOTHING_MANUFACTURING_ASSETS.showcaseVideo.fallbackSrc && (
                      <source src={CLOTHING_MANUFACTURING_ASSETS.showcaseVideo.fallbackSrc} type="video/mp4" />
                    )}
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

