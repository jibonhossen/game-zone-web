"use client";

import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer select-none"
    >
      {/* Neo-Brutalist Card Container */}
      <div
        className={`relative bg-white border-4 border-black p-4 flex flex-col justify-between transition-all duration-150 ease-in-out ${
          isHovered
            ? "translate-x-[4px] translate-y-[4px] shadow-[2px_2px_0px_0px_#000]"
            : "translate-x-0 translate-y-0 shadow-[8px_8px_0px_0px_#000]"
        }`}
      >
        {/* Game image container */}
        <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-[var(--background-secondary)] mb-4 border-3 border-black">
          {/* Live badge (rotated pink neo-brutalist sticker) */}
          <span className="absolute top-3 left-3 z-10 text-[9px] sm:text-xs font-black uppercase tracking-wider text-black bg-[var(--neo-pink)] border-2 border-black px-2.5 py-1 rotate-[-2deg] shadow-[2px_2px_0px_0px_#000] flex items-center gap-1.5 font-english">
            <span className="h-2 w-2 bg-black animate-ping" />
            {badgeText}
          </span>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark grid overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        {/* Card content */}
        <div className="text-left px-1 pb-1">
          <h3 className="font-black text-base sm:text-xl text-black font-english uppercase tracking-tight">
            {title}
          </h3>
          <p
            className={`text-xs sm:text-sm text-slate-700 font-bold mt-1.5 ${
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

