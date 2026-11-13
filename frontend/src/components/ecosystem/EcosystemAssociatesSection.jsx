import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Camera,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_ASSETS } from '@/constant/businessAssetsConfig';

const CREATIVE_PILLARS = [
  {
    id: 'strategy',
    title: 'Brand Strategy & Visual Genetics',
    subtitle: 'Category-Defining Brand Architecture',
    description:
      'We formulate complete brand identities from the ground up: customer psychology, narrative voice, design tokens, typography, and premium packaging specs crafted by Strategy Maker Praharsha Govindu to elevate businesses into cultural category leaders.',
    image: BUSINESS_ASSETS.associates.brandStrategy.src,
    alt: BUSINESS_ASSETS.associates.brandStrategy.alt,
    icon: Sparkles,
    badge: 'BRAND DNA',
  },
  {
    id: 'video',
    title: '4K Commercial Video & Cinema Production',
    subtitle: 'Cinema Cameras, Drones & DaVinci Grading',
    description:
      'Led by Danny (Direction & Post-production) and Pavan (Head of Cinematography), our in-house production floors deploy cinema cameras, studio lighting rigs, and professional drones. We deliver high-fidelity brand commercials, industrial plant films, and high-retention social reels.',
    image: BUSINESS_ASSETS.associates.videoProduction.src,
    alt: BUSINESS_ASSETS.associates.videoProduction.alt,
    icon: Camera,
    badge: 'CINEMA REELS',
  },
  {
    id: 'marketing',
    title: 'Performance Marketing & Digital Advertising',
    subtitle: 'High-Intent Google Ads & Meta SMM',
    description:
      'Headed by Prasad, our digital team deploys algorithmic PPC funnels across Google Search, Meta (Instagram/Facebook), and programmatic networks. Maintaining a verified 90.8% Google Ads optimization score, ₹13.01 average CPC targets, and deep conversion attribution.',
    image: BUSINESS_ASSETS.associates.digitalMarketing.src,
    alt: BUSINESS_ASSETS.associates.digitalMarketing.alt,
    icon: BarChart3,
    badge: 'VERIFIED ROI',
  },
  {
    id: 'social',
    title: 'Social Media & Community Management',
    subtitle: 'Platform-Native 9:16 Video & Growth',
    description:
      'We craft high-retention content calendars, viral short-form video hooks, and organic engagement funnels across Instagram, YouTube, and LinkedIn. Transforming audiences into brand advocates through authentic storytelling and algorithmic pacing.',
    image: BUSINESS_ASSETS.associates.socialMediaCreative.src,
    alt: BUSINESS_ASSETS.associates.socialMediaCreative.alt,
    icon: Users,
    badge: 'COMMUNITY SCALE',
  },
];

const ASSOCIATES_CAPABILITIES = [
  'In-house commercial cinema camera crews, lighting rigs & drone aerials',
  'DaVinci Resolve color suites, sound design bays & motion graphics studio',
  'High-intent Google Ads management with verified 90.8% optimization score',
  'Multi-year client partnerships with titans like JSW Cement and Pioneer Cranes',
  'Full-funnel digital marketing, technical SEO & conversion rate optimization',
  'Server-side conversion tracking, dynamic call tracking & executive dashboards',
];

export default function EcosystemAssociatesSection() {
  return (
    <section
      id="strains-associates"
      className="ecosystem-company-section relative bg-[#090909] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Strains Associates - Independent Company Profile"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#00a859]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#00e676]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Division Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#00e676] tracking-wider">
              DIVISION 03
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00e676]">
            <TrendingUp size={14} />
            <span>Creative & Growth Agency</span>
          </div>
        </div>

        {/* Company Title & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black uppercase tracking-tight text-white leading-[1.05] mb-4">
              Strains <span className="text-[#00e676]">Associates</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#00e676] font-semibold mb-6">
              Creative Strategy, Digital Marketing & Brand Growth
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#cccccc] leading-relaxed mb-6">
              Strains Associates is an independent creative agency and performance digital marketing enterprise headquartered in Hyderabad, Telangana. Formed to help businesses establish powerful cultural relevance and scalable customer acquisition, the company brings together brand strategists, cinema filmmakers, DaVinci colorists, and quantitative ad buyers under one roof.
            </p>
            <p className="font-mono text-xs sm:text-sm text-[#999999] leading-relaxed">
              Rejecting shallow vanity metrics, Strains Associates focuses on verifiable business growth—managing high-stakes commercial film campaigns and algorithmic Google and Meta ad accounts for enterprise infrastructure titans like JSW Cement and Pioneer Cranes, as well as emerging luxury and D2C brands.
            </p>
          </div>

          {/* Hero Image Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121212] group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={BUSINESS_ASSETS.associates.hero.src}
                  alt={BUSINESS_ASSETS.associates.hero.alt}
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
                    Creative & Digital Headquarters
                  </span>
                  <span className="font-mono text-xs text-[#888]">Hyderabad, India</span>
                </div>
                <p className="font-mono text-xs text-[#b8b8b8] leading-relaxed mb-4">
                  Where Praharsha, Danny, Pavan, and Prasad engineer complete brand transformations and ROI growth.
                </p>
                <Link
                  href="/strains-associates/digital-marketing"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#00e676] transition-colors"
                >
                  <span>Explore Strains Associates Agency Page</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Creative & Growth Disciplines */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase text-white mb-2">
              Creative Strategy & Digital Marketing Capabilities
            </h3>
            <p className="font-mono text-xs text-[#888]">
              From brand DNA and broadcast cinematography to high-intent PPC and community scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {CREATIVE_PILLARS.map((item) => {
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
                Agency Strengths
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-extrabold uppercase text-white leading-tight mb-4">
                Why Visionaries Choose Strains Associates
              </h3>
              <p className="font-mono text-xs text-[#999] leading-relaxed mb-6">
                Cinematic video direction paired with quantitative ad science, delivering verified revenue metrics and compounding brand value.
              </p>

              <Link
                href="/strains-associates/digital-marketing"
                className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl font-sans font-extrabold text-xs uppercase tracking-wider bg-[#00a859] hover:bg-[#00e676] text-black transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>EXPLORE STRAINS ASSOCIATES</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ASSOCIATES_CAPABILITIES.map((cap, i) => (
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

