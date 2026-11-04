'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Scissors,
  Droplet,
  Layers,
  PackageCheck,
  CheckCircle2,
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Sustainable Fiber Selection',
    subtitle: 'GOTS & OEKO-TEX Certified Raw Materials',
    description:
      'We curate certified raw materials direct from verified organic farmers: long-staple organic cotton, high-tenacity Himalayan hemp, cruelty-free vegan silk, and plant-based vegan leather with zero synthetic chemical sizing.',
    deliverables: ['GOTS Certified Organic Cotton', 'Himalayan Pure Hemp & Blends', 'Cruelty-Free Vegan Silk & Leather', 'Fiber Integrity & GSM Lab Reports'],
    icon: Sparkles,
    accent: '#00e676',
  },
  {
    step: '02',
    title: 'Tech Pack & Rapid Sampling',
    subtitle: 'Precision Grading & Fit Prototypes',
    description:
      'Our Tirupur pattern masters convert your design flats into precision CAD tech packs, grading charts, and 3D digital draping simulations, producing approved physical prototype samples within 7 to 10 days.',
    deliverables: ['Precision Tech Pack Spec Sheets', 'Comprehensive Size Grading Charts', 'First Fit & Counter Sampling', 'Bespoke Trims & Seam Approval'],
    icon: Scissors,
    accent: '#00e676',
  },
  {
    step: '03',
    title: 'Botanical Dyeing & Zero Discharge',
    subtitle: '100% Closed-Loop Water Recycling',
    description:
      'We extract natural non-toxic color pigments from pomegranate rinds, marigold flowers, madder root, and wild indigo. Our Tirupur dyehouse features an advanced Zero Liquid Discharge (ZLD) plant recycling 100% of process water.',
    deliverables: ['Natural Plant & Fruit Pigments', 'Heavy-Metal-Free Mordanting', 'Zero Liquid Discharge (ZLD) Certification', 'Colorfastness to Washing & Light Reports'],
    icon: Droplet,
    accent: '#00e676',
  },
  {
    step: '04',
    title: 'Cut-Make-Trim (CMT) Production',
    subtitle: 'Precision Sewing & AQL 2.5 Quality',
    description:
      'Our skilled Tirupur craft teams execute computer-controlled cutting, high-tensile twin-needle stitching, and custom embroidery. Every production line enforces strict AQL 2.5 intermediate and final quality audits.',
    deliverables: ['Automated Low-Wastage Fabric Cut', 'Precision Twin-Needle Seaming', 'Bespoke Embroidery & Screen Detailing', 'AQL 2.5 Defect-Free Quality Inspections'],
    icon: Layers,
    accent: '#00e676',
  },
  {
    step: '05',
    title: 'Plantable Tags & Global Logistics',
    subtitle: 'Circular Finishing & Container Export',
    description:
      'Every finished garment is hand-tagged with handmade recycled paper embedded with living seeds (basil or marigold), packed in biodegradable cornstarch polybags, and prepped for domestic distribution or global sea/air container freight.',
    deliverables: ['Plantable Seed Price Tags (Basil/Marigold)', '100% Biodegradable Cornstarch Polybags', 'Export Barcode & Master Carton Labelling', 'Global Door-to-Port Freight Dispatch'],
    icon: PackageCheck,
    accent: '#00e676',
  },
];

export default function ClothingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="clothing-process"
      className="relative bg-[#080808] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden"
      aria-label="5-Step Clothing Manufacturing Process"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00a859]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase text-white leading-[1.1] mb-6"
          >
            Our 5-Step Sustainable <br className="hidden sm:inline" />
            <span className="text-[#00e676]">Apparel Pipeline</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            From ethically harvested botanical fibers to closed-loop dyehouses and plantable seed tags, our Tirupur facility operates as a circular manufacturing engine with zero compromises on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.07] border-[#00e676]/60 shadow-[0_0_30px_rgba(0,230,118,0.15)] translate-x-1'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold px-2.5 py-1 rounded-lg ${
                      isActive ? 'bg-[#00e676] text-black font-extrabold' : 'bg-white/10 text-neutral-400'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-sans font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <Icon className={`w-5 h-5 mt-1 transition-colors ${isActive ? 'text-[#00e676]' : 'text-neutral-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00e676]/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#00e676]">
                  Phase {PROCESS_STEPS[activeStep].step} Roadmap
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  Step {activeStep + 1} of {PROCESS_STEPS.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-black uppercase text-white mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-neutral-300 font-sans text-base leading-relaxed mb-8">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                  Key Technical Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00e676] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-sans text-neutral-200">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

