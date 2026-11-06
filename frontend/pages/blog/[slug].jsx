import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/common/MainLayout';
import SEO from '@/components/common/SEO';
import { BlogDetail } from '@/components/blog';
import { getAllBlogPosts, getBlogPostBySlug } from '@/constant/blogData';

export default function BlogPostPage({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center text-[#00a859] font-mono text-sm">
          Loading Article...
        </div>
      </MainLayout>
    );
  }

  if (!post) {
    return null;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: `https://strains.in${post.heroImage}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://strains.in/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Strains Associates',
      logo: {
        '@type': 'ImageObject',
        url: 'https://strains.in/assets/strainsassociates-CfG1A0jo.webp',
      },
    },
  };

  return (
    <MainLayout>
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
        ogImage={post.heroImage}
        ogType="article"
        publishedTime={post.publishedDate}
        author={post.author}
        structuredData={articleSchema}
      />
      <BlogDetail post={post} />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

