"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Shield, Settings, Check, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

interface Step {
  number: string;
  icon: typeof Download;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

interface HowToStartCarouselProps {
  language: "bn" | "en";
  steps: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    harmfulText: string;
    anywayBtn: string;
    allowSource: string;
    success: string;
    regSuccess: string;
  };
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const DotButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
      active
        ? "w-8 bg-[var(--primary)]"
        : "w-2 bg-[var(--border-subtle)] hover:bg-[var(--mute)]"
    }`}
    aria-label={active ? "Current step" : "Go to step"}
  />
);

export default function HowToStartCarousel({
  language,
  steps,
}: HowToStartCarouselProps) {
  const [[current, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSteps = 4;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSteps - 1));
      setPage([clamped, clamped > current ? 1 : -1]);
    },
    [current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setPage(([c]) => {
        const nextIndex = c + 1 >= totalSteps ? 0 : c + 1;
        return [nextIndex, 1];
      });
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const stepData: Step[] = [
    {
      number: language === "bn" ? "১" : "1",
      icon: Download,
      title: steps.step1Title,
      description: steps.step1Desc,
      illustration: (
        <div className="flex flex-col items-center gap-2">
          <Download className="h-8 w-8 text-[var(--primary)]" />
          <span className="text-[10px] font-bold text-[var(--mute)] uppercase tracking-wider">
            gamezonebd.apk
          </span>
        </div>
      ),
    },
    {
      number: language === "bn" ? "২" : "2",
      icon: Shield,
      title: steps.step2Title,
      description: steps.step2Desc,
      illustration: (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-[var(--negative)]" />
            <span className="text-[10px] font-bold text-[var(--ink)] uppercase">
              Warning
            </span>
          </div>
          <span className="text-[9px] text-[var(--mute)] text-center max-w-[140px]">
            {steps.harmfulText}
          </span>
          <span className="text-[10px] font-bold text-[var(--primary)]">
            {steps.anywayBtn}
          </span>
        </div>
      ),
    },
    {
      number: language === "bn" ? "৩" : "3",
      icon: Settings,
      title: steps.step3Title,
      description: steps.step3Desc,
      illustration: (
        <div className="flex flex-col items-center gap-2 w-full">
          <Settings className="h-6 w-6 text-[var(--mute)]" />
          <div className="flex items-center gap-2 border-t border-[var(--border-subtle)] pt-2 w-full max-w-[160px] justify-between">
            <span className="text-[9px] font-semibold text-[var(--ink)]">
              {steps.allowSource}
            </span>
            <div className="w-8 h-4.5 bg-[var(--primary)] rounded-full p-0.5 flex items-center justify-end">
              <div className="h-3.5 w-3.5 bg-white rounded-full shadow-[var(--shadow-sm)]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      number: language === "bn" ? "৪" : "4",
      icon: Check,
      title: steps.step4Title,
      description: steps.step4Desc,
      illustration: (
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[var(--primary-pale)] flex items-center justify-center">
            <Check className="h-5 w-5 text-[var(--positive)]" />
          </div>
          <span className="text-xs font-black text-[var(--ink)]">
            {steps.success}
          </span>
          <span className="text-[9px] text-[var(--mute)]">
            {steps.regSuccess}
          </span>
        </div>
      ),
    },
  ];

  const currentStep = stepData[current];
  const StepIcon = currentStep.icon;

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slide Card */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[var(--canvas-soft)] rounded-[24px] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Left: Step content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--on-primary)] font-black text-lg">
                    {currentStep.number}
                  </div>
                  <div className="h-px flex-1 bg-[var(--border-subtle)] hidden sm:block" />
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)]">
                  {currentStep.title}
                </h3>
                <p
                  className={`text-sm text-[var(--body)] mt-2 leading-relaxed ${
                    language === "bn" ? "font-bangla" : ""
                  }`}
                >
                  {currentStep.description}
                </p>
              </div>

              {/* Right: Illustration */}
              <div className="sm:w-44 flex items-center justify-center">
                <div className="w-full bg-[var(--canvas)] rounded-2xl border border-[var(--border-subtle)] p-5 flex items-center justify-center min-h-[130px]">
                  {currentStep.illustration}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation: Dots + Arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors cursor-pointer"
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {stepData.map((_, i) => (
            <DotButton
              key={i}
              active={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors cursor-pointer"
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Step indicator text */}
      <p className="text-center text-xs text-[var(--mute)] font-medium mt-3">
        {language === "bn"
          ? `${current + 1} / ${totalSteps}`
          : `Step ${current + 1} of ${totalSteps}`}
      </p>

      {/* Link to full download page */}
      <div className="text-center mt-8">
        <a
          href="/download"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:text-[var(--positive-deep)] transition-colors"
        >
          <Smartphone className="h-4 w-4" />
          {language === "bn"
            ? "বিস্তারিত গাইড দেখুন"
            : "View detailed installation guide"}
        </a>
      </div>
    </div>
  );
}
