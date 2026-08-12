"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { translations } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarProps {
  language: "bn" | "en";
  setLanguage: (lang: "bn" | "en") => void;
  currentPage?: "home" | "download";
  onDownloadClick?: () => void;
}

export default function Navbar({
  language,
  setLanguage,
  currentPage = "home",
  onDownloadClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage === "home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (currentPage === "home") {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  const handleDownloadAction = () => {
    setIsMobileMenuOpen(false);
    if (onDownloadClick) {
      onDownloadClick();
    } else {
      let iframe = document.getElementById("download-iframe") as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "download-iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }
      iframe.src =
        "https://github.com/jibonhossen/game-zone-web/releases/download/apk/gamezonebd.apk";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage === "download" || isMobileMenuOpen
          ? "glass-nav shadow-[var(--shadow-sm)] border-b border-[var(--border-subtle)]/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group py-1 select-none"
            onClick={handleLogoClick}
            id="nav-logo-container"
          >
            <div className="relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/game-image/fastgamingsplash.png"
                alt="Fast Gaming Logo"
                width={160}
                height={160}
                className="h-10 sm:h-13 md:h-15 w-auto object-contain drop-shadow-sm filter brightness-105"
                priority
                loading="eager"
              />
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-[var(--ink)] block leading-none">
                FAST GAMING
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[var(--mute)] mt-1 block leading-none font-bangla">
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold text-[var(--body)]">
            <button
              id="nav-link-how-to-start"
              onClick={() => handleNavClick("how-to-start")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-link-available-games"
              onClick={() => handleNavClick("available-games")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => handleNavClick("why-us")}
              className={`hover:text-[var(--ink)] transition-colors cursor-pointer ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.features}
            </button>
            <Link
              href="/download"
              id="nav-link-download-page"
              className={`hover:text-[var(--ink)] transition-colors ${
                currentPage === "download"
                  ? "text-[var(--positive-deep)] font-bold"
                  : ""
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {language === "bn" ? "ডাউনলোড নির্দেশিকা" : "Download Guide"}
            </Link>
          </nav>

          {/* Desktop Actions */}
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
                    ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
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
                    ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="nav-btn-download"
              onClick={handleDownloadAction}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--on-primary)] hover:shadow-[var(--shadow-green)] active:scale-95 transition-all duration-300 cursor-pointer ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              <Download className="h-4 w-4" />
              <span>{t.navbar.downloadBtn}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Compact Language Switcher for Mobile Header Bar */}
            <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => {
                  setLanguage("bn");
                  localStorage.setItem("lang", "bn");
                }}
                className={`px-2 py-0.5 rounded-full font-black transition-all cursor-pointer ${
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
                className={`px-2 py-0.5 rounded-full font-black transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)]"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              id="nav-btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="rounded-xl p-2.5 text-[var(--ink)] hover:bg-[var(--canvas-soft)] active:bg-[var(--border-subtle)] focus:outline-none transition-colors touch-manipulation"
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

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--canvas)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[var(--shadow-lg)] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => handleNavClick("how-to-start")}
              className={`flex items-center px-4 py-3 text-base font-semibold text-[var(--ink)] rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => handleNavClick("available-games")}
              className={`flex items-center px-4 py-3 text-base font-semibold text-[var(--ink)] rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-mobile-link-why-us"
              onClick={() => handleNavClick("why-us")}
              className={`flex items-center px-4 py-3 text-base font-semibold text-[var(--ink)] rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.features}
            </button>
            <Link
              href="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-3 text-base font-semibold rounded-xl hover:bg-[var(--canvas-soft)] transition-colors touch-manipulation ${
                currentPage === "download"
                  ? "bg-[var(--primary-pale)] text-[var(--positive-deep)] font-bold"
                  : "text-[var(--ink)]"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {language === "bn" ? "ডাউনলোড নির্দেশিকা" : "Download Guide"}
            </Link>

            <hr className="border-[var(--border-subtle)] my-2" />

            {/* Mobile Drawer Language Switcher */}
            <div className="flex items-center justify-between px-4 py-2 bg-[var(--canvas-soft)] rounded-xl">
              <span
                className={`text-sm font-bold text-[var(--body)] ${
                  language === "bn" ? "font-bangla" : ""
                }`}
              >
                {language === "bn" ? "ভাষা / Language" : "Language"}
              </span>
              <div className="flex items-center gap-1 bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-full p-1 text-xs">
                <button
                  onClick={() => {
                    setLanguage("bn");
                    localStorage.setItem("lang", "bn");
                  }}
                  className={`px-3 py-1.5 rounded-full font-black transition-all cursor-pointer touch-manipulation ${
                    language === "bn"
                      ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                      : "text-[var(--mute)]"
                  }`}
                >
                  বাংলা (BN)
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className={`px-3 py-1.5 rounded-full font-black transition-all cursor-pointer touch-manipulation ${
                    language === "en"
                      ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                      : "text-[var(--mute)]"
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <button
              id="nav-mobile-btn-download"
              onClick={handleDownloadAction}
              className={`mt-2 flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] py-3.5 px-6 text-base font-bold text-[var(--on-primary)] shadow-[var(--shadow-green)] active:scale-98 cursor-pointer transition-all touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              <Download className="h-5 w-5" />
              <span>{t.navbar.mobileDownloadBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
