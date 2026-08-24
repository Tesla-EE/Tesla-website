import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'pill';
  className?: string;
  type?: 'button' | 'submit';
}

export default function GlowButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: GlowButtonProps) {

  if (variant === 'pill') {
    return (
      <button type={type} onClick={onClick}
              className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-tech font-bold text-base tracking-widest transition-all duration-300 hover:scale-[1.03] cursor-pointer uppercase ${className}`}
              style={{
                border: '1.5px solid rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--text-primary)',
              }}>
        {children}
        <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity -z-10"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15), transparent)' }} />
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button type={type} onClick={onClick}
              className={`px-6 py-3 font-tech font-bold text-xs sm:text-sm tracking-widest transition-all duration-300 cursor-pointer uppercase rounded-sm ${className}`}
              style={{
                border: '1px solid var(--border-strong)',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--text-primary)',
              }}>
        {children}
      </button>
    );
  }

  // primary — solid white button
  return (
    <button type={type} onClick={onClick}
            className={`px-6 py-3 font-tech font-bold text-xs sm:text-sm tracking-widest transition-all duration-300 cursor-pointer uppercase rounded-sm hover:opacity-90 ${className}`}
            style={{
              background: 'var(--text-primary)',
              color: 'var(--bg-void)',
            }}>
      {children}
    </button>
  );
}
