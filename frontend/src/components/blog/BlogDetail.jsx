'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowUpRight, CheckCircle2, User } from 'lucide-react';
import ShareButtons from './ShareButtons';
import { getRecentBlogPosts } from '@/constant/blogData';

export default function BlogDetail({ post }) {
  if (!post) return null;

  const relatedPosts = getRecentBlogPosts(post.slug, 2);

  return (
    <article className="blog-detail-article bg-[#0c0c0c] text-white pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-10">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#00a859] transition-colors py-1"
          >
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Primary H1 */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-sans font-black tracking-tight leading-[1.14] text-white mb-5 sm:mb-6 break-words">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-sans leading-relaxed mb-6 sm:mb-8 border-l-2 border-[#00a859] pl-3 sm:pl-4">
          {post.excerpt}
        </p>

        {/* Author Header Bar & Social Share Bar */}
        <div className="py-5 sm:py-6 border-y border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-3">
            <img
              src={post.authorImage}
              alt={post.author}
              width={44}
              height={44}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#00a859]/40 shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-sm font-bold text-white leading-tight">{post.author}</p>
              <p className="text-xs text-neutral-400 font-mono">{post.authorRole}</p>
            </div>
          </div>

          <ShareButtons title={post.title} slug={post.slug} />
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-[#141414]">
          <img
            src={post.heroImage}
            alt={post.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* Article Body Content */}
        <div className="blog-body-content space-y-6 text-neutral-300 font-sans text-base sm:text-lg leading-relaxed">
          {post.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={`block-${idx}`}
                  className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight pt-6 pb-2 border-b border-white/10"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'paragraph') {
              return <p key={`block-${idx}`}>{block.text}</p>;
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={`block-${idx}`}
                  className="my-8 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#00a859]/30 border-l-4 border-l-[#00a859] relative"
                >
                  <p className="italic text-lg sm:text-xl text-white font-serif mb-3">
                    &ldquo;{block.quote}&rdquo;
                  </p>
                  {block.author && (
                    <cite className="block not-italic text-xs font-mono uppercase tracking-wider text-[#00a859] font-semibold">
                      — {block.author}
                    </cite>
                  )}
                </blockquote>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={`block-${idx}`} className="space-y-3 my-6 pl-2">
                  {block.items.map((item, itemIdx) => (
                    <li key={`item-${itemIdx}`} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#00a859] shrink-0 mt-1" />
                      <span className="text-sm sm:text-base text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs uppercase text-neutral-400 font-semibold mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Social Share Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans font-bold text-white text-sm">
            Enjoyed this analysis? Share it with your network:
          </span>
          <ShareButtons title={post.title} slug={post.slug} />
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#141414] to-[#181818] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <img
            src={post.authorImage}
            alt={post.author}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#00a859]"
            loading="lazy"
          />
          <div className="flex-1">
            <h3 className="text-lg font-sans font-bold text-white">{post.author}</h3>
            <p className="text-xs font-mono text-[#00a859] mb-2">{post.authorRole} at Strains Group</p>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Driving cross-disciplinary synthesis between high-end digital agency creative execution and zero-discharge sustainable textile manufacturing across Hyderabad and Tirupur.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#00a859]/50 transition-all"
                >
                  <span className="font-mono text-[10px] text-[#00a859] uppercase tracking-wider block mb-2 font-semibold">
                    {related.category}
                  </span>
                  <h4 className="text-base font-sans font-bold text-white group-hover:text-[#00a859] transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

