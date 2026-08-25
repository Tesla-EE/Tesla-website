import React from 'react';
import { motion } from 'framer-motion';

export interface EventCardProps {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge?: string;
  image: string;
  tag?: string;
  secondaryMeta?: string;
  actionText?: string;
  index?: number;
  onClick?: () => void;
}

export default function EventCard({
  title,
  subtitle,
  desc,
  badge,
  image,
  tag,
  secondaryMeta,
  actionText = 'REGISTER NOW →',
  index = 0,
  onClick,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative flex flex-col justify-between h-full bg-[#0a0a0d] border border-white/[0.1] rounded-xl overflow-hidden cursor-pointer select-none transition-all duration-300 hover:border-white/35 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.85)]"
    >
      {/* Small Angled "NEW" Badge near Top-Left */}
      {badge && (
        <div className="absolute top-3 left-3 z-30 pointer-events-none transform -rotate-12 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <span className="inline-block bg-[#f5f5f5] text-black font-black font-tech text-[10px] tracking-[0.2em] px-2.5 py-0.5 uppercase shadow-[0_4px_12px_rgba(0,0,0,0.9)] border border-white/40">
            {badge}
          </span>
        </div>
      )}

      {/* Top HUD Technical Corner Ticks */}
      <div className="absolute top-2 right-2 text-[9px] font-mono-tech text-white/30 pointer-events-none z-20">+</div>

      <div>
        {/* =======================================================
            IMAGE AREA
            ======================================================= */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#060608] border-b border-white/[0.08]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 ease-out filter grayscale-[35%] brightness-[0.8] contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-[0.96] group-hover:contrast-[1.05] group-hover:scale-[1.04]"
          />

          {/* Moody Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-black/20 to-transparent pointer-events-none" />

          {/* Viewfinder Corner Brackets inside image */}
          <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-white/40 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-white/40 pointer-events-none" />

          {/* Top Tag / Pill on image if provided */}
          {tag && (
            <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.18em] text-white/90 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded border border-white/15 uppercase">
                {tag}
              </span>
            </div>
          )}
        </div>

        {/* =======================================================
            EVENT INFORMATION CONTENT
            ======================================================= */}
        <div className="p-5 sm:p-6 pb-2">
          {/* Main Title */}
          <h3 className="font-tech text-lg sm:text-xl md:text-[22px] font-bold uppercase tracking-wide text-[#f0f0f0] group-hover:text-white leading-tight transition-colors">
            {title}
          </h3>

          {/* Subtitle */}
          <div className="font-mono-tech text-[10px] sm:text-[11px] tracking-[0.16em] text-slate-400 uppercase font-medium mt-1.5 mb-3">
            {subtitle}
          </div>

          {/* Description */}
          <p className="font-body text-xs sm:text-[13px] text-slate-300/80 leading-relaxed line-clamp-3">
            {desc}
          </p>
        </div>
      </div>

      {/* =========================================================
          CARD FOOTER (Action & Secondary Meta)
          ========================================================= */}
      <div className="p-5 sm:p-6 pt-0 mt-4">
        <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between font-mono-tech text-[10px] sm:text-[11px]">
          {/* Action CTA */}
          <span className="text-white/90 group-hover:text-white font-semibold tracking-wider flex items-center gap-1.5 transition-colors">
            {actionText}
          </span>

          {/* Secondary Metadata (Seats left / team size / instructor) */}
          {secondaryMeta && (
            <span className="text-slate-400 tracking-widest uppercase">
              {secondaryMeta}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Technical Crosshairs */}
      <div className="absolute bottom-1.5 left-2 text-[8px] font-mono-tech text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-1.5 right-2 text-[8px] font-mono-tech text-white/20 pointer-events-none">+</div>
    </motion.div>
  );
}
