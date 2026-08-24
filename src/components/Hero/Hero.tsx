import React, { useState } from 'react';
import TeslaCoilCanvas from './TeslaCoilCanvas';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenRegister?: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { num: '01', name: 'HOME', href: '#hero' },
    { num: '02', name: 'EVENTS', href: '#highlights' },
    { num: '03', name: 'LEADERBOARD', href: '#events' },
    { num: '04', name: 'TEAM', href: '#merchandise' },
    { num: '05', name: 'CONTACT', href: '#footer' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#050506] bg-grain bg-tech-grid overflow-hidden flex flex-col justify-between"
    >
      {/* =========================================================
          BACKGROUND TECHNICAL / CELESTIAL SCOPE DIAGRAMS
          ========================================================= */}
      
      {/* Giant Technical Celestial Circle on Left */}
      <div className="absolute -left-20 sm:-left-32 top-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] lg:w-[900px] lg:h-[900px] pointer-events-none opacity-[0.14] select-none">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
          {/* Concentric rings */}
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" className="text-white" />
          <circle cx="400" cy="400" r="320" stroke="currentColor" strokeWidth="0.75" className="text-white" />
          <circle cx="400" cy="400" r="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" className="text-white" />
          <circle cx="400" cy="400" r="160" stroke="currentColor" strokeWidth="0.75" className="text-white" />
          <circle cx="400" cy="400" r="80" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          
          {/* Radial degree axes */}
          <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="0.75" className="text-white" />
          <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="0.75" className="text-white" />
          <line x1="131" y1="131" x2="669" y2="669" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-white" />
          <line x1="669" y1="131" x2="131" y2="669" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-white" />

          {/* Coordinate tick marks around perimeter */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 400 + Math.cos(angle) * 370;
            const y1 = 400 + Math.sin(angle) * 370;
            const x2 = 400 + Math.cos(angle) * 380;
            const y2 = 400 + Math.sin(angle) * 380;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-white" />;
          })}
        </svg>
      </div>

      {/* Axis Reticle Crosshair Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.03] pointer-events-none" />
      <div className="absolute left-[38%] top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none hidden lg:block" />

      {/* Subtle Dark Vignette Edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050506]/30 to-[#050506]/90 pointer-events-none" />

      {/* =========================================================
          TOP NAVIGATION BAR (Matches screenshot layout)
          ========================================================= */}
      <header className="relative z-30 w-full pt-8 px-6 sm:px-12 lg:px-16 flex items-start justify-between">
        
        {/* Top-Left Branding */}
        <a href="#hero" className="inline-block group">
          <span className="font-display text-3xl sm:text-4xl tracking-widest text-white/90 group-hover:text-white transition-colors">
            TESLA <span className="font-mono-tech text-base sm:text-lg text-slate-400 align-top">‘26</span>
          </span>
        </a>

        {/* Top-Right Numbered Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex flex-col items-center group text-xs font-mono-tech tracking-[0.2em] transition-colors"
            >
              <span className="text-[10px] text-slate-500 group-hover:text-white transition-colors mb-0.5">
                {item.num}
              </span>
              <span className="text-slate-300 font-semibold group-hover:text-white transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[80px] z-40 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded border border-white/5 hover:border-white/20 hover:bg-white/5 transition-colors"
              >
                <span className="font-tech text-base tracking-wider text-white">
                  {item.name}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  [{item.num}]
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          MAIN HERO CONTENT (Asymmetric 2-Column Desktop Grid)
          ========================================================= */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Festival Branding, Title, and Date */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left"
        >
          {/* Subtitle Presenter Tagline */}
          <div className="font-mono-tech text-[11px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase font-medium">
            DEPARTMENT OF ELECTRICAL ENGINEERING PRESENTS
          </div>

          {/* Massive Display Title */}
          <div className="relative select-none">
            <h1 className="font-display text-8xl sm:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-[0.82] font-normal tracking-tight text-gradient-stone drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              TESLA <span className="font-display tracking-tight">‘26</span>
            </h1>
          </div>

          {/* Date Badge: ┌ 21 , 22 SEP */}
          <div className="inline-flex items-center pt-2">
            <div className="flex items-center gap-3 font-mono-tech text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-white">
              <span className="text-slate-400 font-light text-2xl sm:text-3xl lg:text-4xl -mr-1">┌</span>
              <span>21 , 22 SEP</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Voltage Tesla Coil Apparatus with Lightning */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center"
        >
          <TeslaCoilCanvas />
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM FOOTER / SCROLL INDICATOR
          ========================================================= */}
      <div className="relative z-20 w-full pb-8 px-6 sm:px-12 lg:px-16 flex items-end justify-between">
        
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
