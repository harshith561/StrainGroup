'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle, Send, Sparkles, Building2, User, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constant';

export default function ShareStoryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);
  const googleReviewUrl =
    SITE_CONFIG?.googleReviewUrl ||
    'https://www.google.com/search?q=Strains+Associates+Hyderabad+reviews#lrd=0x0:0x0,3,,,';
  const [userType, setUserType] = useState('client');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    feedback: '',
    impact: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) return;
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', role: '', organization: '', feedback: '', impact: '' });
        onClose();
      }, 2500);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Share Your Experience"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#141414] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#00a859]/20 text-[#00a859] flex items-center justify-center mx-auto mb-4 border border-[#00a859]/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-neutral-400 font-sans max-w-xs mx-auto">
                Your story has been submitted for verification. We are honored to be part of your journey!
              </p>
            </motion.div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-xs font-mono text-[#00a859] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Community Voice</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Share Your Experience
              </h3>
              <p className="text-xs text-neutral-400 font-sans mb-4">
                Tell us how Strains Group impacted your brand, campaign, or daily life.
              </p>

              {/* Direct Google Reviews Fast Link */}
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 mb-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#4285F4]/60 transition-all group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white group-hover:text-[#4285F4] transition-colors flex items-center gap-1.5">
                      <span>Review Us Directly on Google</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#4285F4]" />
                    </p>
                    <p className="text-[11px] text-neutral-400 leading-tight">
                      Post your verified rating to Google Maps & Search profile
                    </p>
                  </div>
                </div>
              </a>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Type Switcher */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/5 mb-4">
                  <button
                    type="button"
                    onClick={() => setUserType('client')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      userType === 'client'
                        ? 'bg-[#00a859] text-black font-bold shadow-md'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Client / Partner</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('human')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      userType === 'human'
                        ? 'bg-[#dfba73] text-black font-bold shadow-md'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Customer / Creator</span>
                  </button>
                </div>

                {/* Rating Stars Picker */}
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-neutral-600 hover:text-amber-400 transition-colors"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || rating) >= star
                              ? 'text-amber-400 fill-current'
                              : 'text-neutral-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-white/70 ml-2">
                      {rating} of 5 Stars
                    </span>
                  </div>
                </div>

                {/* Full Name & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#1c1c1c] border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00a859]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1">
                      Role / Location
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder={userType === 'client' ? 'e.g. CMO' : 'e.g. Bangalore'}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#1c1c1c] border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00a859]"
                    />
                  </div>
                </div>

                {/* Company or Product Name */}
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    {userType === 'client' ? 'Company / Organization' : 'Product / Project Experienced'}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={userType === 'client' ? 'e.g. Apex Industrial Pvt Ltd' : 'e.g. Strains Heavyweight Hemp Tee'}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1c1c1c] border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00a859]"
                  />
                </div>

                {/* Feedback Textarea */}
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1">
                    Your Testimonial / Story *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.feedback}
                    onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                    placeholder="Describe your collaboration, fabric feel, campaign results, or how Strains made a difference..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c1c1c] border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00a859] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#00a859] hover:bg-[#00914c] text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00a859]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Verified Story</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

