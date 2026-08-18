"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FolderDown,
  ShieldAlert,
  CheckCircle2,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  ZoomIn,
  X,
  MousePointerClick,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

interface StepItem {
  id: number;
  number: string;
  icon: React.ElementType;
  shortLabel: string;
  title: string;
  description: string;
  actionText: string;
  imageSrc: string;
  imageAlt: string;
  highlightNote: string;
}

interface HowToStartCarouselProps {
  language: "bn" | "en";
  steps: {
    step1Title?: string;
    step1Desc?: string;
    step1Action?: string;
    step2Title?: string;
    step2Desc?: string;
    step2Action?: string;
    step3Title?: string;
    step3Desc?: string;
    step3Action?: string;
    step4Title?: string;
    step4Desc?: string;
    step4Action?: string;
    step5Title?: string;
    step5Desc?: string;
    step5Action?: string;
    warningAlert?: string;
    harmfulText?: string;
    anywayBtn?: string;
    securitySettings?: string;
    allowSource?: string;
    success?: string;
    regSuccess?: string;
  };
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function HowToStartCarousel({
  language,
  steps,
}: HowToStartCarouselProps) {
  const [[current, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSteps = 5;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSteps - 1));
      setPage([clamped, clamped > current ? 1 : -1]);
    },
    [current]
  );

  const next = useCallback(() => {
    const nextIdx = current + 1 >= totalSteps ? 0 : current + 1;
    setPage([nextIdx, 1]);
  }, [current, totalSteps]);

  const prev = useCallback(() => {
    const prevIdx = current - 1 < 0 ? totalSteps - 1 : current - 1;
    setPage([prevIdx, -1]);
  }, [current, totalSteps]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused || lightboxImage) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      next();
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, lightboxImage, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === "Escape") setLightboxImage(null);
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, lightboxImage]);

  const stepData: StepItem[] = [
    {
      id: 0,
      number: language === "bn" ? "১" : "1",
      icon: Download,
      shortLabel: language === "bn" ? "ডাউনলোড" : "Download",
      title:
        steps.step1Title ||
        (language === "bn" ? "ডাউনলোড নিশ্চিত করুন" : "Confirm Download"),
      description:
        steps.step1Desc ||
        (language === "bn"
          ? "ডাউনলোড বাটনে ক্লিক করার পর ব্রাউজারে সতর্কবার্তা এলে লাল তীর চিহ্নিত 'Download anyway' বাটনে চাপুন।"
          : "When downloading, tap 'Download anyway' on the browser prompt indicated by the red arrow."),
      actionText:
        steps.step1Action ||
        (language === "bn"
          ? "ট্যাপ করুন 'Download anyway'"
          : "Tap 'Download anyway'"),
      imageSrc: "/how-to-start/image1.png",
      imageAlt: "Step 1 - Download anyway prompt",
      highlightNote:
        language === "bn"
          ? "অফিসিয়াল ফাইল • ১০০% নিরাপদ ও ভাইরাস-মুক্ত"
          : "Official Secure Package • 100% Virus-Free",
    },
    {
      id: 1,
      number: language === "bn" ? "২" : "2",
      icon: FolderDown,
      shortLabel: language === "bn" ? "ফাইল ওপেন" : "Open APK",
      title:
        steps.step2Title ||
        (language === "bn" ? "ফাইলটি ওপেন করুন" : "Open Downloaded File"),
      description:
        steps.step2Desc ||
        (language === "bn"
          ? "ডাউনলোড সম্পন্ন হলে ব্রাউজারের নোটিফিকেশন বা Downloads ফোল্ডার থেকে 'fastgamingbd.apk' ফাইলটি ওপেন করুন।"
          : "Once downloaded, tap on 'fastgamingbd.apk' in your Downloads list or notification bar to start install."),
      actionText:
        steps.step2Action ||
        (language === "bn"
          ? "ওপেন করুন 'fastgamingbd.apk'"
          : "Open 'fastgamingbd.apk'"),
      imageSrc: "/how-to-start/image2.png",
      imageAlt: "Step 2 - Open fastgamingbd.apk from Downloads",
      highlightNote:
        language === "bn"
          ? "ফাইল সাইজ: ~48.5 MB • নোটিফিকেশনে পাবেন"
          : "Package Size: ~48.5 MB • Found in notifications",
    },
    {
      id: 2,
      number: language === "bn" ? "৩" : "3",
      icon: ShieldAlert,
      shortLabel: language === "bn" ? "More details" : "More details",
      title:
        steps.step3Title ||
        (language === "bn"
          ? "Play Protect অপশন খুলুন"
          : "Expand Play Protect Options"),
      description:
        steps.step3Desc ||
        (language === "bn"
          ? "Google Play Protect ব্লক স্ক্রিন দেখালে চিন্তার কিছু নেই। লাল তীর নির্দেশিত 'More details' অপশনে ক্লিক করুন।"
          : "If Google Play Protect displays a blocked popup, tap 'More details' pointed by the red arrow to expand options."),
      actionText:
        steps.step3Action ||
        (language === "bn"
          ? "ক্লিক করুন 'More details'"
          : "Tap 'More details'"),
      imageSrc: "/how-to-start/image3.png",
      imageAlt: "Step 3 - Play Protect More details",
      highlightNote:
        language === "bn"
          ? "প্লে স্টোরের বাইরের অ্যাপে এটি সাধারণ নিয়ম"
          : "Standard Android prompt for third-party APKs",
    },
    {
      id: 3,
      number: language === "bn" ? "৪" : "4",
      icon: CheckCircle2,
      shortLabel: language === "bn" ? "Install anyway" : "Install anyway",
      title:
        steps.step4Title ||
        (language === "bn" ? "ইনস্টলেশন নিশ্চিত করুন" : "Install Anyway"),
      description:
        steps.step4Desc ||
        (language === "bn"
          ? "অপশন প্রসারিত হলে লাল তীর নির্দেশিত 'Install anyway' বাটনে চাপ দিন এবং ইনস্টল সম্পন্ন হতে দিন।"
          : "Tap 'Install anyway' highlighted by the red arrow to proceed with the app installation."),
      actionText:
        steps.step4Action ||
        (language === "bn"
          ? "চাপুন 'Install anyway'"
          : "Tap 'Install anyway'"),
      imageSrc: "/how-to-start/image4.png",
      imageAlt: "Step 4 - Tap Install anyway",
      highlightNote:
        language === "bn"
          ? "ইনস্টলেশন সাথে সাথে শুরু হয়ে যাবে"
          : "Installation begins immediately",
    },
    {
      id: 4,
      number: language === "bn" ? "৫" : "5",
      icon: Gamepad2,
      shortLabel: language === "bn" ? "ওপেন ও খেলা" : "Open & Play",
      title:
        steps.step5Title ||
        (language === "bn"
          ? "অ্যাপ ওপেন ও খেলা শুরু করুন"
          : "Open & Start Playing"),
      description:
        steps.step5Desc ||
        (language === "bn"
          ? "অ্যাপ ইনস্টল সম্পন্ন হলে 'Open' বাটনে চাপুন। অ্যাকাউন্ট রেজিস্টার করে সরাসরি টুর্নামেন্টে যোগ দিন!"
          : "Installation complete! Tap 'Open' to launch Fast Gaming, register your account, and join cash tournaments."),
      actionText:
        steps.step5Action ||
        (language === "bn" ? "চাপুন 'Open' বাটন" : "Tap 'Open' & Play"),
      imageSrc: "/how-to-start/image5.png",
      imageAlt: "Step 5 - App installed Open button",
      highlightNote:
        language === "bn"
          ? "ডেইলি ক্যাশ টুর্নামেন্ট ও ইনস্ট্যান্ট পেআউট"
          : "Daily Cash Tournaments & Instant Payouts",
    },
  ];

  const currentStep = stepData[current];
  const nextStep = stepData[(current + 1) % totalSteps];

  return (
    <div
      className="relative mx-auto max-w-5xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Connected Stepper Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative max-w-2xl mx-auto px-4">
          {/* Background Track Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-[var(--border-subtle)] z-0 rounded-full" />
          {/* Active Track Fill */}
          <div
            className="absolute top-1/2 left-8 -translate-y-1/2 h-1 bg-[var(--primary)] z-0 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `calc(${(current / (totalSteps - 1)) * 100}% * (1 - 64px / 100%))`,
              maxWidth: "calc(100% - 64px)",
            }}
          />

          {stepData.map((step, i) => {
            const isCurrent = i === current;
            const isCompleted = i < current;

            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative z-10 flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
                aria-label={`Go to step ${i + 1}`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full font-black text-sm sm:text-base transition-all duration-300 ${
                    isCurrent
                      ? "bg-[var(--primary)] text-[var(--on-primary)] scale-110 shadow-[var(--shadow-green)] ring-4 ring-[var(--primary-pale)]"
                      : isCompleted
                      ? "bg-[var(--positive-deep)] text-white"
                      : "bg-[var(--canvas-soft)] text-[var(--mute)] border-2 border-[var(--border-subtle)] group-hover:border-[var(--ink)] group-hover:text-[var(--ink)]"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 stroke-[3]" />
                  ) : (
                    step.number
                  )}
                </div>

                <span
                  className={`text-[11px] sm:text-xs font-bold tracking-tight transition-colors hidden sm:block ${
                    isCurrent
                      ? "text-[var(--ink)] font-black"
                      : "text-[var(--mute)] group-hover:text-[var(--body)]"
                  } ${language === "bn" ? "font-bangla" : ""}`}
                >
                  {step.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Step Showcase Card */}
      <div className="bg-[var(--canvas-soft)] rounded-[32px] border border-[var(--border-subtle)] shadow-[var(--shadow-sm)] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-5 sm:p-8 lg:p-10"
          >
            {/* Split layout: Text on Left (or Top on mobile), Big Screenshot on Right */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* LEFT / TOP: Step Details & Interactive Guidance */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  {/* Step Chip & Live Badge */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-black text-xs shadow-xs">
                      <span>{language === "bn" ? `ধাপ ${currentStep.number} / ৫` : `Step ${currentStep.number} of 5`}</span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3 py-1 rounded-full border border-[var(--primary)]/30">
                      {currentStep.shortLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight leading-snug ${
                      language === "bn" ? "font-bangla" : ""
                    }`}
                  >
                    {currentStep.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-base sm:text-lg text-[var(--body)] mt-3 leading-relaxed ${
                      language === "bn" ? "font-bangla" : ""
                    }`}
                  >
                    {currentStep.description}
                  </p>

                  {/* Key Action Callout Box */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[var(--canvas)] border-2 border-[var(--primary)]/40 shadow-xs">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--on-primary)] flex-shrink-0 shadow-xs">
                        <MousePointerClick className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-black uppercase tracking-wider text-[var(--positive-deep)] block">
                          {language === "bn"
                            ? "স্ক্রিনশটে কি করবেন:"
                            : "Target Action on Screen:"}
                        </span>
                        <p
                          className={`text-base sm:text-lg font-black text-[var(--ink)] mt-0.5 ${
                            language === "bn" ? "font-bangla" : ""
                          }`}
                        >
                          {currentStep.actionText}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-xs font-semibold text-[var(--mute)]">
                      <Sparkles className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />
                      <span>{currentStep.highlightNote}</span>
                    </div>
                  </div>
                </div>

                {/* Next / Prev Navigation Controls */}
                <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--border-subtle)]">
                  <button
                    onClick={prev}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--canvas)] border border-[var(--border-subtle)] text-[var(--body)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-all cursor-pointer shadow-xs active:scale-95"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={next}
                    className={`flex-1 flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] text-[var(--on-primary)] font-black text-sm sm:text-base shadow-[var(--shadow-green)] hover:shadow-md transition-all cursor-pointer active:scale-98 ${
                      language === "bn" ? "font-bangla" : ""
                    }`}
                  >
                    <span>
                      {current === totalSteps - 1
                        ? language === "bn"
                          ? "প্রথম ধাপে যান ↺"
                          : "Restart Guide ↺"
                        : language === "bn"
                        ? `পরবর্তী ধাপ: ${nextStep.shortLabel} →`
                        : `Next Step: ${nextStep.shortLabel} →`}
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  </button>
                </div>
              </div>

              {/* RIGHT / CENTER: High-Impact Phone Mockup with Large Screenshot */}
              <div className="w-full lg:w-5/12 flex flex-col items-center justify-center order-1 lg:order-2">
                <div
                  className="group relative cursor-pointer"
                  onClick={() => setLightboxImage(currentStep.imageSrc)}
                  title={
                    language === "bn"
                      ? "স্ক্রিনশটটি বড় করে দেখতে ক্লিক করুন"
                      : "Click to zoom screenshot"
                  }
                >
                  {/* Outer Glow Ring on Hover */}
                  <div className="absolute -inset-2 bg-[var(--primary)]/20 rounded-[38px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Smartphone Bezel */}
                  <div className="relative rounded-[32px] sm:rounded-[36px] p-2 sm:p-2.5 bg-[#0e0f0c] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-[3px] border-[#252822] transition-transform duration-300 group-hover:scale-[1.02]">
                    
                    {/* Top Notch Pill */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-14 bg-[#232620] rounded-full z-20 pointer-events-none" />

                    {/* Prominent Screen Container (Wide and High-Resolution) */}
                    <div className="relative w-[260px] sm:w-[290px] md:w-[310px] aspect-[9/19.8] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#121212]">
                      <Image
                        src={currentStep.imageSrc}
                        alt={currentStep.imageAlt}
                        fill
                        sizes="(max-width: 640px) 260px, (max-width: 768px) 290px, 310px"
                        priority={true}
                        className="object-cover object-top select-none"
                      />

                      {/* Hover Zoom Prompt Badge */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white z-10 p-4 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/40 shadow-lg">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xs font-bold tracking-wide bg-black/60 px-3 py-1 rounded-full">
                          {language === "bn"
                            ? "ফুলস্ক্রিন জুম করুন"
                            : "Click to Zoom Fullscreen"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Helper Caption */}
                  <p className="text-center text-xs font-semibold text-[var(--mute)] mt-3 flex items-center justify-center gap-1.5">
                    <ZoomIn className="h-3.5 w-3.5 text-[var(--primary)]" />
                    <span>
                      {language === "bn"
                        ? "স্ক্রিনশট বড় করে দেখতে ক্লিক করুন"
                        : "Click screenshot to expand"}
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Five-Step Thumbnail Grid Overview (See All 5 Steps at a Glance) */}
      <div className="mt-8">
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--mute)]">
            {language === "bn"
              ? "— এক নজরে সম্পূর্ণ ৫টি ধাপ —"
              : "— All 5 Installation Steps At A Glance —"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {stepData.map((step, i) => {
            const isCurrent = i === current;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                  isCurrent
                    ? "bg-[var(--canvas)] border-[var(--primary)] shadow-[var(--shadow-sm)] ring-2 ring-[var(--primary)]"
                    : "bg-[var(--canvas-soft)] border-[var(--border-subtle)] hover:bg-[var(--canvas)] hover:border-[var(--mute)]"
                }`}
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${
                      isCurrent
                        ? "bg-[var(--primary)] text-[var(--on-primary)]"
                        : "bg-[var(--border-subtle)] text-[var(--body)]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold text-[var(--mute)] uppercase">
                    {step.shortLabel}
                  </span>
                </div>

                {/* Mini Thumbnail */}
                <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden bg-black mb-2 border border-black/10">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="120px"
                    className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>

                <span
                  className={`text-[11px] font-bold leading-tight text-center line-clamp-1 ${
                    isCurrent ? "text-[var(--ink)]" : "text-[var(--mute)]"
                  } ${language === "bn" ? "font-bangla" : ""}`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Call-to-Action Link */}
      <div className="text-center mt-10">
        <a
          href="/download"
          className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-95 text-[var(--on-primary)] font-black text-sm sm:text-base px-8 py-3.5 shadow-[var(--shadow-green)] hover:shadow-lg transition-all duration-300 ${
            language === "bn" ? "font-bangla" : ""
          }`}
        >
          <Smartphone className="h-5 w-5 flex-shrink-0" />
          <span>
            {language === "bn"
              ? "অ্যাপ ডাউনলোড করুন (APK) →"
              : "Download Fast Gaming App (APK) →"}
          </span>
        </a>
      </div>

      {/* 5. Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full max-h-[92vh] flex flex-col items-center cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Full Image Container */}
              <div className="relative w-full aspect-[9/19.5] max-h-[82vh] rounded-[28px] overflow-hidden border-[3px] border-white/20 shadow-2xl bg-black">
                <Image
                  src={lightboxImage}
                  alt="Step screenshot full view"
                  fill
                  className="object-contain select-none"
                  sizes="(max-width: 768px) 90vw, 450px"
                  priority
                />
              </div>

              <p className="text-white/80 text-xs font-medium mt-3 text-center">
                {language === "bn"
                  ? "বন্ধ করতে যেকোনো জায়গায় ট্যাপ করুন অথবা ESC চাপুন"
                  : "Click anywhere outside or press ESC to close"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
