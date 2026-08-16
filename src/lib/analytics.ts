import posthog from "posthog-js";

/**
 * Web Event Taxonomy & Schemas for Fast Gaming BD Website
 */
export type WebEventMap = {
  download_apk_clicked: {
    source_page: string;
    button_location: "navbar" | "hero_cta" | "banner_cta" | "bottom_cta" | "specs_cta" | "mobile_menu";
    language: "bn" | "en";
    target_url?: string;
  };
  rules_tab_switched: {
    match_mode: string;
    language: "bn" | "en";
  };
  faq_question_expanded: {
    question: string;
    page: string;
  };
  language_switched: {
    from: "bn" | "en";
    to: "bn" | "en";
  };
  navigation_link_clicked: {
    target_link: string;
    link_label: string;
  };
  web_page_view: {
    path: string;
    title?: string;
  };
};

export type WebEventName = keyof WebEventMap;

/**
 * Returns global platform properties attached to all web events
 */
function getGlobalWebContext(): Record<string, string> {
  return {
    app_name: "web-fast-gaming",
    platform: "web",
    environment: process.env.NODE_ENV === "production" ? "production" : "development",
  };
}

/**
 * Strongly typed tracking helper for web events
 */
export function trackWebEvent<T extends WebEventName>(
  eventName: T,
  properties: WebEventMap[T]
): void {
  if (typeof window === "undefined") return;

  const payload = {
    ...properties,
    ...getGlobalWebContext(),
  };

  if (process.env.NODE_ENV === "development") {
    console.log(`[PostHog:Web] 📊 ${eventName}`, payload);
  }

  try {
    posthog.capture(eventName, payload);
  } catch (err) {
    console.warn("[PostHog:Web] Failed to capture event:", err);
  }
}

/**
 * React hook for consuming type-safe analytics in client components
 */
export function useWebAnalytics() {
  const track = <T extends WebEventName>(
    eventName: T,
    properties: WebEventMap[T]
  ) => {
    trackWebEvent(eventName, properties);
  };

  return { track, posthog };
}
