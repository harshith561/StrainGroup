'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FASHION_BRAND_ASSETS } from '@/constant';
import { useAutoplayVideo } from '@/hooks';

const SERVICES_LIST = [
  {
    title: 'Editorial Lookbooks & Campaigns',
    desc: 'High-concept fashion photography and 4K commercial films shot with cinema-grade prime lenses and couture-level art direction.',
    tag: 'Lookbooks',
  },
  {
    title: 'Model Casting & Styling Direction',
    desc: 'Complete in-house casting coordination, makeup artists, wardrobe styling, and set design tailored to your brand identity.',
    tag: 'Art Direction',
  },
  {
    title: 'E-Commerce Product Ghost Mannequin',
    desc: 'Pixel-perfect studio apparel photography with color-accurate grading, crisp clipping paths, and high-volume delivery timelines.',
    tag: 'E-Commerce',
  },
  {
    title: 'D2C Social Commerce Video Reels',
    desc: 'Fast-paced, high-aesthetic vertical videos (9:16) capturing garment movement, texture, and fit optimized for Meta and TikTok conversions.',
    tag: 'Social Commerce',
  },
  {
    title: 'Jewelry & Macro Accessory Capture',
    desc: 'Specialized focus-stacked macro photography and micro-movement video highlighting gemstone clarity, metal luster, and fine detailing.',
    tag: 'Macro Luxury',
  },
  {
    title: 'Retouching & Color Fidelity Matching',
    desc: 'Strict PANTONE-verified digital color matching ensuring your online customers receive garments that look identical to web listings.',
    tag: 'Color Fidelity',
  },
];

export default function FashionBrandShowcase() {
  const { videoRef, containerRef, isVideoLoaded, setIsVideoLoaded, isNearViewport } = useAutoplayVideo({ lazy: true });

  return (
    <section
      id="fashion-brand-showcase"
      className="relative bg-[#050505] text-white py-24 sm:py-32 border-b border-white/10 overflow-clip"
      aria-label="Fashion Brand Capabilities and Visual Showcase"
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
              Fashion Imagery <br className="hidden sm:inline" />
              Engineered For Luxury
            </h2>

            <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              Headed by Pavan, our fashion imaging team blends high-fashion editorial aesthetics with digital conversion rigor. From bespoke bridal jewelry houses to contemporary sustainable apparel labels, we make garments look timeless and irresistible.
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
                  <div className="text-xl font-mono font-bold text-[#00e676]">4.2x</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Average ROAS</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-xl font-mono font-bold text-white">100%</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Color Accuracy</div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,168,89,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Book Fashion Shoot</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — Sticky Video Panel */}
          <div ref={containerRef} className="lg:col-span-6 relative lg:self-stretch">
            <div className="lg:sticky lg:top-28 xl:top-32 transition-all duration-300 z-20">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00a859]/30 to-emerald-500/20 rounded-3xl blur-xl opacity-100 pointer-events-none" />

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#00e676]/50 shadow-2xl bg-[#080808]">
                  {/* High-Tech Video Loader Overlay — Visible ONLY until the video is loaded & ready */}
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#080808] transition-opacity duration-700 ease-out ${
                      isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    aria-hidden={isVideoLoaded}
                  >
                    <div className="absolute w-36 h-36 bg-[#00a859]/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

                    <div className="relative flex flex-col items-center gap-3.5 z-10">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-[#00e676]/25 animate-ping opacity-40" />
                        <div className="w-10 h-10 rounded-full border-2 border-transparent border-t-[#00e676] border-r-[#00a859] animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                          Loading 4K Reel...
                        </span>
                      </div>
                    </div>
                  </div>

                  <video
                    ref={videoRef}
                    src={isNearViewport ? FASHION_BRAND_ASSETS.showcaseVideo.src : undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    preload={isNearViewport ? 'metadata' : 'none'}
                    onLoadedData={() => setIsVideoLoaded(true)}
                    onPlaying={() => setIsVideoLoaded(true)}
                    onCanPlay={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
                      isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {isNearViewport && (
                      <>
                        <source src={FASHION_BRAND_ASSETS.showcaseVideo.src} type="video/mp4" />
                        {FASHION_BRAND_ASSETS.showcaseVideo.fallbackSrc && (
                          <source src={FASHION_BRAND_ASSETS.showcaseVideo.fallbackSrc} type="video/mp4" />
                        )}
                      </>
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
