"use client";

import React, { useState, useEffect } from "react";
import HeroNavbar from "@/components/hero";
import Image from "next/image";
import { BentoFeaturesDemo } from "@/components/ui/bento-features";
import { Hero } from "@/components/ui/animated-hero";
import { translations } from "@/lib/translations";
import { 
  Download, 
  Play, 
  Check, 
  Shield, 
  Gamepad2, 
  CreditCard, 
  Wallet, 
  Clock, 
  Info,
  Tv
} from "lucide-react";

export default function Home() {
  const [language, setLanguage] = useState<"bn" | "en">("bn");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    // Safely check saved preference on client side to avoid Next.js hydration issues
    const savedLang = localStorage.getItem("lang") as "bn" | "en" | null;
    if (savedLang === "bn" || savedLang === "en") {
      setLanguage(savedLang);
    } else {
      // Default to Bengali ('bn') for all first-time visitors
      setLanguage("bn");
    }
  }, []);

  const t = translations[language];

  const handleDownloadClick = () => {
    setDownloadSuccess(true);

    // Trigger download using a hidden iframe to avoid page redirection
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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
      {/* Navbar */}
      <HeroNavbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        
        {/* HERO SHOWCASE SECTION */}
        <section id="hero" className="relative bg-[var(--card)] border-b border-[var(--border)]" aria-label="Game Zone Showcase">
          <Hero 
            language={language}
            onDownloadClick={handleDownloadClick}
            onHowToPlayClick={() => {
              const el = document.getElementById("how-to-play");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Show Toast Message when Download starts */}
          {downloadSuccess && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[var(--card)] border border-[var(--primary)] rounded-xl p-3 shadow-md animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <p className={`text-xs text-[var(--foreground)] font-semibold ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.downloadToast}
              </p>
            </div>
          )}
        </section>
        

        {/* STEP BY STEP INSTALLATION GUIDE */}
        <section id="how-to-start" className="py-20 bg-[var(--background)] border-b border-[var(--border)]" aria-labelledby="how-to-start-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                {t.howToStart.tag}
              </span>
              <h2 id="how-to-start-title" className={`text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.title}
              </h2>
              <p className={`text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.subtitle}
              </p>
            </div>

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '১' : '1'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step1Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step1Desc}
                  </p>
                </div>
                {/* Minimalist Phone Vector mockup representing download */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2 shadow-2xs flex flex-col justify-between">
                    <div className="w-full h-1.5 bg-[var(--background)] rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[var(--primary)] rounded-full animate-pulse" />
                    </div>
                    <div className="flex justify-center">
                      <Download className="h-6 w-6 text-[var(--foreground)] animate-bounce" />
                    </div>
                    <div className="w-full text-[6px] font-bold font-mono text-[var(--muted-foreground)] text-center uppercase tracking-wider">
                      gamezonebd.apk
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '২' : '2'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step2Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step2Desc}
                  </p>
                </div>
                {/* Minimalist Alert Warning Box Mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden p-3">
                  <div className="w-full max-w-[170px] bg-[var(--card)] rounded-lg border border-red-200 p-2 shadow-2xs flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <Info className="h-3 w-3 text-red-500" />
                      <span className="text-[7px] font-extrabold text-[var(--foreground)] uppercase">
                        {t.howToStart.warningAlert}
                      </span>
                    </div>
                    <p className="text-[8px] text-[var(--muted-foreground)] leading-normal">
                      {t.howToStart.harmfulText}
                    </p>
                    <button 
                      id="mockup-btn-download-anyway"
                      className="w-full py-1 text-[8px] bg-[var(--foreground)] text-[var(--card)] rounded font-bold hover:opacity-95 transition-colors cursor-pointer"
                    >
                      {t.howToStart.anywayBtn}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '৩' : '3'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step3Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step3Desc}
                  </p>
                </div>
                {/* Toggle switch mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2.5 shadow-2xs space-y-2">
                    <span className="text-[7px] font-bold text-[var(--muted-foreground)] uppercase tracking-wider block">
                      {t.howToStart.securitySettings}
                    </span>
                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-2">
                      <span className="text-[9px] font-semibold text-[var(--foreground)]">
                        {t.howToStart.allowSource}
                      </span>
                      <div className="w-8 h-4.5 bg-[var(--primary)] rounded-full p-0.5 flex items-center justify-end cursor-pointer">
                        <div className="h-3.5 w-3.5 bg-white rounded-full shadow-2xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '৪' : '4'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step4Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step4Desc}
                  </p>
                </div>
                {/* App interface mockup with success tick */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2 shadow-2xs flex flex-col items-center justify-center gap-1.5">
                    <div className="h-8 w-8 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-[9px] font-black text-[var(--foreground)]">
                      {t.howToStart.success}
                    </span>
                    <span className={`text-[7px] text-[var(--muted-foreground)] text-center ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {t.howToStart.regSuccess}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* VIDEO TUTORIALS SECTION */}
        <section id="how-to-play" className="py-20 bg-[var(--card)] border-b border-[var(--border)]" aria-labelledby="how-to-play-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                {t.videoGuides.tag}
              </span>
              <h2 id="how-to-play-title" className={`text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.videoGuides.title}
              </h2>
              <p className={`text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.videoGuides.subtitle}
              </p>
            </div>

            {/* Video guides grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Video 1 */}
              <a 
                id="video-guide-join-match"
                href="https://www.youtube.com/watch?v=gNqI7lKltiU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-[var(--background)] overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/gNqI7lKltiU/maxresdefault.jpg"
                    alt="GameZoneBD Free Fire Match Join Video Guide"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-[var(--primary-foreground)] fill-[var(--primary-foreground)] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors leading-snug ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {t.videoGuides.video1Title}
                    </h3>
                    <p className={`text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed ${language === 'en' ? 'font-english' : ''}`}>
                      {t.videoGuides.video1Desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>{t.videoGuides.watchTutorial}</span>
                  </div>
                </div>
              </a>

              {/* Video 2 */}
              <a 
                id="video-guide-deposit"
                href="https://www.youtube.com/watch?v=d04SJN19gGc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-[var(--background)] overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/d04SJN19gGc/maxresdefault.jpg"
                    alt="GameZoneBD Wallet Deposit Video Guide"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-[var(--primary-foreground)] fill-[var(--primary-foreground)] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors leading-snug ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {t.videoGuides.video2Title}
                    </h3>
                    <p className={`text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed ${language === 'en' ? 'font-english' : ''}`}>
                      {t.videoGuides.video2Desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>{t.videoGuides.watchTutorial}</span>
                  </div>
                </div>
              </a>

              {/* Video 3 */}
              <a 
                id="video-guide-play-ludo"
                href="https://www.youtube.com/watch?v=THorHIAtkwE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-[var(--background)] overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/THorHIAtkwE/maxresdefault.jpg"
                    alt="GameZoneBD Ludo Match Play Video Guide"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-[var(--primary-foreground)] fill-[var(--primary-foreground)] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors leading-snug ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {t.videoGuides.video3Title}
                    </h3>
                    <p className={`text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed ${language === 'en' ? 'font-english' : ''}`}>
                      {t.videoGuides.video3Desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>{t.videoGuides.watchTutorial}</span>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </section>


        {/* AVAILABLE GAMES SECTION */}
        <section id="available-games" className="py-20 bg-[var(--background)] border-b border-[var(--border)]" aria-labelledby="available-games-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                {t.games.tag}
              </span>
              <h2 id="available-games-title" className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 font-english">
                {t.games.title}
              </h2>
              <p className={`text-sm text-[var(--muted-foreground)] font-semibold leading-relaxed mt-2 ${language === 'bn' ? 'font-bangla' : 'font-english'}`}>
                {t.games.subtitle}
              </p>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
              
              {/* Game 1: Free Fire */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl p-3 sm:p-5 flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                <div className="relative w-full h-32 sm:h-48 rounded-2xl overflow-hidden bg-[var(--background)] mb-4 border border-[var(--border)]">
                  {/* Active Badge */}
                  <span className="absolute top-3 left-3 z-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-[var(--muted)] border border-emerald-600/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs font-bangla">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {t.games.liveTournament}
                  </span>
                  <Image 
                    src="/game-image/freefire.jpg" 
                    alt="GameZoneBD Free Fire Tournament - play online match tournaments and win cash rewards" 
                    fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="text-center sm:text-left sm:px-1 pb-1">
                  <h3 className="font-black text-sm sm:text-lg text-[var(--foreground)] font-english tracking-tight">
                    {t.games.ffTitle}
                  </h3>
                  <p className={`text-[10px] sm:text-xs text-[var(--muted-foreground)] font-semibold mt-0.5 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.games.ffDesc}
                  </p>
                </div>
              </div>

              {/* Game 2: PUBG Mobile */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl p-3 sm:p-5 flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                <div className="relative w-full h-32 sm:h-48 rounded-2xl overflow-hidden bg-[var(--background)] mb-4 border border-[var(--border)]">
                  {/* Active Badge */}
                  <span className="absolute top-3 left-3 z-10 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-[var(--muted)] border border-emerald-600/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-xs font-bangla">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {t.games.liveTournament}
                  </span>
                  <Image 
                    src="/game-image/pubg.webp" 
                    alt="GameZoneBD PUBG Mobile Tournament - join custom room tournaments and win cash prize" 
                    fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="text-center sm:text-left sm:px-1 pb-1">
                  <h3 className="font-black text-sm sm:text-lg text-[var(--foreground)] font-english tracking-tight">
                    {t.games.pubgTitle}
                  </h3>
                  <p className={`text-[10px] sm:text-xs text-[var(--muted-foreground)] font-semibold mt-0.5 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.games.pubgDesc}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* CORE FEATURES SECTION */}
        <section id="why-us" className="py-20 bg-[var(--card)] border-b border-[var(--border)]" aria-labelledby="why-us-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                {t.whyUs.tag}
              </span>
              <h2 id="why-us-title" className={`text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.title}
              </h2>
              <p className={`text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.subtitle}
              </p>
            </div>

            {/* Bento Grid Features */}
            <BentoFeaturesDemo language={language} />

          </div>
        </section>


        {/* BOTTOM DOWNLOAD CTA SECTION */}
        <section id="download" className="py-20 bg-[var(--background)] border-t border-[var(--border)]" aria-labelledby="download-section-title">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-xs text-center space-y-6">
              
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]">
                <Download className="h-6 w-6" />
              </div>

              <h2 id="download-section-title" className={`text-3xl font-black text-[var(--foreground)] tracking-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.downloadCTA.title}
              </h2>
              
              <p className={`text-[var(--muted-foreground)] text-sm max-w-lg mx-auto ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.downloadCTA.subtitle}
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  id="bottom-cta-btn-download"
                  onClick={handleDownloadClick}
                  className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 active:scale-95 text-[var(--primary-foreground)] font-bold text-lg px-8 py-4 shadow-sm transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
                >
                  <Download className="h-5.5 w-5.5" />
                  <span>{t.downloadCTA.btnText}</span>
                </button>
              </div>

              <p className="text-[11px] text-[var(--muted-foreground)] font-english font-medium">
                {t.downloadCTA.androidSupport}
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12" aria-label="Site Footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-base shadow-sm">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-[var(--foreground)] font-english block leading-none">
                  GAME ZONE
                </span>
                <span className={`text-[9px] text-[var(--muted-foreground)] font-semibold mt-0.5 block leading-none ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.footer.subLogo}
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[var(--muted-foreground)] font-english">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </p>

            {/* Links */}
            <div className="flex gap-6 text-xs text-[var(--muted-foreground)] font-semibold font-english">
              <a id="footer-link-privacy" href="#" className="hover:text-[var(--foreground)] transition-colors">
                {t.footer.privacy}
              </a>
              <a id="footer-link-terms" href="#" className="hover:text-[var(--foreground)] transition-colors">
                {t.footer.terms}
              </a>
              <a id="footer-link-rules" href="#" className="hover:text-[var(--foreground)] transition-colors">
                {t.footer.rules}
              </a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
