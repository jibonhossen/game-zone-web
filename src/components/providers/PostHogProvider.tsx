"use client";

import React, { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { trackWebEvent } from "@/lib/analytics";

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      let url = window.origin + pathname;
      const searchStr = searchParams?.toString();
      if (searchStr) {
        url = `${url}?${searchStr}`;
      }

      posthog.capture("$pageview", {
        $current_url: url,
      });

      trackWebEvent("web_page_view", {
        path: pathname,
        title: typeof document !== "undefined" ? document.title : undefined,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (typeof window !== "undefined" && posthogKey) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: "identified_only",
        capture_pageview: false, // Handled dynamically by PostHogPageView
        capture_pageleave: true,
        session_recording: {
          maskAllInputs: true,
          maskInputOptions: {
            password: true,
          },
        },
        loaded: () => {
          if (process.env.NODE_ENV === "development") {
            console.log("[PostHog:Web] 🚀 Initialized with project key:", posthogKey.slice(0, 8) + "...");
          }
        },
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
