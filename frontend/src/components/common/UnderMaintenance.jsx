'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from './MainLayout';
import { ArrowLeft, Mail, Phone, ShieldAlert, Sparkles } from 'lucide-react';

export default function UnderMaintenance({ routeName = '' }) {
  return (
    <MainLayout className="bg-[#080808] text-white">
      {/* Main 409 Under Maintenance Notice */}
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-24 min-h-[70vh]">
        <div className="relative max-w-2xl w-full mx-auto text-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00e676]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Glowing Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e676]/30 bg-[#00e676]/5 text-[#00e676] font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(0,230,118,0.15)]">
            <ShieldAlert size={14} className="animate-pulse" />
            <span>409 • UNDER MAINTENANCE</span>
          </div>

          {/* 409 Numeric Header */}
          <h1 className="font-sans text-7xl sm:text-9xl font-black tracking-tight text-white/90 select-none leading-none mb-2">
            409
          </h1>

          {/* Title */}
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#00e676] mb-4">
            UNDER MAINTENANCE
          </h2>

          {/* Subheading: Contact to Administration */}
          <div className="inline-block px-5 py-2 rounded bg-white/5 border border-white/10 mb-6">
            <span className="font-mono text-sm sm:text-base font-semibold text-white tracking-wider uppercase flex items-center justify-center gap-2">
              <Sparkles size={16} className="text-[#00e676]" />
              CONTACT TO ADMINISTRATION
            </span>
          </div>

          {/* Description */}
          <p className="font-mono text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-8">
            This route is currently undergoing scheduled system maintenance and structure updates. For access authorization, project details, or active inquiries, please connect directly with the administration desk.
          </p>

          {/* Administration Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left font-mono">
            <a
              href="mailto:info@strains.in?subject=409%20System%20Maintenance%20Inquiry%20-%20Strains"
              className="flex items-center gap-3 p-4 rounded-lg bg-[#121212] border border-white/10 hover:border-[#00e676]/50 transition group"
            >
              <div className="w-10 h-10 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase text-neutral-500 block">Administration Desk</span>
                <span className="text-xs text-white group-hover:text-[#00e676] transition-colors">info@strains.in</span>
              </div>
            </a>

            <a
              href="tel:+49123456789"
              className="flex items-center gap-3 p-4 rounded-lg bg-[#121212] border border-white/10 hover:border-[#00e676]/50 transition group"
            >
              <div className="w-10 h-10 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase text-neutral-500 block">Direct Line</span>
                <span className="text-xs text-white group-hover:text-[#00e676] transition-colors">+49 123 456 789</span>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="pill-button bg-[#00e676] hover:bg-[#00c864] text-black font-bold font-sans text-xs px-6 py-3 inline-flex items-center gap-2 transition"
            >
              <ArrowLeft size={16} /> RETURN HOME
            </Link>
            <a
              href="mailto:info@strains.in?subject=Admin%20Support%20Request"
              className="pill-button bg-white/10 hover:bg-white/15 text-white font-sans text-xs px-6 py-3 inline-flex items-center gap-2 transition border border-white/10"
            >
              <Mail size={16} /> CONTACT ADMINISTRATION
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
