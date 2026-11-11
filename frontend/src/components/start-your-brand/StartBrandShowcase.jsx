'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { START_YOUR_BRAND_ASSETS } from '@/constant';
import { useAutoplayVideo } from '@/hooks';

const SERVICES_LIST = [
  {
    title: 'Brand Naming & Identity Systems',
    desc: 'Proprietary phonetic trademark testing, visual identity manuals, typography hierarchies, and premium packaging design.',
    tag: 'Identity & IP',
  },
  {
    title: 'Product Line Formulation & Sourcing',
    desc: 'Translating design concepts into technical apparel spec packs, tech packs, bill-of-materials, and raw fiber procurement.',
    tag: 'Tech Packs',
  },
  {
    title: 'Incubator Garment Sampling & Fit',
    desc: 'Rapid physical prototype pattern drafting, fit corrections, fabric drape trials, and master sample approvals in Tirupur.',
    tag: 'Sampling Lab',
  },
  {
    title: 'Shopify Plus & Headless Commerce',
    desc: 'Conversion-engineered online stores built for high AOV, sub-second mobile page loads, dynamic bundles, and seamless checkout.',
    tag: 'E-Commerce Store',
  },
  {
    title: 'High-Impact Launch Campaign Films',
    desc: 'Cinematic brand launch films, founder vision documentaries, and social tease episodes directed to create waitlist frenzies.',
    tag: 'Launch Media',
  },
  {
    title: 'Growth Architecture & D2C Scaling',
    desc: 'Full-funnel Meta and Google acquisition funnels, email automation sequences, and unit economics optimization for profitability.',
    tag: 'D2C Scaling',
  },
];

export default function StartBrandShowcase() {
  const { videoRef, containerRef, isVideoLoaded, setIsVideoLoaded, isNearViewport } = useAutoplayVideo({ lazy: true });

  return (
    <section
      id="start-brand-showcase"
      className="relative bg-[#050505] text-white py-24 sm:py-32 border-b border-white/10 overflow-clip"
      aria-label="Start Your Brand Incubator Showcase"
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
              Brand Incubation <br className="hidden sm:inline" />
              Engineered From Zero To One
            </h2>

            <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              Launching an enduring brand requires synchronizing manufacturing capacity, commercial media, and performance growth. Strains Group provides the complete turnkey infrastructure so visionary founders can launch with institutional backing.
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
                  <h3 className="text-white font-sans font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#00e676] transition-colors">
                    {srv.title}
                  </h3>
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
                  <div className="text-xl font-mono font-bold text-[#00e676]">60 Days</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Concept To Launch</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-xl font-mono font-bold text-white">Turnkey</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Production & Growth</div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,168,89,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Apply For Incubation</span>
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
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#080808] transition-opacity duration-700 ease-out ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
                    src={isNearViewport ? START_YOUR_BRAND_ASSETS.showcaseVideo.src : undefined}
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
                    className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    {isNearViewport && (
                      <>
                        <source src={START_YOUR_BRAND_ASSETS.showcaseVideo.src} type="video/mp4" />
                        {START_YOUR_BRAND_ASSETS.showcaseVideo.fallbackSrc && (
                          <source src={START_YOUR_BRAND_ASSETS.showcaseVideo.fallbackSrc} type="video/mp4" />
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
