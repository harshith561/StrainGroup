'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FounderLetter() {
  return (
    <section id="founder-letter" className="relative py-24 sm:py-32 bg-[#090909] border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="founder-ambient-glow founder-ambient-glow-green w-[600px] h-[600px] top-1/4 -right-40" />
      <div className="founder-grain-overlay" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight"
          >
            A Letter to Every Founder &amp; Creator
          </motion.h2>
        </div>

        {/* The Letter Paper / Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="founder-letter-box rounded-2xl p-8 sm:p-12 md:p-16 text-neutral-300 leading-relaxed font-sans text-base sm:text-lg"
        >
          {/* Header of Letter */}
          <div className="pb-8 mb-8 border-b border-white/10 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-white font-bold block text-sm">NAGA PRAHARSHA GOVINDU</span>
              <span className="text-[#00a859]">Founder &amp; Line Producer</span>
            </div>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-neutral-200 font-sans leading-relaxed">
            
            <p className="text-white font-medium text-lg sm:text-xl font-sans">
              Dear Friend, Founder, or Fellow Creator,
            </p>

            <p>
              Before Strains existed, I spent years in corporate sales management. Day after day, I sat in polished 
              meeting rooms watching marketing agencies charge fortunes for slide decks and superficial buzzwords. 
              The work looked shiny on the surface, but once the pitch ended, there was no soul behind it. 
              Everything was outsourced down three layers of fragmented freelancers. Nobody took responsibility 
              for whether the client actually grew.
            </p>

            <p>
              At the same time, I looked at India’s extraordinary manufacturing landscape. In textile belts like 
              Tirupur, master tailors and artisans produced garments for the world’s biggest luxury labels—yet they 
              were treated as disposable commodity suppliers. Worse, the chemical runoffs from toxic dyes were 
              turning local rivers into toxic dead zones.
            </p>

            <div className="my-8 p-6 rounded-xl bg-white/[0.03] border-l-2 border-[#00a859] italic text-white/95 text-lg sm:text-xl font-serif leading-snug">
              “I kept asking myself one question: Why does building a commercially viable brand have to mean either 
              sacrificing your environmental conscience, or settling for amateurish visual storytelling?”
            </div>

            <p>
              In late 2018, I resigned. I didn&apos;t raise millions in venture capital. I took my personal savings, 
              packed my bags, and went straight to Tirupur. We incorporated <strong className="text-white font-semibold">Strains Fashions Private Limited</strong> with 
              a strict non-negotiable principle: zero chemical effluent discharge. If a garment couldn’t be dyed 
              with natural botanical extracts—pomegranate rinds, turmeric, marigold, and madder root—we simply 
              wouldn’t make it. If a price tag couldn&apos;t be planted in soil to sprout organic basil, we threw it out.
            </p>

            <p>
              But we learned a hard lesson very quickly: <em>Ethics alone doesn&apos;t sell.</em> If your video looks 
              cheap, if your digital campaigns are poorly targeted, and if your art direction lacks emotional depth, 
              even the greenest product will gather dust in a warehouse.
            </p>

            <p>
              That is why we built <strong className="text-white font-semibold">Strains Associates</strong> in Hyderabad. 
              I brought together a tight-knit squad of uncompromising craftspeople: <strong>Danny</strong> for cinematic 
              film direction and post-production, <strong>Pavan</strong> for commercial cinematography and studio lighting, 
              and <strong>Prasad</strong> for full-funnel digital marketing and performance analytics. 
            </p>

            <p>
              We eliminated the middlemen. When you collaborate with Strains, the same mind that crafts your brand 
              positioning is in the edit suite timing the color grade in DaVinci Resolve, and supervising the organic 
              cotton weave in Tirupur.
            </p>

            <p>
              Today, whether we are directing a cinematic industrial brand film for <span className="text-white font-medium">JSW Cement</span>, 
              scaling high-conversion advertising campaigns for <span className="text-white font-medium">Pakka Non Veg</span>, 
              or crafting luxury jewellery campaigns for <span className="text-white font-medium">Haraa</span>, 
              the core ethos remains untouched. We treat your company like our own life’s work.
            </p>

            <p className="pt-2">
              If you are a founder building something meaningful, my door is always open. Let’s sit down, drink coffee, 
              and make something that outlasts the noise.
            </p>

          </div>

          {/* Letter Footer & Sign-off */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div>
              <span className="block text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                With Warmth &amp; Conviction,
              </span>

              <h3 className="text-white font-bold text-xl sm:text-2xl font-sans tracking-tight">
                Naga Praharsha Govindu
              </h3>
              <p className="text-xs text-[#00a859] font-mono mt-1">
                Founder, Strategy Maker &amp; Line Producer
              </p>
              <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                Strains Associates &amp; Strains Fashions Private Limited
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
