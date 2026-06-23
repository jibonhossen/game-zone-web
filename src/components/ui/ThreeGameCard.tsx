"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ThreeGameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  language: "bn" | "en";
}

export default function ThreeGameCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badgeText,
  language,
}: ThreeGameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group relative cursor-pointer"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative bg-[var(--card)] border border-[var(--border)] rounded-3xl p-3 sm:p-5 flex flex-col justify-between transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(159, 232, 112, 0.15)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Glow effect following cursor */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(159, 232, 112, 0.12) 0%, transparent 60%)`,
          }}
        />

        {/* Neon border glow */}
        <div
          className="absolute inset-[-1px] rounded-3xl pointer-events-none transition-opacity duration-500 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(135deg, rgba(159, 232, 112, 0.4), transparent 40%, transparent 60%, rgba(159, 232, 112, 0.2))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1.5px",
          }}
        />

        {/* Game image */}
        <div
          className="relative w-full h-32 sm:h-48 rounded-2xl overflow-hidden bg-[var(--background-secondary)] mb-4 border border-[var(--border)] z-10"
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Live badge */}
          <span className="absolute top-3 left-3 z-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--border-bright)] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs font-bangla">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            {badgeText}
          </span>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Card content */}
        <div
          className="text-center sm:text-left sm:px-1 pb-1 z-10 relative"
          style={{
            transform: isHovered ? "translateZ(10px)" : "translateZ(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <h3 className="font-black text-sm sm:text-lg text-[var(--foreground)] font-english tracking-tight">
            {title}
          </h3>
          <p
            className={`text-[10px] sm:text-xs text-[var(--muted-foreground)] font-semibold mt-0.5 ${
              language === "bn" ? "font-bangla" : ""
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
