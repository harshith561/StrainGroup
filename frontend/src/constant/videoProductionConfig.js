/**
 * Centralized Video Assets Configuration for Video Production Page
 */

export const VIDEO_PRODUCTION_ASSETS = {
  // 1. Hero Section 3D Video Background
  heroVideo: {
    src: '/videos/about-hero-bg.mp4',
    fallbackSrc: '/videos/contact-hero.mp4',
    poster: '/images/ecosystem/synergy-camera-cinematography.jpg',
    label: 'STRAINS CINEMATICS // 4K 60FPS DCI',
  },

  // 2. Split Showcase Commercial Reel Video
  showcaseVideo: {
    src: '/videos/rells.mp4',
    fallbackSrc: '/videos/about-hero-bg.mp4',
    poster: '/images/ecosystem/synergy-camera-cinematography.jpg',
    title: 'Strains Commercial Reel',
    codecLabel: 'ProRes 422 HQ',
  },

  // 3. Bottom CTA Section Full-Width Background Video
  ctaVideo: {
    src: '/videos/videgraphy_contact.mp4', // <-- REPLACE with your CTA background video file path
    fallbackSrc: '/videos/contact-hero.mp4',
    poster: '/images/ecosystem/synergy-camera-cinematography.jpg',
  },
};
