'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { SHOP_CATEGORIES } from '@/constant';

export default function ShopFilters({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
}) {
  return (
    <div data-aos="fade-up" data-aos-duration="700" className="w-full space-y-6">
      {/* Search Field with Dynamic Focus Ring */}
      <div className="relative max-w-md group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-[#00e676] transition-colors">
          <Search size={16} aria-hidden="true" />
        </div>
        <label htmlFor="shop-catalog-search" className="sr-only">
          Search sustainable apparel catalog
        </label>
        <input
          id="shop-catalog-search"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by fabric, garment, GSM, or dye..."
          aria-label="Search sustainable apparel catalog"
          className="w-full pl-10 pr-9 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 font-sans text-sm focus:outline-none focus:border-[#00a859] focus:ring-2 focus:ring-[#00a859]/30 transition-all duration-300 backdrop-blur-sm shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Category Pills Bar with Smooth Pill Effects */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {SHOP_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#00a859] text-black font-extrabold shadow-[0_0_20px_rgba(0,168,89,0.35)] scale-[1.02]'
                  : 'bg-white/[0.03] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/20 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
