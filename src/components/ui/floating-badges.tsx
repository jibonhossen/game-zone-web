"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Gamepad2, Trophy, ShieldCheck } from "lucide-react";

interface FloatingBadgesProps {
  language?: "bn" | "en";
}

export const FloatingBadges: React.FC<FloatingBadgesProps> = ({ language = "bn" }) => {
  const isBn = language === "bn";

  const badges = [
    {
      id: "payout",
      icon: Zap,
      text: isBn ? "তাতক্ষণিক পেআউট" : "Instant Payout",
      subtext: isBn ? "বিকাশ / নগদ" : "bKash / Nagad",
      position: "-top-7 -left-7 sm:-top-10 sm:-left-16 lg:-left-28",
      rotate: "-rotate-6",
      baseRotateDeg: -6,
      animationDelay: 0.2,
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
    {
      id: "prizes",
      icon: Trophy,
      text: isBn ? "দৈনিক প্রাইজ" : "Daily Prizes",
      subtext: isBn ? "ক্যাশ টুর্নামেন্ট" : "Cash Contests",
      position: "-top-7 -right-7 sm:-top-10 sm:-right-16 lg:-right-28",
      rotate: "rotate-6",
      baseRotateDeg: 6,
      animationDelay: 0.3,
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-amber-500",
    },
    {
      id: "gamers",
      icon: Gamepad2,
      text: isBn ? "১ লাখ+ গেমার" : "100K+ Gamers",
      subtext: isBn ? "অ্যাক্টিভ টুর্নামেন্ট" : "Play Daily",
      position: "-bottom-7 -left-7 sm:-bottom-8 sm:-left-14 lg:-left-24",
      rotate: "-rotate-3",
      baseRotateDeg: -3,
      animationDelay: 0.4,
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-[var(--positive-deep)]",
    },
    {
      id: "safe",
      icon: ShieldCheck,
      text: isBn ? "১০০% নিরাপদ" : "100% Secure",
      subtext: isBn ? "অফিসিয়াল বিডি অ্যাপ" : "Official BD App",
      position: "-bottom-7 -right-7 sm:-bottom-8 sm:-right-14 lg:-right-24",
      rotate: "rotate-3",
      baseRotateDeg: 3,
      animationDelay: 0.5,
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
  ];

  return (
    <>
      {/* Floating Badges around logo */}
      {badges.map((b, i) => {
        const IconComponent = b.icon;
        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0.8, y: 10, rotate: b.baseRotateDeg }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -7, 0],
              rotate: [b.baseRotateDeg, b.baseRotateDeg - 2, b.baseRotateDeg + 2, b.baseRotateDeg],
            }}
            transition={{
              opacity: { duration: 0.5, delay: b.animationDelay },
              scale: { duration: 0.5, delay: b.animationDelay },
              y: {
                duration: 3.5 + i * 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: 5 + i * 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className={`absolute z-20 ${b.position} ${b.rotate} flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3.5 py-1 sm:py-2 rounded-xl sm:rounded-2xl border shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:rotate-0 ${b.color}`}
          >
            <div className="flex h-5.5 w-5.5 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-white/90 dark:bg-black/20 shadow-xs flex-shrink-0">
              <IconComponent className={`h-3 w-3 sm:h-4.5 sm:w-4.5 ${b.iconColor}`} />
            </div>
            <div className="text-left leading-tight">
              <p className={`text-[9px] sm:text-xs font-bold tracking-tight ${isBn ? "font-bangla" : ""}`}>
                {b.text}
              </p>
              <p className={`text-[7.5px] sm:text-[10px] text-[var(--body)] opacity-85 hidden xs:block ${isBn ? "font-bangla" : ""}`}>
                {b.subtext}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
