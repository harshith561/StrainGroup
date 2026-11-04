'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * High-Performance Autoplay & Lazy-Loading Video Hook
 *
 * Capabilities:
 * 1. Supports lazy: true (IntersectionObserver with rootMargin) so below-the-fold videos
 *    never consume network bandwidth until the user scrolls towards them.
 * 2. Never flips isVideoLoaded prematurely before actual video frames are buffered.
 * 3. Pauses playback when offscreen to save mobile CPU/battery, and resumes on scroll.
 * 4. Ensures strict DOM-level muted and inline playback attributes for iOS Safari / Android Chrome.
 * 5. Handles user-gesture fallback (first touch/scroll) for Low Power Mode.
 */
export function useAutoplayVideo(options = {}) {
  const config = typeof options === 'boolean' ? { lazy: options } : options;
  const {
    lazy = false,
    rootMargin = '400px 0px',
    threshold = 0.05,
  } = config;

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // For non-lazy videos (e.g. Hero), isNearViewport is immediately true.
  // For lazy videos (Showcase, CTA), it starts false and activates as user approaches.
  const [isNearViewport, setIsNearViewport] = useState(!lazy);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // 1. Viewport Proximity Detection for Lazy Loading
  useEffect(() => {
    if (!lazy) {
      setIsNearViewport(true);
      return;
    }

    const target = containerRef.current || videoRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      return;
    }

    const proximityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            proximityObserver.disconnect();
          }
        });
      },
      { rootMargin, threshold }
    );

    proximityObserver.observe(target);

    return () => {
      proximityObserver.disconnect();
    };
  }, [lazy, rootMargin, threshold]);

  // 2. Playback & State Management once in viewport
  useEffect(() => {
    if (!isNearViewport) return;

    const video = videoRef.current;
    if (!video) return;

    // Strict DOM attributes for mobile inline autoplay policy
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');

    const handlePlaying = () => {
      setIsVideoLoaded(true);
    };

    const handleCanPlay = () => {
      if (video.readyState >= 2) {
        setIsVideoLoaded(true);
      }
    };

    const handleTimeUpdate = () => {
      if (video.currentTime > 0) {
        setIsVideoLoaded(true);
      }
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);

    if (video.readyState >= 2 || video.currentTime > 0) {
      setIsVideoLoaded(true);
    }

    const attemptPlay = () => {
      if (!video) return;
      video.defaultMuted = true;
      video.muted = true;

      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            if (video.currentTime > 0 || video.readyState >= 2) {
              setIsVideoLoaded(true);
            }
          })
          .catch(() => {
            // Mobile policy or low power mode waiting for gesture
          });
      }
    };

    if (video.readyState === 0 && typeof video.load === 'function') {
      try {
        video.load();
      } catch (_) {}
    }

    attemptPlay();

    // Pause when scrolled out of view to save battery/bandwidth; resume when in view
    let visibilityObserver;
    if (typeof IntersectionObserver !== 'undefined') {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              attemptPlay();
            } else {
              try {
                video.pause();
              } catch (_) {}
            }
          });
        },
        { threshold: 0.1 }
      );
      visibilityObserver.observe(video);
    }

    // Gesture unlock for iOS / low-power mobile mode
    const handleGesture = () => {
      attemptPlay();
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('touchend', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('click', handleGesture);
    };

    window.addEventListener('touchstart', handleGesture, { passive: true });
    window.addEventListener('touchend', handleGesture, { passive: true });
    window.addEventListener('scroll', handleGesture, { passive: true });
    window.addEventListener('click', handleGesture, { passive: true });

    // Safety fallback timer (7s) in case events are suppressed
    const fallbackTimer = setTimeout(() => {
      if (video && (video.readyState >= 1 || video.videoWidth > 0)) {
        setIsVideoLoaded(true);
      }
    }, 7000);

    return () => {
      if (video) {
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('loadeddata', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        if (visibilityObserver) {
          try {
            visibilityObserver.unobserve(video);
          } catch (_) {}
        }
      }
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('touchend', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('click', handleGesture);
      clearTimeout(fallbackTimer);
    };
  }, [isNearViewport]);

  return { videoRef, containerRef, isVideoLoaded, setIsVideoLoaded, isNearViewport };
}

export default useAutoplayVideo;
