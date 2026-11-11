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

  // Canonical URL (normalized without trailing slash to match Next.js routing & sitemap)
  const rawCanonical = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : siteUrl;
  const canonicalUrl =
    rawCanonical.length > siteUrl.length ? rawCanonical.replace(/\/+$/, '') : siteUrl;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={metaDesc} />
      <meta key="keywords" name="keywords" content={keywordsString} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />

      {/* Robots Indexation */}
      <meta
        key="robots"
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={metaDesc} />
      <meta key="og:image" property="og:image" content={fullOgImage} />
      <meta key="og:site_name" property="og:site_name" content={SITE_CONFIG?.name || 'Strains Associates'} />
      {publishedTime && <meta key="article:published_time" property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta key="article:modified_time" property="article:modified_time" content={modifiedTime} />}
      {author && <meta key="article:author" property="article:author" content={author} />}

      {/* Twitter Cards */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" name="twitter:url" content={canonicalUrl} />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta key="twitter:description" name="twitter:description" content={metaDesc} />
      <meta key="twitter:image" name="twitter:image" content={fullOgImage} />

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
            key="schema-single"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
    </Head>
  );
}

