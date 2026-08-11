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
      subtext: isBn ? "বিকাশ / নগদ / রকেট" : "bKash / Nagad / Rocket",
      position: "-top-4 -left-4 sm:-top-8 sm:-left-12 lg:-left-24",
      animationDelay: 0.2,
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
    {
      id: "gamers",
      icon: Gamepad2,
      text: isBn ? "১ লাখ+ প্লেয়ার" : "100K+ Active Gamers",
      subtext: isBn ? "প্রতিদিন গেম খেলুন" : "Play Tournaments Daily",
      position: "-bottom-4 -left-4 sm:-bottom-6 sm:-left-10 lg:-left-20",
      animationDelay: 0.4,
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-[var(--positive-deep)]",
    },
    {
      id: "prizes",
      icon: Trophy,
      text: isBn ? "দৈনিক ক্যাশ প্রাইজ" : "Daily Cash Prizes",
      subtext: isBn ? "ডেইলি টুর্নামেন্ট" : "Live Contests & Rooms",
      position: "-top-4 -right-4 sm:-top-8 sm:-right-12 lg:-right-24",
      animationDelay: 0.3,
      color: "bg-[var(--canvas)] text-[var(--ink)] border-[var(--border-subtle)]",
      iconColor: "text-amber-500",
    },
    {
      id: "safe",
      icon: ShieldCheck,
      text: isBn ? "১০০% নিরাপদ" : "100% Secure Platform",
      subtext: isBn ? "অফিসিয়াল বিডি অ্যাপ" : "Official BD App",
      position: "-bottom-4 -right-4 sm:-bottom-6 sm:-right-10 lg:-right-20",
      animationDelay: 0.5,
      color: "bg-[var(--primary-pale)] text-[var(--positive-deep)] border-[var(--primary)]",
      iconColor: "text-[var(--positive)]",
    },
  ];

  return (
    <>
      {badges.map((b) => {
        const IconComponent = b.icon;
        return (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: b.animationDelay }}
            className={`absolute z-20 ${b.position} hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border shadow-md backdrop-blur-md transition-transform duration-300 hover:scale-105 ${b.color}`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/90 dark:bg-black/20 shadow-xs flex-shrink-0">
              <IconComponent className={`h-4.5 w-4.5 ${b.iconColor}`} />
            </div>
            <div className="text-left leading-tight">
              <p className={`text-xs font-bold tracking-tight ${isBn ? "font-bangla" : ""}`}>
                {b.text}
              </p>
              <p className={`text-[10px] text-[var(--body)] opacity-85 ${isBn ? "font-bangla" : ""}`}>
                {b.subtext}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
