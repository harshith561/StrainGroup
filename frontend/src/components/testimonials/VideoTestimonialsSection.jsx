'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Video, Sparkles } from 'lucide-react';
import { VIDEO_TESTIMONIALS } from '@/constant/testimonialsData';

export default function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (item) => {
    setActiveVideo(item);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVideo]);

  return (
    <section 
      id="video-testimonials"
      className="relative py-24 bg-[#0c0c0c] border-b border-white/10 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00a859]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a859]/10 border border-[#00a859]/30 text-xs font-mono text-[#00a859] uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Cinematic Visual Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
              Watch Our Stories in Motion
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
            Direct on-set recordings, factory tours, and behind-the-scenes interviews with our partners.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video, index) => (
            <motion.div
              key={video.id}
              role="button"
              tabIndex={0}
              aria-label={`Play video testimonial: ${video.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => openVideo(video)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openVideo(video);
                }
              }}
              className="group relative rounded-3xl bg-[#141414] border border-white/10 hover:border-[#00a859]/50 overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/20 transition-colors" />

                {/* Play Button with Pulsing Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-[#00a859]/30 blur-md group-hover:scale-125 transition-transform" />
                    <div className="relative w-14 h-14 rounded-full bg-[#00a859] text-black flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white border border-white/15">
                  <Clock className="w-3 h-3 text-[#00a859]" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-neutral-300 border border-white/15">
                  {video.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00a859] transition-colors leading-snug mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-4">
                  &quot;{video.quote}&quot;
                </p>

                {/* Speaker Meta */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-white font-medium">{video.speaker}</span>
                  <span className="text-[#00a859] group-hover:underline">Play Reel</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#111111] rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeVideo.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans mt-0.5">
                    {activeVideo.speaker} • {activeVideo.role}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeVideo}
                  aria-label="Close video player"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

