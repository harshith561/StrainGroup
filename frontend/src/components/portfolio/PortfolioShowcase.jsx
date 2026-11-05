'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PORTFOLIO_PROJECTS = [
  {
    id: 'aastu-refrigeration',
    title: 'Aastu Refrigeration',
    desc: 'Industrial HVAC & Cold Chain Acquisition',
    category: 'Advertising & Marketing',
    image: '/images/case-studies/aastu-refrigeration.jpg',
    link: '/case-studies/aastu-refrigeration',
  },
  {
    id: 'pioneer-cranes',
    title: 'Pioneer Cranes',
    desc: 'Heavy Sector Overhead Hoist PPC',
    category: 'Advertising & Marketing',
    image: '/images/case-studies/pioneer-cranes.jpg',
    link: '/case-studies/pioneer-cranes',
  },
  {
    id: 'pakka-non-veg',
    title: 'Pakka Non Veg',
    desc: 'Commercial Culinary Video & Viral Footfall',
    category: 'Video Production',
    image: '/images/case-studies/pakka-non-veg.jpg',
    link: '/case-studies/pakka-non-veg',
  },
  {
    id: 'xiti-fashion',
    title: 'Xiti Sustainable Fashion',
    desc: 'Zero-Discharge Tirupur Garment Manufacturing',
    category: 'Clothing Manufacturing',
    image: '/images/case-studies/xiti-fashion.jpg',
    link: '/case-studies/xiti-fashion',
  },
  {
    id: 'haraa-jewellers',
    title: 'Haraa Gold & Diamonds',
    desc: 'Heritage Bridal Storytelling & Commercials',
    category: 'Video Production',
    image: '/images/case-studies/haraa-jewellers.jpg',
    link: '/case-studies/haraa-jewellers',
  },
  {
    id: 'jsw-cement',
    title: 'JSW Cement',
    desc: 'Infrastructure Brand Storytelling & Industrial Media',
    category: 'Video Production',
    image: '/images/case-studies/jsw-cement.jpeg',
    link: '/case-studies/jsw-cement',
  },
  {
    id: 'sri-bioaesthetics',
    title: 'Sri Bioaesthetics',
    desc: 'Microbial Biotech Communication & B2B Growth',
    category: 'Marketing & Branding',
    image: '/images/case-studies/sri-bioaesthetics.jpg',
    link: '/case-studies/sri-bioaesthetics',
  },
  {
    id: 'partha-dentals',
    title: 'Partha Dentals',
    desc: 'Healthcare Performance Marketing Engine',
    category: 'Digital Marketing',
    image: '/images/case-studies/partha-dentals.jpg',
    link: '/case-studies/partha-dentals',
  },
  {
    id: 'strains-fashions',
    title: 'Strains Fashions Conscious Line',
    desc: 'Organic Hemp, Vegan Silk & Botanical Dyes',
    category: 'Fashion Brand',
    image: '/images/case-studies/strains-fashions.jpg',
    link: '/case-studies/strains-fashions-conscious',
  },
];

function PortfolioCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const mediaRef = useRef(null);

  // Exact spring/damping physics: smooth lerp/lag so the badge glides naturally
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const updateCoordinates = useCallback((clientX, clientY) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseEnter = (e) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.jump(x);
    mouseY.jump(y);
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Scroll-out dismiss: when scrolling past or card moves away from pointer
  useEffect(() => {
    const handleScroll = () => {
      if (isHovered) {
        setIsHovered(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="w-full"
    >
      <Link href={project.link} className="group block text-decoration-none">

        {/* 1. MEDIA CONTAINER & MASK */}
        <div
          ref={mediaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#141414] cursor-pointer isolate"
        >
          {/* Inner Visual: Resting scale(1.0) -> Hovered scale(1.05) with cubic-bezier(0.25, 1, 0.5, 1) */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover will-change-transform select-none"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
              transition: 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
            }}
            loading="lazy"
            decoding="async"
          />

          {/* Contrast vignette overlay */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />

          {/* 2. FLOATING "VIEW PROJECT" PILL BADGE */}
          <motion.div
            className="pointer-events-none absolute z-30 hidden md:flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black font-sans text-xs font-bold px-5 py-2.5 tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.6)] select-none"
            style={{
              left: smoothX,
              top: smoothY,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              scale: { type: 'spring', stiffness: 200, damping: 20 },
              opacity: { duration: 0.18 },
            }}
          >
            View Project
          </motion.div>
        </div>

        {/* 3. STATIC TEXT METADATA LOCKUP (White Title + Green Category Accent) */}
        <div className="mt-5 sm:mt-6 space-y-1.5">
          <h3 className="text-xl sm:text-2xl lg:text-[1.85rem] font-sans font-bold text-white tracking-tight group-hover:text-[#00a859] transition-colors duration-300">
            <span className="relative inline-block pb-0.5">
              {project.title}
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base font-sans text-neutral-300 font-normal">
            <span>{project.desc}</span>
            <span className="text-white/30 mx-2">—</span>
            <span className="text-[#00a859] font-medium">{project.category}</span>
          </p>
        </div>

      </Link>
    </motion.div>
  );
}

/**
 * 10th Card: Services Coverpage Portal with Arrow linking to /services
 */
function ServicesPortalCard() {
  const [isHovered, setIsHovered] = useState(false);
  const mediaRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const updateCoordinates = useCallback((clientX, clientY) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseEnter = (e) => {
    if (!mediaRef.current) return;
    const rect = mediaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.jump(x);
    mouseY.jump(y);
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    updateCoordinates(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isHovered) {
        setIsHovered(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="w-full"
    >
      <Link href="/services" className="group block text-decoration-none">

        {/* MEDIA CONTAINER: Coverpage portal card redirecting to /services */}
        <div
          ref={mediaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0c0c0c] border border-white/10 group-hover:border-[#00a859]/60 transition-all duration-500 cursor-pointer isolate flex flex-col items-center justify-center p-6 text-center shadow-xl"
        >
          {/* Subtle ambient green radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00a859]/15 blur-[90px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          {/* Background subtle mesh grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Center Coverpage Action Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4">

            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00a859] font-bold">
              EXPLORE MORE
            </span>

            {/* Circular Arrow Button (Coverpage style arrow) */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#00a859] text-black flex items-center justify-center shadow-[0_0_35px_rgba(0,168,89,0.35)] group-hover:scale-110 group-hover:bg-[#00c266] transition-all duration-500">
              <ArrowUpRight
                size={40}
                className="stroke-[2.5] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </div>

            <h4 className="text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight group-hover:text-[#00a859] transition-colors duration-300">
              All Services &amp; Capabilities
            </h4>

          </div>

          {/* Floating Hover Badge: "Explore Services" */}
          <motion.div
            className="pointer-events-none absolute z-30 hidden md:flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black font-sans text-xs font-bold px-5 py-2.5 tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.6)] select-none"
            style={{
              left: smoothX,
              top: smoothY,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              scale: { type: 'spring', stiffness: 200, damping: 20 },
              opacity: { duration: 0.18 },
            }}
          >
            Explore Services
          </motion.div>
        </div>

        {/* STATIC TEXT METADATA LOCKUP */}
        <div className="mt-5 sm:mt-6 space-y-1.5">
          <h3 className="text-xl sm:text-2xl lg:text-[1.85rem] font-sans font-bold text-white tracking-tight group-hover:text-[#00a859] transition-colors duration-300">
            <span className="relative inline-block pb-0.5">
              Explore Our Full Services
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base font-sans text-neutral-300 font-normal">
            <span>Video, Marketing, Stitchery &amp; Fashion</span>
          </p>
        </div>

      </Link>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  return (
    <section className="relative w-full bg-[#0c0c0c] text-white py-16 sm:py-24 lg:py-32">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Symmetrical 2-Column Grid (1 col on mobile, 2 cols on laptops/desktops in sync) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-x-16 lg:gap-y-24 xl:gap-x-20 xl:gap-y-28">
          {/* 9 Authentic Case Studies */}
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}

          {/* 10th Slot: Coverpage Arrow Portal Card redirecting to /services */}
          <ServicesPortalCard />
        </div>
      </div>
    </section>
  );
}
