'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export default function ShareButtons({
  title,
  slug,
  basePath = '/blog',
  customUrl,
  className = '',
}) {
  const [copied, setCopied] = useState(false);
  const siteUrl = 'https://strains.in';
  const url = customUrl || (slug ? `${siteUrl}${basePath}/${slug}` : siteUrl);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || 'Read this article from Strains Group');

  const handleCopyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        // Ignored or cancelled by user
      }
    } else {
      handleCopyLink();
    }
  };

  const shareLinks = [
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      ariaLabel: 'Share on LinkedIn',
      icon: (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      ariaLabel: 'Share on X (Twitter)',
      icon: (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      ariaLabel: 'Share on WhatsApp',
      icon: (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 0C5.395 0 .017 5.378.017 12.014c0 2.121.554 4.189 1.606 6.012L0 24l6.155-1.614a11.96 11.96 0 0 0 5.876 1.528h.005c6.634 0 12.012-5.378 12.012-12.014A12.02 12.02 0 0 0 12.031 0zm0 21.99a9.98 9.98 0 0 1-5.093-1.39l-.365-.217-3.784.992 1.01-3.689-.238-.379a9.97 9.97 0 0 1-1.536-5.293c0-5.518 4.49-10.008 10.011-10.008 2.673 0 5.186 1.042 7.075 2.933a9.973 9.973 0 0 1 2.93 7.078c-.001 5.519-4.491 10.008-10.01 10.008z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      ariaLabel: 'Share on Facebook',
      icon: (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`share-buttons-container flex items-center flex-wrap gap-2 sm:gap-2.5 ${className}`}>
      <span className="font-mono text-[11px] sm:text-xs uppercase text-neutral-400 tracking-wider font-semibold mr-1 shrink-0">
        Share:
      </span>

      {shareLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-[#00a859] hover:text-black border border-white/10 text-neutral-300 transition-colors duration-200"
          title={item.ariaLabel}
        >
          {item.icon}
        </a>
      ))}

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 transition-colors"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check size={12} className="text-[#00e676]" />
            <span className="text-[#00e676]">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={12} />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Mobile Native Share */}
      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1 rounded-full bg-[#00a859]/10 text-[#00a859] border border-[#00a859]/30 text-[11px] font-mono"
        aria-label="Share via device menu"
      >
        <Share2 size={12} />
        <span>Share</span>
      </button>
    </div>
  );
}

