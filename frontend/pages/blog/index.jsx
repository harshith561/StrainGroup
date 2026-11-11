import React from 'react';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { BlogListing } from '@/components/blog';
import { getAllBlogPosts } from '@/constant/blogData';

export default function BlogPage() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Strains Group Insights & Perspectives',
    description:
      'Field reports, engineering frameworks, and strategic perspectives on sustainable apparel manufacturing, zero-discharge dyeing in Tirupur, and cinematic video production.',
    url: 'https://strains.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Strains Associates',
      logo: 'https://strains.in/assets/strainsassociates-CfG1A0jo.webp',
    },
  };

  return (
    <MainLayout>
      <SEO
        title="Blog & Insights | Fashion, Video & Marketing"
        description="Read Strains Group insights on zero-discharge garment manufacturing in Tirupur, 4K commercial video production, and full-funnel brand marketing."
        keywords={[
          'Strains Group blog',
          'sustainable apparel manufacturing articles',
          'zero discharge textile guide',
          'video production insights Hyderabad',
          'D2C brand marketing strategy',
        ]}
        canonical="/blog"
        structuredData={blogListSchema}
      />
      <BlogListing />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

