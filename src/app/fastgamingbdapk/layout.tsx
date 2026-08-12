import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastGamingBDApk - Fast Gaming BD Official APK Download (2026 Latest Version)",
  description:
    "FastGamingBDApk: Download official Fast Gaming BD APK for Android. Play Free Fire Battle Royale & Clash Squad 4v4 cash tournaments with instant bKash & Nagad withdrawal.",
  keywords: [
    "fastgamingbdapk",
    "fast gaming bd apk",
    "fast gaming bd apk download",
    "fastgamingbd apk",
    "fast gaming app download",
    "fast gaming bd app",
    "free fire tournament apk bangladesh",
    "bkash earning game apk download"
  ],
  alternates: {
    canonical: "/fastgamingbdapk",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/fastgamingbdapk",
    title: "FastGamingBDApk - Fast Gaming BD Official APK Download",
    description:
      "Official FastGamingBDApk page. Download Fast Gaming BD APK, join daily Free Fire tournaments, and earn instant cash payouts in Bangladesh.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "FastGamingBDApk Official Download",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastGamingBDApk - Official APK Download",
    description:
      "Download Fast Gaming BD APK for Android. 100% safe, automated room IDs, instant bKash/Nagad withdrawals.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function FastGamingBDApkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Fast Gaming BD",
            "operatingSystem": "ANDROID",
            "applicationCategory": "GameApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BDT"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "12500"
            },
            "description": "FastGamingBDApk - Bangladesh's #1 eSports & Free Fire Tournament Platform App for Android.",
            "fileSize": "35MB",
            "downloadUrl": "https://fastgamingbd.com/fastgamingbdapk",
            "softwareVersion": "6.2.0"
          })
        }}
      />
      {children}
    </>
  );
}
