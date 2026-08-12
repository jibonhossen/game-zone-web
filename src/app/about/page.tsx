"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { ShieldCheck, Users, Trophy, Zap, Download, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const t = translations[language];

  const valueIcons = [ShieldCheck, Zap, Users, Trophy];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar language={language} setLanguage={setLanguage} currentPage="about" />

      <main className="flex-1">
        <PageHeader
          categoryTag={t.about.tag}
          title={t.about.title}
          subtitle={t.about.subtitle}
          language={language}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Mission & Vision Showcase Card */}
          <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xs">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--canvas)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--positive-deep)]">
                <HeartHandshake className="h-4 w-4 text-[var(--positive)]" />
                <span>{language === "bn" ? "আমাদের ইকোসিস্টেম" : "Our Ecosystem"}</span>
              </span>

              <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight ${language === "bn" ? "font-bangla" : ""}`}>
                {t.about.missionTitle}
              </h2>

              <p className={`text-base sm:text-lg text-[var(--body)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                {t.about.missionDesc}
              </p>
            </div>
          </div>

          {/* Key Platform Metrics Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "সংখ্যায় Fast Gaming BD" : "Fast Gaming BD in Numbers"}
              </h2>
              <p className={`text-sm text-[var(--mute)] font-medium mt-2 ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "বাংলাদেশের প্রতিটি প্রান্ত থেকে যুক্ত থাকা বিশ্বস্ত গেমিং পরিসংখ্যান।" : "Trusted gaming metrics across Bangladesh."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-8 text-center hover:border-[var(--primary)] transition-all shadow-xs hover:shadow-md group"
                >
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--ink)] block group-hover:text-[var(--positive-deep)] transition-colors">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-bold text-[var(--ink)] block mt-2 ${language === "bn" ? "font-bangla" : ""}`}>
                    {stat.label}
                  </span>
                  <span className={`text-xs text-[var(--mute)] block mt-1 ${language === "bn" ? "font-bangla" : ""}`}>
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                {t.about.valuesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.about.values.map((val, idx) => {
                const IconComponent = valueIcons[idx % valueIcons.length];
                return (
                  <div
                    key={idx}
                    className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-8 flex items-start gap-5 shadow-xs hover:border-[var(--primary)] transition-all"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center flex-shrink-0 border border-[var(--primary)]/30">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold text-[var(--ink)] mb-2 ${language === "bn" ? "font-bangla" : ""}`}>
                        {val.title}
                      </h3>
                      <p className={`text-sm text-[var(--body)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust CTA Band */}
          <div className="bg-[var(--card-dark)] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[var(--primary)]">
                <Award className="h-4 w-4" />
                <span>{language === "bn" ? "অফিসিয়াল eSports প্ল্যাটফর্ম" : "Official eSports Hub"}</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-tight text-[var(--canvas)] ${language === "bn" ? "font-bangla" : ""}`}>
                {t.about.trustTitle}
              </h3>
              <p className={`text-sm text-[var(--canvas-soft)]/80 font-medium ${language === "bn" ? "font-bangla" : ""}`}>
                {t.about.trustDesc}
              </p>
            </div>

            <Link
              href="/download"
              className={`inline-flex items-center gap-2.5 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-bold text-base px-8 py-4 shadow-[var(--shadow-green)] hover:bg-[var(--primary-active)] active:scale-95 transition-all flex-shrink-0 ${language === "bn" ? "font-bangla" : ""}`}
            >
              <Download className="h-5 w-5" />
              <span>{t.downloadCTA.btnText}</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
