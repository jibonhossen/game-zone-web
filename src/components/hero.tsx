import React, { useState, useEffect } from "react";
import { Download, Menu, X, Gamepad2 } from "lucide-react";
import { translations } from "@/lib/translations";
import Link from "next/link";

import Image from "next/image";

interface NavbarProps {
  language: "bn" | "en";
  setLanguage: (lang: "bn" | "en") => void;
}

export default function HeroNavbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav shadow-[var(--shadow-sm)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group py-1"
            onClick={() => scrollToSection("hero")}
            id="nav-logo-container"
          >
            <div className="relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/game-image/fastgamingsplash.png"
                alt="Fast Gaming Logo"
                width={160}
                height={160}
                className="h-11 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm filter brightness-105"
                priority
                loading="eager"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[var(--ink)] block leading-none">
                FAST GAMING
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-[var(--mute)] mt-1 block leading-none font-bangla">
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--body)]">
            <button
              id="nav-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
            <Link
              href="/download"
              id="nav-link-download-page"
              className={`hover:text-[var(--ink)] transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {language === 'bn' ? 'ডাউনলোড নির্দেশিকা' : 'Download Guide'}
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => {
                  setLanguage("bn");
                  localStorage.setItem("lang", "bn");
                }}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                BN
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  localStorage.setItem("lang", "en");
                }}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="nav-btn-download"
              onClick={() => scrollToSection("download")}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--on-primary)] hover:shadow-[var(--shadow-green)] active:scale-95 transition-all duration-300 cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              <Download className="h-4 w-4" />
              <span>{t.navbar.downloadBtn}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="nav-btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-[var(--mute)] hover:bg-[var(--canvas-soft)] hover:text-[var(--ink)] focus:outline-none transition-colors"
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
        <div className="md:hidden bg-[var(--canvas)] border-b border-[var(--border-subtle)] shadow-[var(--shadow-md)] px-4 pt-2 pb-4">
          <div className="flex flex-col gap-3">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--body)] rounded-lg hover:bg-[var(--canvas-soft)] hover:text-[var(--ink)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--body)] rounded-lg hover:bg-[var(--canvas-soft)] hover:text-[var(--ink)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-mobile-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--body)] rounded-lg hover:bg-[var(--canvas-soft)] hover:text-[var(--ink)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
            <Link
              href="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--body)] rounded-lg hover:bg-[var(--canvas-soft)] hover:text-[var(--ink)] transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {language === 'bn' ? 'ডাউনলোড নির্দেশিকা' : 'Download Guide'}
            </Link>

            <hr className="border-[var(--border-subtle)] my-1" />

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between px-3 py-1">
              <span className={`text-sm font-semibold text-[var(--mute)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                {language === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change Language'}
              </span>
              <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-xs">
                <button
                  onClick={() => {
                    setLanguage("bn");
                    localStorage.setItem("lang", "bn");
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                    language === "bn"
                      ? "bg-[var(--primary)] text-[var(--on-primary)]"
                      : "text-[var(--mute)]"
                  }`}
                >
                  BN
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-[var(--primary)] text-[var(--on-primary)]"
                      : "text-[var(--mute)]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              id="nav-mobile-btn-download"
              onClick={() => scrollToSection("download")}
              className={`flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-base font-semibold text-[var(--on-primary)] hover:shadow-[var(--shadow-green)] cursor-pointer transition-all ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              <Download className="h-4.5 w-4.5" />
              <span>{t.navbar.mobileDownloadBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
