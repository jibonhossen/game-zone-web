"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { BentoFeaturesDemo } from "@/components/ui/bento-features";
import HowToStartCarousel from "@/components/ui/how-to-start-carousel";
import { Hero } from "@/components/ui/animated-hero";
import { translations } from "@/lib/translations";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Download, Check, Gamepad2, Smartphone } from "lucide-react";

const ThreeGameCard = dynamic(
  () => import("@/components/ui/ThreeGameCard"),
  { ssr: false }
);

export default function Home() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);

  const t = translations[language];

  const handleDownloadClick = () => {
    setDownloadSuccess(true);

    let iframe = document.getElementById("download-iframe") as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "download-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
    iframe.src = "https://github.com/jibonhossen/game-zone-web/releases/download/apk/gamezonebd.apk";

    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} onDownloadClick={handleDownloadClick} />

      <main className="flex-1 pt-16">

        {/* HERO SECTION — Sage hero band per DESIGN.md */}
        <section id="hero" className="relative" aria-label="Fast Gaming Showcase">
          <Hero
            language={language}
            onDownloadClick={handleDownloadClick}
          />

          {downloadSuccess && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[var(--canvas)] border border-[var(--primary)] rounded-xl p-3 shadow-[var(--shadow-md)] animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-5 w-5 text-[var(--positive)] flex-shrink-0" />
              <p className={`text-xs text-[var(--ink)] font-semibold ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.downloadToast}
              </p>
            </div>
          )}
        </section>

        {/* STEP BY STEP SECTION — content-band per DESIGN.md */}
        <section id="how-to-start" className="py-20 bg-[var(--canvas)] border-t border-[var(--border-subtle)]" aria-labelledby="how-to-start-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/20 shadow-xs">
                {t.howToStart.tag}
              </span>
              <h2 id="how-to-start-title" className={`display-sm text-[var(--ink)] mt-5 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.title}
              </h2>
              <p className={`text-base text-[var(--body)] font-medium leading-relaxed mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.subtitle}
              </p>
            </div>

            {/* Auto-sliding carousel */}
            <HowToStartCarousel language={language} steps={t.howToStart} />
          </div>
        </section>

        {/* AVAILABLE GAMES SECTION */}
        <section id="available-games" className="py-20 bg-[var(--canvas-soft)] border-t border-[var(--border-subtle)] relative overflow-hidden" aria-labelledby="available-games-title">
          <div className="absolute inset-0 pointer-events-none z-0 [background-image:radial-gradient(circle_at_50%_50%,rgba(159,232,112,0.12),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/20 shadow-xs">
                {t.games.tag}
              </span>
              <h2 id="available-games-title" className="display-sm text-[var(--ink)] mt-5">
                {t.games.title}
              </h2>
              <p className={`text-base text-[var(--body)] font-medium leading-relaxed mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.games.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ThreeGameCard
                title={t.games.ffTitle}
                description={t.games.ffDesc}
                imageSrc="/game-image/freefire.jpg"
                imageAlt="Fast Gaming Free Fire Tournament - play online match tournaments and win cash rewards"
                badgeText={t.games.liveTournament}
                players={t.games.ffPlayers}
                prize={t.games.ffPrize}
                mode={t.games.ffMode}
                language={language}
                playLabel={t.games.playNow}
              />
              <ThreeGameCard
                title={t.games.pubgTitle}
                description={t.games.pubgDesc}
                imageSrc="/game-image/pubg.webp"
                imageAlt="Fast Gaming PUBG Mobile Tournament - join custom room tournaments and win cash prize"
                badgeText={t.games.liveTournament}
                players={t.games.pubgPlayers}
                prize={t.games.pubgPrize}
                mode={t.games.pubgMode}
                language={language}
                playLabel={t.games.playNow}
              />
            </div>
          </div>
        </section>

        {/* CORE FEATURES SECTION — uses card variants from DESIGN.md */}
        <section id="why-us" className="py-20 bg-[var(--canvas)] border-t border-[var(--border-subtle)]" aria-labelledby="why-us-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/20 shadow-xs">
                {t.whyUs.tag}
              </span>
              <h2 id="why-us-title" className={`display-sm text-[var(--ink)] mt-5 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.title}
              </h2>
              <p className={`text-base text-[var(--body)] font-medium leading-relaxed mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.subtitle}
              </p>
            </div>

            <BentoFeaturesDemo language={language} />
          </div>
        </section>

        {/* DOWNLOAD CTA SECTION */}
        <section id="download" className="py-20 bg-[var(--canvas-soft)] border-t border-[var(--border-subtle)] relative overflow-hidden" aria-labelledby="download-section-title">
          <div className="absolute inset-0 pointer-events-none z-0 [background-image:radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(159,232,112,0.2),transparent_70%)]" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-[24px] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-[var(--shadow-lg)]">
              {/* Background accent ring */}
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--primary-pale)]/60 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--primary-pale)]/60 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] shadow-xs">
                  <Download className="h-7 w-7" />
                </div>

                <h2 id="download-section-title" className={`text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight mt-5 ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.downloadCTA.title}
                </h2>

                <p className={`text-[var(--body)] text-base max-w-lg mx-auto mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.downloadCTA.subtitle}
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    id="bottom-cta-btn-download"
                    onClick={handleDownloadClick}
                    className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-95 text-[var(--on-primary)] font-bold text-base px-8 py-3.5 shadow-[var(--shadow-green)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer w-full sm:w-auto ${language === 'bn' ? 'font-bangla' : ''}`}
                  >
                    <Download className="h-5 w-5" />
                    <span>{t.downloadCTA.btnText}</span>
                  </button>
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--canvas-soft)] hover:bg-[var(--border-subtle)] active:scale-95 text-[var(--ink)] font-semibold text-base px-8 py-3.5 border border-[var(--border-subtle)] transition-all duration-300 w-full sm:w-auto"
                  >
                    <Smartphone className="h-5 w-5" />
                    {language === 'bn' ? 'গাইড দেখুন' : 'View Guide'}
                  </Link>
                </div>

                <p className="text-xs text-[var(--mute)] font-medium mt-4">
                  {t.downloadCTA.androidSupport}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER — dark ink background per DESIGN.md */}
      <footer className="bg-[var(--card-dark)] py-12" aria-label="Site Footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo */}
            <div className="flex items-center gap-3.5">
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
                  FAST GAMING
                </span>
                <span className={`text-xs text-[var(--canvas-soft)]/70 font-semibold mt-1 block leading-none ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.footer.subLogo}
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[var(--canvas-soft)]/60">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </p>

            {/* Links */}
            <div className="flex gap-6 text-xs text-[var(--canvas-soft)]/60 font-semibold">
              <Link href="#" className="hover:text-[var(--canvas)] transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="hover:text-[var(--canvas)] transition-colors">
                {t.footer.terms}
              </Link>
              <Link href="#" className="hover:text-[var(--canvas)] transition-colors">
                {t.footer.rules}
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
