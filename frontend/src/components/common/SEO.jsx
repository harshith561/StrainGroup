import React from 'react';
import Head from 'next/head';
import { SITE_CONFIG } from '@/constant/siteConfig';

/**
 * Universal SEO & Social Sharing Component for Next.js Pages.
 * Handles metadata, OpenGraph, Twitter Cards, Canonical URLs, and JSON-LD Schema.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/assets/strainsassociates-CfG1A0jo.webp',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
  structuredData,
}) {
  const siteUrl = (SITE_CONFIG?.website || 'https://strains.in').replace(/\/$/, '');
  
  // Clean page title
  const siteTitle = 'Strains Group';
  const fullTitle = title
    ? title.includes(siteTitle)
      ? title
      : `${title} | ${siteTitle}`
    : 'Strains Group | Creative Agency & Sustainable Garment Manufacturing';

  // Description fallback
  const metaDesc =
    description ||
    SITE_CONFIG?.description ||
    'Strains Associates provides creative, branding, digital marketing, video production and sustainable fashion solutions. Helping businesses scale with ethical manufacturing.';

  // Keywords fallback
  const defaultKeywords = [
    'Strains Associates',
    'Strains Group',
    'Strains Fashions',
    'sustainable fashion manufacturing',
    'Tirupur garment manufacturers',
    'commercial video production Hyderabad',
    'performance digital marketing',
    'brand strategy agency',
    'zero-discharge textiles',
    'ethical apparel production',
  ];

  const keywordsString = Array.isArray(keywords)
    ? keywords.join(', ')
    : keywords || defaultKeywords.join(', ');

  // Canonical URL
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : siteUrl;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Indexation */}
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={SITE_CONFIG?.name || 'Strains Associates'} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD Schema) */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((schema, idx) => (
            <script
              key={`schema-${idx}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
    </Head>
  );
}

