import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Fast Gaming APK (Official Latest Version) - Bangladesh",
  description:
    "Download the official Fast Gaming APK for Android. Follow our easy 4-step installation guide to play Free Fire & Clash Squad tournaments with instant bKash, Nagad & Rocket withdrawals.",
  keywords: [
    "Fast Gaming APK Download",
    "Fast Gaming App Download",
    "Fast Gaming BD APK",
    "Fast Gaming BD APK 2026",
    "Fast Gaming Android Download",
    "Free Fire Tournament APK",
    "Free Fire Clash Squad APK BD",
    "bKash earning game app download",
    "Nagad eSports app Bangladesh"
  ],
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/download",
    title: "Download Fast Gaming APK (Official Latest Version) - Bangladesh",
    description:
      "Official Fast Gaming APK download page. Play daily Free Fire Battle Royale & Clash Squad cash matches with instant MFS payout in Bangladesh.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming APK Download Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Fast Gaming APK (Official Latest Version)",
    description:
      "Get the official Fast Gaming app for Android. Daily Free Fire eSports tournaments and instant bKash payouts in Bangladesh.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
