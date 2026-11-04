'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: 'Aastu Refrigeration — Industrial Growth & Lead Gen',
    desc: 'Achieved a 90.8% optimization score with 4.64% CTR over 3.5 years, generating 21,800 clicks and 471,000 targeted impressions.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'Industrial Performance',
    slug: '/case-studies/aastu-refrigeration',
  },
  {
    id: 2,
    title: 'Pioneer Cranes — Heavy Sector PPC Optimization',
    desc: 'Exceptional capital efficiency with ₹13.01 average CPC, delivering 18,800 enterprise clicks and 368,000 impressions at ₹2.45L budget.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tag: 'B2B Search & PPC',
    slug: '/case-studies/pioneer-cranes',
  },
  {
    id: 3,
    title: 'JSW Cement — Infrastructure Media & Plant Cinematography',
    desc: 'Industrial facility drone cinematography and high-impact corporate brand films documenting green slag cement manufacturing for investor summits.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    tag: 'Industrial Video Production',
    slug: '/case-studies/jsw-cement',
  },
  {
    id: 4,
    title: 'Xiti — Zero-Discharge Fashion & Tirupur Manufacturing',
    desc: 'Unified Tirupur sustainable organic hemp & cotton manufacturing with cinematic video direction and social growth campaigns yielding 4.2x ROAS.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    tag: 'Ethical Manufacturing',
    slug: '/case-studies/xiti-fashion',
  },
  {
    id: 5,
    title: 'Pakka Non Veg — High-Speed Food Videography & Viral Footfall',
    desc: 'Dynamic 4K culinary slow-mo videography and ASMR sizzle sound engineering driving 850,000+ views and +340% weekend restaurant footfall.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    tag: 'Culinary Videography',
    slug: '/case-studies/pakka-non-veg',
  },
  {
    id: 6,
    title: 'Haraa Gold & Diamonds — Heritage Bridal Storytelling',
    desc: 'Cinematic three-part bridal narrative series and geo-targeted festive campaigns delivering 1.2M targeted views and +68% bridal appointments.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    tag: 'Luxury Bridal Film',
    slug: '/case-studies/haraa-jewellers',
  },
];

export default function ServiceLatestWork() {
  return (
    <section className="service-latest-work-section relative bg-[#0c0c0c] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden" aria-label="Our latest work">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Heading with Modern AOS Text Animation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
            >
              Our <span className="text-gradient-shimmer">Latest Work</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="text-[#00a859] hover:text-[#00c266] text-sm font-sans font-bold flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore all case studies</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 3-Column Work Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <Link href={project.slug} className="group flex flex-col h-full cursor-pointer">
                {/* Image Container with Smooth Zoom Effect */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#181818] media-placeholder mb-5 border border-white/5 group-hover:border-[#00a859]/40 transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onLoad={(e) => e.currentTarget.parentElement?.classList.remove('media-placeholder')}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  <span className="absolute top-4 left-4 text-xs font-mono font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#00a859] border border-white/10">
                    {project.tag}
                  </span>
                </div>

                {/* Text Info */}
                <h3 className="text-xl font-sans font-bold text-white mb-2 group-hover:text-[#00a859] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-[#8c8c8c] text-sm leading-relaxed font-sans">
                  {project.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
