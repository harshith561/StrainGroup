'use client';

import React, { useState } from 'react';
import { MapPin, Factory, Navigation, ExternalLink } from 'lucide-react';

const LOCATIONS = [
  {
    id: 'hyderabad',
    title: 'Corporate Headquarters',
    city: 'Hyderabad, Telangana',
    address: 'Vengalrao Nagar, Hyderabad, Telangana 500038, India',
    desc: 'Creative agency, cinematic video production studio, strategy & digital marketing command center.',
    // Google Maps embed URL
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.82823617387!2d78.4357732!3d17.4378036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b8f0426d43%3A0xe543df6bc633ce0c!2sVengal%20Rao%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionUrl: 'https://maps.google.com/?q=Vengal+Rao+Nagar,+Hyderabad,+Telangana',
    icon: MapPin,
  },
  {
    id: 'tirupur',
    title: 'Strains Stitchery Manufacturing Hub',
    city: 'Tirupur, Tamil Nadu',
    address: 'Tirupur Knitwear & Textile Industrial Hub, Tamil Nadu 641604, India',
    desc: 'Zero-discharge organic cotton spinning, circular knitting, botanical garment dyeing & ethical apparel manufacturing.',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62635.85764065427!2d77.3015486!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b049b6b725%3A0x7d976be461f6d905!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionUrl: 'https://maps.google.com/?q=Tiruppur,+Tamil+Nadu',
    icon: Factory,
  },
];

export default function ContactMap() {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0].id);
  const current = LOCATIONS.find((loc) => loc.id === activeLocation) || LOCATIONS[0];
  const IconComponent = current.icon;

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-24"
      aria-label="Google Business Facility Maps"
    >
      <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header / Location Switcher */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#161616]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-[#00a859] font-mono text-xs uppercase tracking-wider mb-2">
              <IconComponent size={14} />
              <span>Google Verified Locations</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white">
              Visit Strains Group Facilities
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
              Find our creative strategy studio in Hyderabad and zero-discharge factory in Tirupur.
            </p>
          </div>

          {/* Location Toggle Tabs */}
          <div className="flex items-center bg-[#0d0d0d] p-1.5 rounded-xl border border-white/10 gap-1.5 self-start md:self-auto">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLocation(loc.id)}
                className={`px-4 py-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeLocation === loc.id
                    ? 'bg-[#00a859] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {loc.id === 'hyderabad' ? <MapPin size={14} /> : <Factory size={14} />}
                <span>{loc.city.split(',')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Info Banner */}
        <div className="px-6 py-4 bg-[#141414] border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <span className="font-bold text-white">{current.title}:</span>
            <span className="text-neutral-400 font-mono">{current.address}</span>
          </div>
          <a
            href={current.directionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#00a859] hover:underline font-mono text-xs font-medium self-start sm:self-auto"
          >
            <Navigation size={13} />
            <span>Open in Google Maps</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Responsive Google Maps iframe */}
        <div className="relative w-full h-[380px] sm:h-[450px] bg-[#0d0d0d]">
          <iframe
            title={`Google Map - ${current.title}`}
            src={current.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

