'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '@/components/common/MainLayout';

/**
 * Reusable dynamic TeamMemberProfile component
 * Populates individual team member profile page based on provided member data.
 * Adheres strictly to Reference Screenshot 1 (Desktop) & Reference Screenshot 2 (Mobile).
 */
export default function TeamMemberProfile({ member }) {
  if (!member) {
    return (
      <MainLayout>
        <div className="team-profile-page-wrapper flex items-center justify-center py-32 px-6">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-3xl font-sans font-bold text-white mb-4">
              Team Member Not Found
            </h1>
            <p className="text-neutral-400 font-sans text-sm mb-8">
              The team member profile you are looking for is unavailable or has been relocated.
            </p>
            <Link
              href="/about-strains-group"
              className="pill-button inline-flex items-center"
            >
              Back to Team
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Ensure description is an array of paragraphs
  const descriptionParagraphs = Array.isArray(member.description)
    ? member.description
    : typeof member.description === 'string'
    ? member.description.split('\n\n').filter(Boolean)
    : [];

  // Social media platforms config
  const socialConfig = [
    { key: 'facebook', label: 'Facebook', url: member.facebook },
    { key: 'twitter', label: 'Twitter', url: member.twitter },
    { key: 'dribbble', label: 'Dribbble', url: member.dribbble },
    { key: 'linkedin', label: 'LinkedIn', url: member.linkedin },
  ];

  // Only render available social links (do not invent URLs, hide unavailable)
  const availableSocialLinks = socialConfig.filter(
    (item) => typeof item.url === 'string' && item.url.trim().length > 0
  );

  const rawTitle = `${member.name} — ${member.designation} | Strains Group`;
  const pageTitle =
    rawTitle.length > 65 ? `${member.name} — Team | Strains Group` : rawTitle;
  const rawDesc =
    descriptionParagraphs[0] ||
    `${member.name}, ${member.designation} at Strains Group. Discover our creative vision and team squad.`;
  const metaDescription =
    rawDesc.length > 158 ? `${rawDesc.slice(0, 155).trimEnd()}...` : rawDesc;
  const canonicalUrl = `https://strains.in/team/${member.slug || ''}`;
  const resolvedImage = member.profileImage
    ? member.profileImage.startsWith('http')
      ? member.profileImage
      : `https://strains.in${member.profileImage.startsWith('/') ? '' : '/'}${member.profileImage}`
    : undefined;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.designation,
    worksFor: {
      '@type': 'Organization',
      name: 'Strains Associates',
      url: 'https://strains.in',
    },
    description: metaDescription,
    image: resolvedImage,
    url: canonicalUrl,
  };

  return (
    <MainLayout>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta key="description" name="description" content={metaDescription} />
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta
          key="robots"
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta key="og:title" property="og:title" content={pageTitle} />
        <meta key="og:description" property="og:description" content={metaDescription} />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:type" property="og:type" content="profile" />
        <meta key="og:site_name" property="og:site_name" content="Strains Associates" />
        {resolvedImage && (
          <meta key="og:image" property="og:image" content={resolvedImage} />
        )}
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:url" name="twitter:url" content={canonicalUrl} />
        <meta key="twitter:title" name="twitter:title" content={pageTitle} />
        <meta key="twitter:description" name="twitter:description" content={metaDescription} />
        {resolvedImage && (
          <meta key="twitter:image" name="twitter:image" content={resolvedImage} />
        )}
        <script
          key="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <div className="team-profile-page-wrapper">
        <div className="team-profile-container">
          {/* Main Two-Column Container (Equal 50% width on Desktop, Stacked on Mobile) */}
          <div className="team-profile-layout">
            {/* Left Column: Team Member Information & Social Links */}
            <div className="team-profile-left">
              {/* 1. Team member's full name */}
              <h1 className="team-profile-name">
                {member.name}
              </h1>

              {/* 2. Professional designation (in green accent color) */}
              <span className="team-profile-designation">
                {member.designation}
              </span>

              {/* 3 & 4. First and Second descriptive paragraphs */}
              <div className="team-profile-description">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className="team-profile-p">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* 5. Social media links */}
              {availableSocialLinks.length > 0 && (
                <div
                  className="team-profile-social-list"
                  role="list"
                  aria-label={`${member.name} Social Profiles`}
                >
                  {availableSocialLinks.map(({ key, label, url }) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-profile-social-row"
                      role="listitem"
                      aria-label={`${member.name} on ${label}`}
                    >
                      <span className="social-plus-icon" aria-hidden="true">+</span>
                      <span className="social-label">{label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Profile Image */}
            <div className="team-profile-right">
              <div className="team-profile-image-wrap media-placeholder">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  width={600}
                  height={700}
                  className="team-profile-image"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.remove('media-placeholder')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
