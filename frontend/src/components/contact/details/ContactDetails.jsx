'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactDetails() {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="flex flex-col gap-8 bg-[#141414] border border-white/10 rounded-lg p-8">
        <h3 className="font-sans text-xl font-bold text-white uppercase tracking-wider">
          Direct Contact
        </h3>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e676] flex-shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <span className="font-mono text-xs text-[#00e676] uppercase block">Headquarters</span>
            <p className="font-mono text-white/80 text-sm mt-1">
              Strains Tower, Sector 5, Creative District, Germany
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e676] flex-shrink-0">
            <Mail size={18} />
          </div>
          <div>
            <span className="font-mono text-xs text-[#00e676] uppercase block">Electronic Mail</span>
            <a href="mailto:info@strains.in" className="font-mono text-white/80 hover:text-[#00e676] text-sm mt-1 block">
              info@strains.in
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e676] flex-shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <span className="font-mono text-xs text-[#00e676] uppercase block">Direct Line</span>
            <a href="tel:+49123456789" className="font-mono text-white/80 hover:text-[#00e676] text-sm mt-1 block">
              +49 123 456 789
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-lg p-8">
        <h4 className="font-sans text-lg font-bold text-white mb-2">Production Studio</h4>
        <p className="font-mono text-neutral-400 text-xs leading-relaxed">
          Strains Stitchery garments manufacturing facility is operated in Tirupur, India, with global client service hubs in Berlin and Frankfurt.
        </p>
      </div>
    </div>
  );
}
