import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onDownloadClick?: () => void;
  onHowToPlayClick?: () => void;
}

function Hero({ onDownloadClick, onHowToPlayClick }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["নিরাপদ", "বিশ্বস্ত", "অটোমেটেড", "প্রিমিয়াম", "সেরা"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-[var(--background)] relative overflow-hidden" id="hero-section">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,15,12,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,15,12,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-16 lg:py-28 items-center justify-center flex-col">
          <div>
            <Button 
              id="hero-badge-pill"
              variant="secondary" 
              size="sm" 
              className="gap-2 font-bangla font-semibold bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] rounded-full px-4.5 py-1"
            >
              প্রিমিয়াম গেমিং অভিজ্ঞতা <MoveRight className="w-4 h-4 text-[var(--foreground)]" />
            </Button>
          </div>
          
          <div className="flex gap-4 flex-col items-center max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-[var(--foreground)] leading-none tracking-tight">
              <span className="block font-bangla mb-2 text-[var(--muted-foreground)] text-xl sm:text-3xl font-bold uppercase tracking-wider">
                বাংলাদেশের সবচেয়ে
              </span>
              <span className="relative flex w-full justify-center items-center overflow-hidden text-center h-[60px] sm:h-[90px] md:h-[110px]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute inset-0 flex justify-center items-center font-black font-bangla"
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
                    <span className="bg-gradient-to-r from-emerald-700 to-[var(--foreground)] bg-clip-text text-transparent pb-1">
                      {title}
                    </span>
                  </motion.span>
                ))}
              </span>
              <span className="block font-bangla bg-gradient-to-r from-emerald-700 to-[var(--foreground)] bg-clip-text text-transparent font-black mt-1">
                গেমিং প্ল্যাটফর্ম
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-[var(--muted-foreground)] max-w-2xl text-center font-bangla font-medium mt-6">
              Game Zone অ্যাপের মাধ্যমে খেলুন আপনার প্রিয় গেমস এবং জিতে নিন আকর্ষণীয় সব প্রাইজ। নিরাপদ ও বিশ্বস্ত টুর্নামেন্ট প্ল্যাটফর্মে জয়েন করুন আজই।
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center pt-2">
            <Button 
              id="hero-btn-download"
              size="lg" 
              className="gap-2 w-full sm:w-auto font-bangla font-bold rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--primary-foreground)] cursor-pointer py-6.5 px-8 shadow-sm active:scale-95 transition-all duration-200"
              onClick={onDownloadClick}
            >
              <Download className="w-5 h-5 text-[var(--primary-foreground)]" /> অ্যাপ ডাউনলোড করুন
            </Button>
            <Button 
              id="hero-btn-how-to-play"
              size="lg" 
              className="gap-2 w-full sm:w-auto font-bangla font-bold rounded-full border border-[var(--foreground)] bg-[var(--card)] hover:bg-[var(--background)] text-[var(--foreground)] cursor-pointer py-6.5 px-8 shadow-xs active:scale-95 transition-all duration-200" 
              variant="outline"
              onClick={onHowToPlayClick}
            >
              <Play className="w-4.5 h-4.5 text-[var(--foreground)] fill-[var(--foreground)]" /> কিভাবে খেলবেন দেখুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


export { Hero };


