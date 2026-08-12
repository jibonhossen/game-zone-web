"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { MessageSquare, PhoneCall, Mail, Users, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const t = translations[language];

  const channelIcons = [MessageSquare, PhoneCall, Mail, Users];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] selection:bg-[var(--primary)] selection:text-[var(--on-primary)]">
      <Navbar language={language} setLanguage={setLanguage} currentPage="contact" />

      <main className="flex-1">
        <PageHeader
          categoryTag={t.contact.tag}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          language={language}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          
          {/* Support Channels Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30">
                {language === "bn" ? "যোগাযোগের মাধ্যমসমূহ" : "Official Channels"}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-black text-[var(--ink)] mt-3 ${language === "bn" ? "font-bangla" : ""}`}>
                {t.contact.channelsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.contact.channels.map((ch, idx) => {
                const IconComponent = channelIcons[idx % channelIcons.length];
                return (
                  <a
                    key={ch.id}
                    href={ch.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-6 shadow-xs hover:border-[var(--primary)] transition-all flex flex-col justify-between space-y-6 group hover:shadow-md"
                  >
                    <div className="space-y-4">
                      <div className="h-12 w-12 rounded-2xl bg-[var(--primary-pale)] text-[var(--positive-deep)] flex items-center justify-center border border-[var(--primary)]/30 group-hover:scale-105 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className={`text-base font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                          {ch.name}
                        </h3>
                        <p className="text-xs font-bold text-[var(--positive-deep)] mt-0.5">
                          {ch.handle}
                        </p>
                        <p className={`text-xs text-[var(--mute)] font-medium leading-relaxed mt-2 ${language === "bn" ? "font-bangla" : ""}`}>
                          {ch.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] group-hover:text-[var(--positive-deep)] transition-colors ${language === "bn" ? "font-bangla" : ""}`}>
                      <span>{ch.actionText}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
