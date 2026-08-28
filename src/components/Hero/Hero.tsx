import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
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
    // If we are on mobile, abort all the heavy canvas/video and GSAP loading
    if (isMobile) return;

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
    canvas.width = 1280;
    canvas.height = 731; // Matches the aspect ratio of the extracted frames

    // Sequence configuration
    const frameCount = 118; // Total extracted frames
    const currentFrame = (index: number) => 
      `/hero-frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    // Preload images for desktop scrub
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // Draw the first frame once it loads
    images[0].onload = () => {
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    };

    const ctx = gsap.context(() => {
      // 1. Fade out the still video smoothly in the first part of the scroll
      if (stillVideo) {
        gsap.to(stillVideo, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=800', // fade out over the first 800px of scroll
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
          scrub: 1.5, // buttery smooth GSAP interpolation
        },
        onUpdate: () => {
          // Render current frame to canvas
          if (images[airpods.frame]) {
            requestAnimationFrame(() => {
              context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
            });
          }
        }
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  return (
    // On mobile, just 100vh height. On desktop, 700vh for the scrub room.
    <div ref={heroRef} className={`relative ${isMobile ? 'h-screen' : 'h-[700vh]'}`}>
      {/* Sticky inner — stays pinned while scrolling through the hero sequence */}
      <section
        id="hero"
        className="sticky top-0 h-screen w-full bg-[#050506] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-6 sm:px-12 lg:px-16 select-none"
      >
        {/* ── Background Sequence Layer ─────────────────────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {isMobile ? (
            /* STATIC MOBILE BACKGROUND */
            <img 
              src="/images/Hero_mob.png" 
              alt="TESLA 26 Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* DYNAMIC DESKTOP SEQUENCE */
            <>
              {/* Main scrub canvas sequence — synchronized with scroll position */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Initial ambient video — looping at top, fades out smoothly on scroll */}
              <video
                ref={stillVideoRef}
                src="/videos/Bg1_A.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-100"
              />
            </>
          )}
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
              <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
              </span>
            </div>

            {/* Date Badge: ┌ 21 , 22 SEP pushed to bottom via mt-auto and translate-y */}
            <div className="mt-auto inline-flex items-center translate-y-3">
              <div className="flex items-center gap-3 font-mono-tech text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-white">
                <span className="text-slate-300 font-light text-2xl sm:text-3xl lg:text-4xl -mr-1">┌</span>
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
          <div className="ml-auto flex items-center gap-3 rotate-90 origin-bottom-right translate-x-2 sm:translate-x-0 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-400 hover:text-white transition-colors select-none">
            <span className="uppercase">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
