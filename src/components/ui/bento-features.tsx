import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Shield, Clock, Gamepad2 } from "lucide-react";
import { translations } from "@/lib/translations";

interface ThemeColors {
  tagText: string;
  iconBg: string;
  iconText: string;
  cardBg: string;
  patternClass?: string;
}

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
  themeColor: ThemeColors;
  language: "bn" | "en";
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  description,
  delay,
  icon,
  themeColor,
  language,
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden h-full w-full border-4 border-black p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[240px] shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-150 select-none ${themeColor.cardBg}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {/* Optional retro grid/dot pattern overlay */}
      {themeColor.patternClass && (
        <div className={`absolute inset-0 opacity-15 pointer-events-none ${themeColor.patternClass}`} />
      )}

      {/* Content overlay */}
      <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Icon Box */}
          <div className="flex items-center justify-between">
            <div className={`h-12 w-12 flex items-center justify-center bg-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:scale-105 transition-transform`}>
              {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                className: `h-6 w-6 text-white stroke-[2.5]`,
              })}
            </div>
          </div>
          
          {/* Titles */}
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-black text-black font-english uppercase tracking-tight">
              {title}
            </h4>
            <p className={`text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider ${themeColor.tagText}`}>
              {subtitle}
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className={`text-xs sm:text-sm text-black font-bold leading-relaxed mt-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
          {description}
        </p>
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {/* Card 1: Deposits (Cyan) */}
        <div className="md:col-span-2">
          <BentoCard
            title={t.whyUs.feat1Title}
            subtitle={t.whyUs.feat1Subtitle}
            description={t.whyUs.feat1Desc}
            delay={0.05}
            icon={<CreditCard />}
            themeColor={{
              tagText: "text-slate-800",
              iconBg: "bg-black",
              iconText: "text-white",
              cardBg: "bg-[var(--neo-cyan)]",
              patternClass: "neo-dot-bg"
            }}
            language={language}
          />
        </div>
        
        {/* Card 2: Security (Pink) */}
        <div className="md:col-span-1">
          <BentoCard
            title={t.whyUs.feat2Title}
            subtitle={t.whyUs.feat2Subtitle}
            description={t.whyUs.feat2Desc}
            delay={0.1}
            icon={<Shield />}
            themeColor={{
              tagText: "text-slate-800",
              iconBg: "bg-black",
              iconText: "text-white",
              cardBg: "bg-[var(--neo-pink)]",
              patternClass: "neo-grid-bg"
            }}
            language={language}
          />
        </div>

        {/* Card 3: Withdrawal (Yellow) */}
        <div className="md:col-span-1">
          <BentoCard
            title={t.whyUs.feat3Title}
            subtitle={t.whyUs.feat3Subtitle}
            description={t.whyUs.feat3Desc}
            delay={0.15}
            icon={<Wallet />}
            themeColor={{
              tagText: "text-slate-800",
              iconBg: "bg-black",
              iconText: "text-white",
              cardBg: "bg-[var(--neo-yellow)]",
              patternClass: "neo-dot-bg"
            }}
            language={language}
          />
        </div>

        {/* Card 4: 24/7 Support (Purple) */}
        <div className="md:col-span-2">
          <BentoCard
            title={t.whyUs.feat4Title}
            subtitle={t.whyUs.feat4Subtitle}
            description={t.whyUs.feat4Desc}
            delay={0.2}
            icon={<Clock />}
            themeColor={{
              tagText: "text-slate-800",
              iconBg: "bg-black",
              iconText: "text-white",
              cardBg: "bg-[var(--neo-purple)]",
              patternClass: "neo-grid-bg"
            }}
            language={language}
          />
        </div>

        {/* Card 5: Community (Orange) */}
        <div className="md:col-span-3">
          <BentoCard
            title={t.whyUs.feat5Title}
            subtitle={t.whyUs.feat5Subtitle}
            description={t.whyUs.feat5Desc}
            delay={0.25}
            icon={<Gamepad2 />}
            themeColor={{
              tagText: "text-slate-800",
              iconBg: "bg-black",
              iconText: "text-white",
              cardBg: "bg-[var(--neo-orange)]",
              patternClass: "neo-dot-bg"
            }}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};

export { BentoFeaturesDemo };

