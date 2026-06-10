"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export default function HeroNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-zinc-100 bg-white/90 backdrop-blur-md shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              K
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-zinc-900 font-english block leading-none">
                KOMBAT
              </span>
              <span className="text-[10px] text-zinc-400 font-bangla font-semibold mt-0.5 block leading-none">
                প্রিমিয়াম গেমিং অভিজ্ঞতা
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500">
            <button
              onClick={() => scrollToSection("how-to-start")}
              className="hover:text-blue-600 transition-colors font-bangla"
            >
              কিভাবে শুরু করবেন?
            </button>
            <button
              onClick={() => scrollToSection("how-to-play")}
              className="hover:text-blue-600 transition-colors font-bangla"
            >
              কিভাবে খেলবেন?
            </button>
            <button
              onClick={() => scrollToSection("available-games")}
              className="hover:text-blue-600 transition-colors font-bangla"
            >
              গেমস সমূহ
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="hover:text-blue-600 transition-colors font-bangla"
            >
              আমাদের সুবিধাসমূহ
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("download")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-bangla"
            >
              <Download className="h-4 w-4 text-zinc-300" />
              <span>অ্যাপ ডাউনলোড</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-150 bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("how-to-start")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-zinc-600 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 font-bangla"
            >
              কিভাবে শুরু করবেন?
            </button>
            <button
              onClick={() => scrollToSection("how-to-play")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-zinc-600 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 font-bangla"
            >
              কিভাবে খেলবেন?
            </button>
            <button
              onClick={() => scrollToSection("available-games")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-zinc-600 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 font-bangla"
            >
              গেমস সমূহ
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-zinc-600 rounded-lg hover:bg-zinc-50 hover:text-zinc-950 font-bangla"
            >
              আমাদের সুবিধাসমূহ
            </button>
            <hr className="border-zinc-100 my-1" />
            <button
              onClick={() => scrollToSection("download")}
              className="flex items-center justify-center gap-2 rounded-xl bg-zinc-950 py-3 text-base font-semibold text-white shadow-sm hover:bg-zinc-900 font-bangla"
            >
              <Download className="h-4.5 w-4.5 text-zinc-300" />
              <span>অ্যাপ ডাউনলোড করুন</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
