'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ShieldAlert,
  ServerCrash,
  FileQuestion,
  RotateCcw,
  ArrowLeft,
  Mail,
  Phone,
  Sparkles,
  Home,
  Briefcase,
} from 'lucide-react';
import MainLayout from './MainLayout';
import { SITE_CONFIG } from '@/constant/siteConfig';

const PRESETS = {
  409: {
    badgeText: '409 • UNDER MAINTENANCE',
    badgeColor: 'border-[#00e676]/30 bg-[#00e676]/5 text-[#00e676]',
    glowColor: 'bg-[#00e676]/10',
    numberColor: 'text-white/90',
    icon: ShieldAlert,
    title: 'UNDER MAINTENANCE',
    titleColor: 'text-[#00e676]',
    subheading: 'CONTACT TO ADMINISTRATION',
    description:
      'This route is currently undergoing scheduled system updates and architecture maintenance. For project access, enterprise inquiries, or clearance, please connect directly with the administration desk.',
    showContact: true,
    showRetry: false,
    defaultCode: '409',
  },
  'server-issue': {
    badgeText: '500 • SERVER ISSUE DETECTED',
    badgeColor: 'border-amber-400/30 bg-amber-400/5 text-amber-400',
    glowColor: 'bg-amber-400/10',
    numberColor: 'text-white/90',
    icon: ServerCrash,
    title: 'SERVER ISSUE ENCOUNTERED',
    titleColor: 'text-amber-400',
    subheading: 'ENGINEERING TEAM NOTIFIED',
    description:
      'Our servers or database endpoints encountered an unexpected issue while processing your request. Please try refreshing the page, or connect with our technical desk if the issue persists.',
    showContact: true,
    showRetry: true,
    defaultCode: '500',
  },
  500: {
    badgeText: '500 • INTERNAL SERVER ERROR',
    badgeColor: 'border-amber-400/30 bg-amber-400/5 text-amber-400',
    glowColor: 'bg-amber-400/10',
    numberColor: 'text-white/90',
    icon: ServerCrash,
    title: 'SERVER ISSUE ENCOUNTERED',
    titleColor: 'text-amber-400',
    subheading: 'ENGINEERING TEAM NOTIFIED',
    description:
      'Our backend service encountered a temporary connection or processing interruption. System telemetry has logged this event. Please retry in a moment.',
    showContact: true,
    showRetry: true,
    defaultCode: '500',
  },
  404: {
    badgeText: '404 • PAGE NOT FOUND',
    badgeColor: 'border-white/20 bg-white/5 text-neutral-300',
    glowColor: 'bg-[#00a859]/10',
    numberColor: 'text-white/90',
    icon: FileQuestion,
    title: 'PAGE NOT FOUND',
    titleColor: 'text-white',
    subheading: 'UNRECOGNIZED ROUTE',
    description:
      'The requested page or resource could not be found. It may have been moved, updated, or is currently in development by our creative team.',
    showContact: false,
    showRetry: false,
    defaultCode: '404',
  },
};

export default function CommonErrorView({
  type = '409',
  statusCode,
  title,
  subheading,
  description,
  showContact,
  showRetry,
  routeName,
}) {
  const router = useRouter();
  const preset = PRESETS[type] || PRESETS[statusCode] || PRESETS['409'];

  const displayCode = statusCode || preset.defaultCode;
  const displayTitle = title || preset.title;
  const displaySubheading = subheading || preset.subheading;
  const displayDesc = description || preset.description;
  const IconComponent = preset.icon;
  const hasContact = showContact !== undefined ? showContact : preset.showContact;
  const hasRetry = showRetry !== undefined ? showRetry : preset.showRetry;

  const handleRetry = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <MainLayout className="bg-[#080808] text-white">
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-24 min-h-[75vh]">
        <div className="relative max-w-2xl w-full mx-auto text-center">
          
          {/* Subtle Ambient Glow */}
          <div
            className={`absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 ${preset.glowColor} blur-[120px] rounded-full pointer-events-none`}
            aria-hidden="true"
          />

          {/* Glowing Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-xs uppercase tracking-widest mb-6 ${preset.badgeColor}`}
          >
            <IconComponent size={14} className="animate-pulse" />
            <span>{preset.badgeText}</span>
          </div>

          {/* Numeric Status Header */}
          <h1 className={`font-sans text-7xl sm:text-9xl font-black tracking-tight select-none leading-none mb-2 ${preset.numberColor}`}>
            {displayCode}
          </h1>

          {/* Title */}
          <h2 className={`font-sans text-2xl sm:text-4xl font-extrabold uppercase tracking-tight mb-4 ${preset.titleColor}`}>
            {displayTitle}
          </h2>

          {/* Subheading Badge */}
          {displaySubheading && (
            <div className="inline-block px-5 py-2 rounded bg-white/5 border border-white/10 mb-6">
              <span className="font-mono text-xs sm:text-sm font-semibold text-white tracking-wider uppercase flex items-center justify-center gap-2">
                <Sparkles size={14} className="text-[#00e676]" />
                {displaySubheading}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="font-mono text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-8">
            {displayDesc}
            {routeName && (
              <span className="block mt-2 text-neutral-500 font-mono text-xs">
                Target Route: <code className="text-neutral-300">/{routeName}</code>
              </span>
            )}
          </p>

          {/* Administration Contact Bar (Optional) */}
          {hasContact && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10 text-left font-mono">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Support%20Inquiry%20[Code%20${displayCode}]%20-%20Strains%20Associates`}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#00e676]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block">Administration Desk</span>
                  <span className="text-xs text-white group-hover:text-[#00e676] transition-colors">
                    {SITE_CONFIG.contactEmail}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contactPhone}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#121212] border border-white/10 hover:border-[#00e676]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#00e676]/10 flex items-center justify-center text-[#00e676] group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 block">Direct Line</span>
                  <span className="text-xs text-white group-hover:text-[#00e676] transition-colors">
                    {SITE_CONFIG.contactPhone}
                  </span>
                </div>
              </a>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {hasRetry && (
              <button
                type="button"
                onClick={handleRetry}
                className="pill-button bg-amber-400 hover:bg-amber-300 text-black font-bold font-sans text-xs px-6 py-3 inline-flex items-center gap-2 transition"
              >
                <RotateCcw size={15} /> RETRY CONNECTION
              </button>
            )}

            <Link
              href="/"
              className="pill-button bg-[#00a859] hover:bg-[#00c266] text-black font-bold font-sans text-xs px-6 py-3 inline-flex items-center gap-2 transition shadow-[0_4px_20px_rgba(0,168,89,0.3)]"
            >
              <Home size={15} /> RETURN HOME
            </Link>

            <Link
              href="/portfolio"
              className="pill-button bg-white/10 hover:bg-white/15 text-white font-sans text-xs px-6 py-3 inline-flex items-center gap-2 transition border border-white/10"
            >
              <Briefcase size={15} /> VIEW PORTFOLIO
            </Link>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}

