"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  categoryTag: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  language: "bn" | "en";
}

export default function PageHeader({
  categoryTag,
  title,
  subtitle,
  lastUpdated,
  language,
}: PageHeaderProps) {
  return (
    <section aria-label="Page Header" className="relative bg-[var(--canvas-soft)] border-b border-[var(--border-subtle)] pt-28 pb-16 overflow-hidden">
      {/* Decorative radial gradient background */}
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_50%_0%,rgba(159,232,112,0.25),transparent_70%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--mute)] mb-6">
          <Link href="/" className="hover:text-[var(--ink)] transition-colors">
            {language === "bn" ? "হোম" : "Home"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-[var(--ink)] font-bold">{title}</span>
        </nav>

        {/* Category Pill Tag */}
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--positive-deep)] bg-[var(--primary-pale)] px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30 shadow-xs mb-4">
          {categoryTag}
        </span>

        {/* Main Title */}
        <h1 className={`display-md sm:display-lg text-[var(--ink)] tracking-tight font-black max-w-4xl ${language === "bn" ? "font-bangla" : ""}`}>
          {title}
        </h1>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg text-[var(--body)] font-medium leading-relaxed mt-4 max-w-3xl ${language === "bn" ? "font-bangla" : ""}`}>
          {subtitle}
        </p>

        {/* Optional Last Updated indicator */}
        {lastUpdated && (
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--canvas)] border border-[var(--border-subtle)] text-xs text-[var(--mute)] font-medium">
            <span className="h-2 w-2 rounded-full bg-[var(--positive)] animate-pulse" />
            <span className={language === "bn" ? "font-bangla" : ""}>{lastUpdated}</span>
          </div>
        )}
      </div>
    </section>
  );
}
