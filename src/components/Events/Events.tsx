import React from 'react';
import Workshops from '../Workshops/Workshops';
import Competitions from '../Competitions/Competitions';

interface EventsProps {
  onSelectCard: (item: any) => void;
}

export default function Events({ onSelectCard }: EventsProps) {
  return (
    <section id="events" className="py-24 relative bg-[#040507] bg-grain overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-tech-grid" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        <Workshops onSelectCard={onSelectCard} />
        <Competitions onSelectCard={onSelectCard} />
      </div>
    </section>
  );
}
