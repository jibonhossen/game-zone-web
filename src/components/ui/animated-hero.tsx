import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ui/ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[var(--background)]" />
  ),
});

interface HeroProps {
  language?: "bn" | "en";
  onDownloadClick?: () => void;
}

function Hero({ language = "bn", onDownloadClick }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  
  const t = translations[language];

  const titles = useMemo(
    () => t.hero.adjectives,
    [t.hero.adjectives]
  );

  useEffect(() => {
    setTitleNumber(0);
  }, [language]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <div className="w-full bg-[var(--background)] relative overflow-hidden min-h-[90vh] flex items-center" id="hero-section">
      {/* Three.js 3D Background */}
      <ThreeScene />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)] pointer-events-none z-[1]" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none z-[1]" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-16 lg:py-28 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              id="hero-badge-pill"
              variant="secondary" 
              size="sm" 
              className={`gap-2 font-semibold bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border-bright)] text-[var(--primary)] rounded-full px-4.5 py-1 shadow-[var(--glow-sm)] ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.hero.badge} <MoveRight className="w-4 h-4 text-[var(--primary)]" />
            </Button>
          </motion.div>
          
          <div className="flex gap-4 flex-col items-center max-w-4xl">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-[var(--foreground)] leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Screen-reader keywords for Search Engine Optimization */}
              <span className="sr-only">
                Fast Gaming Free Fire Tournament PUBG Mobile Tournament Ludo Cash Game Tournaments Bangladesh Fast Gaming BD
              </span>
              
              <span className={`block mb-2 text-[var(--muted-foreground)] text-xl sm:text-3xl font-bold uppercase tracking-wider leading-normal py-1 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.bangladeshMost}
              </span>
              
              <span className="relative flex w-full justify-center items-center overflow-hidden text-center h-[72px] sm:h-[105px] md:h-[125px]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute inset-0 flex justify-center items-center font-black leading-normal ${language === 'bn' ? 'font-bangla' : ''}`}
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                  >
                    <span className="text-[var(--primary)] drop-shadow-[0_0_30px_rgba(159,232,112,0.4)] py-2">
                      {title}
                    </span>
                  </motion.span>
                ))}
              </span>
              
              <span className={`block text-[var(--foreground)] font-black mt-1 leading-[1.3] pt-4 pb-2 -mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.gamingPlatform}
              </span>
            </motion.h1>

            <motion.p 
              className={`text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-[var(--muted-foreground)] max-w-2xl text-center font-medium mt-6 ${language === 'bn' ? 'font-bangla' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              id="hero-btn-download"
              size="lg" 
              className={`gap-2 w-full sm:w-auto font-bold rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] cursor-pointer py-6.5 px-8 shadow-[var(--glow-lg)] hover:shadow-[var(--glow-xl)] active:scale-95 transition-all duration-300 ${language === 'bn' ? 'font-bangla' : ''}`}
              onClick={onDownloadClick}
            >
              <Download className="w-5 h-5 text-[var(--primary-foreground)]" /> {t.hero.downloadBtn}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
