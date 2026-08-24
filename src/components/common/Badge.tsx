import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'white' | 'green' | 'cyan';
  className?: string;
}

export default function Badge({ label, variant = 'white', className = '' }: BadgeProps) {
  const styles = {
    white: 'bg-white text-black border-white',
    green: 'bg-green-500/20 text-green-400 border-green-500/40',
    cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
  };

  return (
    <span className={`font-tech text-[10px] font-bold px-3 py-1 rounded-sm border shadow-md tracking-wider inline-flex items-center uppercase ${styles[variant]} ${className}`}>
      {label}
    </span>
  );
}
