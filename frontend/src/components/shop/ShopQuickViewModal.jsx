'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

export default function ShopQuickViewModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose]);

  if (!product) return null;

  const contactUrl = `/contact?product=${encodeURIComponent(
    product.name
  )}&category=${encodeURIComponent(product.categoryLabel || '')}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* LEFT: Product Image Section */}
        <div className="w-full md:w-1/2 bg-[#181818] relative min-h-[280px] md:min-h-full flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={1000}
            className="w-full h-full object-cover object-center max-h-[460px]"
          />
        </div>

        {/* RIGHT: Product Technical Specs & Order CTA */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white mb-2">
              {product.name}
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Sizing Chips */}
            {product.sizes && (
              <div className="mb-5">
                <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                  Grading Sizes Available:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((sz) => (
                    <span
                      key={sz}
                      className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-200"
                    >
                      {sz}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Features Bullet List */}
            {product.features && (
              <div className="mb-5">
                <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
                  Key Craft Highlights:
                </div>
                <ul className="space-y-1 text-xs font-sans text-neutral-300 list-disc list-inside">
                  {product.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Material & Engineering Specs */}
            {product.specs && (
              <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs font-mono text-neutral-300">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase">{key}:</span>
                    <span className="text-white font-medium text-right">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Button: Connect with Team */}
          <div className="pt-4 border-t border-white/10">
            <Link
              href={contactUrl}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#00a859] hover:bg-[#008f4c] text-black font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,168,89,0.3)]"
            >
              <span>Connect with Strains Team</span>
              <ArrowRight size={16} />
            </Link>
            <p className="text-center text-[10px] font-mono text-neutral-400 mt-2">
              Includes pre-filled inquiry & sample coordination
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
