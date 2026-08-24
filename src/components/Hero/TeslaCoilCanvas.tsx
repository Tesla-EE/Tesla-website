import React, { useEffect, useRef, useState } from 'react';
import teslaCoilImg from '../../assets/tesla-coil.jpg';

export default function TeslaCoilCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Recursive fractal lightning bolt generator
    const drawLightningSegment = (
      x1: number, y1: number,
      x2: number, y2: number,
      displace: number,
      color: string,
      width: number,
      glowColor: string
    ) => {
      if (displace < 2.5) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.shadowBlur = width > 1.5 ? 18 : 8;
        ctx.shadowColor = glowColor;
        ctx.stroke();
        return;
      }

      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displace;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displace;

      drawLightningSegment(x1, y1, midX, midY, displace / 2, color, width, glowColor);
      drawLightningSegment(midX, midY, x2, y2, displace / 2, color, width, glowColor);

      // Branching sub-arcs
      if (Math.random() < 0.38 && displace > 7) {
        const branchAngle = (Math.random() - 0.5) * 1.2;
        const length = displace * (1.2 + Math.random());
        const branchX = midX + Math.cos(branchAngle) * length;
        const branchY = midY - Math.abs(Math.sin(branchAngle)) * length * 0.8;
        drawLightningSegment(
          midX, midY,
          branchX, branchY,
          displace * 0.55,
          'rgba(240, 248, 255, 0.75)',
          width * 0.55,
          'rgba(200, 225, 255, 0.8)'
        );
      }
    };

    const render = () => {
      time++;
      const rect = containerRef.current?.getBoundingClientRect();
      const width = rect ? rect.width : canvas.width / window.devicePixelRatio;
      const height = rect ? rect.height : canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // Toroid emission point (center-top dome of the coil)
      const startX = width * 0.50;
      const startY = height * 0.28;

      // Dynamic electrical energy fluctuation
      const baseBoltCount = 5;
      const extraFluctuation = Math.floor(Math.sin(time * 0.08) * 2);
      const boltCount = isHovered ? 8 : Math.max(3, baseBoltCount + extraFluctuation);

      for (let i = 0; i < boltCount; i++) {
        // Broad radial spread over top and sides
        const angle = -Math.PI * 0.95 + (Math.PI * 1.9 * (i + Math.random() * 0.4)) / boltCount;
        const radius = 100 + Math.random() * (isHovered ? 240 : 180);

        let targetX = startX + Math.cos(angle) * radius;
        let targetY = startY + Math.sin(angle) * radius * 0.8;

        // Pull one bolt towards mouse if hovering
        if (isHovered && i === 0 && mousePosRef.current) {
          targetX = mousePosRef.current.x;
          targetY = mousePosRef.current.y;
        }

        const colors = [
          '#ffffff',
          '#f8fafc',
          '#e2e8f0',
          '#e0f2fe',
          '#bae6fd'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const strokeWidth = 1.2 + Math.random() * 2.2;
        const glowColor = 'rgba(215, 235, 255, 0.9)';

        drawLightningSegment(startX, startY, targetX, targetY, 55, color, strokeWidth, glowColor);
      }

      // Floating electrostatic spark particles
      const sparkCount = isHovered ? 18 : 10;
      for (let j = 0; j < sparkCount; j++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 140;
        const sparkX = startX + Math.cos(angle) * dist;
        const sparkY = startY + Math.sin(angle) * dist * 0.7;

        ctx.fillStyle = Math.random() > 0.3 ? '#ffffff' : '#bae6fd';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#e0f2fe';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, Math.random() * 1.8 + 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Torus central high-voltage glow
      const radialGlow = ctx.createRadialGradient(startX, startY, 5, startX, startY, 70);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      radialGlow.addColorStop(0.3, 'rgba(224, 242, 254, 0.25)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(startX, startY, 70, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mousePosRef.current = null;
      }}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto aspect-[4/5] sm:aspect-[1/1] flex items-center justify-center cursor-crosshair group select-none"
    >
      {/* Tesla Coil Base Apparatus Image */}
      <img
        src={teslaCoilImg}
        alt="High Voltage Tesla Coil Apparatus"
        className="w-full h-full object-contain filter contrast-125 brightness-95 drop-shadow-[0_0_50px_rgba(255,255,255,0.08)] transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Procedural High-Voltage Lightning Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Ambient Torus Electric Halo */}
      <div className="absolute top-[22%] left-[20%] right-[20%] h-36 bg-white/[0.07] blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Interactive Tooltip on hover */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 border border-white/20 px-3 py-1 rounded text-[9px] font-mono-tech text-slate-300 tracking-wider backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase">
        HIGH VOLTAGE DISCHARGE // INTERACTIVE
      </div>
    </div>
  );
}
