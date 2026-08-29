import React from 'react';
import { workshopsData, WorkshopItem } from '../../data/workshops';
import EventCard from '../common/EventCard';
import { motion } from 'framer-motion';

interface WorkshopsProps {
  onSelectCard: (item: WorkshopItem) => void;
}

export default function Workshops({ onSelectCard }: WorkshopsProps) {
  return (
    <div className="relative">
      {/* =========================================================
          SECTION HEADER: WORKSHOPS
          ========================================================= */}
      <div className="relative mb-10 sm:mb-14">
        {/* Ghost Watermark Text */}
        <div
          aria-hidden="true"
          className="absolute -top-3 sm:-top-5 -left-2 sm:-left-3 pointer-events-none opacity-[0.045] z-0"
          style={{
            fontFamily: "'Anton', 'Archivo Black', sans-serif",
            letterSpacing: '0.05em',
          }}
        >
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black uppercase text-white leading-none whitespace-nowrap">
            WORKSHOPS
          </span>
        </div>

        {/* Section Subtag */}
        <div className="flex items-center gap-2 mb-2 font-tacticsans text-[10px] sm:text-xs tracking-[0.25em] text-slate-400 uppercase">
          <span className="text-slate-600">01 //</span> HANDS-ON TECHNICAL SESSIONS
        </div>

        {/* Main Heading */}
        <h2
          className="relative z-10 text-4xl sm:text-5xl md:text-[52px] font-bold uppercase tracking-[0.05em] text-[#f0f0f0] leading-none"
          style={{
            fontFamily: "'Anton', 'Archivo Black', sans-serif",
          }}
        >
          WORKSHOPS
        </h2>
      </div>

      {/* =========================================================
          3-COLUMN / 2-COLUMN / 1-COLUMN RESPONSIVE CARD GRID
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
        {workshopsData.map((ws, index) => (
          <EventCard
            key={ws.id}
            id={ws.id}
            title={ws.title}
            subtitle={ws.subtitle}
            desc={ws.desc}
            badge={ws.badge || 'NEW'}
            image={ws.image}
            tag={ws.date}
            secondaryMeta={`${ws.seatsLeft} SEATS LEFT`}
            actionText="ENROLL NOW →"
            index={index}
            onClick={() => onSelectCard(ws)}
          />
        ))}
      </div>
    </div>
  );
}
