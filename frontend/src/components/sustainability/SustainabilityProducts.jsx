'use client';

import React from 'react';
import { Leaf, Sprout, Layers, Droplets, Package, Check, Sparkles } from 'lucide-react';

const SUSTAINABLE_PRODUCTS = [
  {
    id: 'organic-cotton',
    title: 'Organic Cotton Clothing',
    subtitle: '100% GOTS Certified • Non-GMO',
    image: '/images/ecosystem/material-organic-cotton.jpg',
    icon: Sprout,
    tag: 'Pure & Chemical-Free',
    summary:
      'We manufacture premium apparel using 100% certified organic cotton harvested from non-GMO seeds without toxic synthetic pesticides or chemical fertilizers.',
    howWeUseIt: [
      'Spun into ultra-soft single jersey (180–240 GSM) and French terry (350–450 GSM)',
      'Ideal for everyday luxury t-shirts, hoodies, sweatshirts, and loungewear',
      'Hypoallergenic and gentle on sensitive skin with zero harsh bleach',
      'Supports fair living wages for rural organic farming cooperatives',
    ],
  },
  {
    id: 'hemp-clothing',
    title: 'Himalayan Hemp Apparel',
    subtitle: 'Regenerative Bast Fiber • 80% Less Water',
    image: '/images/ecosystem/material-hemp-textiles.jpg',
    icon: Leaf,
    tag: 'Durable & Breathable',
    summary:
      'Hemp is nature’s most sustainable fiber. It thrives on natural rainfall without synthetic pesticides, breathes easily in warm weather, and gets softer with every wash.',
    howWeUseIt: [
      'Woven and knit into heavyweight tees, utility overshirts, and jackets',
      '3x the tensile strength of conventional cotton for heirloom durability',
      'Naturally antibacterial, odor-resistant, and blocks over 95% of UV rays',
      '100% biodegradable with zero synthetic microplastic shedding in laundry',
    ],
  },
  {
    id: 'vegan-materials',
    title: 'Vegan Silk & Vegan Leather',
    subtitle: 'Cruelty-Free • Bio-Cellulosic Luxury',
    image: '/images/ecosystem/material-vegan-silk-leather.jpg',
    icon: Layers,
    tag: '100% Cruelty-Free',
    summary:
      'Luxury textiles engineered from sustainable plant cellulose and agricultural biomass, delivering the fluid drape of silk and the rich texture of leather without harming animals.',
    howWeUseIt: [
      'Silky, flowing cellulosic fabrics for premium shirts, dresses, and resortwear',
      'Plant-based vegan leather for garment trims, pocket patches, and labels',
      'Zero toxic chromium tanning baths, formaldehyde, or cheap PVC plastic',
      'Fully biodegradable end-of-life cycle that breaks down safely in compost',
    ],
  },
  {
    id: 'botanical-dyes',
    title: 'Natural Fruit & Flower Dyeing',
    subtitle: 'Edible Botanical Extracts • Non-Toxic',
    image: '/images/ecosystem/material-botanical-dyes.jpg',
    icon: Droplets,
    tag: 'Safe Enough for Soil',
    summary:
      'Instead of polluting rivers with carcinogenic chemical dyes, we color garments using natural extracts from pomegranate rinds, marigold flowers, turmeric, and madder root.',
    howWeUseIt: [
      'Pomegranate rinds give warm ochre & khaki; marigold flowers give sunlit amber',
      'Indian madder root yields terracotta rose; wild turmeric yields radiant gold',
      'Free from toxic synthetic azo compounds, formaldehyde, and heavy metals',
      'Exhausted dye broth is 100% organic and returned to soil as compost',
    ],
  },
  {
    id: 'plantable-tags',
    title: 'Plantable Basil Seed Tags',
    subtitle: 'Zero-Waste • Living Price Tags',
    image: '/images/ecosystem/material-plantable-seed-tags.jpg',
    icon: Sprout,
    tag: 'Sprouts Real Herbs',
    summary:
      'Why send price tags to a landfill? Our tags are handmade from recycled cotton scraps embedded with live, non-GMO sweet basil seeds that your customers plant to grow fresh herbs.',
    howWeUseIt: [
      'Crafted from 100% recycled cotton factory offcuts pulped into handmade paper',
      'Embedded with non-GMO sweet basil seeds that sprout within 7 to 10 days',
      'Printed with non-toxic, water-soluble soy-based inks',
      'Creates an unforgettable, interactive unboxing experience for your buyers',
    ],
  },
  {
    id: 'recycled-packaging',
    title: 'Plastic-Free Recycled Packaging',
    subtitle: 'Biodegradable Cornstarch & Kraft',
    image: '/images/ecosystem/hub-tirupur.jpg',
    icon: Package,
    tag: '100% Plastic-Free',
    summary:
      'We eliminate single-use plastic across the entire packaging chain with 100% biodegradable garment bags, recycled corrugated boxes, and plastic-free paper tapes.',
    howWeUseIt: [
      'Garment polybags made from compostable cornstarch that dissolve naturally',
      'Recycled unbleached kraft master cartons for domestic and export shipping',
      'Zero plastic tape, nylon fastener kimbles, or toxic bubble wrap',
      'Designed to keep garments pristine while leaving zero waste behind',
    ],
  },
];

export default function SustainabilityProducts() {
  return (
    <section
      id="sustainable-products"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Sustainable Products and Materials"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00a859]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase leading-tight text-white mb-6">
            Our Sustainable Products <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#00e676]">
              &amp; Responsible Materials
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            At Strains Group, every product we manufacture is engineered with genuine, verified sustainable materials. 
            Here is a clear look at the eco-friendly products and practices we use every single day in our Tirupur facility.
          </p>
        </div>

        {/* 6 Products & Materials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SUSTAINABLE_PRODUCTS.map((item, idx) => {
            const IconComponent = item.icon || Leaf;

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group rounded-3xl bg-[#121212] border border-white/10 hover:border-[#00e676]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-[0_15px_35px_rgba(0,168,89,0.15)] hover:-translate-y-1"
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={896}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[#00e676] font-mono text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00a859] text-black flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] leading-snug">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white mb-2 group-hover:text-[#00e676] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
                      {item.summary}
                    </p>

                    {/* How We Use It */}
                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-mono text-[#00e676] uppercase tracking-wider font-bold block mb-2">
                        How We Use It:
                      </span>
                      {item.howWeUseIt.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#00e676] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-neutral-300 font-sans leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

