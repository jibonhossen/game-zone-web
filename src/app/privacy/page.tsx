"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { Lock, ShieldCheck, Database, EyeOff, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const t = translations[language];

  const icons = [Database, EyeOff, Lock, ShieldCheck, UserCheck];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar language={language} setLanguage={setLanguage} currentPage="privacy" />

      <main className="flex-1">
        <PageHeader
          categoryTag={language === "bn" ? "তথ্য সুরক্ষা" : "Data Protection"}
          title={t.privacy.title}
          subtitle={t.privacy.subtitle}
          lastUpdated={t.privacy.lastUpdated}
          language={language}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Privacy Guarantee Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center mb-4 border border-[var(--primary)]/30">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className={`text-base font-bold text-[var(--ink)] mb-2 ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "পিন বা পাসওয়ার্ড সুরক্ষিত" : "PIN & Credentials Safe"}
              </h3>
              <p className={`text-xs text-[var(--body)] leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn"
                  ? "আমরা কোনো বিকাশ, নগদ বা রকেটের পিন সংরক্ষণ করি না। পেমেন্ট অনুরোধ এনক্রিপ্ট করা।"
                  : "We never store MFS PINs or sensitive wallet codes."}
              </p>
            </div>

            <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center mb-4 border border-[var(--primary)]/30">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className={`text-base font-bold text-[var(--ink)] mb-2 ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "থার্ড-পার্টিকে তথ্য না দেওয়া" : "Zero Data Selling"}
              </h3>
              <p className={`text-xs text-[var(--body)] leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn"
                  ? "আপনার নাম, ফোন নম্বর বা তথ্য কোনো বিজ্ঞাপনদাতা কোম্পানির কাছে বিক্রি করা হয় না।"
                  : "Player phone numbers and profile data are never sold to advertisers."}
              </p>
            </div>

            <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center mb-4 border border-[var(--primary)]/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className={`text-base font-bold text-[var(--ink)] mb-2 ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn" ? "অট্যান্টিক রুম কোড নিরাপত্তা" : "Room Credential Privacy"}
              </h3>
              <p className={`text-xs text-[var(--body)] leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                {language === "bn"
                  ? "রুম আইডি ও পাসওয়ার্ড শুধুমাত্র নিবন্ধিত প্লেয়ারদের অ্যাপে নিরাপদ রাখা হয়।"
                  : "Room credentials are strictly delivered in-app to verified match joiners."}
              </p>
            </div>
          </div>

          {/* Policy Detail Sections */}
          <div className="max-w-4xl mx-auto space-y-8">
            {t.privacy.sections.map((sec, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <article
                  key={sec.id}
                  className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[var(--border-subtle)]">
                    <div className="h-9 w-9 rounded-xl bg-[var(--canvas-soft)] text-[var(--ink)] flex items-center justify-center border border-[var(--border-subtle)] flex-shrink-0">
                      <IconComp className="h-4.5 w-4.5" />
                    </div>
                    <h2 className={`text-lg sm:text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                      {sec.title}
                    </h2>
                  </div>

                  <ul className="space-y-3.5">
                    {sec.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                        <p className={`text-sm sm:text-base text-[var(--body)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
