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
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
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
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-[24px] p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 50px rgba(14, 15, 12, 0.12), 0 0 30px rgba(159, 232, 112, 0.1)"
            : "0 2px 8px rgba(14, 15, 12, 0.06)",
        }}
      >
        {/* Glow effect following cursor */}
        <div
          className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(159, 232, 112, 0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Game image */}
        <div
          className="relative w-full h-40 sm:h-52 rounded-2xl overflow-hidden bg-[var(--canvas-soft)] mb-5 border border-[var(--border-subtle)] z-10"
          style={{
            transform: isHovered ? "translateZ(15px)" : "translateZ(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Live badge */}
          <span className="absolute top-3 left-3 z-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--positive-deep)] bg-[var(--primary-pale)] border border-[var(--primary)]/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
            {badgeText}
          </span>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Card content */}
        <div
          className="z-10 relative"
          style={{
            transform: isHovered ? "translateZ(8px)" : "translateZ(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <h3 className="font-black text-base sm:text-xl text-[var(--ink)] tracking-tight">
            {title}
          </h3>
          <p
            className={`text-xs sm:text-sm text-[var(--body)] font-medium mt-1 ${
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
