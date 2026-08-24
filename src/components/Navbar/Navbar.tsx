import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRegister?: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { num: '01', name: 'HOME', href: '#hero' },
    { num: '02', name: 'EVENTS', href: '#highlights' },
    { num: '03', name: 'LEADERBOARD', href: '#events' },
    { num: '04', name: 'TEAM', href: '#merchandise' },
    { num: '05', name: 'CONTACT', href: '#footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) {
    return null;
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-3.5 bg-[#050506]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80 transition-all duration-300 animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">

        {/* Top-Left Branding */}
        <a href="#hero" className="inline-block group">
          <span className="font-display text-2xl sm:text-3xl tracking-widest text-white/95 group-hover:text-white transition-colors">
            TESLA <span className="font-mono-tech text-xs sm:text-sm text-slate-400 align-top">‘26</span>
          </span>
        </a>

        {/* Top-Right Numbered Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex flex-col items-center group text-xs font-mono-tech tracking-[0.2em] transition-colors"
            >
              <span className="text-[10px] text-slate-500 group-hover:text-white transition-colors">
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
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] z-40 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
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
    </header>
  );
}
