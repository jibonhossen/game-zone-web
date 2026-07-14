"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  Check,
  ArrowLeft,
  Smartphone,
  Shield,
  Settings,
  UserPlus,
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  Gamepad2,
} from "lucide-react";
import { translations } from "@/lib/translations";

const stepIcons = [Download, Shield, Settings, UserPlus];

export default function DownloadPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const t = translations[language];
  const dp = t.downloadPage;

  const handleDownload = () => {
    setDownloadSuccess(true);
    let iframe = document.getElementById("download-iframe") as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "download-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
    iframe.src =
      "https://github.com/jibonhossen/game-zone-web/releases/download/apk/gamezonebd.apk";
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      {/* Simple Nav */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--body)] hover:text-[var(--ink)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {dp.backToHome}
            </Link>

            <div className="flex items-center gap-0.5 bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => {
                  setLanguage("bn");
                  localStorage.setItem("lang", "bn");
                }}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "bn"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                BN
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  localStorage.setItem("lang", "en");
                }}
                className={`px-2.5 py-1 rounded-full font-extrabold transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[var(--primary)] text-[var(--on-primary)]"
                    : "text-[var(--mute)] hover:text-[var(--ink)]"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-[var(--canvas-soft)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] mb-6">
              <Smartphone className="h-7 w-7" />
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black text-[var(--ink)] leading-[1.1] tracking-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
              {dp.title}
            </h1>
            <p className={`text-base sm:text-lg text-[var(--body)] mt-4 max-w-2xl mx-auto leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
              {dp.subtitle}
            </p>

            {/* Primary Download CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownload}
                className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-95 text-[var(--on-primary)] font-semibold text-base px-8 py-3.5 shadow-[var(--shadow-green)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer w-full sm:w-auto ${language === 'bn' ? 'font-bangla' : ''}`}
              >
                <Download className="h-5 w-5" />
                {dp.ctaBtn}
              </button>
            </div>

            {downloadSuccess && (
              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--positive)]">
                <Check className="h-4 w-4" />
                <span>{t.hero.downloadToast}</span>
              </div>
            )}

            <p className="text-xs text-[var(--mute)] font-medium mt-4">
              {t.downloadCTA.androidSupport}
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-16 bg-[var(--canvas)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-xl font-black text-[var(--ink)] mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
              {dp.prerequisites}
            </h2>
            <div className="bg-[var(--canvas-soft)] rounded-[24px] p-6 sm:p-8">
              <ul className="space-y-4">
                {dp.prereqItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary-pale)] flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[var(--positive)]" />
                    </div>
                    <span className={`text-sm sm:text-base text-[var(--body)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 bg-[var(--canvas-soft)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {dp.steps.map((step, index) => {
                const StepIcon = stepIcons[index] || Download;
                return (
                  <div
                    key={index}
                    className="bg-[var(--canvas)] rounded-[24px] p-6 sm:p-8 border border-[var(--border-subtle)]"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Step Number */}
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[var(--primary-pale)] flex-shrink-0">
                        <StepIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[var(--positive-deep)]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-[var(--mute)]">
                            {language === 'bn' ? `ধাপ ${index + 1}` : `Step ${index + 1}`}
                          </span>
                          <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold text-[var(--ink)] mt-1 ${language === 'bn' ? 'font-bangla' : ''}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm text-[var(--body)] mt-1 ${language === 'bn' ? 'font-bangla' : ''}`}>
                          {step.subtitle}
                        </p>

                        <ul className="mt-4 space-y-3">
                          {step.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex items-start gap-3">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-[10px] font-bold flex-shrink-0 mt-0.5">
                                {dIndex + 1}
                              </span>
                              <span className={`text-sm text-[var(--body)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {step.warning && (
                          <div className="mt-4 flex items-start gap-2 bg-[var(--primary-pale)] rounded-xl p-3">
                            <AlertTriangle className="h-4 w-4 text-[var(--warning-deep)] flex-shrink-0 mt-0.5" />
                            <p className={`text-xs text-[var(--positive-deep)] font-medium ${language === 'bn' ? 'font-bangla' : ''}`}>
                              {step.warning}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-[var(--canvas)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--card-dark)] rounded-[24px] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="h-6 w-6 text-[var(--primary)]" />
                <h2 className={`text-xl font-black text-[var(--primary)] ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {dp.tips}
                </h2>
              </div>
              <ul className="space-y-4">
                {dp.tipItems.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className={`text-sm text-[var(--canvas-soft)]/80 ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[var(--canvas-soft)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-xl font-black text-[var(--ink)] mb-8 text-center ${language === 'bn' ? 'font-bangla' : ''}`}>
              {dp.faq}
            </h2>
            <div className="space-y-3">
              {dp.faqItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-[var(--canvas)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer hover:bg-[var(--canvas-soft)]/50 transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-semibold text-[var(--ink)] pr-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[var(--mute)] flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-[var(--border-subtle)] pt-3">
                      <p className={`text-sm text-[var(--body)] leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-[var(--canvas)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] tracking-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
              {dp.ctaTitle}
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownload}
                className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-95 text-[var(--on-primary)] font-semibold text-base px-8 py-3.5 shadow-[var(--shadow-green)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer w-full sm:w-auto ${language === 'bn' ? 'font-bangla' : ''}`}
              >
                <Download className="h-5 w-5" />
                {dp.ctaBtn}
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--canvas-soft)] hover:bg-[var(--border-subtle)] active:scale-95 text-[var(--ink)] font-semibold text-base px-8 py-3.5 border border-[var(--border-subtle)] transition-all duration-300 w-full sm:w-auto"
              >
                <ArrowLeft className="h-5 w-5" />
                {dp.backToHome}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--card-dark)] py-10" aria-label="Site Footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-[var(--primary)]" />
              <span className="text-sm font-black text-[var(--canvas)]">FAST GAMING</span>
            </div>
            <p className="text-xs text-[var(--canvas-soft)]/60">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
