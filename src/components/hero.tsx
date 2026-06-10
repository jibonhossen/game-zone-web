import React, { useState, useEffect } from "react";
import { Download, Menu, X, Gamepad2 } from "lucide-react";

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
          ? "border-b border-[var(--border)] bg-white/90 backdrop-blur-md shadow-xs"
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm shadow-[var(--primary)]/20 group-hover:scale-105 transition-transform duration-200">
              <Gamepad2 className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-[var(--foreground)] font-english block leading-none">
                GAME ZONE
              </span>
              <span className="text-[10px] text-[var(--muted-foreground)] font-bangla font-semibold mt-0.5 block leading-none">
                প্রিমিয়াম গেমিং অভিজ্ঞতা
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--muted-foreground)]">
            <button
              id="nav-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className="hover:text-[var(--foreground)] transition-colors font-bangla cursor-pointer"
            >
              কিভাবে শুরু করবেন?
            </button>
            <button
              id="nav-link-how-to-play"
              onClick={() => scrollToSection("how-to-play")}
              className="hover:text-[var(--foreground)] transition-colors font-bangla cursor-pointer"
            >
              কিভাবে খেলবেন?
            </button>
            <button
              id="nav-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className="hover:text-[var(--foreground)] transition-colors font-bangla cursor-pointer"
            >
              গেমস সমূহ
            </button>
            <button
              id="nav-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className="hover:text-[var(--foreground)] transition-colors font-bangla cursor-pointer"
            >
              আমাদের সুবিধাসমূহ
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-btn-download"
              onClick={() => scrollToSection("download")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary-foreground)] shadow-xs hover:bg-[var(--primary)]/90 active:scale-95 transition-all duration-200 cursor-pointer font-bangla"
            >
              <Download className="h-4 w-4" />
              <span>অ্যাপ ডাউনলোড</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="nav-btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-[var(--muted-foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] focus:outline-none"
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
        <div className="md:hidden border-b border-[var(--border)] bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <button
              id="nav-mobile-link-how-to-start"
              onClick={() => scrollToSection("how-to-start")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--background)] hover:text-[var(--foreground)] font-bangla text-left"
            >
              কিভাবে শুরু করবেন?
            </button>
            <button
              id="nav-mobile-link-how-to-play"
              onClick={() => scrollToSection("how-to-play")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--background)] hover:text-[var(--foreground)] font-bangla text-left"
            >
              কিভাবে খেলবেন?
            </button>
            <button
              id="nav-mobile-link-available-games"
              onClick={() => scrollToSection("available-games")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--background)] hover:text-[var(--foreground)] font-bangla text-left"
            >
              গেমস সমূহ
            </button>
            <button
              id="nav-mobile-link-why-us"
              onClick={() => scrollToSection("why-us")}
              className="flex items-center px-3 py-2.5 text-base font-semibold text-[var(--muted-foreground)] rounded-lg hover:bg-[var(--background)] hover:text-[var(--foreground)] font-bangla text-left"
            >
              আমাদের সুবিধাসমূহ
            </button>
            <hr className="border-[var(--border)] my-1" />
            <button
              id="nav-mobile-btn-download"
              onClick={() => scrollToSection("download")}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-xs hover:bg-[var(--primary)]/90 font-bangla cursor-pointer"
            >
              <Download className="h-4.5 w-4.5" />
              <span>অ্যাপ ডাউনলোড করুন</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
