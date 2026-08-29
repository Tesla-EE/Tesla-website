import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRegister?: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar appears only after scrolling down past the initial Hero threshold
      const threshold = window.innerHeight * 0.5;
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
        setMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { num: '01', name: 'HOME', href: '#hero' },
    { num: '02', name: 'ABOUT', href: '#about' },
    { num: '03', name: 'THROUGH THE YEARS', href: '#highlights' },
    { num: '04', name: 'COMPETITIONS', href: '#events' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-5 bg-[#050506]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80 transition-all duration-500 ease-out ${
        visible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 flex items-center justify-between">

        {/* Top-Left Branding */}
        <a href="#hero" className="inline-block group">
          <img
            src="/images/Logo.png"
            alt="TESLA '26"
            className="h-10 sm:h-11 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Top-Right Numbered Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center justify-end space-x-7 lg:space-x-12 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="flex flex-col items-center group text-xs font-mono-tech tracking-[0.2em] transition-colors"
            >
              <span className="text-xs text-slate-500 group-hover:text-white transition-colors">
                {item.num}
              </span>
              <span className="text-sm text-slate-300 font-semibold group-hover:text-white transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-3 rounded text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] z-40 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-fadeIn">
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
