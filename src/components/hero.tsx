import React, { useState, useEffect } from "react";
import { Download, Menu, X, Gamepad2 } from "lucide-react";
import { translations } from "@/lib/translations";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-dark-heavy shadow-lg shadow-black/20 border-b border-[var(--border-bright)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
            id="nav-logo-container"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--glow-md)] group-hover:shadow-[var(--glow-lg)] group-hover:scale-105 transition-all duration-300">
              <Gamepad2 className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-[var(--foreground)] font-english block leading-none">
                FAST GAMING
              </span>
              <span className="text-[10px] text-[var(--muted-foreground)] font-semibold mt-0.5 block leading-none font-bangla">
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--muted-foreground)]">
            <button
              id="nav-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`hover:text-[var(--primary)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`hover:text-[var(--primary)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`hover:text-[var(--primary)] transition-colors cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--border)] rounded-full p-0.5 text-[10px] shadow-3xs">
              <button
                onClick={() => {
                  setLanguage("bn");
                  localStorage.setItem("lang", "bn");
                }}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--glow-sm)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
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
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--glow-sm)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="nav-btn-download"
              onClick={() => scrollToSection("download")}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-[var(--glow-md)] hover:shadow-[var(--glow-lg)] active:scale-95 transition-all duration-300 cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
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
              className="rounded-lg p-2 text-[var(--muted-foreground)] hover:bg-[var(--card)] hover:text-[var(--foreground)] focus:outline-none transition-colors"
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
        <div className="md:hidden glass-dark-heavy px-4 pt-2 pb-4 shadow-lg border-b border-[var(--border-bright)]">
          <div className="flex flex-col gap-3">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--card)] hover:text-[var(--primary)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--card)] hover:text-[var(--primary)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-mobile-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--card)] hover:text-[var(--primary)] text-left transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
            
            <hr className="border-[var(--border)] my-1" />
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between px-3 py-1">
              <span className={`text-sm font-semibold text-[var(--muted-foreground)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                {language === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change Language'}
              </span>
              <div className="flex items-center gap-0.5 bg-[var(--card)] border border-[var(--border)] rounded-full p-0.5 text-xs shadow-3xs">
                <button
                  onClick={() => {
                    setLanguage("bn");
                    localStorage.setItem("lang", "bn");
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                    language === "bn"
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--glow-sm)]"
                      : "text-[var(--muted-foreground)]"
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
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--glow-sm)]"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              id="nav-mobile-btn-download"
              onClick={() => scrollToSection("download")}
              className={`flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-[var(--glow-md)] hover:shadow-[var(--glow-lg)] cursor-pointer transition-all ${language === 'bn' ? 'font-bangla' : ''}`}
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
