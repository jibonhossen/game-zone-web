"use client";

import React, { useState } from "react";
import HeroNavbar from "@/components/hero";
import Image from "next/image";
import { BentoFeaturesDemo } from "@/components/ui/bento-features";
import { Hero } from "@/components/ui/animated-hero";
import { 
  Download, 
  Play, 
  Check, 
  Shield, 
  Gamepad2, 
  CreditCard, 
  Wallet, 
  Clock, 
  ExternalLink,
  Info,
  Tv
} from "lucide-react";

export default function Home() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    // Simulate APK download trigger
    setDownloadSuccess(true);
    const link = document.createElement("a");
    link.href = "#"; // Replace with real APK path when available
    link.setAttribute("download", "Game_Zone_Tournament_App.apk");
    document.body.appendChild(link);
    // link.click(); // Optional simulation
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
      {/* Navbar */}
      <HeroNavbar />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        
        {/* HERO SHOWCASE SECTION */}
        <section id="hero" className="relative bg-[var(--card)] border-b border-[var(--border)]" aria-label="Game Zone Showcase">
          <Hero 
            onDownloadClick={handleDownloadClick}
            onHowToPlayClick={() => {
              const el = document.getElementById("how-to-play");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Show Toast Message when Simulated Download starts */}
          {downloadSuccess && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[var(--card)] border border-[var(--primary)] rounded-xl p-3 shadow-md animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <p className="text-xs text-[var(--foreground)] font-bangla font-semibold">
                ডাউনলোড শুরু হয়েছে! নিচে দেওয়া ৪টি স্টেপ অনুসরণ করে অ্যাপটি ইনস্টল করুন।
              </p>
            </div>
          )}
        </section>
        

        {/* STEP BY STEP INSTALLATION GUIDE ("কিভাবে শুরু করবেন?") */}
        <section id="how-to-start" className="py-20 bg-[var(--background)] border-b border-[var(--border)]" aria-labelledby="how-to-start-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                Get Started
              </span>
              <h2 id="how-to-start-title" className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 font-bangla">
                কিভাবে শুরু করবেন?
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 font-bangla">
                সহজ ৪টি ধাপে Game Zone অ্যাপ ডাউনলোড ও ইনস্টল করে গেম খেলা শুরু করুন
              </p>
            </div>

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs">
                    ১
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">Step 1</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2 font-bangla leading-relaxed">
                    অ্যাপ ডাউনলোড করতে উপরের ডাউনলোড বাটনে ক্লিক করুন।
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
                      gamezone.apk
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs">
                    ২
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">Step 2</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2 font-bangla leading-relaxed">
                    ডাউনলোড কনফার্ম করতে পপ-আপ মেসেজে "Download Anyway" ক্লিক করুন।
                  </p>
                </div>
                {/* Minimalist Alert Warning Box Mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden p-3">
                  <div className="w-full max-w-[170px] bg-[var(--card)] rounded-lg border border-red-200 p-2 shadow-2xs flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <Info className="h-3 w-3 text-red-500" />
                      <span className="text-[7px] font-extrabold text-[var(--foreground)] uppercase">Warning alert</span>
                    </div>
                    <p className="text-[8px] text-[var(--muted-foreground)] leading-normal">File might be harmful. Do you want to download anyway?</p>
                    <button 
                      id="mockup-btn-download-anyway"
                      className="w-full py-1 text-[8px] bg-[var(--foreground)] text-[var(--card)] rounded font-bold hover:opacity-95 transition-colors cursor-pointer"
                    >
                      Download Anyway
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs">
                    ৩
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">Step 3</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2 font-bangla leading-relaxed">
                    অ্যাপটি ইনস্টল করতে সেটিংস থেকে "Install Unknown Apps" সোর্স পারমিশন এলাউ করুন।
                  </p>
                </div>
                {/* Toggle switch mockup */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2.5 shadow-2xs space-y-2">
                    <span className="text-[7px] font-bold text-[var(--muted-foreground)] uppercase tracking-wider block">Security Settings</span>
                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-2">
                      <span className="text-[9px] font-semibold text-[var(--foreground)]">Allow Source</span>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-black text-lg mb-6 shadow-xs">
                    ৪
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] font-english">Step 4</h3>
                  <p className="text-sm text-[var(--muted-foreground)] mt-2 font-bangla leading-relaxed">
                    ইনস্টল সম্পন্ন করে রেজিস্ট্রেশন করুন এবং আপনার পছন্দের গেমে যোগ দিন!
                  </p>
                </div>
                {/* App interface mockup with success tick */}
                <div className="mt-8 relative w-full h-40 bg-[var(--background)] rounded-xl border border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-[var(--card)] rounded-lg border border-[var(--border)] p-2 shadow-2xs flex flex-col items-center justify-center gap-1.5">
                    <div className="h-8 w-8 rounded-full bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-[9px] font-black text-[var(--foreground)]">Success!</span>
                    <span className="text-[7px] text-[var(--muted-foreground)] text-center font-bangla">রেজিস্ট্রেশন সম্পন্ন হয়েছে</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* VIDEO TUTORIALS SECTION ("কিভাবে খেলবেন?") */}
        <section id="how-to-play" className="py-20 bg-[var(--card)] border-b border-[var(--border)]" aria-labelledby="how-to-play-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                Video Guides
              </span>
              <h2 id="how-to-play-title" className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 font-bangla">
                কিভাবে খেলবেন?
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 font-bangla">
                টুর্নামেন্টে অংশগ্রহণ করতে এবং ডিপোজিটের বিস্তারিত দেখতে ভিডিওগুলো দেখুন
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
                    alt="কিভাবে ম্যাচ জইন করবেন ভিডিও গাইড"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark transparent overlay */}
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
                    <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors font-bangla leading-snug">
                      কিভাবে ম্যাচ জইন করবেন?
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 font-english leading-relaxed">
                      Complete guide to joining Free Fire matches on Game Zone app.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
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
                    alt="কিভাবে ডিপোজিট করবেন ভিডিও গাইড"
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
                    <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors font-bangla leading-snug">
                      কিভাবে ডিপোজিট করবেন?
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 font-english leading-relaxed">
                      New and updated method to deposit money in Game Zone app.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
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
                    alt="কিভাবে লুডো ম্যাচ খেলবেন ভিডিও গাইড"
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
                    <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors font-bangla leading-snug">
                      কিভাবে লুডো ম্যাচ খেলবেন?
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1 font-english leading-relaxed">
                      Strategies and tips for playing Ludo matches on Game Zone.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)] font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
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
                Supported Games
              </span>
              <h2 id="available-games-title" className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 font-english">
                Available Games
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] font-semibold leading-relaxed mt-2 font-english">
                Play tournaments in all games available on our platform and win big prizes
              </p>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              
              {/* Game 1: Free Fire */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-[var(--background)] mb-3 border border-[var(--border)]">
                  <Image 
                    src="/game-image/freefire.jpg" 
                    alt="Free Fire Tournament game thumbnail" 
                    fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  Free Fire
                </h3>
              </div>

              {/* Game 2: PUBG Mobile */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-[var(--background)] mb-3 border border-[var(--border)]">
                  <Image 
                    src="/game-image/battle_royale.png" 
                    alt="PUBG Mobile Tournament game thumbnail" 
                    fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  PUBG Mobile
                </h3>
              </div>

              {/* Game 3: Call of Duty */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-[var(--background)] mb-3 border border-[var(--border)]">
                  <Image 
                    src="/game-image/fight.jpg" 
                    alt="Call of Duty Mobile game thumbnail" 
                    fill 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  Call of Duty
                </h3>
              </div>

              {/* Game 4: eFootball */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-[var(--background)] flex items-center justify-center mb-3 border border-[var(--border)]">
                  <Gamepad2 className="h-10 w-10 text-[var(--foreground)]" />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  eFootball
                </h3>
              </div>

              {/* Game 5: Ludo */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-[var(--background)] flex items-center justify-center mb-3 border border-[var(--border)]">
                  <Gamepad2 className="h-10 w-10 text-[var(--foreground)]" />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  Ludo
                </h3>
              </div>

              {/* Game 6: Valorant */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-[var(--border)] transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-[var(--background)] flex items-center justify-center mb-3 border border-[var(--border)]">
                  <Gamepad2 className="h-10 w-10 text-[var(--foreground)]" />
                </div>
                <h3 className="font-bold text-sm text-[var(--foreground)] font-english">
                  Valorant
                </h3>
              </div>

            </div>

          </div>
        </section>

        {/* CORE FEATURES SECTION ("কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?") */}
        <section id="why-us" className="py-20 bg-[var(--card)] border-b border-[var(--border)]" aria-labelledby="why-us-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-[var(--muted)] px-3.5 py-1.5 rounded-full border border-[var(--border)] font-english">
                Features
              </span>
              <h2 id="why-us-title" className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl mt-4 font-bangla">
                কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] font-medium leading-relaxed mt-2 font-bangla">
                বাংলাদেশের সবচেয়ে বিশ্বস্ত এবং নিরাপদ গেমিং প্ল্যাটফর্ম
              </p>
            </div>

            {/* Bento Grid Features */}
            <BentoFeaturesDemo />

          </div>
        </section>

        {/* BOTTOM DOWNLOAD CTA SECTION */}
        <section id="download" className="py-20 bg-[var(--background)] border-t border-[var(--border)]" aria-labelledby="download-section-title">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 md:p-12 shadow-xs text-center space-y-6">
              
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]">
                <Download className="h-6 w-6" />
              </div>

              <h2 id="download-section-title" className="text-3xl font-black text-[var(--foreground)] font-bangla tracking-tight">
                এখনই Game Zone অ্যাপ ডাউনলোড করুন
              </h2>
              
              <p className="text-[var(--muted-foreground)] text-sm max-w-lg mx-auto font-bangla">
                বাংলাদেশ জুড়ে হাজারো খেলোয়াড়ের সাথে যোগ দিন। অ্যাপটি ইনস্টল করে আজই প্রথম টুর্নামেন্টে অংশগ্রহণ করুন!
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  id="bottom-cta-btn-download"
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 active:scale-95 text-[var(--primary-foreground)] font-bold text-lg px-8 py-4 shadow-sm transition-all cursor-pointer font-bangla"
                >
                  <Download className="h-5.5 w-5.5" />
                  <span>অ্যাপ ডাউনলোড করুন (APK)</span>
                </button>
              </div>

              <p className="text-[11px] text-[var(--muted-foreground)] font-english font-medium">
                Compatible with Android 6.0+ devices • Verified Safe & Secure
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
                <span className="text-[9px] text-[var(--muted-foreground)] font-bangla font-semibold mt-0.5 block leading-none">
                  প্রিমিয়াম গেমিং অভিজ্ঞতা
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[var(--muted-foreground)] font-english">
              &copy; {new Date().getFullYear()} Game Zone BD Gaming. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-6 text-xs text-[var(--muted-foreground)] font-semibold font-english">
              <a id="footer-link-privacy" href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
              <a id="footer-link-terms" href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
              <a id="footer-link-rules" href="#" className="hover:text-[var(--foreground)] transition-colors">Rules of Play</a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
