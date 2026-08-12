import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Fast Gaming APK (Official Latest Version) - Bangladesh",
  description:
    "Download the official Fast Gaming APK for Android. Follow our easy 4-step installation guide to play Free Fire, PUBG Mobile & Ludo tournaments with instant bKash withdrawal.",
  keywords: [
    "Fast Gaming APK Download",
    "Fast Gaming App Download",
    "Fast Gaming BD APK",
    "Fast Gaming Android Download",
    "Free Fire Tournament APK",
    "PUBG Mobile Tournament APK BD",
    "Ludo Cash Game APK Download",
    "bKash earning app download"
  ],
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/download",
    title: "Download Fast Gaming APK (Official Latest Version)",
    description:
      "Official Fast Gaming APK download page. Play daily Free Fire, PUBG Mobile, and Ludo cash matches in Bangladesh.",
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
      "Get the official Fast Gaming app for Android. Daily eSports tournaments and instant bKash payouts in Bangladesh.",
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
