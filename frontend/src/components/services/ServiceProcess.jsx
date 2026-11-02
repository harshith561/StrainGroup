'use client';

import React from 'react';
import { Compass, Lightbulb, Factory, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Strategic Discovery',
    desc: 'Deep-dive analysis of your competitive landscape, audience psychology, and brand positioning to establish measurable targets.',
  },
  {
    step: '02',
    icon: Lightbulb,
    title: 'Creative Ideation',
    desc: 'Translating strategy into high-impact concepts, moodboards, sample prototypes, and design systems aligned with market appetite.',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Precision Production',
    desc: 'Flawless execution across our zero-discharge manufacturing in Tirupur, studio film sets, and responsive codebases.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Launch & Growth Scale',
    desc: 'Multi-channel rollout, performance marketing campaigns, conversion rate tuning, and continuous brand amplification.',
  },
];

export default function ServiceProcess() {
  return (
    <section className="service-process-section py-24 sm:py-32 bg-[#0c0c0c] text-white border-b border-white/10" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#00a859] font-mono text-xs uppercase tracking-[3px] font-bold block mb-3">
            How We Execute
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white mb-4">
            The Production Blueprint
          </h2>
          <p className="text-[#8c8c8c] text-sm sm:text-base font-sans">
            A disciplined methodology taking concepts from initial brainstorm to global category leadership.
          </p>
        </div>

        {/* Process Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#111111] border border-white/5 hover:border-[#00a859]/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#00a859]/10 border border-[#00a859]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#00a859]" />
                    </div>
                    <span className="text-3xl font-mono font-black text-white/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#888888] text-xs sm:text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00a859]" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00a859] font-semibold">
                    Phase {index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
