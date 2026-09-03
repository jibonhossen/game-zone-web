"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Download,
  Check,
  Smartphone,
  Shield,
  Settings,
  UserPlus,
  ChevronDown,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { translations } from "@/lib/translations";
import { trackWebEvent, writeAttributionTokenToClipboard, getStoredAttribution } from "@/lib/analytics";

export default function FastGamingBDApkPage() {
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

  const handleDownload = (location: "navbar" | "hero_cta" | "bottom_cta" = "hero_cta") => {
    setDownloadSuccess(true);
    const attr = getStoredAttribution();

    // Write cross-platform attribution token to clipboard
    writeAttributionTokenToClipboard().catch(() => {});

    trackWebEvent("download_apk_clicked", {
      source_page: "fastgamingbdapk",
      button_location: location,
      language,
      target_url: "https://github.com/jibonhossen/web-fast-gaming/releases/download/apk/fastgamingbd.apk",
      utm_source: attr.utm_source,
      utm_medium: attr.utm_medium,
      utm_campaign: attr.utm_campaign,
    });

    let iframe = document.getElementById("download-iframe") as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "download-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
    iframe.src =
      "https://github.com/jibonhossen/web-fast-gaming/releases/download/apk/fastgamingbd.apk";
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const appSpecs = [
    { label: language === "bn" ? "অ্যাপের নাম" : "App Name", value: "Fast Gaming BD (FastGamingBDApk)" },
    { label: language === "bn" ? "সর্বশেষ সংস্করণ" : "Latest Version", value: "v6.2.0 (2026)" },
    { label: language === "bn" ? "ফাইল সাইজ" : "File Size", value: "35.2 MB" },
    { label: language === "bn" ? "প্রয়োজনীয় অ্যান্ড্রয়েড" : "Android Required", value: "Android 6.0 (Marshmallow) or higher" },
    { label: language === "bn" ? "প্যাকেজ নাম" : "Package Name", value: "com.fastgaming.bd" },
    { label: language === "bn" ? "মূল্য" : "Price", value: language === "bn" ? "১০০% ফ্রি" : "100% Free" },
    { label: language === "bn" ? "সিকিউরিটি স্ট্যাটাস" : "Security Status", value: "Verified Clean (Virus-Free)" },
    { label: language === "bn" ? "সার্পোটেড পেমেন্ট" : "Supported MFS", value: "bKash, Nagad, Rocket" },
  ];

  const faqItems = [
    {
      q: language === "bn" ? "FastGamingBDApk ফাইলটি কি সম্পূর্ণ নিরাপদ?" : "Is the FastGamingBDApk file completely safe?",
      a: language === "bn"
        ? "হ্যাঁ, FastGamingBDApk সম্পূর্ণ অফিসিয়াল, নিরাপদ এবং ভাইরাস-মুক্ত। এটি সরাসরি আমাদের অফিসিয়াল সিকিউর্ড সার্ভার থেকে প্রদান করা হয়।"
        : "Yes, FastGamingBDApk is 100% official, virus-free, and safe to install on any Android device.",
    },
    {
      q: language === "bn" ? "কীভাবে Fast Gaming BD এপিকে ইনস্টল করব?" : "How do I install Fast Gaming BD APK?",
      a: language === "bn"
        ? "ডাউনলোড বাটনে ক্লিক করুন > ব্রাউজারে 'Download Anyway' দিন > সেটিংস থেকে 'Unknown Sources' চালু করুন > ইনস্টল সম্পন্ন করে একাউন্ট খুলুন।"
        : "Click Download > Select 'Download Anyway' on browser prompt > Enable 'Install Unknown Apps' in Settings > Complete setup.",
    },
    {
      q: language === "bn" ? "টুর্নামেন্ট জেতার পর কীভাবে বিকাশ বা নগদে টাকা তুলব?" : "How do I withdraw winnings via bKash or Nagad?",
      a: language === "bn"
        ? "ম্যাচ শেষে আপনার অর্জিত পুরষ্কার স্বয়ংক্রিয়ভাবে ওয়ালেটে যোগ হবে। সর্বনিম্ন সীমা সাপেক্ষে যেকোনো সময় ইনস্ট্যান্ট উইথড্র দিতে পারবেন।"
        : "Post-match winnings are automatically added to your app wallet. You can request instant withdrawals to bKash, Nagad, or Rocket anytime.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        currentPage="download"
        onDownloadClick={() => handleDownload("navbar")}
      />

      <main className="flex-1 pt-12">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[var(--canvas-soft)] to-[var(--canvas)] py-16 sm:py-24 border-b border-[var(--border-subtle)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="inline-flex items-center gap-2 bg-[var(--primary-pale)] text-[var(--positive-deep)] px-4 py-2 rounded-full border border-[var(--primary)]/30 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Official Release • FastGamingBDApk</span>
            </div>

            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black text-[var(--ink)] tracking-tight leading-[1.15] ${language === "bn" ? "font-bangla" : ""}`}>
              {language === "bn"
                ? "FastGamingBDApk - Fast Gaming BD অফিসিয়াল APK ডাউনলোড"
                : "FastGamingBDApk - Fast Gaming BD Official APK Download"}
            </h1>

            <p className={`text-base sm:text-xl text-[var(--body)] mt-6 max-w-3xl mx-auto leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
              {language === "bn"
                ? "বাংলাদেশের #1 প্রিমিয়াম eSports প্ল্যাটফর্ম Fast Gaming BD অ্যাপ ডাউনলোড করুন। খেলুন Free Fire Battle Royale ও Clash Squad 4v4 টুর্নামেন্ট এবং বিকাশ, নগদ ও রকেটে তুলে নিন ইনস্ট্যান্ট পুরষ্কার।"
                : "Download official FastGamingBDApk for Android. Compete in daily Free Fire Battle Royale & Clash Squad 4v4 cash matches with instant bKash & Nagad payout in Bangladesh."}
            </p>

            {/* CTA Download Button */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleDownload("hero_cta")}
                className={`inline-flex items-center justify-center gap-3 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-active)] active:scale-98 text-[var(--on-primary)] font-bold text-lg px-9 py-4 shadow-[var(--shadow-green)] hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-auto ${language === "bn" ? "font-bangla" : ""}`}
              >
                <Download className="h-6 w-6" />
                <span>
                  {language === "bn"
                    ? "FastGamingBDApk ডাউনলোড করুন (v6.2.0)"
                    : "Download FastGamingBDApk (v6.2.0)"}
                </span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[var(--positive-deep)] bg-[var(--primary-pale)] p-3 rounded-2xl max-w-md mx-auto border border-[var(--primary)]/30">
                <Check className="h-5 w-5" />
                <span>{t.hero.downloadToast}</span>
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-[var(--mute)] font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--positive-deep)]" />
                100% Safe & Verified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-amber-500" />
                Instant Room Credentials
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-blue-500" />
                50,000+ Gamers
              </span>
            </div>
          </div>
        </section>

        {/* App Specifications Table */}
        <section className="py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
              {language === "bn" ? "FastGamingBDApk ফাইল স্পেসিফিকেশন" : "FastGamingBDApk Technical Specifications"}
            </h2>
            <p className={`text-sm text-[var(--mute)] font-medium mt-2 ${language === "bn" ? "font-bangla" : ""}`}>
              {language === "bn" ? "ডাউনলোডের পূর্বে অ্যাপ সংক্রান্ত বিস্তারিত তথ্য দেখে নিন" : "Key package specs and requirement details"}
            </p>
          </div>

          <div className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden shadow-xs">
            <div className="divide-y divide-[var(--border-subtle)]">
              {appSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between p-4 sm:px-6 hover:bg-[var(--canvas-soft)] transition-colors">
                  <span className={`text-sm font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                    {spec.label}
                  </span>
                  <span className={`text-sm font-semibold text-[var(--positive-deep)] mt-1 sm:mt-0 ${language === "bn" ? "font-bangla" : ""}`}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Steps */}
        <section className="py-16 bg-[var(--canvas-soft)] border-y border-[var(--border-subtle)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30">
                Installation Guide
              </span>
              <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] mt-3 ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "কীভাবে FastGamingBDApk ইনস্টল করবেন?" : "How to Install FastGamingBDApk?"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: language === "bn" ? "APK ডাউনলোড" : "Download APK", desc: language === "bn" ? "উপরের ডাউনলোড বাটনে ক্লিক করে ফাইলটি ফোনে সেভ করুন।" : "Click Download to start saving fastgamingbdapk file." },
                { step: "02", title: language === "bn" ? "ডাউনলোড নিশ্চিত" : "Confirm Prompt", desc: language === "bn" ? "ব্রাউজারে নোটিফিকেশন দেখালে 'Download Anyway' সিলেক্ট করুন।" : "Tap 'Download Anyway' on standard security prompt." },
                { step: "03", title: language === "bn" ? "পারমিশন অন" : "Enable Sources", desc: language === "bn" ? "সেটিংস থেকে 'Install Unknown Apps' অপশন সক্রিয় করুন।" : "Enable 'Install Unknown Apps' permission in Android Settings." },
                { step: "04", title: language === "bn" ? "রেজিস্টার ও খেলা" : "Register & Play", desc: language === "bn" ? "অ্যাপটি খুলে আপনার নম্বর দিয়ে একাউন্ট তৈরি করে খেলা শুরু করুন।" : "Open app, sign up with mobile number, and enter matches." },
              ].map((st, i) => (
                <div key={i} className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-xs relative overflow-hidden">
                  <span className="text-4xl font-black text-[var(--primary)]/20 absolute top-3 right-4">
                    {st.step}
                  </span>
                  <h3 className={`text-lg font-bold text-[var(--ink)] mb-2 relative ${language === "bn" ? "font-bangla" : ""}`}>
                    {st.title}
                  </h3>
                  <p className={`text-xs text-[var(--body)] font-medium leading-relaxed relative ${language === "bn" ? "font-bangla" : ""}`}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
              {language === "bn" ? "FastGamingBDApk সাধারণ প্রশ্নাবলী (FAQ)" : "FastGamingBDApk FAQ"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => {
                    const next = openFaq === index ? null : index;
                    if (next !== null) {
                      trackWebEvent("faq_question_expanded", {
                        question: faq.q,
                        page: "fastgamingbdapk",
                      });
                    }
                    setOpenFaq(next);
                  }}
                  className="w-full p-5 text-left font-bold text-base flex justify-between items-center text-[var(--ink)] focus:outline-none"
                >
                  <span className={language === "bn" ? "font-bangla" : ""}>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[var(--mute)] transition-transform duration-200 ${
                      openFaq === index ? "rotate-180 text-[var(--positive-deep)]" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className={`p-5 pt-0 text-sm text-[var(--body)] font-medium border-t border-[var(--border-subtle)]/50 leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer language={language} />
    </div>
  );
}
