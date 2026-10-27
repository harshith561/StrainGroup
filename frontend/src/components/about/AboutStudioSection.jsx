'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

/* ==========================================================================
   EASY-TO-EDIT SECTION CONFIGURATION
   ✏️ CHANGE ANY TEXT, BULLETS, BUTTONS, OR IMAGES HERE DIRECTLY:
   ========================================================================== */
export const STUDIO_SECTION_DATA = {
  // 1. Top-Left Tag
  tag: 'ABOUT STUDIO',

  // 2. Main Giant Headline (supports regular text or \n for custom line breaks)
  headline: 'Crafting digital products\nwith a unique — vision of\nmaking user experience\nbetter.',

  // 3. Left Bullet Points (shown with square markers)
  bulletPoints: [
    'Art Direction',
    'Capability',
    'Sustainability',
  ],

  // 4. Right Description Paragraphs
  paragraph1:
    "Redox is the first and only creative agency for your real exploration. It's one private place to save everything you can realize about digital beautifully design.",
  paragraph2:
    "As a global creative agency, we understand the importance of staying ahead of the game. That's why we partner with some of the world's best talent to bring fresh ideas",

  // 5. Button Details
  buttonText: 'Explore Services',
  buttonLink: '/services',

  // 6. Zigzag Gallery Images: Alternating heights (short, tall, short, tall...)
  // You can easily change images, add new ones, or toggle their size ('short' or 'tall')
  showGallery: true,
  galleryImages: [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      alt: 'Creative strategy terrace session',
      size: 'short', // Small height
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
      alt: 'Leather sofa workspace with MacBook',
      size: 'tall', // Big height
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
      alt: 'Collaborative team working on laptops',
      size: 'short', // Small height
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
      alt: 'Creative director smiling with coffee cup',
      size: 'tall', // Big height
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
      alt: 'Biophilic studio workspace with indoor plants',
      size: 'short', // Small height
    },
  ],
};

export default function AboutStudioSection({ data = STUDIO_SECTION_DATA }) {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update arrow enabled states based on scroll position
  const checkScrollBounds = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Translate vertical mouse scroll into horizontal gallery slide
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If user scrolls vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const atStart = scrollLeft <= 0 && e.deltaY < 0;
        const atEnd = scrollLeft + clientWidth >= scrollWidth - 2 && e.deltaY > 0;

        // If not at extremes, scroll gallery horizontally
        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollBy({
            left: e.deltaY * 1.5,
            behavior: 'auto',
          });
          checkScrollBounds();
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds);

    checkScrollBounds();

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, []);

  // Arrow button click handler
  const scrollByAmount = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.7;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollStart(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollStart - walk;
    checkScrollBounds();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="about-studio-section" className="about-studio-section">
      <div className="about-studio-container">
        {/* Main Grid: Left Column for Tag | Right Column for Headline & Content */}
        <div className="about-studio-layout-grid">
          {/* Left Column: ABOUT STUDIO Tag */}
          <div className="about-studio-left-col">
            <span className="about-studio-kicker font-sans">
              {data.tag}
            </span>
          </div>

          {/* Right Column: Giant Headline & Sub-content */}
          <div className="about-studio-right-col">
            {/* Giant Headline (preserves explicit line breaks \n) */}
            <h2 className="about-studio-headline font-sans">
              {typeof data.headline === 'string' && data.headline.includes('\n')
                ? data.headline.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < data.headline.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))
                : data.headline}
            </h2>

            {/* Sub-content Row: Bullets on Left | Two Paragraphs & CTA on Right */}
            <div className="about-studio-subcontent-row">
              {/* Left Sub-column: Square Bullet Points */}
              <div className="about-studio-bullets-area font-sans">
                <ul className="studio-bullet-list">
                  {data.bulletPoints.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="square-bullet" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Sub-column: Paragraphs & Button */}
              <div className="about-studio-copy-area font-sans">
                <p className="about-studio-p1">
                  {data.paragraph1}
                </p>
                <p className="about-studio-p2">
                  {data.paragraph2}
                </p>

                {/* Explore Services Button: Green fill by default, White fill + Black text on hover */}
                <div className="about-studio-btn-wrap">
                  <Link
                    href={data.buttonLink}
                    className={`white-pill-btn ${isBtnHovered ? 'hovered-white' : ''}`}
                    onMouseEnter={() => setIsBtnHovered(true)}
                    onMouseLeave={() => setIsBtnHovered(false)}
                  >
                    {data.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Zigzag Gallery Strip with Mouse Scroll & Arrow Controls */}
        {data.showGallery !== false && data.galleryImages && data.galleryImages.length > 0 && (
          <div className="about-studio-gallery-wrapper">
            {/* Scrollable Zigzag Strip (Mouse wheel up/down translates to horizontal scroll) */}
            <div
              ref={scrollContainerRef}
              className={`about-studio-gallery-scroll ${isDragging ? 'is-dragging' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {data.galleryImages.map((img, idx) => {
                // Alternating heights: short, tall, short, tall...
                const isTall = img.size ? img.size === 'tall' : idx % 2 === 1;

                return (
                  <div
                    key={img.id || idx}
                    className={`studio-gallery-card ${isTall ? 'gallery-card-tall' : 'gallery-card-short'}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || `Studio visual ${idx + 1}`}
                      loading="lazy"
                      className="studio-gallery-img"
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows placed UNDER the photo section (Mobile and Tablet only; hidden on laptops) */}
            <div className="about-gallery-bottom-controls">
              <div className="about-gallery-nav-arrows">
                <button
                  type="button"
                  onClick={() => scrollByAmount('left')}
                  disabled={!canScrollLeft}
                  className="gallery-nav-arrow-btn"
                  aria-label="Scroll gallery left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByAmount('right')}
                  disabled={!canScrollRight}
                  className="gallery-nav-arrow-btn"
                  aria-label="Scroll gallery right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Scroll-to-Top Circular Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className="scroll-to-top-circle-btn"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  );
}
