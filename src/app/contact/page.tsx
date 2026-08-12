"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { translations } from "@/lib/translations";
import { MessageSquare, PhoneCall, Mail, Users, Send, CheckCircle2, Headphones, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const getInitialLang = (): "bn" | "en" => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "bn" | "en" | null;
      if (saved === "bn" || saved === "en") return saved;
    }
    return "bn";
  };

  const [language, setLanguage] = useState<"bn" | "en">(getInitialLang);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const t = translations[language];

  const channelIcons = [MessageSquare, PhoneCall, Mail, Users];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 4000);
  };

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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Support Channels Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30">
                {language === "bn" ? "যোগাযোগের মাধমসমূহ" : "Official Channels"}
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

          {/* Direct Support Form & Help Desk Band */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[var(--canvas-soft)] border border-[var(--border-subtle)] rounded-3xl p-8 space-y-6">
                <div className="h-12 w-12 rounded-2xl bg-[var(--primary)] text-[var(--on-primary)] flex items-center justify-center shadow-xs">
                  <Headphones className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className={`text-xl font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                    {language === "bn" ? "২৪/৭ লাইভ কাস্টমার সার্ভিস" : "24/7 Live Customer Service"}
                  </h3>
                  <p className={`text-sm text-[var(--body)] font-medium leading-relaxed ${language === "bn" ? "font-bangla" : ""}`}>
                    {language === "bn"
                      ? "আমাদের সাপোর্ট টিম দিন-রাত ২৪ ঘণ্টা আপনার অ্যাকাউন্ট, ডিপোজিট বা টুর্নামেন্ট রুম কোডের সহায়তা প্রদানে প্রস্তুত।"
                      : "Our dedicated support team is active 24/7 to assist with accounts, deposits, or room credentials."}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-[var(--ink)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--positive)] animate-pulse" />
                    <span>{language === "bn" ? "গড় রেসপন্স টাইম: ৩ মিনিট" : "Average Response Time: 3 Mins"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-[var(--mute)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span>{language === "bn" ? "সাপ্তাহিক ৭ দিনই সেবা খোলা" : "Service Open 7 Days a Week"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[var(--canvas)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 shadow-xs">
              <div className="mb-8">
                <h3 className={`text-2xl font-black text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                  {t.contact.formTitle}
                </h3>
                <p className={`text-sm text-[var(--mute)] font-medium mt-1 ${language === "bn" ? "font-bangla" : ""}`}>
                  {t.contact.formSubtitle}
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-[var(--primary-pale)] border border-[var(--primary)]/30 rounded-2xl">
                  <CheckCircle2 className="h-12 w-12 text-[var(--positive-deep)] mx-auto" />
                  <p className={`text-base font-bold text-[var(--ink)] ${language === "bn" ? "font-bangla" : ""}`}>
                    {t.contact.successToast}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-bold text-[var(--ink)] mb-1.5 ${language === "bn" ? "font-bangla" : ""}`}>
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold text-[var(--ink)] mb-1.5 ${language === "bn" ? "font-bangla" : ""}`}>
                        {t.contact.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-xs font-bold text-[var(--ink)] mb-1.5 ${language === "bn" ? "font-bangla" : ""}`}>
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold text-[var(--ink)] mb-1.5 ${language === "bn" ? "font-bangla" : ""}`}>
                        {t.contact.subjectLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-[var(--ink)] mb-1.5 ${language === "bn" ? "font-bangla" : ""}`}>
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--canvas-soft)] border border-[var(--border-subtle)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--primary)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-bold text-base py-4 shadow-[var(--shadow-green)] hover:bg-[var(--primary-active)] active:scale-98 cursor-pointer transition-all ${language === "bn" ? "font-bangla" : ""}`}
                  >
                    <Send className="h-5 w-5" />
                    <span>{t.contact.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}
