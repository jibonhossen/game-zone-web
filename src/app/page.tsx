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
    link.setAttribute("download", "Kombat_Tournament_App.apk");
    document.body.appendChild(link);
    // link.click(); // Optional simulation
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFC] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navbar */}
      <HeroNavbar />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        
        {/* HERO SHOWCASE SECTION */}
        <section id="hero" className="relative bg-white border-b border-zinc-100">
          <Hero 
            onDownloadClick={handleDownloadClick}
            onHowToPlayClick={() => {
              const el = document.getElementById("how-to-play");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Show Toast Message when Simulated Download starts */}
          {downloadSuccess && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3 shadow-md animate-fade-in max-w-sm sm:max-w-md">
              <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <p className="text-xs text-emerald-700 font-bangla font-semibold">
                ডাউনলোড শুরু হয়েছে! নিচে দেওয়া ৪টি স্টেপ অনুসরণ করে অ্যাপটি ইনস্টল করুন।
              </p>
            </div>
          )}
        </section>
        

        {/* STEP BY STEP INSTALLATION GUIDE ("কিভাবে শুরু করবেন?") */}
        <section id="how-to-start" className="py-20 bg-zinc-50/50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 font-english">
                Get Started
              </span>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl mt-4 font-bangla">
                কিভাবে শুরু করবেন?
              </h2>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed mt-2 font-bangla">
                সহজ ৪টি ধাপে Kombat অ্যাপ ডাউনলোড ও ইনস্টল করে গেম খেলা শুরু করুন
              </p>
            </div>

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Step 1 */}
              <div className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg mb-6 shadow-md shadow-blue-500/20">
                    ১
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 font-english">Step 1</h3>
                  <p className="text-sm text-zinc-500 mt-2 font-bangla leading-relaxed">
                    অ্যাপ ডাউনলোড করতে উপরের ডাউনলোড বাটনে ক্লিক করুন।
                  </p>
                </div>
                {/* Minimalist Phone Vector mockup representing download */}
                <div className="mt-8 relative w-full h-40 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-white rounded-lg border border-zinc-150 p-2 shadow-2xs flex flex-col justify-between">
                    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex justify-center">
                      <Download className="h-6 w-6 text-blue-500 animate-bounce" />
                    </div>
                    <div className="w-full text-[6px] font-bold font-mono text-zinc-400 text-center uppercase tracking-wider">
                      kombat.apk
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg mb-6 shadow-md shadow-blue-500/20">
                    ২
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 font-english">Step 2</h3>
                  <p className="text-sm text-zinc-500 mt-2 font-bangla leading-relaxed">
                    ডাউনলোড কনফার্ম করতে পপ-আপ মেসেজে "Download Anyway" ক্লিক করুন।
                  </p>
                </div>
                {/* Minimalist Alert Warning Box Mockup */}
                <div className="mt-8 relative w-full h-40 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden p-3">
                  <div className="w-full max-w-[170px] bg-white rounded-lg border border-red-100 p-2 shadow-2xs flex flex-col gap-2">
                    <div className="flex items-center gap-1.5">
                      <Info className="h-3 w-3 text-red-500" />
                      <span className="text-[7px] font-extrabold text-zinc-700 uppercase">Warning alert</span>
                    </div>
                    <p className="text-[8px] text-zinc-400 leading-normal">File might be harmful. Do you want to download anyway?</p>
                    <button className="w-full py-1 text-[8px] bg-zinc-900 text-white rounded font-bold hover:bg-zinc-800 transition-colors">
                      Download Anyway
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg mb-6 shadow-md shadow-blue-500/20">
                    ৩
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 font-english">Step 3</h3>
                  <p className="text-sm text-zinc-500 mt-2 font-bangla leading-relaxed">
                    অ্যাপটি ইনস্টল করতে সেটিংস থেকে "Install Unknown Apps" সোর্স পারমিশন এলাউ করুন।
                  </p>
                </div>
                {/* Toggle switch mockup */}
                <div className="mt-8 relative w-full h-40 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden">
                  <div className="w-32 bg-white rounded-lg border border-zinc-150 p-2.5 shadow-2xs space-y-2">
                    <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-wider block">Security Settings</span>
                    <div className="flex items-center justify-between border-t border-zinc-50 pt-2">
                      <span className="text-[9px] font-semibold text-zinc-700">Allow Source</span>
                      <div className="w-8 h-4.5 bg-blue-600 rounded-full p-0.5 flex items-center justify-end cursor-pointer">
                        <div className="h-3.5 w-3.5 bg-white rounded-full shadow-2xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-black text-lg mb-6 shadow-md shadow-blue-500/20">
                    ৪
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 font-english">Step 4</h3>
                  <p className="text-sm text-zinc-500 mt-2 font-bangla leading-relaxed">
                    ইনস্টল সম্পন্ন করে রেজিস্ট্রেশন করুন এবং আপনার পছন্দের গেমে যোগ দিন!
                  </p>
                </div>
                {/* App interface mockup with success tick */}
                <div className="mt-8 relative w-full h-40 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-32 bg-white rounded-lg border border-zinc-150 p-2 shadow-2xs flex flex-col items-center justify-center gap-1.5">
                    <div className="h-8 w-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-[9px] font-black text-zinc-800">Success!</span>
                    <span className="text-[7px] text-zinc-400 text-center font-bangla">রেজিস্ট্রেশন সম্পন্ন হয়েছে</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* VIDEO TUTORIALS SECTION ("কিভাবে খেলবেন?") */}
        <section id="how-to-play" className="py-20 bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 font-english">
                Video Guides
              </span>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl mt-4 font-bangla">
                কিভাবে খেলবেন?
              </h2>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed mt-2 font-bangla">
                টুর্নামেন্টে অংশগ্রহণ করতে এবং ডিপোজিটের বিস্তারিত দেখতে ভিডিওগুলো দেখুন
              </p>
            </div>

            {/* Video guides grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Video 1 */}
              <a 
                href="https://www.youtube.com/watch?v=gNqI7lKltiU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/gNqI7lKltiU/maxresdefault.jpg"
                    alt="কিভাবে ম্যাচ জইন করবেন?"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Dark transparent overlay */}
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors font-bangla leading-snug">
                      কিভাবে ম্যাচ জইন করবেন?
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-english leading-relaxed">
                      Complete guide to joining Free Fire matches on Kombat app.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 pt-3 border-t border-zinc-50 font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>
              </a>

              {/* Video 2 */}
              <a 
                href="https://www.youtube.com/watch?v=d04SJN19gGc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/d04SJN19gGc/maxresdefault.jpg"
                    alt="কিভাবে ডিপোজিট করবেন?"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors font-bangla leading-snug">
                      কিভাবে ডিপোজিট করবেন?
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-english leading-relaxed">
                      New and updated method to deposit money in Kombat app.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 pt-3 border-t border-zinc-50 font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>
              </a>

              {/* Video 3 */}
              <a 
                href="https://www.youtube.com/watch?v=THorHIAtkwE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden">
                  <img 
                    src="https://img.youtube.com/vi/THorHIAtkwE/maxresdefault.jpg"
                    alt="কিভাবে লুডো ম্যাচ খেলবেন?"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-blue-600 fill-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors font-bangla leading-snug">
                      কিভাবে লুডো ম্যাচ খেলবেন?
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 font-english leading-relaxed">
                      Strategies and tips for playing Ludo matches on Kombat.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 pt-3 border-t border-zinc-50 font-english uppercase">
                    <Tv className="h-3.5 w-3.5" />
                    <span>Watch Tutorial</span>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </section>

        {/* AVAILABLE GAMES SECTION */}
        <section id="available-games" className="py-20 bg-zinc-50/50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 font-english">
                Supported Games
              </span>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl mt-4 font-english">
                Available Games
              </h2>
              <p className="text-sm text-zinc-500 font-semibold leading-relaxed mt-2 font-english">
                Play tournaments in all games available on our platform and win big prizes
              </p>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              
              {/* Game 1: Free Fire */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-zinc-100 mb-3 border border-zinc-50">
                  <Image 
                    src="/game-image/freefire.jpg" 
                    alt="Free Fire" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  Free Fire
                </h3>
              </div>

              {/* Game 2: PUBG Mobile */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-zinc-100 mb-3 border border-zinc-50">
                  <Image 
                    src="/game-image/battle_royale.png" 
                    alt="PUBG Mobile" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  PUBG Mobile
                </h3>
              </div>

              {/* Game 3: Call of Duty */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="relative w-full h-28 rounded-xl overflow-hidden bg-zinc-100 mb-3 border border-zinc-50">
                  <Image 
                    src="/game-image/fight.jpg" 
                    alt="Call of Duty" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  Call of Duty
                </h3>
              </div>

              {/* Game 4: eFootball */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center mb-3 border border-zinc-100">
                  <Gamepad2 className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  eFootball
                </h3>
              </div>

              {/* Game 5: Ludo */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-3 border border-zinc-100">
                  <Gamepad2 className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  Ludo
                </h3>
              </div>

              {/* Game 6: Valorant */}
              <div className="bg-white border border-zinc-100 rounded-2xl p-4 flex flex-col items-center justify-between text-center hover:shadow-sm hover:border-zinc-200 transition-all duration-300">
                <div className="w-full h-28 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 flex items-center justify-center mb-3 border border-zinc-100">
                  <Gamepad2 className="h-10 w-10 text-rose-500" />
                </div>
                <h3 className="font-bold text-sm text-zinc-800 font-english">
                  Valorant
                </h3>
              </div>

            </div>

          </div>
        </section>

        {/* CORE FEATURES SECTION ("কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?") */}
        <section id="why-us" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 font-english">
                Features
              </span>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl mt-4 font-bangla">
                কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?
              </h2>
              <p className="text-sm text-zinc-500 font-medium leading-relaxed mt-2 font-bangla">
                বাংলাদেশের সবচেয়ে বিশ্বস্ত এবং নিরাপদ গেমিং প্ল্যাটফর্ম
              </p>
            </div>

            {/* Bento Grid Features */}
            <BentoFeaturesDemo />

          </div>
        </section>

        {/* BOTTOM DOWNLOAD CTA SECTION */}
        <section id="download" className="py-20 bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-zinc-100 rounded-3xl p-8 md:p-12 shadow-xs text-center space-y-6">
              
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                <Download className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-black text-zinc-900 font-bangla tracking-tight">
                এখনই Kombat অ্যাপ ডাউনলোড করুন
              </h2>
              
              <p className="text-zinc-500 text-sm max-w-lg mx-auto font-bangla">
                বাংলাদেশ জুড়ে হাজারো খেলোয়াড়ের সাথে যোগ দিন। অ্যাপটি ইনস্টল করে আজই প্রথম টুর্নামেন্টে অংশগ্রহণ করুন!
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-blue-500/20 transition-all cursor-pointer font-bangla"
                >
                  <Download className="h-5.5 w-5.5 text-blue-100" />
                  <span>অ্যাপ ডাউনলোড করুন (APK)</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-400 font-english font-medium">
                Compatible with Android 6.0+ devices • Verified Safe & Secure
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-zinc-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-base shadow-sm">
                K
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-zinc-900 font-english block leading-none">
                  KOMBAT
                </span>
                <span className="text-[9px] text-zinc-400 font-bangla font-semibold mt-0.5 block leading-none">
                  প্রিমিয়াম গেমিং অভিজ্ঞতা
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-zinc-400 font-english">
              &copy; {new Date().getFullYear()} Kombat BD Gaming. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-6 text-xs text-zinc-400 font-semibold font-english">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Rules of Play</a>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
