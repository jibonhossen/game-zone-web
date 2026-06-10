"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Shield, Clock, Gamepad2 } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

interface ThemeColors {
  tagText: string;
  iconBg: string;
  iconText: string;
}

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  colors: string[];
  delay: number;
  icon: React.ReactNode;
  themeColor: ThemeColors;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  description,
  colors,
  delay,
  icon,
  themeColor,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full w-full rounded-3xl border border-zinc-200 bg-white shadow-2xs hover:shadow-xs transition-all duration-300 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Animated gradient canvas */}
      <AnimatedGradient colors={colors} speed={0.03} blur="heavy" />

      {/* Content overlay */}
      <motion.div
        className="relative z-10 p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full min-h-[180px] sm:min-h-[220px]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-3">
          {/* Icon Box */}
          <div className="flex items-center justify-between">
            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-2xl ${themeColor.iconBg} flex items-center justify-center border border-zinc-100 shadow-3xs group-hover:scale-105 transition-transform duration-300`}>
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                className: `h-5 w-5 sm:h-6 sm:w-6 ${themeColor.iconText}`,
              })}
            </div>
          </div>
          
          {/* Titles */}
          <div className="space-y-0.5 sm:space-y-1">
            <motion.h4
              className="text-base sm:text-lg md:text-xl font-extrabold text-zinc-900 font-english"
              variants={item}
            >
              {title}
            </motion.h4>
            <motion.p
              className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider font-english ${themeColor.tagText}`}
              variants={item}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
        
        {/* Description (Bengali) */}
        <motion.p 
          className="text-xs sm:text-sm text-zinc-500 font-bangla font-semibold mt-4 leading-relaxed" 
          variants={item}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const BentoFeaturesDemo: React.FC = () => {
  return (
    <div className="w-full bg-transparent h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr">
        {/* Card 1: Full width on mobile (col-span-2), 2 cols on desktop */}
        <div className="col-span-2">
          <BentoCard
            title="Instant Deposits"
            subtitle="Quick & Automated"
            description="বিকাশ, রকেট বা নগদের মাধ্যমে যেকোনো সময় ইনস্ট্যান্ট ডিপোজিট করুন খুব সহজেই।"
            colors={["#FFF1F2", "#FFE4E6", "#F0F9FF"]}
            delay={0.05}
            icon={<CreditCard />}
            themeColor={{
              tagText: "text-rose-500",
              iconBg: "bg-rose-50",
              iconText: "text-rose-500"
            }}
          />
        </div>
        
        {/* Card 2: Half width on mobile (col-span-1), 1 col on desktop */}
        <div className="col-span-1">
          <BentoCard
            title="Secure & Safe"
            subtitle="100% Trusted"
            description="আমাদের টুর্নামেন্ট সিকিউরিটি ও পেমেন্ট গেটওয়ে সম্পূর্ণ নিরাপদ ও সুরক্ষিত।"
            colors={["#EFF6FF", "#E0F2FE", "#DBEAFE"]}
            delay={0.1}
            icon={<Shield />}
            themeColor={{
              tagText: "text-blue-500",
              iconBg: "bg-blue-50",
              iconText: "text-blue-500"
            }}
          />
        </div>

        {/* Card 3: Half width on mobile (col-span-1), 1 col on desktop */}
        <div className="col-span-1">
          <BentoCard
            title="Instant Withdrawal"
            subtitle="Zero Delay Payouts"
            description="আপনার জেতা প্রাইজ মানি কোনো ঝামেলা ছাড়াই সরাসরি বিকাশে ইনস্ট্যান্ট উইথড্র করে নিন।"
            colors={["#ECFDF5", "#D1FAE5", "#E0F2FE"]}
            delay={0.15}
            icon={<Wallet />}
            themeColor={{
              tagText: "text-emerald-500",
              iconBg: "bg-emerald-50",
              iconText: "text-emerald-500"
            }}
          />
        </div>

        {/* Card 4: Full width on mobile (col-span-2), 2 cols on desktop */}
        <div className="col-span-2">
          <BentoCard
            title="24/7 Support"
            subtitle="Always Here For You"
            description="২৪/৭ হেল্পলাইন এবং ডেডিকেটেড সাপোর্ট টিমের মাধ্যমে যেকোনো সমস্যার তাৎক্ষণিক সমাধান।"
            colors={["#FFFBEB", "#FEF3C7", "#EFF6FF"]}
            delay={0.2}
            icon={<Clock />}
            themeColor={{
              tagText: "text-amber-500",
              iconBg: "bg-amber-50",
              iconText: "text-amber-500"
            }}
          />
        </div>

        {/* Card 5: Full width on mobile (col-span-2), 3 cols on desktop */}
        <div className="col-span-2 md:col-span-3">
          <BentoCard
            title="Active Community"
            subtitle="100K+ Active Players"
            description="বাংলাদেশের সবচেয়ে বড় ও বিশ্বস্ত মোবাইল গেমিং টুর্নামেন্ট প্ল্যাটফর্মে অংশ নিয়ে জিতে নিন আকর্ষণীয় সব প্রাইজ।"
            colors={["#EEF2FF", "#E0E7FF", "#EFF6FF"]}
            delay={0.25}
            icon={<Gamepad2 />}
            themeColor={{
              tagText: "text-indigo-500",
              iconBg: "bg-indigo-50",
              iconText: "text-indigo-500"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { BentoFeaturesDemo };
