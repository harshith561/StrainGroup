'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Video, Users } from 'lucide-react';

export default function FounderPhilosophy() {
  const principles = [
    {
      num: '01',
      title: 'Skin In The Game',
      subtitle: 'We think like founders, because we are founders.',
      icon: ShieldCheck,
      desc:
        'We never pitch an ad budget, influencer campaign, or production plan that we wouldn’t personally risk our own money on. We don’t hide behind vanity impressions—we obsess over your pipeline velocity and real bottom-line profitability.',
      quote: '“If an agency doesn’t treat your capital like their own savings, find another agency.”',
    },
    {
      num: '02',
      title: 'The Clean River Standard',
      subtitle: 'Zero toxic chemical discharge. Ever.',
      icon: Droplets,
      desc:
        'In an industry infamous for dumping toxic chemical effluents into rivers, Strains Stitchery in Tirupur operates on a closed-loop zero-discharge standard. 100% natural botanical dyes made of pomegranate, madder root, turmeric, and plantable seed tags.',
      quote: '“Luxury that poisons nature isn’t luxury; it’s an outdated compromise.”',
    },
    {
      num: '03',
      title: 'DaVinci In-House Craft',
      subtitle: 'No fragmented freelance outsourcing.',
      icon: Video,
      desc:
        'When you trust us with a brand film or commercial, the entire pipeline is executed in-house by Danny, Pavan, and our dedicated team. Precision Hollywood DaVinci Resolve color timing, custom sound design, and 4K cinema cameras.',
      quote: '“When the director, cinematographer, and colorist sit in the same room, magic happens.”',
    },
    {
      num: '04',
      title: 'Radical Candor & Direct Access',
      subtitle: 'No corporate telephone game.',
      icon: Users,
      desc:
        'You have direct phone, WhatsApp, and face-to-face access to Praharsha and the executive directors. If an idea isn’t working, we tell you openly. We protect your brand’s reputation as fiercely as our own.',
      quote: '“No layers of account coordinators reading canned scripts. Just honest creators doing honest work.”',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#080808] border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="founder-ambient-glow founder-ambient-glow-green w-[500px] h-[500px] top-1/2 -right-20" />
      <div className="founder-grain-overlay" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            The 4 Rules We <span className="text-[#00a859]">Never Break</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            These are not marketing slogans painted on a wall. They are the founding principles 
            that have guided every single decision since November 2018.
          </motion.p>
        </div>

        {/* 4 Principle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#00a859]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#00a859] px-2.5 py-1 rounded bg-[#00a859]/10 border border-[#00a859]/20 font-bold tracking-wider">
                      RULE {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00a859] group-hover:bg-[#00a859] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-sans font-bold text-white tracking-tight mb-2 group-hover:text-[#4ade80] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#84cc16] mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs sm:text-sm text-neutral-400 italic font-sans">
                  {item.quote}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
