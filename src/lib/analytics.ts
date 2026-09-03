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
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
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
  scroll_depth_reached: {
    depth_percentage: 25 | 50 | 75 | 100;
    path: string;
  };
  section_viewed: {
    section_name: string;
    page: string;
  };
  web_page_view: {
    path: string;
    title?: string;
    referrer?: string;
  };
};

export type WebEventName = keyof WebEventMap;

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  first_seen?: string;
}

const ATTRIBUTION_STORAGE_KEY = "fg_web_attribution_v1";

/**
 * Captures UTM parameters and referrer from current URL / document and persists them.
 * Preserves the initial touchpoint so multi-page browsing retains the original acquisition campaign.
 */
export function captureAndPersistAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existingStr = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    const existing: AttributionData = existingStr ? JSON.parse(existingStr) : {};

    const utm_source = urlParams.get("utm_source") || existing.utm_source;
    const utm_medium = urlParams.get("utm_medium") || existing.utm_medium;
    const utm_campaign = urlParams.get("utm_campaign") || existing.utm_campaign;
    const utm_term = urlParams.get("utm_term") || existing.utm_term;
    const utm_content = urlParams.get("utm_content") || existing.utm_content;
    const gclid = urlParams.get("gclid") || existing.gclid;
    const fbclid = urlParams.get("fbclid") || existing.fbclid;
    const referrer = document.referrer || existing.referrer;

    const currentData: AttributionData = {
      ...(utm_source ? { utm_source } : {}),
      ...(utm_medium ? { utm_medium } : {}),
      ...(utm_campaign ? { utm_campaign } : {}),
      ...(utm_term ? { utm_term } : {}),
      ...(utm_content ? { utm_content } : {}),
      ...(gclid ? { gclid } : {}),
      ...(fbclid ? { fbclid } : {}),
      ...(referrer ? { referrer } : {}),
      first_seen: existing.first_seen || new Date().toISOString(),
    };

    localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(currentData));
    return currentData;
  } catch (err) {
    console.warn("[PostHog:Web] Failed to capture attribution:", err);
    return {};
  }
}

/**
 * Retrieves persisted first-touch attribution parameters
 */
export function getStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

/**
 * Writes an attribution token to clipboard when user clicks "Download APK".
 * On first launch, the mobile app parses this token to link the web session to the newly installed app.
 * Format: fg_attr:v1?ph_id=...&utm_s=...&utm_m=...&utm_c=...&t=...
 */
export async function writeAttributionTokenToClipboard(): Promise<boolean> {
  if (typeof window === "undefined") return false;

  try {
    const distinctId = posthog.get_distinct_id();
    const attr = getStoredAttribution();

    const params = new URLSearchParams();
    if (distinctId) params.set("ph_id", distinctId);
    if (attr.utm_source) params.set("utm_s", attr.utm_source);
    if (attr.utm_medium) params.set("utm_m", attr.utm_medium);
    if (attr.utm_campaign) params.set("utm_c", attr.utm_campaign);
    params.set("t", Date.now().toString());

    const token = `fg_attr:v1?${params.toString()}`;

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(token);
      if (process.env.NODE_ENV === "development") {
        console.log("[PostHog:Web] 📋 Attribution token written to clipboard:", token);
      }
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = token;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textArea);
      return success;
    }
  } catch (err) {
    // Non-fatal: clipboard write failure should never block APK download
    console.warn("[PostHog:Web] Clipboard attribution token write skipped:", err);
    return false;
  }
}

/**
 * Returns global platform properties attached to all web events
 */
function getGlobalWebContext(): Record<string, string> {
  const attr = getStoredAttribution();
  return {
    app_name: "web-fast-gaming",
    platform: "web",
    environment: process.env.NODE_ENV === "production" ? "production" : "development",
    ...(attr.utm_source ? { utm_source: attr.utm_source } : {}),
    ...(attr.utm_medium ? { utm_medium: attr.utm_medium } : {}),
    ...(attr.utm_campaign ? { utm_campaign: attr.utm_campaign } : {}),
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

  return { track, posthog, writeAttributionTokenToClipboard, getStoredAttribution };
}

