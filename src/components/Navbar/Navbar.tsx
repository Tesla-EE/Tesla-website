import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
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
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'translate-y-0 opacity-100 py-3.5 border-b shadow-2xl shadow-black/80' 
          : '-translate-y-full opacity-0 pointer-events-none py-3.5'
      }`}
      style={{
        backgroundColor: 'rgba(5, 5, 6, 0.90)',
        backdropFilter: 'blur(16px)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div 
            className="w-7 h-7 rounded flex items-center justify-center transition-colors"
            style={{ border: '1px solid var(--border-default)', background: 'rgba(255,255,255,0.03)' }}
          >
            <Zap className="w-3.5 h-3.5" style={{ color: 'var(--accent-warm)' }} />
          </div>
          <span 
            className="font-display text-2xl font-bold tracking-widest transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            TESLA <span className="text-xs font-mono-tech align-top text-slate-400">‘26</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.num} 
              href={item.href}
              className="flex flex-col items-center group text-xs font-mono-tech tracking-widest transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span className="text-[10px] transition-colors" style={{ color: 'var(--text-muted)' }}>
                {item.num}
              </span>
              <span className="font-semibold group-hover:text-white transition-colors">{item.name}</span>
            </a>
          ))}

          <button 
            onClick={onOpenRegister}
            className="px-4 py-2 text-xs font-mono-tech tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
            style={{
              border: '1px solid var(--border-strong)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text-primary)',
            }}
          >
            JOIN EVENT
          </button>
        </nav>

        {/* Mobile Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors text-slate-300 hover:text-white"
          style={{ border: '1px solid var(--border-default)' }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-x-0 top-[56px] p-6 shadow-2xl"
          style={{
            background: 'rgba(5,5,6,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.num} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg transition-colors border border-white/5"
              >
                <span className="font-tech text-base tracking-wider text-white">
                  {item.name}
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  [{item.num}]
                </span>
              </a>
            ))}
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
              className="w-full py-3 text-sm font-mono-tech tracking-widest font-bold rounded cursor-pointer bg-white text-black mt-2"
            >
              REGISTER FOR TESLA '26
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
