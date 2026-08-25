import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MerchandiseProps {
  onOpenBuy: () => void;
}

export default function Merchandise({ onOpenBuy }: MerchandiseProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on shirts
  const shirtsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="merchandise"
      ref={sectionRef}
      className="relative w-full overflow-hidden select-none"
      style={{
        backgroundColor: '#050507',
        // tshirtbg.png as full-cover background
        backgroundImage: "url('/textures/tshirtbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100svh',
      }}
    >
      {/* =========================================================
          DARK OVERLAY to match screenshot depth
          ========================================================= */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none z-[1]" />

      {/* HUD top-center notch echo (matches bg texture notch) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <svg width="80" height="10" viewBox="0 0 80 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 H14 L22 9 H58 L66 0 H80" fill="black" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
        </svg>
      </div>

      {/* Corner HUD marks */}
      <div className="absolute top-4 right-5 z-10 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M14 0 H8 V6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="absolute top-4 left-5 z-10 pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M0 0 H6 V6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}
      <div className="relative z-10 flex flex-col items-center w-full h-full">

        {/* ---- HEADING ---- */}
        <div className="pt-10 sm:pt-12 md:pt-14 text-center px-4">
          <h2
            className="font-brother-hoops text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            style={{
              /* Clamp from mobile → desktop, capping at the spec'd 113px */
              fontSize: 'clamp(2.4rem, 10vw, 113px)',
              transform: 'rotate(-2deg)',
            }}
          >
            GRAB YOUR TEES!
          </h2>
          {/* Triple underline brush strokes */}
          <div className="flex flex-col items-center mt-1 gap-[2px] mx-auto" style={{ transform: 'rotate(-1deg)' }}>
            <div className="h-[3px] rounded-full bg-white/90" style={{ width: 'clamp(100px, 22vw, 260px)' }} />
            <div className="h-[2px] rounded-full bg-white/45" style={{ width: 'clamp(70px,  16vw, 180px)' }} />
          </div>
        </div>

        {/* ---- T-SHIRTS + PRICE ANNOTATIONS ---- */}
        <motion.div
          style={{ y: shirtsY }}
          className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-4 mt-6 sm:mt-8"
        >
          {/* The single combined T shirt PNG: both shirts in one image */}
          <div className="relative w-full">
            <img
              src="/images/T shirt.png"
              alt="TESLA '26 Official T-Shirts — Front and Back"
              className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              style={{ maxHeight: '75vh' }}
            />

            {/* Price annotation — LEFT (399/-)
                Positioned over the left shirt area, bottom-left */}
            <div
              className="absolute pointer-events-none"
              style={{ left: '4%', bottom: '12%' }}
            >
              {/* Curved arrow SVG */}
              <svg
                className="absolute text-white/70"
                style={{ top: '-24px', right: '-30px', width: '44px', transform: 'scaleX(-1) rotate(-10deg)' }}
                viewBox="0 0 60 40"
                fill="none"
              >
                <path d="M5 5 C20 5, 50 20, 55 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M55 38 L48 30 M55 38 L46 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span
                className="text-white/90"
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.8rem)',
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                }}
              >
                399/-
              </span>
            </div>

            {/* Price annotation — RIGHT (349/-)
                Positioned over the right shirt area, bottom-right */}
            <div
              className="absolute pointer-events-none"
              style={{ right: '4%', bottom: '12%' }}
            >
              {/* Curved arrow SVG */}
              <svg
                className="absolute text-white/70"
                style={{ top: '-24px', left: '-32px', width: '44px', transform: 'rotate(-10deg)' }}
                viewBox="0 0 60 40"
                fill="none"
              >
                <path d="M5 5 C20 5, 50 20, 55 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M55 38 L48 30 M55 38 L46 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span
                className="text-white/90"
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.8rem)',
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                }}
              >
                349/-
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── CTA BUTTON ── */}
        <div className="relative z-10 flex justify-center pb-16 pt-10">
          <motion.button
            onClick={onOpenBuy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="group relative font-tech font-bold uppercase text-white cursor-pointer"
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.9rem)',
              border: '1px solid rgba(255,255,255,0.72)',
              background: 'rgba(0,0,0,0.85)',
              padding: 'clamp(10px, 1.5vw, 15px) clamp(28px, 4vw, 56px)',
              letterSpacing: '0.2em',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              boxShadow: '0 0 32px rgba(0,0,0,0.9)',
            }}
          >
            <span className="absolute top-0 left-0 w-[6px] h-[6px] border-t border-l border-white/80" />
            <span className="absolute top-0 right-0 w-[6px] h-[6px] border-t border-r border-white/80" />
            <span className="absolute bottom-0 left-0 w-[6px] h-[6px] border-b border-l border-white/80" />
            <span className="absolute bottom-0 right-0 w-[6px] h-[6px] border-b border-r border-white/80" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="relative z-10">GET YOURS NOW!</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
