import React from 'react';

/* ─────────────────────────────────────────────
   Small inline SVG icons (no external deps)
───────────────────────────────────────────── */
const IconInstagram = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const IconLinkedIn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 11a3 3 0 0 1 6 0v5" />
  </svg>
);
const IconYouTube = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
  </svg>
);
const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);
const IconZap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const navGroups = [
  {
    label: 'EXPLORE',
    links: [
      { text: 'Home', href: '#hero' },
      { text: 'Events', href: '#events' },
      { text: 'Leaderboard', href: '#' },
    ],
  },
  {
    label: 'CONNECT',
    links: [
      { text: 'Instagram', href: 'https://instagram.com', icon: <IconInstagram />, external: true },
      { text: 'LinkedIn', href: 'https://linkedin.com', icon: <IconLinkedIn />, external: true },
      { text: 'YouTube', href: 'https://youtube.com', icon: <IconYouTube />, external: true },
      { text: 'Email', href: 'mailto:tesla@college.edu', icon: <IconMail /> },
    ],
  },
  {
    label: 'RESOURCES',
    links: [
      { text: 'Brochure', href: '#' },
      { text: 'Rules', href: '#' },
      { text: 'Schedule', href: '#' },
    ],
  },
  {
    label: 'JOIN US',
    links: [
      { text: 'Register', href: '#' },
      { text: 'Volunteer', href: '#' },
      { text: 'Sponsor', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden select-none"
      style={{ backgroundColor: '#030304' }}
    >
      {/* =========================================================
          BACKGROUND TEXTURE — subtle planet / cosmic rings
          ========================================================= */}
      {/* Film grain */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03] z-[1]" xmlns="http://www.w3.org/2000/svg">
        <filter id="footer-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#footer-noise)" />
      </svg>

      {/* Large off-canvas planet/radar ring — bottom left */}
      <div
        className="pointer-events-none absolute z-[1] opacity-[0.06]"
        style={{ bottom: '-40%', left: '-12%', width: '520px', height: '520px' }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 5" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 5" />
        </svg>
      </div>

      {/* Faint cosmic nebula glow — bottom right */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{
          bottom: 0, right: 0,
          width: '420px', height: '300px',
          background: 'radial-gradient(ellipse at 90% 100%, rgba(74,144,226,0.06) 0%, transparent 60%)',
          filter: 'blur(30px)',
        }}
      />

      {/* =========================================================
          THIN TOP BORDER RULE
          ========================================================= */}
      <div className="relative z-10 w-full flex items-center">
        <div className="flex-1 h-[1px] bg-white/[0.10]" />
        {/* Center notch on top border */}
        <div className="px-4">
          <svg width="48" height="6" viewBox="0 0 48 6" fill="none">
            <path d="M0 0 H8 L14 5 H34 L40 0 H48" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="rgba(3,3,4,1)" />
          </svg>
        </div>
        <div className="flex-1 h-[1px] bg-white/[0.10]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
          ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 pb-8">

        {/* ---- TOP SECTION: Branding + Nav Columns ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/[0.07]">

          {/* BRANDING BLOCK */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* TESLA wordmark */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 flex items-center justify-center border border-white/20 text-white/80"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <IconZap />
              </div>
              <span
                className="font-display text-white tracking-[0.18em] text-[22px] font-normal leading-none"
              >
                TESLA <sup className="font-mono-tech text-[10px] tracking-widest text-white/50 font-normal">'26</sup>
              </span>
            </div>

            {/* Tagline */}
            <p className="font-mono-tech text-[10px] sm:text-[11px] leading-relaxed tracking-[0.08em] text-white/35 max-w-[280px] uppercase">
              Annual Technical Festival · Dept. of Electrical Engineering
            </p>

            {/* Thin horizontal divider */}
            <div className="w-12 h-[1px] bg-white/15" />

            {/* Location metadata */}
            <div className="font-mono-tech text-[9px] tracking-[0.18em] text-white/25 uppercase flex flex-col gap-1">
              <span>Dept. of Electrical Engineering</span>
              <span>College of Engineering, Kerala</span>
            </div>
          </div>

          {/* NAV COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {navGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                {/* Group heading */}
                <div className="flex items-center gap-1.5">
                  <span className="text-white/20 text-[9px] font-mono-tech">—</span>
                  <h4 className="font-mono-tech text-[10px] font-semibold tracking-[0.22em] text-white/60 uppercase">
                    {group.label}
                  </h4>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                        className="group inline-flex items-center gap-2 font-mono-tech text-[10px] tracking-[0.12em] text-white/30 uppercase transition-colors duration-200 hover:text-white/75"
                      >
                        {link.icon && (
                          <span className="text-white/25 group-hover:text-white/60 transition-colors">
                            {link.icon}
                          </span>
                        )}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---- BOTTOM BAR: Copyright + Designer + Coordinates ---- */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Copyright */}
          <span className="font-mono-tech text-[9px] tracking-[0.18em] text-white/20 uppercase">
            © 2026 TESLA · All rights reserved
          </span>

          {/* Technical coordinate metadata — bottom right */}
          <div className="flex items-center gap-3 font-mono-tech text-[9px] tracking-[0.15em] text-white/20 uppercase">
            <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
            <span>09.5469° N</span>
            <span className="text-white/12">·</span>
            <span>76.0057° E</span>
            <span className="w-1 h-1 rounded-full bg-white/20 inline-block" />
          </div>
        </div>

      </div>

      {/* Bottom pixel line */}
      <div className="relative z-10 w-full h-[1px] bg-white/[0.05]" />
    </footer>
  );
}
