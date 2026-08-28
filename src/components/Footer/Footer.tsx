import React from 'react';

const IconInstagram = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 11a3 3 0 0 1 6 0v5" />
  </svg>
);

const IconYouTube = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
  </svg>
);

const IconMail = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

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
    <footer id="footer" className="relative min-h-[292px] overflow-hidden bg-[#020304] text-white select-none">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-grain" />
      <div className="pointer-events-none absolute -left-[145px] -bottom-[188px] h-[395px] w-[395px] rounded-full border border-white/[0.10] opacity-70 sm:-left-[105px]">
        <div className="absolute inset-[34px] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[78px] rounded-full border border-dashed border-white/[0.07]" />
        <div className="absolute inset-[118px] rounded-full bg-[radial-gradient(circle_at_65%_34%,rgba(180,194,204,0.16),rgba(35,40,45,0.12)_42%,rgba(0,0,0,0.8)_74%)]" />
      </div>
      <div className="pointer-events-none absolute -right-[30px] top-[70px] h-[155px] w-[155px] rounded-full border border-white/[0.08] opacity-60 sm:right-[5%]">
        <div className="absolute inset-[14px] rounded-full border border-dashed border-white/[0.10]" />
        <div className="absolute inset-[43px] rounded-full border border-white/[0.12]" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 shadow-[0_0_18px_5px_rgba(210,220,230,0.16)]" />
        <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-white/[0.06]" />
        <div className="absolute left-0 top-1/2 w-full border-t border-dashed border-white/[0.06]" />
      </div>

      <div className="relative z-10 border-t border-white/[0.13]">
        <div className="absolute left-1/2 top-0 h-[9px] w-[54px] -translate-x-1/2 border-x border-b border-white/[0.16] [clip-path:polygon(0_0,100%_0,76%_100%,24%_100%)]" />
        <div className="mx-auto max-w-[760px] px-8 pb-5 pt-12 sm:px-12">
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-0">
            {navGroups.map((group) => (
              <div key={group.label}>
                <h2 className="mb-4 flex items-center gap-2 font-mono-tech text-[8px] font-normal tracking-[0.2em] text-white/55">
                  <span className="text-white/25">+</span>{group.label}
                </h2>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                        className="group inline-flex items-center gap-2 font-mono-tech text-[8px] uppercase tracking-[0.1em] text-white/32 transition-colors hover:text-white/75"
                      >
                        <span className="h-px w-[7px] bg-white/25 transition-colors group-hover:bg-white/70" />
                        {link.icon && <span className="text-white/35 group-hover:text-white/70">{link.icon}</span>}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-9 flex flex-col items-center gap-3 border-t border-white/[0.07] pt-5">
            <div className="flex items-center gap-2 font-display text-[17px] tracking-[0.2em] text-white/80">
              <span className="text-[12px] text-white/35">//</span> TESLA <sup className="font-mono-tech text-[7px] tracking-[0.12em] text-white/45">'26</sup>
            </div>
            <p className="font-mono-tech text-[7px] uppercase tracking-[0.12em] text-white/25">Designed and engineered by Tesla</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-3 font-mono-tech text-[7px] uppercase tracking-[0.1em] text-white/25 sm:px-12">
          <span>© 2026 TESLA · All rights reserved</span>
          <span className="text-right">09.5469° N · 76.0057° E</span>
        </div>
      </div>
    </footer>
  );
}
