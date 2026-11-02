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
              Vengalrao Nagar, Hyderabad, Telangana, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e676] flex-shrink-0">
            <Mail size={18} />
          </div>
          <div>
            <span className="font-mono text-xs text-[#00e676] uppercase block">Electronic Mail</span>
            <a href="mailto:hello@strainsassociates.com" className="font-mono text-white/80 hover:text-[#00e676] text-sm mt-1 block">
              hello@strainsassociates.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e676] flex-shrink-0">
            <Phone size={18} />
          </div>
          <div>
            <span className="font-mono text-xs text-[#00e676] uppercase block">Direct Line</span>
            <a href="tel:+918686819898" className="font-mono text-white/80 hover:text-[#00e676] text-sm mt-1 block">
              +91 8686819898
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-lg p-8">
        <h4 className="font-sans text-lg font-bold text-white mb-2">Sustainable Manufacturing</h4>
        <p className="font-mono text-neutral-400 text-xs leading-relaxed">
          Strains Associates eco-friendly garment manufacturing facility is located in Tirupur, Tamil Nadu, India, supporting sustainable fashion brands with organic cotton, hemp, natural dyeing, and zero-discharge production.
        </p>
      </div>
    </div>
  );
}
