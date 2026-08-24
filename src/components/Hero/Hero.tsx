import React, { useState } from 'react';
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
          TOP NAVIGATION BAR (Directly inside Hero - Zero Upper Void)
          ========================================================= */}
      <header className="relative z-30 w-full max-w-7xl mx-auto flex items-start justify-between pb-4">
        
        {/* Top-Left Branding */}
        <a href="#hero" className="inline-block group">
          <span className="font-display text-3xl sm:text-4xl tracking-widest text-white/95 group-hover:text-white transition-colors">
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
        <div className="md:hidden fixed inset-x-0 top-[70px] z-40 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
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
