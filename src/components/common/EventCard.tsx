import React from 'react';
import { motion } from 'framer-motion';

export interface EventCardProps {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  badge?: string;
  isCompleted?: boolean;
  image: string;
  tag?: string;
  secondaryMeta?: string;
  actionText?: string;
  index?: number;
  variant?: 'default' | 'poster';
  onClick?: () => void;
}

export default function EventCard({
  title,
  subtitle,
  desc,
  badge,
  isCompleted = false,
  image,
  tag,
  secondaryMeta,
  actionText = 'REGISTER TEAM →',
  index = 0,
  variant = 'default',
  onClick,
}: EventCardProps) {
  const isPoster = variant === 'poster';
  const indexStr = String(index + 1).padStart(2, '0');

  const handleClick = () => {
    if (isCompleted) return;
    if (onClick) onClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onClick={handleClick}
      className={`group relative flex flex-col justify-between h-full bg-[#08080b]/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
        isCompleted
          ? 'border border-white/[0.06] opacity-80 cursor-default'
          : 'border border-white/[0.15] cursor-pointer hover:border-white/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,1),0_0_30px_rgba(255,255,255,0.15)]'
      }`}
    >
      {/* Subtle Inner Hairline Frame */}
      <div className={`absolute inset-1.5 rounded-xl border pointer-events-none z-20 transition-all duration-300 ${isCompleted ? 'border-white/[0.02]' : 'border-white/[0.04] group-hover:border-white/[0.15] group-hover:scale-[0.98]'}`} />

      {/* Status Badge on Top-Left */}
      {isCompleted ? (
        <div className="absolute top-3.5 left-3.5 z-30 pointer-events-none transform -rotate-12">
          <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 font-black font-tech text-[9px] tracking-[0.2em] px-2.5 py-0.5 uppercase shadow-[0_0_12px_rgba(239,68,68,0.25)] border border-red-500/40 rounded-[2px] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            COMPLETED
          </span>
        </div>
      ) : badge ? (
        <div className="absolute top-3.5 left-3.5 z-30 pointer-events-none transform -rotate-12 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
          <span className="inline-flex items-center gap-1.5 bg-white text-black font-black font-tech text-[9px] tracking-[0.25em] px-2.5 py-0.5 uppercase shadow-[0_4px_16px_rgba(0,0,0,0.9),0_0_12px_rgba(255,255,255,0.3)] border border-white/60 rounded-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            {badge}
          </span>
        </div>
      ) : null}

      {/* Top-Right Technical HUD Counter */}
      <div className="absolute top-3 right-3.5 z-30 pointer-events-none flex items-center gap-1 font-tacticsans text-[9px] tracking-widest text-white/40 group-hover:text-white/70 transition-colors bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
        <span className="text-white/20">#</span>
        <span>{indexStr}</span>
      </div>

      <div>
        {/* =======================================================
            IMAGE AREA (Crisp Full Poster View)
            ======================================================= */}
        <div className={`relative w-full overflow-hidden bg-[#040406] ${isPoster ? 'aspect-[3/4] sm:aspect-[4/5]' : 'aspect-[16/10] border-b border-white/[0.08]'}`}>
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              isCompleted
                ? 'filter grayscale-[75%] brightness-[0.6] contrast-[1.05]'
                : isPoster
                  ? 'brightness-[0.92] contrast-[1.04] group-hover:brightness-100 group-hover:contrast-105 group-hover:scale-[1.03]'
                  : 'filter grayscale-[30%] brightness-[0.85] contrast-[1.08] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03]'
            }`}
          />

          {/* Moody Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-black/10 to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Concluded Cyber Stamp Overlay */}
          {isCompleted && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <span className="font-tacticsans text-[10px] tracking-[0.3em] uppercase text-white/70 bg-black/75 px-3 py-1 rounded border border-white/20 backdrop-blur-sm -rotate-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                // CONCLUDED //
              </span>
            </div>
          )}

          {/* Viewfinder HUD Corner Brackets inside image */}
          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/50 pointer-events-none z-10" />
          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/50 pointer-events-none z-10" />

          {/* Top Tag on image if provided (when not poster) */}
          {tag && !isPoster && (
            <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="font-tacticsans text-[9px] sm:text-[10px] tracking-[0.18em] text-white/90 bg-black/80 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/15 uppercase">
                {tag}
              </span>
            </div>
          )}
        </div>

        {/* =======================================================
            EVENT INFORMATION CONTENT (Hidden in poster mode)
            ======================================================= */}
        {!isPoster && (
          <div className="p-5 sm:p-6 pb-2">
            <h3 className="font-tech text-lg sm:text-xl md:text-[22px] font-bold uppercase tracking-wide text-[#f0f0f0] group-hover:text-white leading-tight transition-colors">
              {title}
            </h3>
            <div className="font-tacticsans text-[10px] sm:text-[11px] tracking-[0.16em] text-slate-400 uppercase font-medium mt-1.5 mb-3">
              {subtitle}
            </div>
            <p className="font-body text-xs sm:text-[13px] text-slate-300/80 leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>
        )}
      </div>

      {/* =========================================================
          CARD FOOTER (Futuristic Action Bar)
          ========================================================= */}
      <div className={`p-4 sm:p-5 ${isPoster ? 'pt-3 bg-[#0a0a0d]' : 'pt-0 mt-4'}`}>
        <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2 font-tacticsans text-[10px] sm:text-[11px]">
          {/* Action CTA Button */}
          {isCompleted ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] text-slate-500 font-tech font-bold uppercase tracking-wider text-[11px] border border-white/[0.06] cursor-not-allowed">
              <span>CONCLUDED ✓</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.07] text-white group-hover:bg-white group-hover:text-black font-tech font-bold uppercase tracking-wider text-[11px] border border-white/15 transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              <span>{actionText}</span>
            </span>
          )}

          {/* Secondary Metadata (Team size badge) */}
          <div className="flex items-center gap-1.5 text-slate-300 tracking-wider uppercase font-medium bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-white/[0.08] transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-red-400/70' : 'bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.8)]'}`} />
            <span className="text-[10px] sm:text-[11px]">
              {isCompleted ? 'EVENT ENDED' : secondaryMeta}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Corner Ticks */}
      <div className="absolute bottom-1.5 left-2.5 text-[8px] font-mono-tech text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-1.5 right-2.5 text-[8px] font-mono-tech text-white/20 pointer-events-none">+</div>
    </motion.div>
  );
}
