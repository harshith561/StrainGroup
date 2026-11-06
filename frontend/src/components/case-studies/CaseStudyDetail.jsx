'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import MainLayout from '@/components/common/MainLayout';
import { ShareButtons } from '@/components/blog';

/**
 * CaseStudyDetail Component
 * Adheres strictly to the requested employee profile layout pattern (TeamMemberProfile):
 * - Top: Heading & Subtitle
 * - Right: Image & Project Specifications
 * - Left: Comprehensive Content (Overview, Challenge, Strategy, Results, Metrics, Quote)
 * - Last: Social Media links at the bottom of the left column with the "+ Platform" format
 */
export default function CaseStudyDetail({ caseStudy }) {
  if (!caseStudy) {
    return (
      <MainLayout>
        <div className="team-profile-page-wrapper flex items-center justify-center py-32 px-6">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-3xl font-sans font-bold text-white mb-4">
              Case Study Not Found
            </h1>
            <p className="text-neutral-400 font-sans text-sm mb-8">
              The case study you are looking for is unavailable or has been relocated.
            </p>
            <Link
              href="/work"
              className="pill-button inline-flex items-center gap-2 bg-[#00a859] text-black font-bold px-6 py-3 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const pageTitle = `${caseStudy.title} — ${caseStudy.subtitle} | Case Study Strains Group`;
  const metaDescription = caseStudy.summary;
  const canonicalUrl = `https://strains.in/case-studies/${caseStudy.slug}`;

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: caseStudy.title,
    headline: `${caseStudy.title} — ${caseStudy.subtitle}`,
    description: metaDescription,
    image: caseStudy.heroImage ? `https://strains.in${caseStudy.heroImage}` : undefined,
    url: canonicalUrl,
    creator: {
      '@type': 'Organization',
      name: 'Strains Associates',
    },
  };

  return (
    <MainLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        {caseStudy.heroImage && (
          <meta property="og:image" content={caseStudy.heroImage.startsWith('http') ? caseStudy.heroImage : `https://strains.in${caseStudy.heroImage}`} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
        />
      </Head>

      <div className="team-profile-page-wrapper bg-[#0c0c0c] text-white  pb-32">
        <div className="team-profile-container max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">

          {/* Breadcrumb / Back Link & Share Buttons */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-neutral-400 hover:text-[#00a859] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all case studies</span>
            </Link>

            <ShareButtons
              title={`${caseStudy.title} — Case Study`}
              slug={caseStudy.slug}
              basePath="/case-studies"
            />
          </div>

          {/* Main Two-Column Container (50% / 50% Desktop Layout matching TeamMemberProfile) */}
          <div className="team-profile-layout">

            {/* LEFT COLUMN: Case Study Information, Narrative & Social Media Links at Bottom */}
            <div className="team-profile-left">

              {/* 1. Case Study Heading / Name */}
              <h1 className="team-profile-name">
                {caseStudy.title}
              </h1>

              {/* 2. Subtitle (in green accent color #00a859) */}
              <span className="team-profile-designation">
                {caseStudy.subtitle}
              </span>

              {/* 3. Descriptive Narrative Paragraphs */}
              <div className="team-profile-description space-y-6">

                {/* Executive Overview */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-2">
                    Executive Overview
                  </h3>
                  <p className="team-profile-p">
                    {caseStudy.overview}
                  </p>
                </div>

                {/* The Challenge */}
                <div className="bg-[#141414] border-l-2 border-[#00a859] p-5 rounded-r-xl">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a859] mb-1.5">
                    The Challenge
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans leading-relaxed m-0">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* The Strategy & Execution */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-2">
                    Strategy & Execution
                  </h3>
                  <p className="team-profile-p">
                    {caseStudy.strategy}
                  </p>
                </div>

                {/* Results & Business Impact */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 mb-2">
                    Measurable Results & Value
                  </h3>
                  <p className="team-profile-p">
                    {caseStudy.results}
                  </p>
                </div>

              </div>

              {/* 4. Key Metrics Grid */}
              <div className="my-8 pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a859] mb-4">
                  Key Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col justify-between"
                    >
                      <span className="font-mono text-2xl font-extrabold text-[#00a859] block">
                        {metric.value}
                      </span>
                      <span className="font-sans text-xs font-bold text-white mt-1 block">
                        {metric.label}
                      </span>
                      <span className="text-[11px] text-neutral-400 mt-0.5 block">
                        {metric.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Client Testimonial / Quote */}
              {caseStudy.quote && (
                <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5">
                  <p className="text-sm sm:text-base italic font-sans text-white leading-relaxed mb-3">
                    "{caseStudy.quote.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-sans font-bold text-[#00a859]">
                      — {caseStudy.quote.author}
                    </span>
                    <span className="text-neutral-500 text-xs">·</span>
                    <span className="text-xs text-neutral-400 font-sans">
                      {caseStudy.quote.company}
                    </span>
                  </div>
                </div>
              )}

              {/* 6. Social Media Links at Bottom (Exact team-profile-social-list pattern with + sign) */}
              {caseStudy.socials && caseStudy.socials.length > 0 && (
                <div
                  className="team-profile-social-list mt-8"
                  role="list"
                  aria-label={`${caseStudy.title} Social & Web Links`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
                    Share & Connect
                  </span>
                  {caseStudy.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-profile-social-row"
                      role="listitem"
                      aria-label={`${caseStudy.title} on ${social.platform}`}
                    >
                      <span className="social-plus-icon" aria-hidden="true">+</span>
                      <span className="social-label">{social.platform}</span>
                    </a>
                  ))}
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Showcase Image & Project Specs Card */}
            <div className="team-profile-right flex flex-col gap-6">

              {/* Profile / Case Study Showcase Image */}
              <div className="team-profile-image-wrap media-placeholder shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="team-profile-image"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.remove('media-placeholder')}
                />
              </div>

              {/* Project Specifications Card (Service Pillar Removed) */}
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-7 space-y-5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00a859]">
                  Project Specifications
                </h3>

                <div className="space-y-3.5 text-sm font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-neutral-400">Client Organization</span>
                    <span className="text-white font-medium text-right">{caseStudy.client}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-neutral-400">Timeline / Scope</span>
                    <span className="text-white font-medium text-right">{caseStudy.timeline}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Category</span>
                    <span className="text-white font-medium text-right">{caseStudy.category}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                {caseStudy.deliverables && (
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Deliverables Executed
                    </h4>
                    <div className="space-y-2">
                      {caseStudy.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00a859] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action Button */}
                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 text-sm font-sans font-bold bg-[#00a859] hover:bg-[#00c266] text-black py-3 rounded-full transition-all"
                  >
                    <span>Start a Project Like This</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </MainLayout>
  );
}
