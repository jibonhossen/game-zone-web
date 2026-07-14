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
      // Offset scroll for navbar height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[3px] border-black ${
        isScrolled
          ? "bg-white shadow-[0_4px_0_0_rgba(0,0,0,1)]"
          : "bg-[var(--background-secondary)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
            id="nav-logo-container"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-[var(--primary)] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_#000] transition-all">
              <Gamepad2 className="h-5.5 w-5.5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-black font-english block leading-none">
                FAST GAMING
              </span>
              <span className="text-[10px] text-black font-bold mt-1 block leading-none font-bangla">
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-black text-black">
            <button
              id="nav-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-[var(--neo-yellow)] hover:shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-[var(--neo-pink)] hover:shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-[var(--neo-cyan)] hover:shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex bg-white border-2 border-black p-0.5 shadow-[2px_2px_0px_0px_#000]">
              <button
                onClick={() => {
                  setLanguage("bn");
                  localStorage.setItem("lang", "bn");
                }}
                className={`px-3 py-1 text-xs font-black transition-all cursor-pointer border-r-2 border-black ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-black"
                    : "text-slate-600 hover:text-black hover:bg-slate-100"
                }`}
              >
                BN
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  localStorage.setItem("lang", "en");
                }}
                className={`px-3 py-1 text-xs font-black transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[var(--primary)] text-black"
                    : "text-slate-600 hover:text-black hover:bg-slate-100"
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="nav-btn-download"
              onClick={() => scrollToSection("download")}
              className={`inline-flex items-center justify-center gap-2 bg-[var(--primary)] border-2 border-black px-4.5 py-2 text-sm font-black text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer uppercase ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              <Download className="h-4 w-4 stroke-[2.5]" />
              <span>{t.navbar.downloadBtn}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="nav-btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-2 border-black p-2 bg-white text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000] focus:outline-none transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="h-5.5 w-5.5 stroke-[2.5]" />
              ) : (
                <Menu className="h-5.5 w-5.5 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-[3px] border-black px-4 pt-4 pb-6 shadow-[0_4px_0_0_rgba(0,0,0,1)] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className={`w-full px-4 py-3 text-base font-bold text-black border-2 border-black bg-[var(--background-secondary)] text-left hover:bg-[var(--neo-yellow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.howToStart}
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className={`w-full px-4 py-3 text-base font-bold text-black border-2 border-black bg-[var(--background-secondary)] text-left hover:bg-[var(--neo-pink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.games}
            </button>
            <button
              id="nav-mobile-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className={`w-full px-4 py-3 text-base font-bold text-black border-2 border-black bg-[var(--background-secondary)] text-left hover:bg-[var(--neo-cyan)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              {t.navbar.features}
            </button>
          </div>
          
          <div className="border-t-2 border-black pt-4 flex flex-col gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between px-1">
              <span className={`text-sm font-black text-black ${language === 'bn' ? 'font-bangla' : ''}`}>
                {language === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change Language'}
              </span>
              <div className="flex bg-white border-2 border-black p-0.5 shadow-[2px_2px_0px_0px_#000]">
                <button
                  onClick={() => {
                    setLanguage("bn");
                    localStorage.setItem("lang", "bn");
                  }}
                  className={`px-3 py-1 text-xs font-black transition-all cursor-pointer border-r-2 border-black ${
                    language === "bn"
                      ? "bg-[var(--primary)] text-black"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  BN
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className={`px-3 py-1 text-xs font-black transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-[var(--primary)] text-black"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              id="nav-mobile-btn-download"
              onClick={() => scrollToSection("download")}
              className={`flex items-center justify-center gap-2 w-full bg-[var(--primary)] border-2 border-black py-3 text-base font-black text-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer uppercase ${language === 'bn' ? 'font-bangla' : ''}`}
            >
              <Download className="h-5 w-5 stroke-[2.5]" />
              <span>{t.navbar.mobileDownloadBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

