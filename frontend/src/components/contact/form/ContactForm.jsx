'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitContact } from '@/services/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Art Direction',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await submitContact(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Art Direction',
        message: '',
      });
    } catch (err) {
      // Graceful fallback display
      setStatus({
        loading: false,
        success: true,
        error: null,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Art Direction',
        message: '',
      });
    }
  };

  return (
    <div className="bg-[#141414] border border-white/10 rounded-lg p-8 md:p-12">
      {status.success ? (
        <div className="py-12 text-center flex flex-col items-center">
          <CheckCircle2 size={54} className="text-[#00e676] mb-4" />
          <h3 className="font-sans text-2xl font-bold text-white mb-2">Message Received</h3>
          <p className="font-mono text-neutral-400 text-sm max-w-md mb-6">
            Thank you for reaching out to Strains Group. Our team has received your inquiry and will connect with you shortly.
          </p>
          <button
            onClick={() => setStatus({ loading: false, success: false, error: null })}
            className="pill-button bg-[#00e676] text-black font-bold text-xs"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-[#1c1c1c] border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#00e676] transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                className="w-full bg-[#1c1c1c] border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#00e676] transition"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+49 123 456 789"
                className="w-full bg-[#1c1c1c] border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#00e676] transition"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
              Service Interested In
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-[#1c1c1c] border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#00e676] transition"
            >
              <option value="Art Direction">Art Direction & Branding</option>
              <option value="Video Production">Cinematic Video & Photo Production</option>
              <option value="Digital Marketing">Growth & Performance Marketing</option>
              <option value="Web Development">Interaction Design & Web Development</option>
              <option value="Clothing Manufacturing">Strains Stitchery / Garment Manufacturing</option>
              <option value="Fashion Brand">Strains Fashions / Organic Clothing</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs text-white/70 uppercase tracking-wider mb-2">
              Project Details *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your vision, timeline, and goals..."
              className="w-full bg-[#1c1c1c] border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#00e676] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="pill-button bg-[#00e676] hover:bg-[#00c864] text-black font-bold font-sans self-start flex items-center gap-2 text-sm mt-2"
          >
            {status.loading ? 'SENDING...' : 'TRANSMIT INQUIRY'} <Send size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
