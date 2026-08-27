import React from 'react';
import Workshops from '../Workshops/Workshops';
import Competitions from '../Competitions/Competitions';

interface EventsProps {
  onSelectCard: (item: any) => void;
}

export default function Events({ onSelectCard }: EventsProps) {
  return (
    <section
      id="events"
      className="relative w-full bg-[#08080a] text-white py-24 sm:py-32 lg:py-36 overflow-hidden select-none"
      style={{
        backgroundColor: '#08080a',
      }}
    >
      {/* =========================================================
          LAYER 1: FILM GRAIN / NOISE OVERLAY (feTurbulence)
          ========================================================= */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.035] z-[1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter-events">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter-events)" />
      </svg>

      {/* =========================================================
          LAYER 2: SPARSE BLUEPRINT GRID LINES
          ========================================================= */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* =========================================================
          ATMOSPHERIC LIGHTING & SUBTLE AMBIENT GLOWS
          ========================================================= */}
      <div
        className="pointer-events-none absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full z-[2] opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full z-[2] opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(140, 160, 200, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* =========================================================
          SUBTLE ELECTRICAL / LIGHTNING DISCHARGE LINES
          ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.035] overflow-hidden">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top-right subtle lightning branch */}
          <path
            d="M1200 0 L1180 120 L1210 180 L1160 300 L1190 380 L1140 500"
            stroke="rgba(200, 230, 255, 0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M1210 180 L1260 240 L1240 320"
            stroke="rgba(200, 230, 255, 0.5)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          {/* Bottom-left subtle lightning branch */}
          <path
            d="M100 900 L140 760 L90 680 L160 550 L120 440"
            stroke="rgba(200, 230, 255, 0.8)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =========================================================
          TOP NOTCH DIVIDER (Blending with upper section)
          ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 H20 L30 11 H80 L90 0 H110"
            fill="#08080a"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
          />
          <line x1="45" y1="6" x2="65" y2="6" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
        </svg>
      </div>

      {/* =========================================================
          CORNER HUD ACCENT MARKS
          ========================================================= */}
      <div className="absolute top-8 left-8 z-10 font-mono text-[9px] text-white/30 pointer-events-none">
        ┌ LAT·08.48 // ELEC·ENG
      </div>
      <div className="absolute top-8 right-8 z-10 font-mono text-[9px] text-white/30 pointer-events-none">
        LON·76.95 ┐
      </div>

      {/* =========================================================
          MAIN EDITORIAL CONTAINER
          ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-28 sm:space-y-36 lg:space-y-44">
        {/* SECTION 1: WORKSHOPS */}
        {/*<Workshops onSelectCard={onSelectCard} />*/}

        {/* SECTION 2: COMPETITIONS */}
        <Competitions onSelectCard={onSelectCard} />
      </div>
    </section>
  );
}
