import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules of Play & Fair Play Directives - Free Fire Tournament Rules BD",
  description:
    "Official tournament rules and anti-cheat guidelines for Free Fire Battle Royale & Clash Squad 4v4 on Fast Gaming BD. Emulator bans, room ID distribution, and 100% refund policy.",
  keywords: [
    "Free Fire Tournament Rules BD",
    "Free Fire Clash Squad Rules",
    "Fast Gaming Anti Cheat Policy",
    "Free Fire Custom Room Rules Bangladesh",
    "Fast Gaming Match Refund Policy"
  ],
  alternates: {
    canonical: "/rules",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/rules",
    title: "Rules of Play & Fair Play Directives - Fast Gaming BD",
    description:
      "Complete tournament rules, fair play directives, and match cancellation refund policies for Free Fire tournaments on Fast Gaming BD.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming Rules of Play",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rules of Play & Fair Play - Fast Gaming BD",
    description: "Free Fire match rules, anti-cheat enforcement, and match refund policies.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function RulesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
