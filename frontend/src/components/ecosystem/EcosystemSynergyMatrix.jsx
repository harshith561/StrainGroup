'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const SYNERGIES = [
  {
    id: 'sprint',
    title: 'The 6-Day Prototype Sprint',
    story: 'From Figma Vector to Live Garment',
    quote: 'Traditional fashion designers hand sketches to overseas agents and wait two months for a crooked sample. Because we own our factory in Tirupur, our Hyderabad designers talk directly to our head pattern cutter. We calibrate vector lines to stitch tolerances within hours, cutting sample iterations from 6 weeks to 6 days.',
    metric: '85% Faster',
    metricLabel: 'Sample Turnaround Speed',
    image: '/images/ecosystem/synergy-prototype-sprint.jpg',
    tag: 'AGILITY',
  },
  {
    id: 'cameras',
    title: 'Cameras Tuned for Feed Conversion',
    story: 'Cinematography with a Performance Mandate',
    quote: 'Danny and Pavan shoot with Prasad’s performance media requirements on the monitor—framing 4:5 vertical cuts, high-contrast color grades, and instant narrative hooks that delivered a verified 4.64% CTR for Aastu Refrigeration.',
    metric: '4.64% CTR',
    metricLabel: 'Average Ad Click-Through Rate',
    image: '/images/ecosystem/synergy-camera-cinematography.jpg',
    tag: 'PERFORMANCE',
  },
  {
    id: 'basil',
    title: 'Why Our Price Tags Bloom Sweet Basil',
    story: 'Turning Packaging into Viral Unboxings',
    quote: 'When a customer receives a garment from Strains, the price tag is made from recycled cotton pulp embedded with live seeds. They bury it in a pot, add water, and watch basil or wildflowers sprout on their kitchen counter.',
    metric: '100% Zero',
    metricLabel: 'Landfill Waste Packaging',
    image: '/images/ecosystem/synergy-basil.jpg',
    tag: 'CIRCULARITY',
  },
  {
    id: 'scale',
    title: 'Agile Enough for Boutiques, Strong Enough for Giants',
    story: 'From Xiti Fashion to JSW Cement',
    quote: 'Most creative setups break when scaling. We craft high-fashion lookbooks for labels like Xiti while managing heavy industrial multi-year accounts for infrastructure titans like Pioneer Cranes and JSW Cement.',
    metric: '3.5+ Years',
    metricLabel: 'Average Client Partnership',
    image: '/images/ecosystem/synergy-scale.jpg',
    tag: 'ENTERPRISE',
  },
];

export default function EcosystemSynergyMatrix() {
  return (
    <section className="synergy-matrix-section relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10" id="synergies">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Heading with AOS Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase leading-tight">
            How The Parts Multiply <br />
            <span className="text-gradient-shimmer">Each Other’s Power.</span>
          </h2>
          <p className="text-[#888] font-mono text-xs sm:text-sm leading-relaxed mt-4">
            We hated the standard agency model: designers who never touched a sewing machine, and factory managers who never watched an Instagram ad. Here is what happens when you combine both under one roof.
          </p>
        </motion.div>

        {/* 2x2 Rich Visual Synergy Cards with Staggered AOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SYNERGIES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="synergy-card rounded-3xl border border-white/10 bg-[#121212] overflow-hidden flex flex-col justify-between group hover:border-[#00a859]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Photo Header */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black media-placeholder">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter brightness-[0.85] group-hover:brightness-100"
                  onLoad={(e) => {
                    e.currentTarget.parentElement?.classList.remove('media-placeholder');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] font-bold text-[#00a859]">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="font-mono text-xs text-[#00a859] block mb-1">
                    {item.story}
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Story Narrative */}
              <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between">
                <p className="font-mono text-xs sm:text-sm text-[#aaa] leading-relaxed mb-6">
                  {item.quote}
                </p>

                {/* Bottom Metric Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#00a859] block">
                      {item.metric}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#777]">
                      {item.metricLabel}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#00a859] group-hover:border-[#00a859]/40 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
