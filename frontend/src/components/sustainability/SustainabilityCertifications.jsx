'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, CheckCircle2, QrCode, FileText, Check, ArrowRight } from 'lucide-react';

const CERTIFICATIONS = [
  {
    code: 'GOTS',
    title: 'Global Organic Textile Standard',
    standard: '100% Certified Organic Fiber',
    description:
      'Guarantees strict environmental criteria along the entire supply chain of organic textiles—from harvesting raw non-GMO cotton to responsible manufacturing and packaging.',
    badge: 'Certified Organic',
  },
  {
    code: 'OEKO-TEX',
    title: 'OEKO-TEX Standard 100 (Class I)',
    standard: 'Tested for Harmful Substances',
    description:
      'Certified Class I (the strictest tier, safe for baby skin). Zero toxic formaldehyde, heavy metals, volatile organic compounds (VOCs), or carcinogenic chemical dyes.',
    badge: '100% Non-Toxic',
  },
  {
    code: 'TNPCB ZLD',
    title: 'Zero Liquid Discharge Facility',
    standard: '100% Closed-Loop Water Recovery',
    description:
      'Audited by the Tamil Nadu Pollution Control Board. Advanced multi-stage biological treatment, nano-filtration, and reverse osmosis ensuring 0 drops of wastewater effluent leave our factory.',
    badge: 'Zero Effluent',
  },
  {
    code: 'PETA VEGAN',
    title: 'PETA-Approved Vegan Materials',
    standard: '100% Cruelty-Free Biomaterials',
    description:
      'All our alternative silks, plant leathers, and sizing starches are 100% animal-free, protecting biodiversity without resorting to toxic polyurethane or PVC plastic coatings.',
    badge: 'Cruelty-Free',
  },
  {
    code: 'FAIR WAGE',
    title: 'Ethical Labor & Living Wage',
    standard: 'Tirupur Manufacturing Hub',
    description:
      'Our facility enforces fair living wages exceeding regional minimum standards, 8-hour shift limits, paid healthcare coverage, air-cooled assembly floors, and strict zero-child-labor protocols.',
    badge: 'Living Wage',
  },
  {
    code: 'SEED-TO-SHELF',
    title: 'End-to-End Batch Traceability',
    standard: 'QR-Enabled Production Ledgers',
    description:
      'Every production batch includes complete laboratory test reports, yarn count verification, fiber origin documentation, and optional custom QR codes for your consumer packaging.',
    badge: 'Traceability',
  },
];

export default function SustainabilityCertifications() {
  return (
    <section
      id="sustainability-certifications"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="Certifications & Traceability Standards"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00a859]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight uppercase leading-tight text-white mb-6">
            Third-Party Certifications &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#00e676]">
              Supply Chain Integrity
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            Greenwashing has plagued the fashion industry. We counter vague claims with rigorous third-party certifications, 
            chemical safety assays, and transparent factory audits.
          </p>
        </div>

        {/* 6 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="p-6 sm:p-8 rounded-3xl bg-[#121212]/80 backdrop-blur-md border border-white/10 hover:border-[#00e676]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#00e676] px-3 py-1 rounded-full bg-[#00a859]/15 border border-[#00e676]/30 whitespace-nowrap shrink-0">
                    {cert.code}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap text-right">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-xl font-sans font-black text-white mb-1 group-hover:text-[#00e676] transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-neutral-300 font-semibold mb-4">
                  {cert.standard}
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-[#00e676]">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>Independently Verified &amp; Audit Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Traceability Callout Banner */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#181818] border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-1">
            <div className="w-14 h-14 rounded-2xl bg-[#00a859]/20 border border-[#00e676]/40 flex items-center justify-center text-[#00e676] shrink-0 shadow-[0_0_20px_rgba(0,230,118,0.15)]">
              <QrCode className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-sans font-black text-white mb-2 leading-tight">
                Consumer-Facing Transparency QR Tags
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-2xl leading-relaxed">
                Empower your customers to scan the plantable seed tag with their smartphone to view 
                the exact farm origin, closed-loop water metrics, and natural botanical dye recipes for their garment.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full lg:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-[#00a859] hover:text-black border border-white/15 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2 shrink-0 group"
          >
            <span>Inquire About QR Program</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

