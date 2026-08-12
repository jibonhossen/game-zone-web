"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { Gamepad2, ShieldAlert, RefreshCw, Trophy, CheckCircle2 } from "lucide-react";

export default function RulesPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const [activeTab, setActiveTab] = useState<"general" | "ff" | "fairplay" | "refunds">("general");

  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar language={language} setLanguage={setLanguage} currentPage="rules" />

      <main className="flex-1">
        <PageHeader
          categoryTag={t.rules.tag}
          title={t.rules.title}
          subtitle={t.rules.subtitle}
          language={language}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Rules Category Tab Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl mb-10 overflow-x-auto">
            <button
              onClick={() => setActiveTab("general")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "general"
                  ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                  : "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]/60"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              <Trophy className="h-4 w-4" />
              <span>{language === "bn" ? "সাধারণ নিয়ম" : "General Rules"}</span>
            </button>

            <button
              onClick={() => setActiveTab("ff")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "ff"
                  ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                  : "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]/60"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Free Fire</span>
            </button>

            <button
              onClick={() => setActiveTab("fairplay")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "fairplay"
                  ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                  : "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]/60"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              <ShieldAlert className="h-4 w-4 text-amber-900" />
              <span>Fair Play</span>
            </button>

            <button
              onClick={() => setActiveTab("refunds")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "refunds"
                  ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-xs"
                  : "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]/60"
              } ${language === "bn" ? "font-bangla" : ""}`}
            >
              <RefreshCw className="h-4 w-4" />
              <span>{language === "bn" ? "রিফান্ড পলিসি" : "Refunds"}</span>
            </button>
          </div>

          {/* Active Tab Content Area */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "general" && (
              <div className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="h-10 w-10 rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center font-bold">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h2 className={`text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                    {t.rules.generalTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {t.rules.generalRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)]">
                      <span className="h-7 w-7 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-sans">
                        {idx + 1}
                      </span>
                      <p className={`text-sm sm:text-base text-[var(--ink)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "ff" && (
              <div className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="h-10 w-10 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                    <Gamepad2 className="h-5 w-5" />
                  </div>
                  <h2 className={`text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                    {t.rules.ffTitle}
                  </h2>
                </div>
                <div className="space-y-4">
                  {t.rules.ffRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)]">
                      <CheckCircle2 className="h-5 w-5 text-[var(--positive-deep)] flex-shrink-0 mt-0.5" />
                      <p className={`text-sm sm:text-base text-[var(--ink)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "fairplay" && (
              <div className="bg-[var(--canvas)] border-2 border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-amber-200">
                  <div className="h-10 w-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                      {t.rules.fairPlayTitle}
                    </h2>
                    <p className={`text-xs text-[var(--mute)] font-medium ${language === "bn" ? "font-bangla" : ""}`}>
                      {t.rules.fairPlaySubtitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {t.rules.fairPlayRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <span className="h-2 w-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                      <p className={`text-sm sm:text-base text-[var(--ink)] font-semibold leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "refunds" && (
              <div className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-subtle)]">
                  <div className="h-10 w-10 rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center font-bold">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className={`text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                      {t.rules.refundTitle}
                    </h2>
                    <p className={`text-xs text-[var(--mute)] font-medium ${language === "bn" ? "font-bangla" : ""}`}>
                      {t.rules.refundSubtitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {t.rules.refundRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)]">
                      <CheckCircle2 className="h-5 w-5 text-[var(--positive-deep)] flex-shrink-0 mt-0.5" />
                      <p className={`text-sm sm:text-base text-[var(--ink)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
