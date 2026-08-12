"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { translations } from "@/lib/translations";

interface FooterProps {
  language: "bn" | "en";
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-[var(--card-dark)] py-14 text-white" aria-label="Site Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md flex-shrink-0">
              <Image
                src="/game-image/fastgamingsplash.png"
                alt="Fast Gaming Logo"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[var(--canvas)] block leading-none">
                FAST GAMING BD
              </span>
              <span className={`text-xs text-[var(--canvas-soft)]/70 font-medium mt-1.5 block ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.footer.subLogo}
              </span>
            </div>
          </div>

          {/* Core Site Navigation Links */}
          <nav className={`flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[var(--canvas-soft)]/80 ${language === 'bn' ? 'font-bangla' : ''}`}>
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              {language === 'bn' ? 'হোম' : 'Home'}
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.about}
            </Link>
            <Link href="/rules" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.rules}
            </Link>
            <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.contact}
            </Link>
            <Link href="/download" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.download}
            </Link>
          </nav>
        </div>

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[var(--canvas-soft)]/60">
          <p className={`${language === 'bn' ? 'font-bangla' : ''}`}>
            &copy; {new Date().getFullYear()} {t.footer.copy}
          </p>

          <div className={`flex flex-wrap items-center gap-6 font-semibold ${language === 'bn' ? 'font-bangla' : ''}`}>
            <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.privacy}
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.terms}
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/rules" className="hover:text-[var(--primary)] transition-colors">
              {t.footer.rules}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
