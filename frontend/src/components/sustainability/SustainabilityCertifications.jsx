'use client';

import React from 'react';
import { ShieldCheck, Award, CheckCircle2, FileText, Check } from 'lucide-react';

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
    title: 'OEKO-TEX Standard 100',
    standard: 'Class I • Tested for Harmful Substances',
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
    code: 'LAB TESTED',
    title: 'Colorfastness & Quality Audits',
    standard: 'Batch Testing & Fiber Integrity',
    description:
      'Every fabric run undergoes testing for washfastness, tensile strength, shrinkage, and skin safety to guarantee lasting quality and comfort.',
    badge: 'Lab Tested',
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
      </div>
    </section>
  );
}

