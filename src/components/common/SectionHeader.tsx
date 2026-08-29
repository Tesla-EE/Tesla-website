import React from 'react';

interface SectionHeaderProps {
  title: string;
  tag?: string;
  watermark?: string;
  className?: string;
}

export default function SectionHeader({ title, tag, watermark, className = '' }: SectionHeaderProps) {
  return (
    <div className={`relative mb-14 pb-4 ${className}`}
         style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      {/* Ghost watermark behind */}
      {watermark && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none z-0"
             style={{ opacity: 0.03 }}>
          <span className="font-tech text-8xl sm:text-9xl font-bold text-stroke-ghost tracking-widest uppercase">
            {watermark}
          </span>
        </div>
      )}

      <div className="relative z-10">
        <h2 className="text-section" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
        {tag && (
          <div className="text-label mt-1.5" style={{ color: 'var(--text-muted)' }}>
            [ {tag} ]
          </div>
        )}
      </div>
    </div>
  );
}
