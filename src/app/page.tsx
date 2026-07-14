"use client";

import React, { useState, useEffect } from "react";
import HeroNavbar from "@/components/hero";
import { BentoFeaturesDemo } from "@/components/ui/bento-features";
import { Hero } from "@/components/ui/animated-hero";
import { translations } from "@/lib/translations";
import dynamic from "next/dynamic";
import { 
  Download, 
  Check, 
  Gamepad2, 
  Info,
  Star
} from "lucide-react";

const ThreeGameCard = dynamic(
  () => import("@/components/ui/ThreeGameCard"),
  { ssr: false }
);

export default function Home() {
  const [language, setLanguage] = useState<"bn" | "en">("bn");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "bn" | "en" | null;
    if (savedLang === "bn" || savedLang === "en") {
      setTimeout(() => setLanguage(savedLang), 0);
    }
  }, []);

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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <HeroNavbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <main className="flex-1 pt-18">
        
        {/* HERO SHOWCASE SECTION */}
        <section id="hero" className="relative" aria-label="Fast Gaming Showcase">
          <Hero 
            language={language}
            onDownloadClick={handleDownloadClick}
          />

          {/* Show Toast Message when Download starts */}
          {downloadSuccess && (
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--neo-yellow)] border-3 border-black p-4 shadow-[5px_5px_0px_0px_#000] animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-6 w-6 text-black stroke-[3] flex-shrink-0" />
              <p className={`text-xs sm:text-sm text-black font-black ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.downloadToast}
              </p>
            </div>
          )}
        </section>
        

        {/* STEP BY STEP INSTALLATION GUIDE */}
        <section id="how-to-start" className="py-20 bg-white border-b-4 border-black relative overflow-hidden" aria-labelledby="how-to-start-title">
          {/* Flat 2D Neo-Brutalist decorative vectors instead of heavy floating particles */}
          <div className="absolute top-12 right-[12%] text-slate-200 pointer-events-none hidden lg:block">
            <Star className="h-24 w-24 fill-slate-100 stroke-[1.5]" />
          </div>
          <div className="absolute bottom-12 left-[10%] text-slate-200 pointer-events-none hidden lg:block">
            <Star className="h-16 w-16 fill-slate-100 stroke-[1.5] rotate-12" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[var(--neo-pink)] text-black text-xs font-black uppercase tracking-wider px-4.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rotate-[-1deg] font-english">
                {t.howToStart.tag}
              </span>
              <h2 id="how-to-start-title" className={`text-3xl sm:text-5xl font-black text-black mt-6 uppercase leading-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.title}
              </h2>
              <p className={`text-sm sm:text-base text-slate-800 font-bold max-w-xl mx-auto mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.howToStart.subtitle}
              </p>
            </div>

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1: Yellow Card */}
              <div className="bg-[var(--neo-yellow)] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group">
                <div>
                  <div className={`h-10 w-10 bg-black text-white font-black text-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '১' : '1'}
                  </div>
                  <h3 className="text-lg font-black text-black font-english uppercase tracking-tight">
                    {t.howToStart.step1Title}
                  </h3>
                  <p className={`text-sm text-black font-bold mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step1Desc}
                  </p>
                </div>
                
                {/* APK Download mockup */}
                <div className="mt-8 relative w-full h-36 bg-white border-3 border-black p-3 flex items-center justify-center overflow-hidden">
                  <div className="w-full bg-[var(--background-secondary)] border-2 border-black p-2 flex flex-col justify-between h-full">
                    <div className="w-full h-3 bg-white border-2 border-black overflow-hidden relative">
                      <div className="absolute top-0 left-0 bottom-0 w-3/4 bg-[var(--primary)] border-r-2 border-black" />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[7px] font-black font-mono text-black uppercase tracking-wider">
                        fastgaming.apk
                      </span>
                      <Download className="h-4.5 w-4.5 text-black stroke-[2.5] animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Pink Card */}
              <div className="bg-[var(--neo-pink)] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group">
                <div>
                  <div className={`h-10 w-10 bg-black text-white font-black text-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '২' : '2'}
                  </div>
                  <h3 className="text-lg font-black text-black font-english uppercase tracking-tight">
                    {t.howToStart.step2Title}
                  </h3>
                  <p className={`text-sm text-black font-bold mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step2Desc}
                  </p>
                </div>
                
                {/* Warning Box Mockup */}
                <div className="mt-8 relative w-full h-36 bg-white border-3 border-black p-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full bg-[var(--neo-orange)] border-2 border-black p-2 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1">
                      <Info className="h-3.5 w-3.5 text-black stroke-[2.5]" />
                      <span className="text-[7px] font-black text-black uppercase tracking-wider">
                        {t.howToStart.warningAlert}
                      </span>
                    </div>
                    <p className="text-[7px] font-bold text-black leading-tight">
                      {t.howToStart.harmfulText}
                    </p>
                    <button 
                      id="mockup-btn-download-anyway"
                      className="w-full py-1 text-[7px] bg-black text-white border border-black font-black uppercase shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] cursor-pointer"
                    >
                      {t.howToStart.anywayBtn}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Cyan Card */}
              <div className="bg-[var(--neo-cyan)] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group">
                <div>
                  <div className={`h-10 w-10 bg-black text-white font-black text-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '৩' : '3'}
                  </div>
                  <h3 className="text-lg font-black text-black font-english uppercase tracking-tight">
                    {t.howToStart.step3Title}
                  </h3>
                  <p className={`text-sm text-black font-bold mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step3Desc}
                  </p>
                </div>
                
                {/* Toggle switch mockup */}
                <div className="mt-8 relative w-full h-36 bg-white border-3 border-black p-2.5 flex items-center justify-center overflow-hidden">
                  <div className="w-full bg-[var(--background-secondary)] border-2 border-black p-2 space-y-1.5">
                    <span className="text-[6px] font-black text-slate-600 uppercase tracking-wider block">
                      {t.howToStart.securitySettings}
                    </span>
                    <div className="flex items-center justify-between border-t border-black pt-1.5">
                      <span className="text-[7px] font-black text-black">
                        {t.howToStart.allowSource}
                      </span>
                      <div className="w-7 h-4.5 bg-[var(--primary)] border border-black p-0.5 flex items-center justify-end cursor-pointer">
                        <div className="h-3 w-3 bg-white border border-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Green Card */}
              <div className="bg-[var(--neo-green)] border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_#000] transition-all flex flex-col justify-between group">
                <div>
                  <div className={`h-10 w-10 bg-black text-white font-black text-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '৪' : '4'}
                  </div>
                  <h3 className="text-lg font-black text-black font-english uppercase tracking-tight">
                    {t.howToStart.step4Title}
                  </h3>
                  <p className={`text-sm text-black font-bold mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step4Desc}
                  </p>
                </div>
                
                {/* Success mockup */}
                <div className="mt-8 relative w-full h-36 bg-white border-3 border-black p-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full bg-[var(--neo-yellow)] border-2 border-black p-2 flex flex-col items-center justify-center gap-1.5 h-full">
                    <div className="h-8 w-8 bg-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]">
                      <Check className="h-5 w-5 text-black stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-black text-black uppercase tracking-wider">
                      {t.howToStart.success}
                    </span>
                    <span className={`text-[7px] font-bold text-slate-800 text-center ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {t.howToStart.regSuccess}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        

        {/* AVAILABLE GAMES SECTION */}
        <section id="available-games" className="py-20 bg-[var(--background-secondary)] border-b-4 border-black relative overflow-hidden" aria-labelledby="available-games-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[var(--neo-cyan)] text-black text-xs font-black uppercase tracking-wider px-4.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rotate-[1.5deg] font-english">
                {t.games.tag}
              </span>
              <h2 id="available-games-title" className="text-3xl sm:text-5xl font-black text-black mt-6 uppercase leading-tight font-english">
                {t.games.title}
              </h2>
              <p className={`text-sm sm:text-base text-slate-800 font-bold max-w-xl mx-auto mt-3 ${language === 'bn' ? 'font-bangla' : 'font-english'}`}>
                {t.games.subtitle}
              </p>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ThreeGameCard
                title={t.games.ffTitle}
                description={t.games.ffDesc}
                imageSrc="/game-image/freefire.jpg"
                imageAlt="Fast Gaming Free Fire Tournament - play online match tournaments and win cash rewards"
                badgeText={t.games.liveTournament}
                language={language}
              />
              <ThreeGameCard
                title={t.games.pubgTitle}
                description={t.games.pubgDesc}
                imageSrc="/game-image/pubg.webp"
                imageAlt="Fast Gaming PUBG Mobile Tournament - join custom room tournaments and win cash prize"
                badgeText={t.games.liveTournament}
                language={language}
              />
            </div>

          </div>
        </section>


        {/* CORE FEATURES SECTION */}
        <section id="why-us" className="py-20 bg-white border-b-4 border-black relative overflow-hidden" aria-labelledby="why-us-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-[var(--neo-purple)] text-black text-xs font-black uppercase tracking-wider px-4.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] rotate-[-1.5deg] font-english">
                {t.whyUs.tag}
              </span>
              <h2 id="why-us-title" className={`text-3xl sm:text-5xl font-black text-black mt-6 uppercase leading-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.title}
              </h2>
              <p className={`text-sm sm:text-base text-slate-800 font-bold max-w-xl mx-auto mt-3 ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.whyUs.subtitle}
              </p>
            </div>

            {/* Bento Grid Features */}
            <BentoFeaturesDemo language={language} />

          </div>
        </section>


        {/* BOTTOM DOWNLOAD CTA SECTION */}
        <section id="download" className="py-20 bg-[var(--background-secondary)] border-b-4 border-black relative overflow-hidden" aria-labelledby="download-section-title">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[var(--neo-yellow)] border-4 border-black p-8 md:p-12 text-center shadow-[10px_10px_0px_0px_#000] space-y-6 relative overflow-hidden">
              {/* Retro dot grid inside card */}
              <div className="absolute inset-0 neo-dot-bg opacity-15 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_#FFF]">
                  <Download className="h-7 w-7 stroke-[2.5]" />
                </div>

                <h2 id="download-section-title" className={`text-3xl sm:text-5xl font-black text-black uppercase leading-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.downloadCTA.title}
                </h2>
                
                <p className={`text-slate-800 text-sm sm:text-base font-bold max-w-lg mx-auto ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.downloadCTA.subtitle}
                </p>

                <div className="pt-4 flex justify-center">
                  <button
                    id="bottom-cta-btn-download"
                    onClick={handleDownloadClick}
                    className={`inline-flex items-center justify-center gap-3 bg-[var(--primary)] border-4 border-black py-4 px-8 text-xl font-black uppercase shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
                  >
                    <Download className="h-6 w-6 stroke-[2.5]" />
                    <span>{t.downloadCTA.btnText}</span>
                  </button>
                </div>

                <p className="text-xs font-mono font-black uppercase tracking-wider text-black pt-2">
                  {t.downloadCTA.androidSupport}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t-4 border-black py-12" aria-label="Site Footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[var(--neo-pink)] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                <Gamepad2 className="h-5.5 w-5.5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-black tracking-tight text-black font-english block leading-none">
                  FAST GAMING
                </span>
                <span className={`text-[10px] text-slate-700 font-extrabold mt-1 block leading-none ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {t.footer.subLogo}
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm font-bold text-black font-english">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </p>

            {/* Links */}
            <div className="flex gap-6 text-sm font-black font-english">
              <a id="footer-link-privacy" href="#" className="border-b-2 border-transparent hover:border-black hover:text-[var(--neo-pink)] transition-all">
                {t.footer.privacy}
              </a>
              <a id="footer-link-terms" href="#" className="border-b-2 border-transparent hover:border-black hover:text-[var(--neo-pink)] transition-all">
                {t.footer.terms}
              </a>
              <a id="footer-link-rules" href="#" className="border-b-2 border-transparent hover:border-black hover:text-[var(--neo-pink)] transition-all">
                {t.footer.rules}
              </a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

