import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRegister?: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#050506] bg-grain overflow-hidden flex flex-col justify-between pt-6 sm:pt-8 pb-8 px-6 sm:px-12 lg:px-16"
      style={{
        backgroundImage: "url('/images/herobg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* =========================================================
          MAIN HERO CONTENT (Immediately Below Navbar)
          ========================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Festival Branding, Title, and Date */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-7 text-left"
        >
          {/* Subtitle Presenter Tagline */}
          <div className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase font-medium">
            DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
          </div>

          {/* Spacer to frame the background TESLA '26 title */}
          <div className="h-28 sm:h-40 lg:h-52 xl:h-60" />

          {/* Date Badge: ┌ 21 , 22 SEP */}
          <div className="inline-flex items-center pt-1">
            <div className="flex items-center gap-3 font-mono-tech text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-white">
              <span className="text-slate-400 font-light text-2xl sm:text-3xl lg:text-4xl -mr-1">┌</span>
              <span>21 , 22 SEP</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Lamp / Tesla Coil Image from public/images/lamp.png */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center lg:justify-center items-center relative"
        >
          <img 
            src="/images/lamp.png" 
            alt="TESLA '26 Apparatus" 
            className="w-auto max-h-[62vh] sm:max-h-[72vh] lg:max-h-[80vh] xl:max-h-[85vh] max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[520px] object-contain filter contrast-125 brightness-110 drop-shadow-[0_0_50px_rgba(255,255,255,0.25)] select-none pointer-events-none lg:translate-y-2"
          />
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM FOOTER / SCROLL INDICATOR
          ========================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex items-end justify-between pt-2">
        
        {/* Technical Calibration Footnote (Hidden on mobile) */}
        <div className="hidden sm:block font-mono-tech text-[9px] text-slate-600 tracking-widest">
          SYS // HIGH VOLTAGE DISCHARGE ACTIVE
        </div>

        {/* Scroll-to-Explore Vertical Text */}
        <div className="ml-auto flex items-center gap-3 rotate-90 origin-bottom-right translate-x-4 sm:translate-x-0 font-mono-tech text-[10px] sm:text-[11px] tracking-[0.35em] text-slate-400 hover:text-white transition-colors select-none">
          <span className="uppercase">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
