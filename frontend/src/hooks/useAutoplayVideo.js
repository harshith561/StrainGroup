'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook to guarantee reliable video autoplay on mobile browsers (iOS Safari, Android Chrome)
 *
 * Mobile browsers enforce strict policies:
 * 1. Video MUST be muted at the DOM property level (not just React prop).
 * 2. Video MUST have playsinline & webkit-playsinline attributes.
 * 3. Offscreen videos on mobile are paused/suspended by the browser — IntersectionObserver resumes them.
 * 4. Low Power Mode blocks unprompted autoplay — touch/scroll fallback immediately starts playback.
 * 5. Fallback timer prevents permanent invisibility (opacity-0).
 */
export function useAutoplayVideo() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Force muted & inline playback at DOM level (required for iOS Safari & Android Chrome)
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');

    const playVideo = () => {
      if (!video) return;
      video.defaultMuted = true;
      video.muted = true;

      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch(() => {
            // Autoplay blocked by mobile browser (e.g. Low Power Mode).
            // Awaiting user gesture (touch / scroll).
          });
      }
    };

    // If video hasn't loaded source yet, trigger load
    if (video.readyState === 0 && typeof video.load === 'function') {
      try {
        video.load();
      } catch (_) { }
    }

    // Initial play attempt
    playVideo();

    // 2. IntersectionObserver: Autoplay when scrolled into viewport on mobile
    let observer;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(video);
    }

    // 3. User interaction fallback (first touch/scroll unlocks mobile audio/video policy)
    const handleGesture = () => {
      playVideo();
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('touchend', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('click', handleGesture);
    };

    window.addEventListener('touchstart', handleGesture, { passive: true });
    window.addEventListener('touchend', handleGesture, { passive: true });
    window.addEventListener('scroll', handleGesture, { passive: true });
    window.addEventListener('click', handleGesture, { passive: true });

    // 4. Fallback visibility timer so video is never permanently hidden by opacity-0
    const fallbackTimer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1200);

    return () => {
      if (observer && video) {
        try {
          observer.unobserve(video);
        } catch (_) { }
      }
      window.removeEventListener('touchstart', handleGesture);
      window.removeEventListener('touchend', handleGesture);
      window.removeEventListener('scroll', handleGesture);
      window.removeEventListener('click', handleGesture);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return { videoRef, isVideoLoaded, setIsVideoLoaded };
}

export default useAutoplayVideo;

