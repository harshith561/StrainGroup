'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ShopProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  // Contact URL pre-populated with product name and category
  const contactUrl = `/contact?product=${encodeURIComponent(
    product.name
  )}&category=${encodeURIComponent(product.categoryLabel || '')}`;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={(index % 6) * 100}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#111111]/80 hover:bg-[#141414] border border-white/10 hover:border-[#00e676]/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,168,89,0.16)] backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CARD TOP: Media Image Area with Light Sweep Effect */}
      <div className="relative w-full aspect-[4/3] bg-[#161616] overflow-hidden isolate">
        <img
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out select-none"
          loading="lazy"
          decoding="async"
        />

        {/* Ambient Dark Gradient Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Shimmer Light Beam Effect across image on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* CARD BODY: Clean Product Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <h2 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-[#00e676] transition-colors leading-snug mb-2">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-400 font-sans line-clamp-3 leading-relaxed mb-6">
            {product.description}
          </p>
        </div>

        {/* CARD FOOTER: Action Connect Button */}
        <div className="pt-2 mt-auto">
          <Link
            href={contactUrl}
            className="w-full group/btn inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#00a859] hover:bg-[#00e676] text-black font-sans font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,168,89,0.25)] hover:shadow-[0_0_30px_rgba(0,230,118,0.5)] cursor-pointer"
          >
            <span>Inquire to Order</span>
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
