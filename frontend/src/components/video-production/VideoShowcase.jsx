'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { VIDEO_PRODUCTION_ASSETS } from '@/constant';

const SERVICES_LIST = [
  {
    title: 'Corporate Videos & Brand Films',
    desc: 'Cinematic documentary-style brand narratives that cement market authority, executive vision, and corporate credibility.',
    tag: 'Long & Short Form',
  },
  {
    title: 'Commercial Ads & Product Videos',
    desc: 'High-energy commercial advertisements engineered with psychological hook pacing for TV broadcasts and digital ad campaigns.',
    tag: 'High-Conversion',
  },
  {
    title: 'Industrial & Heavy Infrastructure',
    desc: 'Specialized filming on active industrial sites, heavy factories, and manufacturing units (such as JSW Cement and Pioneer Cranes).',
    tag: 'Active Plant Filming',
  },
  {
    title: 'Social Media Videos & Vertical 9:16 Reels',
    desc: 'High-retention social content crafted specifically for Instagram Reels, YouTube Shorts, and high-impact Meta ad funnels.',
    tag: 'Mobile-First',
  },
  {
    title: 'Licensed Drone & FPV Videography',
    desc: 'Dynamic aerial perspectives and high-speed indoor FPV sweeps filmed with certified pilots and commercial safety clearances.',
    tag: 'Aerial Cinema',
  },
  {
    title: 'Post-Production, DaVinci Grading & VFX',
    desc: 'In-house offline editing, precision Hollywood-grade DaVinci color timing, 3D motion graphics, and multi-track spatial sound design.',
    tag: 'Full Finishing',
  },
];

export default function VideoShowcase() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="video-showcase"
      className="relative bg-[#050505] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Video Production Capabilities & Reel Showcase"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a859]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Split Section: Left Side Heading & Services, Right Side Pure Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT SIDE — slides in from left */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* White Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6">
              Commercial Video Services <br className="hidden sm:inline" />
              Engineered For Impact
            </h2>

            <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed mb-8">
              At Strains Associates, we combine directorial artistry with commercial performance science. Whether filming heavy machinery on industrial factory floors or capturing high-fashion apparel, our multidisciplinary crews produce visuals that demand undivided attention.
            </p>

            {/* Services Grid — staggered fade-up */}
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

            {/* Quick Metrics & CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xl font-mono font-bold text-[#00e676]">4K / 6K</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Cinema Standard</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <div className="text-xl font-mono font-bold text-white">100%</div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">In-House Finishing</div>
                </div>
              </div>

              <Link
                href="/book-consultation"
                className="px-6 py-3.5 rounded-xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,168,89,0.3)] hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Book Production Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE — slides in from right */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
            className="lg:col-span-6"
          >
            <div className="relative group">
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00a859]/30 to-emerald-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Pure Video Frame — Only the Video */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 group-hover:border-[#00e676]/50 shadow-2xl bg-black transition-all duration-500">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={VIDEO_PRODUCTION_ASSETS.showcaseVideo.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={VIDEO_PRODUCTION_ASSETS.showcaseVideo.src} type="video/mp4" />
                  {VIDEO_PRODUCTION_ASSETS.showcaseVideo.fallbackSrc && (
                    <source src={VIDEO_PRODUCTION_ASSETS.showcaseVideo.fallbackSrc} type="video/mp4" />
                  )}
                </video>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
