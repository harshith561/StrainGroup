'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const ABOUT_TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Naga Praharsha',
    role: 'Founder & Line Producer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/naga-praharsha',
  },
  {
    id: 2,
    name: 'Danny Cooper',
    role: 'Head of Direction & Post-Production',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/danny-cooper',
  },
  {
    id: 3,
    name: 'Pavan Kumar',
    role: 'Head of Photography & Visuals',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/pavan-kumar',
  },
  {
    id: 4,
    name: 'Brenda C. Janet',
    role: 'Lead UX & Creative Strategist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/brenda-janet',
  },
  {
    id: 5,
    name: 'Prasad Varma',
    role: 'Head of Digital Marketing & Growth',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/prasad-varma',
  },
  {
    id: 6,
    name: 'Elena Rostova',
    role: 'Senior Motion & 3D Artist',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
    profileUrl: '/team/elena-rostova',
  },
];

export default function AboutTeamCoverflowSection({ members = ABOUT_TEAM_MEMBERS }) {
  const router = useRouter();
  const totalMembers = members.length;

  // Desktop coverflow state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mobile infinite clone-loop state:
  // Prepend clone of last member and append clone of first member:
  // [members[N-1], ...members, members[0]]
  const mobileSlides = [
    members[totalMembers - 1],
    ...members,
    members[0],
  ];

  const [mobileIndex, setMobileIndex] = useState(1); // Index 1 is members[0]
  const [withTransition, setWithTransition] = useState(true);
  const isTransitioningRef = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Next Slide: seamless forward transition from 1 to nth, and nth to 1st (no rewind)
  const nextSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setCurrentIndex((prev) => (prev + 1) % totalMembers);
    setWithTransition(true);
    setMobileIndex((prev) => (prev >= totalMembers + 1 ? 2 : prev + 1));

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 580);
  }, [totalMembers]);

  // Prev Slide: seamless backward transition from 1st to nth
  const prevSlide = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setCurrentIndex((prev) => (prev - 1 + totalMembers) % totalMembers);
    setWithTransition(true);
    setMobileIndex((prev) => (prev <= 0 ? totalMembers - 1 : prev - 1));

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 580);
  }, [totalMembers]);

  const goToSlide = (index) => {
    if (isTransitioningRef.current) return;
    setCurrentIndex(index);
    setWithTransition(true);
    setMobileIndex(index + 1);
  };

  // Seamless invisible teleport at boundaries:
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (mobileIndex >= totalMembers + 1) {
      setWithTransition(false);
      setMobileIndex(1);
    } else if (mobileIndex <= 0) {
      setWithTransition(false);
      setMobileIndex(totalMembers);
    }
  };

  // Bulletproof fallback: ensures boundaries reset even if browser throttles onTransitionEnd
  useEffect(() => {
    if (mobileIndex >= totalMembers + 1) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setMobileIndex(1);
        isTransitioningRef.current = false;
      }, 560);
      return () => clearTimeout(timer);
    } else if (mobileIndex <= 0) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setMobileIndex(totalMembers);
        isTransitioningRef.current = false;
      }, 560);
      return () => clearTimeout(timer);
    }
  }, [mobileIndex, totalMembers]);

  // Re-enable transition on the next frame after invisible teleport
  useEffect(() => {
    if (!withTransition) {
      const frameId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [withTransition]);

  // Intersection Observer for scroll reveal effect
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Autoplay: 3.5 seconds continuous infinite loop, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile: allows smooth vertical scrolling while detecting horizontal swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current || !touchStartY.current) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Only change slide when horizontal swipe is distinctly greater than vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = 0;
    touchStartY.current = 0;
  };

  // Active member on Desktop
  const currentMember = members[currentIndex] || members[0];

  // Active member on Mobile (mapped from mobileIndex)
  const activeMobileRealIndex =
    mobileIndex === 0
      ? totalMembers - 1
      : mobileIndex === totalMembers + 1
      ? 0
      : mobileIndex - 1;
  const currentMobileMember = members[activeMobileRealIndex] || members[0];

  return (
    <section
      ref={sectionRef}
      id="about-team-coverflow-section"
      className={`about-team-coverflow-section ${revealed ? 'reveal' : ''}`}
      aria-label="Meet the talented squad, behind the creativity"
    >
      <div className="about-team-inner">
        {/* ================================================================= */}
        {/* Section Heading matching reference screenshot exactly             */}
        {/* ================================================================= */}
        <div className="about-team-header mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-14">
            <div className="about-team-tag-col md:w-1/5 pt-1.5">
              <span className="about-team-tag font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold block">
                TEAM
              </span>
            </div>
            <div className="about-team-title-col md:w-4/5">
              <h2 className="about-team-title font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight">
                Meet the talented
                <br />
                squad, behind the
                <br />
                creativity
              </h2>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 1. DESKTOP 3D COVERFLOW CAROUSEL (Visible on md screens and up)  */}
        {/* Height of image is 60% of the stage for balanced proportion       */}
        {/* ================================================================= */}
        <div
          className="about-coverflow-wrapper hidden md:block relative w-full select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="about-coverflow-stage relative w-full flex items-center justify-center">
            {members.map((member, idx) => {
              // Calculate offset relative to currentIndex in the range [-total/2, total/2]
              let offset = idx - currentIndex;
              while (offset > totalMembers / 2) offset -= totalMembers;
              while (offset < -totalMembers / 2) offset += totalMembers;

              let positionClass = 'card-pos-far-right';
              if (offset === 0) positionClass = 'card-pos-center';
              else if (offset === -1) positionClass = 'card-pos-left';
              else if (offset === 1) positionClass = 'card-pos-right';
              else if (offset < -1) positionClass = 'card-pos-far-left';

              const isCenter = offset === 0;

              return (
                <div
                  key={member.id}
                  className={`about-coverflow-card ${positionClass}`}
                  onClick={() => router.push(member.profileUrl)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') router.push(member.profileUrl);
                  }}
                  aria-label={`View profile of ${member.name}, ${member.role}`}
                >
                  <div className="card-image-container relative w-full h-full group bg-neutral-900 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient depth vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

                    {/* Quick navigation badge on hover for center card */}
                    {isCenter && (
                      <div className="card-action-badge absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-strain-green border border-strain-green/30 font-semibold shadow-lg">
                          View Profile <ArrowUpRight size={13} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Center Member Details (Directly Below Center Card) */}
          <div className="about-active-member-meta text-center mt-7 min-h-[88px] flex flex-col items-center justify-center">
            <Link
              href={currentMember.profileUrl}
              className="group inline-flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="font-sans text-3xl lg:text-[35px] font-extrabold text-white tracking-tight group-hover:text-strain-green transition-colors duration-300">
                {currentMember.name}
              </h3>
              <p className="font-mono text-xs lg:text-[13px] font-semibold uppercase tracking-[0.22em] text-strain-green mt-2 group-hover:tracking-[0.28em] transition-all duration-300">
                {currentMember.role}
              </p>
            </Link>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. MOBILE VIEW (Visible on mobile/tablet below md breakpoint)     */}
        {/* True Infinite Loop with Cloned Boundary: Slides 1 to nth, and nth */}
        {/* to 1st seamlessly with ZERO rewind and ZERO fluctuation          */}
        {/* ================================================================= */}
        <div
          className="about-team-mobile-view block md:hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full max-w-[220px] mx-auto flex flex-col items-center">
            {/* Viewport with smooth endless sliding track (40% height) */}
            <div className="about-mobile-slider-viewport overflow-hidden w-full rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(0,168,89,0.18)] bg-neutral-900">
              <div
                className="about-mobile-slider-track flex w-full"
                style={{
                  transform: `translateX(-${mobileIndex * 100}%)`,
                  transition: withTransition
                    ? 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {mobileSlides.map((member, sIdx) => (
                  <div
                    key={`mobile-slide-${member.id}-${sIdx}`}
                    onClick={() => router.push(member.profileUrl)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') router.push(member.profileUrl);
                    }}
                    className="about-mobile-slide w-full flex-shrink-0 aspect-[3/4] relative cursor-pointer group active:scale-[0.98] transition-transform"
                    aria-label={`View profile of ${member.name}, ${member.role}`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

                    {/* Profile badge */}
                    <div className="absolute top-3.5 right-3.5 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-strain-green border border-strain-green/30 font-semibold shadow-md">
                        Profile <ArrowUpRight size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stable Height Mobile Name & Designation */}
            <div className="text-center mt-5 min-h-[64px] flex flex-col items-center justify-center">
              <Link
                href={currentMobileMember.profileUrl}
                className="group inline-flex flex-col items-center cursor-pointer transition-opacity duration-300"
              >
                <h3 className="font-sans text-2xl font-bold text-white tracking-tight group-hover:text-strain-green transition-colors">
                  {currentMobileMember.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-strain-green font-semibold mt-1.5">
                  {currentMobileMember.role}
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. NAVIGATION CONTROLS (Prev / Next Arrows & Pagination Dots)     */}
        {/* ================================================================= */}
        <div className="about-team-controls flex items-center justify-center gap-5 mt-6 md:mt-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous team member"
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-[#00a859] hover:border-[#00a859] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer group shadow-lg"
          >
            <ChevronLeft
              size={20}
              className="transition-transform group-hover:-translate-x-0.5"
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 px-2">
            {members.map((member, idx) => (
              <button
                key={member.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${member.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                  activeMobileRealIndex === idx
                    ? 'w-7 bg-[#00a859]'
                    : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next team member"
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-[#00a859] hover:border-[#00a859] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm cursor-pointer group shadow-lg"
          >
            <ChevronRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
