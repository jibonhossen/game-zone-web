"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap, Gamepad2, Trophy, ShieldCheck } from "lucide-react";

interface FloatingBadgesProps {
  language?: "bn" | "en";
}

export const FloatingBadges: React.FC<FloatingBadgesProps> = ({ language = "bn" }) => {
  const isBn = language === "bn";
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number | null>(null);

  // Detect viewport size for border orbit radii
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Continuous 60fps orbit animation loop along border
  useEffect(() => {
    let lastTime = performance.now();
    const animateOrbit = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      // Steady speed: ~18 seconds per full revolution around border
      setAngle((prev) => (prev + delta * 0.02) % 360);
      requestRef.current = requestAnimationFrame(animateOrbit);
    };

    requestRef.current = requestAnimationFrame(animateOrbit);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const rawBadges = [
    {
      id: "payout",
      icon: Zap,
      text: isBn ? "তাতক্ষণিক পেআউট" : "Instant Payout",
      subtext: isBn ? "বিকাশ / নগদ" : "bKash / Nagad",
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
    {
      id: "prizes",
      icon: Trophy,
      text: isBn ? "দৈনিক প্রাইজ" : "Daily Prizes",
      subtext: isBn ? "ক্যাশ টুর্নামেন্ট" : "Cash Contests",
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-amber-500",
    },
    {
      id: "gamers",
      icon: Gamepad2,
      text: isBn ? "১ লাখ+ গেমার" : "100K+ Gamers",
      subtext: isBn ? "প্রতিদিন গেম খেলুন" : "Play Daily",
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-[var(--positive-deep)]",
    },
    {
      id: "safe",
      icon: ShieldCheck,
      text: isBn ? "১০০% নিরাপদ" : "100% Secure",
      subtext: isBn ? "অফিসিয়াল বিডি অ্যাপ" : "Official BD App",
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
  ];

  // Border orbit radii to clear the central logo card bounds completely
  const rx = isMobile ? 132 : 225; // Horizontal radius
  const ry = isMobile ? 92 : 140;   // Vertical radius

  const orbitedBadges = useMemo(() => {
    const total = rawBadges.length;
    return rawBadges.map((badge, index) => {
      // 90 degree phase separation between 4 badges
      const badgeAngle = (angle + (index * 360) / total) % 360;
      const rad = (badgeAngle * Math.PI) / 180;

      // Outer border coordinates
      const x = Math.cos(rad) * rx;
      const y = Math.sin(rad) * ry;
      const z = Math.sin(rad); // Depth

      // Smooth depth parameters (keeps badges bright & 100% clear of logo)
      const scale = 0.9 + (z + 1) * 0.08; // 0.90 to 1.06
      const opacity = 0.85 + (z + 1) * 0.075;
      const zIndex = Math.round(20 + z * 10);
      const rotateZ = (Math.cos(rad) * 4).toFixed(1);

      return {
        ...badge,
        x,
        y,
        scale,
        opacity,
        zIndex,
        rotateZ: Number(rotateZ),
      };
    });
  }, [angle, rawBadges, rx, ry]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      {orbitedBadges.map((b) => {
        const IconComponent = b.icon;
        return (
          <motion.div
            key={b.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              x: `calc(-50% + ${b.x}px)`,
              y: `calc(-50% + ${b.y}px)`,
              scale: b.scale,
              opacity: b.opacity,
              zIndex: b.zIndex,
              rotate: b.rotateZ,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 180,
              mass: 0.5,
            }}
            className={`flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border shadow-md backdrop-blur-md ${b.color}`}
          >
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-white/95 dark:bg-black/20 shadow-xs flex-shrink-0">
              <IconComponent className={`h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 ${b.iconColor}`} />
            </div>
            <div className="text-left leading-tight whitespace-nowrap">
              <p className={`text-[10px] sm:text-xs font-bold tracking-tight ${isBn ? "font-bangla" : ""}`}>
                {b.text}
              </p>
              <p className={`text-[8.5px] sm:text-[10px] text-[var(--body)] opacity-85 ${isBn ? "font-bangla" : ""}`}>
                {b.subtext}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
