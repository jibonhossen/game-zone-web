"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Users, Trophy, Swords, Play } from "lucide-react";

interface ThreeGameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  players: string;
  prize: string;
  mode: string;
  language: "bn" | "en";
  playLabel: string;
}

export default function ThreeGameCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badgeText,
  players,
  prize,
  mode,
  playLabel,
}: ThreeGameCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      className="group relative transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative bg-[var(--canvas)] border border-[var(--border-subtle)] group-hover:border-[var(--primary)] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-green)]">
        {/* Cursor glow */}
        <div
          className="absolute inset-0 rounded-[24px] pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(159,232,112,0.14) 0%, transparent 100%)`,
          }}
        />

        {/* Image Section */}
        <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden bg-[var(--canvas-soft)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--canvas)] via-[var(--canvas)]/30 to-transparent" />

          {/* Badge */}
          <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider text-[var(--positive-deep)] bg-[var(--primary-pale)]/95 backdrop-blur-md border border-[var(--primary)] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--positive)] animate-pulse" />
            {badgeText}
          </span>

          {/* Title overlaid on image */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <h3 className="text-xl sm:text-2xl font-black text-[var(--ink)] drop-shadow-xs">
              {title}
            </h3>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 bg-[var(--canvas-soft)]/50 border-b border-[var(--border-subtle)]">
          {[
            { icon: Users, label: players },
            { icon: Trophy, label: prize },
            { icon: Swords, label: mode },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-1.5 py-3 px-2 border-r border-[var(--border-subtle)] last:border-r-0"
            >
              <stat.icon className="h-4 w-4 text-[var(--positive-deep)] flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-[var(--ink)] truncate">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description + CTA */}
        <div className="p-5 sm:p-6">
          <p className="text-xs sm:text-sm text-[var(--body)] leading-relaxed line-clamp-2 font-medium">
            {description}
          </p>

          <button
            onClick={() => {
              const section = document.getElementById("download");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-[0.97] text-[var(--on-primary)] font-bold text-sm px-5 py-3 shadow-[var(--shadow-green)] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <Play className="h-4 w-4 fill-current" />
            {playLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
