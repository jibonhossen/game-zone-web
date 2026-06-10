"use client";

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
    <div className="w-full bg-white relative overflow-hidden">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f4_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f4_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-16 lg:py-28 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-2 font-bangla font-semibold bg-blue-50 border border-blue-100/50 text-blue-700 rounded-full px-4.5 py-1">
              প্রিমিয়াম গেমিং অভিজ্ঞতা <MoveRight className="w-4 h-4 text-blue-500" />
            </Button>
          </div>
          
          <div className="flex gap-4 flex-col items-center max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-center text-zinc-900 leading-none tracking-tight">
              <span className="block font-bangla mb-2 text-zinc-400 text-xl sm:text-3xl font-bold uppercase tracking-wider">
                বাংলাদেশের সবচেয়ে
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[52px] sm:h-[72px] md:h-[84px] py-1">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bangla"
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
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block font-bangla bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-black mt-1">
                গেমিং প্ল্যাটফর্ম
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed tracking-tight text-zinc-500 max-w-2xl text-center font-bangla font-medium mt-6">
              Kombat অ্যাপের মাধ্যমে খেলুন আপনার প্রিয় গেমস এবং জিতে নিন আকর্ষণীয় সব প্রাইজ। নিরাপদ ও বিশ্বস্ত টুর্নামেন্ট প্ল্যাটফর্মে জয়েন করুন আজই।
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center pt-2">
            <Button 
              size="lg" 
              className="gap-2 w-full sm:w-auto font-bangla font-bold rounded-2xl bg-blue-600 hover:bg-blue-700 text-white cursor-pointer py-6.5 px-8 shadow-lg shadow-blue-500/25 active:scale-95 transition-all duration-200"
              onClick={onDownloadClick}
            >
              <Download className="w-5 h-5 text-blue-100" /> অ্যাপ ডাউনলোড করুন
            </Button>
            <Button 
              size="lg" 
              className="gap-2 w-full sm:w-auto font-bangla font-bold rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 cursor-pointer py-6.5 px-8 shadow-2xs active:scale-95 transition-all duration-200" 
              variant="outline"
              onClick={onHowToPlayClick}
            >
              <Play className="w-4.5 h-4.5 text-zinc-400 fill-zinc-400" /> কিভাবে খেলবেন দেখুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
