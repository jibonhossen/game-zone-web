"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { ShieldCheck, Search, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string>("acceptance");

  const t = translations[language];

  const filteredSections = t.terms.sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar language={language} setLanguage={setLanguage} currentPage="terms" />

      <main className="flex-1">
        <PageHeader
          categoryTag={language === "bn" ? "আইনি নির্দেশিকা" : "Legal Policy"}
          title={t.terms.title}
          subtitle={t.terms.subtitle}
          lastUpdated={t.terms.lastUpdated}
          language={language}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Quick Notice Banner */}
          <div className="mb-10 bg-[var(--primary-pale)] border border-[var(--primary)]/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[var(--primary)] text-[var(--on-primary)] flex items-center justify-center flex-shrink-0 shadow-xs">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className={`text-base font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                  {language === "bn" ? "১৮+ বয়সসীমা ও বাংলাদেশে স্কিল গেমের স্বচ্ছতা" : "18+ Age Requirement & Bangladesh Gaming Compliance"}
                </h3>
                <p className={`text-xs text-[var(--body)] font-medium mt-0.5 ${language === "bn" ? "font-bangla" : ""}`}>
                  {language === "bn"
                    ? "Fast Gaming BD-তে পেড টুর্নামেন্ট খেলায় অংশ নিতে নূন্যতম ১৮ বছর বয়স হতে হবে।"
                    : "Participants must be at least 18 years old to enter cash prize brackets."}
                </p>
              </div>
            </div>

            <Link
              href="/rules"
              className={`inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white text-xs font-bold px-4 py-2.5 hover:bg-[var(--ink-deep)] transition-all flex-shrink-0 ${language === "bn" ? "font-bangla" : ""}`}
            >
              <span>{t.footer.rules}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4 z-10">
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--mute)]" />
                <input
                  type="text"
                  placeholder={language === "bn" ? "শর্তাবলী সার্চ করুন..." : "Search terms..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm font-medium text-[var(--ink)] focus:outline-none focus:border-[var(--primary)] transition-all"
                />
              </div>

              {/* Table of Contents List */}
              <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl p-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider text-[var(--mute)] px-3 mb-3 ${language === "bn" ? "font-bangla" : ""}`}>
                  {language === "bn" ? "সূচিপত্র (Contents)" : "Table of Contents"}
                </h4>

                <nav className="space-y-1">
                  {t.terms.sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        activeSection === sec.id
                          ? "bg-[var(--canvas)] text-[var(--positive-deep)] shadow-xs font-bold border border-[var(--primary)]/30"
                          : "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]/60"
                      } ${language === "bn" ? "font-bangla" : ""}`}
                    >
                      <span className="truncate">{sec.title}</span>
                      {activeSection === sec.id && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--positive-deep)] flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-6">
              {filteredSections.length === 0 ? (
                <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-2xl p-10 text-center">
                  <FileText className="h-10 w-10 text-[var(--mute)] mx-auto mb-3" />
                  <p className="text-sm text-[var(--mute)] font-medium">
                    {language === "bn" ? "কোনো ফলাফল পাওয়া যায়নি।" : "No terms matching your search."}
                  </p>
                </div>
              ) : (
                filteredSections.map((sec) => (
                  <article
                    key={sec.id}
                    id={sec.id}
                    className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[var(--primary)]/40 transition-all scroll-mt-24"
                  >
                    <h2 className={`text-lg sm:text-xl font-bold text-[var(--ink)] mb-4 flex items-center gap-2.5 ${language === "bn" ? "font-bangla" : ""}`}>
                      <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                      {sec.title}
                    </h2>

                    <ul className="space-y-3">
                      {sec.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--mute)] mt-2 flex-shrink-0" />
                          <p className={`text-sm sm:text-base text-[var(--body)] leading-relaxed font-medium ${language === "bn" ? "font-bangla" : ""}`}>
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
