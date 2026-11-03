'use client';

import React from 'react';
import Link from 'next/link';
import {
  Clapperboard,
  Sliders,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const REASONS = [
  {
    icon: Clapperboard,
    tag: 'DIRECTORIAL CRAFT',
    title: 'Directors & Cinematographers, Not Point-and-Shooters',
    description:
      "We don't just record footage; we block, light, and pace every scene. Headed by Danny (Direction & Post-production) and Pavan (Photography & Videography), every project gets true cinematic storyboards, dramatic lighting ratios, and deliberate narrative cadence.",
    highlight: 'Cinema-grade storytelling tailored to your brand personality',
  },
  {
    icon: Sliders,
    tag: 'IN-HOUSE FINISHING',
    title: 'Complete Post-Production Suite Under One Roof',
    description:
      'Zero outsourcing to fragmented freelancers. Our in-house editors, DaVinci Resolve colorists, 3D motion designers, and sound engineers craft the final cut with seamless cohesion, ensuring lightning-fast revisions and airtight quality control.',
    highlight: 'DaVinci color grading, CGI/VFX & spatial sound design',
  },
  {
    icon: TrendingUp,
    tag: 'PERFORMANCE FIRST',
    title: 'Cinematography Tuned for Media Conversion',
    description:
      'Guided by Praharsha (Strategy Maker & Line Producer) and Prasad (Digital Marketing Head), our cameras shoot with performance mandates — framing widescreen 16:9 for websites and vertical 9:16 for high-converting Meta and Google video ads.',
    highlight: 'Verified 4.64% CTR track record on enterprise campaigns',
  },
  {
    icon: ShieldCheck,
    tag: 'PROVEN DIVERSITY',
    title: 'From Heavy Industrial Floors to Haute Couture',
    description:
      'We possess the technical gear and safety clearances to film on active infrastructure sites (JSW Cement, Pioneer Cranes), combined with the aesthetic finesse needed for luxury gold (Haraa) and high-fashion runways (Xiti).',
    highlight: 'Trusted by 15+ premier Indian & international enterprises',
  },
];

const CLIENT_ROSTER = [
  { name: 'JSW Cement', category: 'Heavy Infrastructure' },
  { name: 'Haraa Jewellery', category: 'Luxury Gold & Diamonds' },
  { name: 'Xiti Fashion', category: 'Haute Couture & Apparel' },
  { name: 'Pakka Non Veg', category: 'Culinary & Hospitality' },
  { name: 'Pioneer Cranes', category: 'Industrial Machinery' },
  { name: 'Aastu Refrigeration', category: 'Cold-Chain Technology' },
  { name: 'Sri Bioaesthetics', category: 'Microbial & Biotech' },
  { name: 'Partha Dentals', category: 'Healthcare Network' },
];

export default function VideoWhyChoose() {
  return (
    <section
      id="video-why-choose"
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Why Choose Strains Associates for Video Production"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00a859]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header — fades from top */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Why Industry Leaders Choose <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Strains Associates</span> For Video Production
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            Most production agencies either deliver artistic footage that fails to convert or uninspired corporate footage that nobody watches. We bridge the gap: cinematic film language engineered for modern commercial power.
          </p>
        </div>

        {/* 4 Pillar Cards Grid — alternating left/right fade per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            // Left column: fade-right, Right column: fade-left
            const aosAnim = index % 2 === 0 ? 'fade-right' : 'fade-left';
            return (
              <div
                key={item.title}
                data-aos={aosAnim}
                data-aos-delay={Math.floor(index / 2) * 100}
                data-aos-duration="800"
                className="cinema-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#00e676]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#00a859]/10 border border-[#00a859]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00a859]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#00e676]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 bg-white/5 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-4 group-hover:text-[#00e676] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#00e676]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Enterprise Client Strip — fade up */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-[#111111] border border-white/10 rounded-2xl p-8 sm:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-[#00e676] uppercase tracking-wider block mb-1 font-semibold">
                Verified Client Roster
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-bold text-white">
                Trusted Across Industry Leaders &amp; Emerging Giants
              </h4>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00e676] hover:text-white uppercase tracking-wider group"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {CLIENT_ROSTER.map((client, idx) => (
              <div
                key={client.name}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                data-aos-duration="600"
                className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors flex flex-col justify-center"
              >
                <span className="text-white font-sans font-bold text-base sm:text-lg block">
                  {client.name}
                </span>
                <span className="text-neutral-400 font-mono text-xs mt-1 block">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
