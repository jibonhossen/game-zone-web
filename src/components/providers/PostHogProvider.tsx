"use client";

import React, { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { trackWebEvent, captureAndPersistAttribution, getStoredAttribution } from "@/lib/analytics";

export function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      // Refresh & persist attribution from any landing query parameters
      const attr = captureAndPersistAttribution();

      // Register first-touch acquisition properties into all future events
      if (posthog) {
        posthog.register({
          ...(attr.utm_source ? { utm_source: attr.utm_source } : {}),
          ...(attr.utm_medium ? { utm_medium: attr.utm_medium } : {}),
          ...(attr.utm_campaign ? { utm_campaign: attr.utm_campaign } : {}),
          ...(attr.utm_term ? { utm_term: attr.utm_term } : {}),
          ...(attr.utm_content ? { utm_content: attr.utm_content } : {}),
          ...(attr.gclid ? { gclid: attr.gclid } : {}),
          ...(attr.fbclid ? { fbclid: attr.fbclid } : {}),
          initial_referrer: attr.referrer || "$direct",
        });
      }

      let url = window.origin + pathname;
      const searchStr = searchParams?.toString();
      if (searchStr) {
        url = `${url}?${searchStr}`;
      }

      posthog.capture("$pageview", {
        $current_url: url,
        referrer: typeof document !== "undefined" ? document.referrer : undefined,
      });

      trackWebEvent("web_page_view", {
        path: pathname,
        title: typeof document !== "undefined" ? document.title : undefined,
        referrer: typeof document !== "undefined" ? document.referrer : undefined,
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
      // Capture initial landing attribution as early as possible
      const initialAttr = captureAndPersistAttribution();

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
        loaded: (ph) => {
          if (initialAttr.utm_source || initialAttr.referrer) {
            ph.register({
              ...(initialAttr.utm_source ? { utm_source: initialAttr.utm_source } : {}),
              ...(initialAttr.utm_medium ? { utm_medium: initialAttr.utm_medium } : {}),
              ...(initialAttr.utm_campaign ? { utm_campaign: initialAttr.utm_campaign } : {}),
              initial_referrer: initialAttr.referrer || "$direct",
            });
          }

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
