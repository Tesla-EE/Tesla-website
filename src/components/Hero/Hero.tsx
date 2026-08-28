import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stillVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stillVideo = stillVideoRef.current;
    const context = canvas?.getContext('2d');

    // Autoplay the initial looping video
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
    canvas.height = 731; // Matches the aspect ratio of the extracted frames (768 originally, scaled to 731)

    // Sequence configuration
    const frameCount = 118; // Total extracted frames
    const currentFrame = (index: number) => 
      `/hero-frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    // Preload images
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
  }, []);

  return (
    // 700vh outer wrapper — gives massive amount of scroll room to comfortably play the sequence slowly
    <div ref={heroRef} className="relative h-[700vh]">
      {/* Sticky inner — stays pinned while scrolling through the hero sequence */}
      <section
        id="hero"
        className="sticky top-0 h-screen w-full bg-[#050506] overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-6 sm:px-12 lg:px-16 select-none"
      >
        {/* ── Background Sequence Layer ─────────────────────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
        </div>

        {/* =========================================================
            MAIN HERO CONTENT (Framing the 3D title and coil)
            ========================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
            className="max-w-2xl flex flex-col space-y-4 sm:space-y-6 text-left"
          >
            {/* Subtitle Presenter Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse shadow-[0_0_8px_rgba(203,213,225,0.8)]" />
              <span className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
              </span>
            </div>

            {/* Spacer to frame the background 3D TESLA '26 title rendered in the sequence */}
            <div className="h-32 sm:h-44 lg:h-56 xl:h-64" />

            {/* Date Badge: ┌ 21 , 22 SEP */}
            <div className="inline-flex items-center pt-2">
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
          <div className="ml-auto flex items-center gap-3 rotate-90 origin-bottom-right translate-x-4 sm:translate-x-0 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-400 hover:text-white transition-colors select-none">
            <span className="uppercase">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
