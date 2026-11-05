'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/components/common/MainLayout';
import {
  ShopHeroBanner,
  ShopFilters,
  ShopProductCard,
  ShopValueProps,
  ShopCTA,
} from '@/components/shop';
import { SHOP_PRODUCTS } from '@/constant';

export default function ShopPage() {
  // Dynamic state for category and search
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Refresh AOS animations on dynamic state change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [activeCategory, searchQuery]);

  // Dynamic filtering
  const filteredProducts = useMemo(() => {
    let result = [...SHOP_PRODUCTS];

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.material.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.dye.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <MainLayout>
      <Head>
        <title>Sustainable Apparel Catalog & Shop | Strains Group</title>
        <meta
          name="description"
          content="Explore Strains sustainable apparel catalog: GOTS organic cotton tees, European hemp shirts, zero-discharge track pants, and custom Tirupur manufacturing prototypes."
        />
        <meta
          property="og:title"
          content="Sustainable Apparel Catalog & Shop | Strains Group"
        />
        <meta
          property="og:description"
          content="Browse ethical clothing, sample prototypes, and organic fabrics directly from our zero-discharge manufacturing facility in Tirupur."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="shop-page-wrapper bg-[#0c0c0c] text-white min-h-screen">
        {/* 1. Hero Image Banner Section */}
        <ShopHeroBanner />

        {/* 2. Main Catalog Section with Dynamic State Filters & Product Grid */}
        <section
          id="shop-catalog-section"
          className="relative w-full py-16 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#0c0c0c]"
          aria-label="Apparel and Textile Catalog"
        >
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Filters & Search Toolbar */}
            <ShopFilters
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={handleClearSearch}
            />

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {filteredProducts.map((product, index) => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="py-20 text-center rounded-2xl bg-white/[0.02] border border-white/5 p-8">
                <p className="text-lg font-sans font-medium text-neutral-300 mb-2">
                  No products found matching your search.
                </p>
                <p className="text-sm font-sans text-neutral-500 mb-6">
                  Try adjusting your keywords or clearing the category filter.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-[#00a859] text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#008f4c] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 3. Tirupur Manufacturing Value Props */}
        <ShopValueProps />

        {/* 4. Bottom Call To Action */}
        <ShopCTA />
      </div>
    </MainLayout>
  );
}
