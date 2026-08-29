import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onProgress?: (progress: number) => void;
}

export default function Hero({ onProgress }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stillVideoRef = useRef<HTMLVideoElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stillVideo = stillVideoRef.current;
    const context = canvas?.getContext('2d');

    // Autoplay the initial looping video for desktop
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

    if (!canvas || !context) return;

    // Canvas setup for crisp rendering
    canvas.width = isMobile ? 720 : 1280;
    canvas.height = isMobile ? 1280 : 731; // Matches the aspect ratio of the extracted frames

    // Sequence configuration
    const frameCount = isMobile ? 54 : 118; // Total extracted frames
    const currentFrame = (index: number) => 
      isMobile
        ? `/hero-mob-frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`
        : `/hero-frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    let isCancelled = false;
    let loadedCount = 0;
    const totalToLoad = frameCount + 1; // +1 for the video

    const updateProgress = () => {
      if (isCancelled) return;
      loadedCount++;
      if (onProgress) {
        onProgress((loadedCount / totalToLoad) * 100);
      }
    };

    // Track video loading
    if (stillVideo) {
      if (stillVideo.readyState >= 3) {
        updateProgress();
      } else {
        stillVideo.addEventListener('canplay', updateProgress, { once: true });
        stillVideo.addEventListener('error', updateProgress, { once: true });
      }
    } else {
      updateProgress();
    }

    // Load all frames and track progress
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onload = () => {
        if (isCancelled) return;
        if (i === 0) {
          // Draw the first frame once it loads
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        updateProgress();
      };
      img.onerror = () => {
        if (isCancelled) return;
        updateProgress();
      };
      img.src = currentFrame(i);
      images.push(img);
    }

    const ctx = gsap.context(() => {
      // 1. Fade out the still video smoothly in the first part of the scroll
      if (stillVideo) {
        gsap.to(stillVideo, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: isMobile ? '+=400' : '+=800', // fade out over the first part of scroll
            scrub: true,
          }
        });
      }

      // 2. Scrub the image sequence using GSAP's optimized ScrollTrigger with 1.5s smoothing
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: isMobile ? 1 : 1.5, // slightly faster scrub response on mobile
        },
        onUpdate: () => {
          // Render current frame to canvas if it has finished loading
          const currentImg = images[airpods.frame];
          if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
            requestAnimationFrame(() => {
              context.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
            });
          }
        }
      });
    }, heroRef);

    return () => {
      isCancelled = true;
      ctx.revert();
    };
  }, [isMobile]);

  return (
    // On mobile, reduce scroll range significantly so the sequence finishes faster.
    <div ref={heroRef} className={`relative ${isMobile ? 'h-[200vh]' : 'h-[700vh]'}`}>
      {/* Sticky inner — stays pinned while scrolling through the hero sequence */}
      <section
        id="hero"
        className="sticky top-0 h-screen w-full bg-[#050506] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-6 sm:px-12 lg:px-16"
      >
        {/* ── Background Sequence Layer ─────────────────────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Main scrub canvas sequence — synchronized with scroll position */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-x-0 ${isMobile ? 'top-[72px] bottom-0 w-full h-[calc(100%-72px)]' : 'inset-0 w-full h-full'} object-cover`}
          />

          {/* Initial ambient video — looping at top, fades out smoothly on scroll */}
          <video
            ref={stillVideoRef}
            src={isMobile ? "/videos/bg1mob.mp4" : "/videos/Bg1_A.mp4"}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className={`absolute inset-x-0 ${isMobile ? 'top-[72px] bottom-0 w-full h-[calc(100%-72px)]' : 'inset-0 w-full h-full'} object-cover transition-opacity duration-100`}
          />
        </div>

        {/* =========================================================
            MAIN HERO CONTENT (Framing the 3D title and coil)
            ========================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between pt-1 sm:pt-16 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="flex-1 flex flex-col w-full text-left"
          >
            {/* Subtitle Presenter Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse shadow-[0_0_8px_rgba(203,213,225,0.8)]" />
              <span className="font-tacticsans text-[11px] sm:text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
              </span>
            </div>

            {/* Date badge: minimal technical label with subtle monochrome highlight */}
            <div className="mt-auto inline-flex items-center translate-y-3">
              <div className="relative border border-white/10 bg-white/[0.015] px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] before:absolute before:inset-[1px] before:border before:border-white/5 before:content-['']">
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-transparent" />
                <span className="relative font-tacticsans text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.22em] text-white uppercase">
                  25, 26 SEP
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM FOOTER / SCROLL INDICATOR
            ========================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-end justify-between pt-2">
          {/* Technical Calibration Footnote */}

          {/* Scroll-to-Explore Vertical Text */}
          <div className="ml-auto flex items-center gap-3 rotate-90 origin-bottom-right translate-x-2 sm:translate-x-0 font-tacticsans text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-400 hover:text-white transition-colors">
            <span className="uppercase">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
