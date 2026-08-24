import React from 'react';

interface TechContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechContainer({ children, className = '' }: TechContainerProps) {
  return (
    <div className={`relative p-6 sm:p-10 shadow-2xl shadow-black/30 group hud-corners hud-corners-bottom ${className}`}
         style={{
           backgroundColor: 'var(--bg-card)',
           border: '1px solid var(--border-default)',
           borderRadius: '4px',
         }}>
      {children}
    </div>
  );
}
