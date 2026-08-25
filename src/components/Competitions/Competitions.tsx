import React from 'react';
import { competitionsData, CompetitionItem } from '../../data/competitions';
import EventCard from '../common/EventCard';
import { motion } from 'framer-motion';

interface CompetitionsProps {
  onSelectCard: (item: CompetitionItem) => void;
}

export default function Competitions({ onSelectCard }: CompetitionsProps) {
  return (
    <div className="relative">
      {/* =========================================================
          SECTION HEADER: COMPETITIONS
          ========================================================= */}
      <div className="relative mb-10 sm:mb-14">
        {/* Ghost Watermark Text */}
        <div
          aria-hidden="true"
          className="absolute -top-3 sm:-top-5 -left-2 sm:-left-3 pointer-events-none select-none opacity-[0.045] z-0"
          style={{
            fontFamily: "'Anton', 'Archivo Black', sans-serif",
            letterSpacing: '0.05em',
          }}
        >
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase text-white leading-none whitespace-nowrap">
            COMPETITIONS
          </span>
        </div>

        {/* Section Subtag */}
        <div className="flex items-center gap-2 mb-2 font-mono-tech text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase">
          <span className="text-slate-600">02 //</span> HIGH-VOLTAGE COMBAT & HACKATHONS
        </div>

        {/* Main Heading */}
        <h2
          className="relative z-10 text-4xl sm:text-5xl md:text-[52px] font-bold uppercase tracking-[0.05em] text-[#f0f0f0] leading-none"
          style={{
            fontFamily: "'Anton', 'Archivo Black', sans-serif",
          }}
        >
          COMPETITIONS
        </h2>
      </div>

      {/* =========================================================
          3-COLUMN / 2-COLUMN / 1-COLUMN RESPONSIVE CARD GRID
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
        {competitionsData.map((comp, index) => (
          <EventCard
            key={comp.id}
            id={comp.id}
            title={comp.title}
            subtitle={comp.subtitle}
            desc={comp.desc}
            badge={comp.badge || 'NEW'}
            image={comp.image}
            tag={`PRIZE // ${comp.prize}`}
            secondaryMeta={comp.teamSize}
            actionText="REGISTER TEAM →"
            index={index}
            onClick={() => onSelectCard(comp)}
          />
        ))}
      </div>
    </div>
  );
}
