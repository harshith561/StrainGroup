'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, Calendar, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/constant/blogData';

const CATEGORIES = [
  'All',
  'Sustainable Manufacturing',
  'Video Production',
  'Digital Marketing',
  'Brand Strategy',
];

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="blog-listing-page bg-[#0c0c0c] text-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-12 sm:mb-16 text-center">
        {/* Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#00a859]/15 blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00a859]/30 bg-[#00a859]/5 text-[#00a859] font-mono text-xs uppercase tracking-widest mb-5 sm:mb-6">
          <BookOpen size={14} className="animate-pulse" />
          <span>Strains Intelligence & Perspectives</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white uppercase leading-[1.1] mb-5 sm:mb-6 max-w-5xl mx-auto break-words">
          Insights on <span className="text-[#00a859]">Creative Craft</span> &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-emerald-400">
            Sustainable Industry
          </span>
        </h1>

        <p className="text-neutral-400 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Deep dives, technical frameworks, and candid field dispatches on zero-discharge textile manufacturing in Tirupur, cinematic video production, and modern brand scaling.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 sm:mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-200 border ${selectedCategory === cat
                ? 'bg-[#00a859] border-[#00a859] text-black font-bold shadow-lg shadow-[#00a859]/20'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="group relative flex flex-col bg-[#141414] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00a859]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00a859]/10"
            >
              {/* Article Hero Media */}
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  width={640}
                  height={400}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-mono text-[11px] text-[#00e676] uppercase tracking-wider font-semibold">
                  {post.category}
                </span>
              </Link>

              {/* Article Metadata & Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-sans font-bold text-white group-hover:text-[#00a859] transition-colors leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Info & Read Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover border border-[#00a859]/30"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{post.author}</p>
                      <p className="text-[10px] text-neutral-500 font-mono">{post.authorRole}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00a859] group-hover:translate-x-1 transition-transform"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Strategic Bottom CTA */}
      <section className="px-4 sm:px-10 lg:px-14 max-w-7xl mx-auto mt-16 sm:mt-24">
        <div className="p-6 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00a859] font-bold block mb-2">
              Ready to collaborate?
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-extrabold text-white leading-tight">
              Turn Insights Into Scalable Enterprise Solutions.
            </h3>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 items-center justify-center">
            <Link
              href="/contact"
              className="pill-button bg-[#00a859] hover:bg-[#00c266] text-black font-bold font-sans text-xs px-7 py-3.5 inline-flex items-center gap-2 rounded-full transition shadow-lg shadow-[#00a859]/20"
            >
              <span>SCHEDULE CONSULTATION</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="pill-button bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans text-xs px-7 py-3.5 inline-flex items-center gap-2 rounded-full transition"
            >
              <span>VIEW PORTFOLIO</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

