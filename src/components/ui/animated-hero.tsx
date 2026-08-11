import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, MoveRight, Smartphone } from "lucide-react";
import { translations } from "@/lib/translations";

interface HeroProps {
  language?: "bn" | "en";
  onDownloadClick?: () => void;
}

function Hero({ language = "bn", onDownloadClick }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const t = translations[language];
  const titles = t.hero.adjectives;

  const prevLangRef = useRef(language);

  useEffect(() => {
    if (prevLangRef.current !== language) {
      prevLangRef.current = language;
      setTitleNumber(0);
      return;
    }
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length, language]);

  return (
    <div className="w-full bg-[var(--canvas-soft)] relative overflow-hidden min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] flex items-center justify-center py-10" id="hero-section">
      {/* Soft lime radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 [background-image:radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(159,232,112,0.22),transparent_70%)]"
      />

      {/* Faint grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 [background-image:linear-gradient(to_right,rgba(14,15,12,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,15,12,0.035)_1px,transparent_1px)] [background-size:64px_56px]"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--canvas-soft)]/80 via-transparent to-[var(--canvas-soft)] pointer-events-none z-[1]" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-8 py-8 sm:py-12 lg:py-16 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[var(--primary)] via-emerald-400 to-[var(--primary)] blur-lg opacity-50 group-hover:opacity-90 transition duration-500" />
              <div className="relative bg-[var(--canvas)] p-4 sm:p-6 rounded-3xl border border-[var(--border-subtle)] shadow-[var(--shadow-md)] flex items-center justify-center">
                <Image
                  src="/game-image/fastgamingsplash.png"
                  alt="Fast Gaming Splash Logo"
                  width={280}
                  height={280}
                  className="h-36 sm:h-48 md:h-56 lg:h-64 w-auto object-contain rounded-2xl drop-shadow-md scale-105 group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <span className="inline-flex items-center gap-2 font-semibold text-sm text-[var(--body)] bg-[var(--canvas)] px-4 py-1.5 rounded-full border border-[var(--border-subtle)] shadow-xs">
              <Smartphone className="w-4 h-4 text-[var(--primary)]" />
              {t.hero.badge}
              <MoveRight className="w-4 h-4 text-[var(--mute)]" />
            </span>
          </motion.div>

          <div className="flex gap-4 flex-col items-center max-w-4xl">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center text-[var(--ink)] leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="sr-only">
                Fast Gaming Free Fire Tournament PUBG Mobile Tournament Ludo Cash Game Tournaments Bangladesh Fast Gaming BD
              </span>

              <span className={`block mb-4 text-[var(--body)] text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.bangladeshMost}
              </span>

              <span className="relative block min-h-[1.25em] overflow-visible my-1 sm:my-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleNumber}
                    className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[var(--positive-deep)] leading-[1.1] ${language === 'bn' ? 'font-bangla' : ''}`}
                    initial={{ opacity: 0, y: "0.35em" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-0.35em" }}
                    transition={{ type: "spring", stiffness: 110, damping: 18 }}
                  >
                    {titles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className={`block text-[var(--ink)] mt-1 leading-[1.2] pt-2 pb-2 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.gamingPlatform}
              </span>
            </motion.h1>

            <motion.p
              className={`text-sm sm:text-base md:text-lg leading-relaxed text-[var(--body)] max-w-2xl text-center font-medium mt-4 ${language === 'bn' ? 'font-bangla' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              id="hero-btn-download"
              onClick={onDownloadClick}
              className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-95 text-[var(--on-primary)] font-semibold text-base px-8 py-3.5 shadow-[var(--shadow-green)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer w-full sm:w-auto ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              <Download className="w-5 h-5" />
              {t.hero.downloadBtn}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };