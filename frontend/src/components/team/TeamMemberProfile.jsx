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

  const pageTitle = `${member.name} — ${member.designation} | Strains Group`;
  const metaDescription =
    descriptionParagraphs[0] ||
    `${member.name}, ${member.designation} at Strains Group. Discover our creative vision and team squad.`;

  return (
    <MainLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        {member.profileImage && (
          <meta property="og:image" content={member.profileImage} />
        )}
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
              <div className="team-profile-image-wrap">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="team-profile-image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
