import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Shield, Clock, Gamepad2 } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
import { translations } from "@/lib/translations";

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
  language: "bn" | "en";
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  description,
  colors,
  delay,
  icon,
  themeColor,
  language,
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
      className="relative overflow-hidden h-full w-full rounded-3xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-bright)] hover:shadow-[var(--glow-sm)] transition-all duration-300 group neon-border"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Animated gradient canvas — darker palette */}
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
            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-2xl ${themeColor.iconBg} flex items-center justify-center border border-[var(--border-bright)] shadow-[var(--glow-sm)] group-hover:scale-105 group-hover:shadow-[var(--glow-md)] transition-all duration-300`}>
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                className: `h-5 w-5 sm:h-6 sm:w-6 ${themeColor.iconText}`,
              })}
            </div>
          </div>
          
          {/* Titles */}
          <div className="space-y-0.5 sm:space-y-1">
            <motion.h4
              className="text-base sm:text-lg md:text-xl font-extrabold text-[var(--foreground)] font-english"
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
        
        {/* Description */}
        <motion.p 
          className={`text-xs sm:text-sm text-[var(--muted-foreground)] font-semibold mt-4 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`} 
          variants={item}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

interface BentoFeaturesDemoProps {
  language: "bn" | "en";
}

const BentoFeaturesDemo: React.FC<BentoFeaturesDemoProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="w-full bg-transparent h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr">
        {/* Card 1: Full width on mobile (col-span-2), 2 cols on desktop */}
        <div className="col-span-2">
          <BentoCard
            title={t.whyUs.feat1Title}
            subtitle={t.whyUs.feat1Subtitle}
            description={t.whyUs.feat1Desc}
            colors={["#0a1a08", "#0e2a0c", "#0c0c14"]}
            delay={0.05}
            icon={<CreditCard />}
            themeColor={{
              tagText: "text-[var(--primary)]",
              iconBg: "bg-[var(--primary)]/10",
              iconText: "text-[var(--primary)]"
            }}
            language={language}
          />
        </div>
        
        {/* Card 2 */}
        <div className="col-span-1">
          <BentoCard
            title={t.whyUs.feat2Title}
            subtitle={t.whyUs.feat2Subtitle}
            description={t.whyUs.feat2Desc}
            colors={["#0a0a18", "#0e0e20", "#0c1210"]}
            delay={0.1}
            icon={<Shield />}
            themeColor={{
              tagText: "text-[var(--primary)]",
              iconBg: "bg-[var(--primary)]/10",
              iconText: "text-[var(--primary)]"
            }}
            language={language}
          />
        </div>

        {/* Card 3 */}
        <div className="col-span-1">
          <BentoCard
            title={t.whyUs.feat3Title}
            subtitle={t.whyUs.feat3Subtitle}
            description={t.whyUs.feat3Desc}
            colors={["#0c1a08", "#0a1510", "#0e0e18"]}
            delay={0.15}
            icon={<Wallet />}
            themeColor={{
              tagText: "text-[var(--primary)]",
              iconBg: "bg-[var(--primary)]/10",
              iconText: "text-[var(--primary)]"
            }}
            language={language}
          />
        </div>

        {/* Card 4 */}
        <div className="col-span-2">
          <BentoCard
            title={t.whyUs.feat4Title}
            subtitle={t.whyUs.feat4Subtitle}
            description={t.whyUs.feat4Desc}
            colors={["#0a0a14", "#0c1a0c", "#0e0e1a"]}
            delay={0.2}
            icon={<Clock />}
            themeColor={{
              tagText: "text-[var(--primary)]",
              iconBg: "bg-[var(--primary)]/10",
              iconText: "text-[var(--primary)]"
            }}
            language={language}
          />
        </div>

        {/* Card 5 */}
        <div className="col-span-2 md:col-span-3">
          <BentoCard
            title={t.whyUs.feat5Title}
            subtitle={t.whyUs.feat5Subtitle}
            description={t.whyUs.feat5Desc}
            colors={["#0c1a0a", "#0a1408", "#0e0e14"]}
            delay={0.25}
            icon={<Gamepad2 />}
            themeColor={{
              tagText: "text-[var(--primary)]",
              iconBg: "bg-[var(--primary)]/10",
              iconText: "text-[var(--primary)]"
            }}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};

export { BentoFeaturesDemo };
