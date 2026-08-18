"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { translations } from "@/lib/translations";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { trackWebEvent } from "@/lib/analytics";

interface NavbarProps {
  language: "bn" | "en";
  setLanguage: (lang: "bn" | "en") => void;
  currentPage?: "home" | "download" | "about" | "rules" | "contact" | "terms" | "privacy";
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
    trackWebEvent("navigation_link_clicked", {
      target_link: `/#${sectionId}`,
      link_label: sectionId,
    });
    if (currentPage === "home") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleLanguageChange = (newLang: "bn" | "en") => {
    if (language !== newLang) {
      trackWebEvent("language_switched", {
        from: language,
        to: newLang,
      });
    }
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
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

  const handleDownloadAction = (location: "navbar" | "mobile_menu" = "navbar") => {
    setIsMobileMenuOpen(false);
    trackWebEvent("download_apk_clicked", {
      source_page: currentPage,
      button_location: location,
      language,
      target_url: "https://github.com/jibonhossen/web-fast-gaming/releases/download/apk/fastgamingbd.apk",
    });

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
        "https://github.com/jibonhossen/web-fast-gaming/releases/download/apk/fastgamingbd.apk";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== "home" || isMobileMenuOpen
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
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm filter brightness-105"
                priority
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[var(--ink)] block leading-none">
                FAST GAMING
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[var(--mute)] mt-1 block leading-none font-bangla">
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[var(--body)]">
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
            <Link
              href="/rules"
              className={`hover:text-[var(--ink)] transition-colors ${
                currentPage === "rules" ? "text-[var(--positive-deep)] font-bold" : ""
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.rules}
            </Link>
            <Link
              href="/about"
              className={`hover:text-[var(--ink)] transition-colors ${
                currentPage === "about" ? "text-[var(--positive-deep)] font-bold" : ""
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.about}
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[var(--ink)] transition-colors ${
                currentPage === "contact" ? "text-[var(--positive-deep)] font-bold" : ""
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.contact}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => handleLanguageChange("bn")}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                BN
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
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
              onClick={() => handleDownloadAction("navbar")}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--on-primary)] hover:shadow-[var(--shadow-green)] active:scale-95 transition-all duration-300 cursor-pointer ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              <Download className="h-4 w-4" />
              <span>{t.navbar.downloadBtn}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => handleLanguageChange("bn")}
                className={`px-2 py-0.5 rounded-full font-black transition-all cursor-pointer ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)]"
                }`}
              >
                BN
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-0.5 rounded-full font-black transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)]"
                }`}
              >
                EN
              </button>
            </div>

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
        <div className="lg:hidden bg-[var(--canvas)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-[var(--shadow-lg)] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => handleNavClick("how-to-start")}
              className={`flex items-center px-4 py-2.5 text-base font-semibold text-[var(--ink)] rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => handleNavClick("available-games")}
              className={`flex items-center px-4 py-2.5 text-base font-semibold text-[var(--ink)] rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                language === "bn" ? "font-bangla" : ""
              }`}
            >
              {t.navbar.games}
            </button>
            <Link
              href="/rules"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-2.5 text-base font-semibold rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                currentPage === "rules" ? "bg-[var(--primary-pale)] text-[var(--positive-deep)] font-bold" : "text-[var(--ink)]"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.rules}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-2.5 text-base font-semibold rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                currentPage === "about" ? "bg-[var(--primary-pale)] text-[var(--positive-deep)] font-bold" : "text-[var(--ink)]"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.about}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-2.5 text-base font-semibold rounded-xl hover:bg-[var(--canvas-soft)] text-left transition-colors touch-manipulation ${
                currentPage === "contact" ? "bg-[var(--primary-pale)] text-[var(--positive-deep)] font-bold" : "text-[var(--ink)]"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {t.navbar.contact}
            </Link>
            <Link
              href="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-2.5 text-base font-semibold rounded-xl hover:bg-[var(--canvas-soft)] transition-colors touch-manipulation ${
                currentPage === "download"
                  ? "bg-[var(--primary-pale)] text-[var(--positive-deep)] font-bold"
                  : "text-[var(--ink)]"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              {language === "bn" ? "ডাউনলোড নির্দেশিকা" : "Download Guide"}
            </Link>

            <hr className="border-[var(--border-subtle)] my-2" />

            <button
              id="nav-mobile-btn-download"
              onClick={() => handleDownloadAction("mobile_menu")}
              className={`flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 px-6 text-base font-bold text-[var(--on-primary)] shadow-[var(--shadow-green)] active:scale-98 cursor-pointer transition-all touch-manipulation ${
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
