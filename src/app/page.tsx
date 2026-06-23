"use client";

import React, { useState, useEffect } from "react";
import HeroNavbar from "@/components/hero";
import Image from "next/image";
import { BentoFeaturesDemo } from "@/components/ui/bento-features";
import { Hero } from "@/components/ui/animated-hero";
import { translations } from "@/lib/translations";
import dynamic from "next/dynamic";
import { 
  Download, 
  Check, 
  Shield, 
  Gamepad2, 
  CreditCard, 
  Wallet, 
  Clock, 
  Info
} from "lucide-react";

const FloatingParticles = dynamic(
  () => import("@/components/ui/FloatingParticles"),
  { ssr: false }
);

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
      setLanguage(savedLang);
    } else {
      setLanguage("bn");
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
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
      {/* Navbar */}
      <HeroNavbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        
        {/* HERO SHOWCASE SECTION */}
        <section id="hero" className="relative" aria-label="Fast Gaming Showcase">
          <Hero 
            language={language}
            onDownloadClick={handleDownloadClick}
          />

          {/* Show Toast Message when Download starts */}
          {downloadSuccess && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 glass-dark border border-[var(--primary)]/50 rounded-xl p-3 shadow-[var(--glow-md)] animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-5 w-5 text-[var(--primary)] flex-shrink-0" />
              <p className={`text-xs text-[var(--foreground)] font-semibold ${language === 'bn' ? 'font-bangla' : ''}`}>
                {t.hero.downloadToast}
              </p>
            </div>
          )}
        </section>
        

        {/* STEP BY STEP INSTALLATION GUIDE */}
        <section id="how-to-start" className="py-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden" aria-labelledby="how-to-start-title">
          <FloatingParticles count={25} speed={0.2} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--card)] px-3.5 py-1.5 rounded-full border border-[var(--border-bright)] font-english shadow-[var(--glow-sm)]">
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
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-bright)] hover:shadow-[var(--glow-sm)] transition-all duration-300 flex flex-col justify-between neon-border">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-[var(--glow-md)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '১' : '1'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step1Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step1Desc}
                  </p>
                </div>
                {/* Minimalist Phone mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2 shadow-2xs flex flex-col justify-between">
                    <div className="w-full h-1.5 bg-[var(--background-secondary)] rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[var(--primary)] rounded-full animate-pulse shadow-[var(--glow-sm)]" />
                    </div>
                    <div className="flex justify-center">
                      <Download className="h-6 w-6 text-[var(--primary)] animate-bounce" />
                    </div>
                    <div className="w-full text-[6px] font-bold font-mono text-[var(--muted-foreground)] text-center uppercase tracking-wider">
                      fastgaming.apk
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-bright)] hover:shadow-[var(--glow-sm)] transition-all duration-300 flex flex-col justify-between neon-border">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-[var(--glow-md)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '২' : '2'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step2Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step2Desc}
                  </p>
                </div>
                {/* Warning Box Mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden p-3">
                  <div className="w-full max-w-[170px] bg-[var(--card)] rounded-lg border border-red-900/30 p-2 shadow-2xs flex flex-col gap-2">
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
                      className="w-full py-1 text-[8px] bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-bold hover:opacity-95 transition-colors cursor-pointer shadow-[var(--glow-sm)]"
                    >
                      {t.howToStart.anywayBtn}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-bright)] hover:shadow-[var(--glow-sm)] transition-all duration-300 flex flex-col justify-between neon-border">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-[var(--glow-md)] ${language === 'bn' ? 'font-bangla' : ''}`}>
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
                <div className="mt-8 relative w-full h-40 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2.5 shadow-2xs space-y-2">
                    <span className="text-[7px] font-bold text-[var(--muted-foreground)] uppercase tracking-wider block">
                      {t.howToStart.securitySettings}
                    </span>
                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-2">
                      <span className="text-[9px] font-semibold text-[var(--foreground)]">
                        {t.howToStart.allowSource}
                      </span>
                      <div className="w-8 h-4.5 bg-[var(--primary)] rounded-full p-0.5 flex items-center justify-end cursor-pointer shadow-[var(--glow-sm)]">
                        <div className="h-3.5 w-3.5 bg-white rounded-full shadow-2xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border-bright)] hover:shadow-[var(--glow-sm)] transition-all duration-300 flex flex-col justify-between neon-border">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-[var(--glow-md)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {language === 'bn' ? '৪' : '4'}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">
                    {t.howToStart.step4Title}
                  </h3>
                  <p className={`text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                    {t.howToStart.step4Desc}
                  </p>
                </div>
                {/* Success mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background-secondary)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2 shadow-2xs flex flex-col items-center justify-center gap-1.5">
                    <div className="h-8 w-8 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center shadow-[var(--glow-sm)]">
                      <Check className="h-5 w-5 text-[var(--primary)]" />
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


        {/* AVAILABLE GAMES SECTION */}
        <section id="available-games" className="py-20 bg-[var(--background-secondary)] border-b border-[var(--border)] relative overflow-hidden" aria-labelledby="available-games-title">
          <FloatingParticles count={30} speed={0.15} color="159, 232, 112" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--card)] px-3.5 py-1.5 rounded-full border border-[var(--border-bright)] font-english shadow-[var(--glow-sm)]">
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
            <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
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
        <section id="why-us" className="py-20 bg-[var(--background)] border-b border-[var(--border)] relative overflow-hidden" aria-labelledby="why-us-title">
          <FloatingParticles count={20} speed={0.1} />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--card)] px-3.5 py-1.5 rounded-full border border-[var(--border-bright)] font-english shadow-[var(--glow-sm)]">
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
        <section id="download" className="py-20 bg-[var(--background-secondary)] border-t border-[var(--border)] relative overflow-hidden" aria-labelledby="download-section-title">
          <FloatingParticles count={35} speed={0.25} />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[var(--card)] border border-[var(--border-bright)] rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden animate-pulse-glow">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(159,232,112,0.05)_0%,transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] shadow-[var(--glow-md)]">
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
                    className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 active:scale-95 text-[var(--primary-foreground)] font-bold text-lg px-8 py-4 shadow-[var(--glow-lg)] hover:shadow-[var(--glow-xl)] transition-all duration-300 cursor-pointer ${language === 'bn' ? 'font-bangla' : ''}`}
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
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12" aria-label="Site Footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-base shadow-[var(--glow-sm)]">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-[var(--foreground)] font-english block leading-none">
                  FAST GAMING
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
              <a id="footer-link-privacy" href="#" className="hover:text-[var(--primary)] transition-colors">
                {t.footer.privacy}
              </a>
              <a id="footer-link-terms" href="#" className="hover:text-[var(--primary)] transition-colors">
                {t.footer.terms}
              </a>
              <a id="footer-link-rules" href="#" className="hover:text-[var(--primary)] transition-colors">
                {t.footer.rules}
              </a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
