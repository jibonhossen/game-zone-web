import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Shield, Clock, Gamepad2, Users, Zap, Trophy } from "lucide-react";
import { translations } from "@/lib/translations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: "sage" | "green" | "dark" | "white";
  language: "bn" | "en";
  stat?: { value: string; label: string };
  index: number;
}

const variantStyles = {
  sage: {
    card: "bg-[var(--canvas-soft)]",
    iconBg: "bg-[var(--canvas)]",
    iconColor: "text-[var(--primary)]",
    titleColor: "text-[var(--ink)]",
    descColor: "text-[var(--body)]",
    statValue: "text-[var(--ink)]",
    statLabel: "text-[var(--mute)]",
  },
  green: {
    card: "bg-[var(--primary-pale)]",
    iconBg: "bg-[var(--primary)]",
    iconColor: "text-[var(--on-primary)]",
    titleColor: "text-[var(--ink)]",
    descColor: "text-[var(--body)]",
    statValue: "text-[var(--ink-deep)]",
    statLabel: "text-[var(--positive-deep)]",
  },
  dark: {
    card: "bg-[var(--card-dark)]",
    iconBg: "bg-[var(--primary)]",
    iconColor: "text-[var(--ink)]",
    titleColor: "text-[var(--canvas)]",
    descColor: "text-[var(--canvas-soft)]/70",
    statValue: "text-[var(--primary)]",
    statLabel: "text-[var(--primary-neutral)]",
  },
  white: {
    card: "bg-[var(--canvas)]",
    iconBg: "bg-[var(--canvas-soft)]",
    iconColor: "text-[var(--primary)]",
    titleColor: "text-[var(--ink)]",
    descColor: "text-[var(--body)]",
    statValue: "text-[var(--ink)]",
    statLabel: "text-[var(--mute)]",
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant,
  language,
  stat,
  index,
}) => {
  const s = variantStyles[variant];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[24px] ${s.card} ${variant === 'white' ? 'border border-[var(--border-subtle)] hover:border-[var(--primary)]' : 'hover:ring-2 hover:ring-[var(--primary)]/50'} h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Top section with icon */}
        <div className="flex items-start justify-between mb-4">
          <div className={`h-12 w-12 rounded-2xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
            {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
              className: `h-6 w-6 ${s.iconColor}`,
            })}
          </div>
          {stat && (
            <div className="text-right flex-shrink-0 ml-4">
              <div className={`text-2xl sm:text-3xl font-black leading-none ${s.statValue}`}>
                {stat.value}
              </div>
              <div className={`text-[10px] sm:text-xs font-semibold mt-1 ${s.statLabel}`}>
                {stat.label}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className={`text-lg sm:text-xl font-extrabold leading-snug ${s.titleColor}`}>
            {title}
          </h3>
          <p className={`text-sm leading-relaxed mt-2 ${s.descColor} ${language === 'bn' ? 'font-bangla' : ''}`}>
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className={`mt-5 h-1 w-10 rounded-full ${variant === 'dark' ? 'bg-[var(--primary)]' : 'bg-[var(--primary)]/40'}`} />
      </div>
    </motion.div>
  );
};

const BentoFeaturesDemo: React.FC<{ language: "bn" | "en" }> = ({ language }) => {
  const t = translations[language];

  const features = [
    {
      icon: <CreditCard />,
      title: t.whyUs.feat1Title,
      description: t.whyUs.feat1Desc,
      variant: "sage" as const,
      stat: { value: "৳", label: "Instant" },
    },
    {
      icon: <Shield />,
      title: t.whyUs.feat2Title,
      description: t.whyUs.feat2Desc,
      variant: "green" as const,
    },
    {
      icon: <Wallet />,
      title: t.whyUs.feat3Title,
      description: t.whyUs.feat3Desc,
      variant: "dark" as const,
      stat: { value: "0", label: "Delay" },
    },
    {
      icon: <Clock />,
      title: t.whyUs.feat4Title,
      description: t.whyUs.feat4Desc,
      variant: "white" as const,
      stat: { value: "24/7", label: "Support" },
    },
    {
      icon: <Gamepad2 />,
      title: t.whyUs.feat5Title,
      description: t.whyUs.feat5Desc,
      variant: "sage" as const,
      stat: { value: "100K+", label: "Players" },
    },
  ];

  return (
    <div>
      {/* Mobile: single column stack */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            icon={f.icon}
            title={f.title}
            description={f.description}
            variant={f.variant}
            language={language}
            stat={f.stat}
            index={i}
          />
        ))}
      </div>

      {/* Desktop: bento grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-5 auto-rows-fr">
        {/* Card 1 — full width top */}
        <div className="col-span-3">
          <FeatureCard
            icon={features[0].icon}
            title={features[0].title}
            description={features[0].description}
            variant={features[0].variant}
            language={language}
            stat={features[0].stat}
            index={0}
          />
        </div>

        {/* Card 2 + 3 + 4 — three across */}
        <div className="col-span-1">
          <FeatureCard
            icon={features[1].icon}
            title={features[1].title}
            description={features[1].description}
            variant={features[1].variant}
            language={language}
            index={1}
          />
        </div>
        <div className="col-span-1">
          <FeatureCard
            icon={features[2].icon}
            title={features[2].title}
            description={features[2].description}
            variant={features[2].variant}
            language={language}
            stat={features[2].stat}
            index={2}
          />
        </div>
        <div className="col-span-1">
          <FeatureCard
            icon={features[3].icon}
            title={features[3].title}
            description={features[3].description}
            variant={features[3].variant}
            language={language}
            stat={features[3].stat}
            index={3}
          />
        </div>

        {/* Card 5 — full width bottom */}
        <div className="col-span-3">
          <FeatureCard
            icon={features[4].icon}
            title={features[4].title}
            description={features[4].description}
            variant={features[4].variant}
            language={language}
            stat={features[4].stat}
            index={4}
          />
        </div>
      </div>
    </div>
  );
};

export { BentoFeaturesDemo };
