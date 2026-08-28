import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRegister?: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollVideoRef = useRef<HTMLVideoElement>(null);
  const stillVideoRef = useRef<HTMLVideoElement>(null);
  const targetRatioRef = useRef<number>(0);

  useEffect(() => {
    const scrollVideo = scrollVideoRef.current;
    const stillVideo = stillVideoRef.current;

    if (stillVideo) {
      stillVideo.muted = true;
      const playStill = () => {
        stillVideo.play().catch(() => {});
      };
      if (stillVideo.readyState >= 2) {
        playStill();
      } else {
        stillVideo.addEventListener('canplay', playStill, { once: true });
      }
    }

    if (scrollVideo) {
      scrollVideo.muted = true;
      scrollVideo.load();
      const initScrollVideo = () => {
        scrollVideo.pause();
        scrollVideo.currentTime = 0.001;
      };
      if (scrollVideo.readyState >= 1) {
        initScrollVideo();
      } else {
        scrollVideo.addEventListener('loadedmetadata', initScrollVideo, { once: true });
      }
    }

    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const totalScroll = hero.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) {
        targetRatioRef.current = 0;
        return;
      }
      const scrolled = Math.max(0, Math.min(totalScroll, -rect.top));
      targetRatioRef.current = scrolled / totalScroll;
    };

    let currentRatio = 0;
    let rafId: number;

    const renderLoop = () => {
      // Smooth interpolation for fluid scrub
      currentRatio += (targetRatioRef.current - currentRatio) * 0.25;

      if (scrollVideo && scrollVideo.duration && !isNaN(scrollVideo.duration)) {
        const targetTime = currentRatio * scrollVideo.duration;
        const clampedTime = Math.min(Math.max(0, targetTime), Math.max(0, scrollVideo.duration - 0.05));
        if (Math.abs(scrollVideo.currentTime - clampedTime) > 0.02) {
          scrollVideo.currentTime = clampedTime;
        }
      }

      if (stillVideo) {
        // Fade out ambient video within first 20% of scrolling
        const opacity = Math.max(0, 1 - currentRatio * 5);
        stillVideo.style.opacity = opacity.toFixed(3);
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // 200vh outer wrapper — gives the hero scroll room to scrub the video smoothly
    <div ref={heroRef} className="relative h-screen">
      {/* Sticky inner — stays pinned while scrolling through the hero video sequence */}
      <section
        id="hero"
        className="sticky top-0 h-screen w-full bg-[#050506] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-6 sm:px-12 lg:px-16 select-none"
      >
        {/* ── Background Video Layer ─────────────────────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* bg2.mp4 — scrubbed synchronously with scroll position */}
          <video
            ref={scrollVideoRef}
            src="/videos/bg2.mp4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* bg1.mp4 — ambient looping video at top, fades out smoothly on scroll */}
          <video
            ref={stillVideoRef}
            src="/videos/bg1.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-100"
          />

          {/* Subtle vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-[#050506]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>

        {/* =========================================================
            MAIN HERO CONTENT (Framing the 3D video title and coil)
            ========================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex flex-col space-y-4 sm:space-y-6 text-left"
          >
            {/* Subtitle Presenter Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
              </span>
            </div>

            {/* Spacer to frame the background 3D TESLA '26 title rendered in the video */}
            <div className="h-32 sm:h-44 lg:h-56 xl:h-64" />

            {/* Date Badge: ┌ 21 , 22 SEP */}
            <div className="inline-flex items-center pt-2">
              <div className="flex items-center gap-3 font-mono-tech text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-white">
                <span className="text-cyan-400 font-light text-2xl sm:text-3xl lg:text-4xl -mr-1">┌</span>
                <span>21 , 22 SEP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM FOOTER / SCROLL INDICATOR
            ========================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-end justify-between pt-2">
          {/* Technical Calibration Footnote */}
          <div className="hidden sm:flex items-center gap-2 font-mono-tech text-[10px] text-slate-400 tracking-widest">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SYS // HIGH VOLTAGE DISCHARGE ACTIVE
          </div>

          {/* Scroll-to-Explore Vertical Text */}
          <div className="ml-auto flex items-center gap-3 rotate-90 origin-bottom-right translate-x-4 sm:translate-x-0 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-400 hover:text-white transition-colors select-none">
            <span className="uppercase">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
