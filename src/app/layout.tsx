import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fast Gaming - Tournament App Bangladesh",
  description: "Download Fast Gaming, Bangladesh's premier real-time mobile gaming tournament platform for Free Fire, PUBG Mobile & Ludo. Play daily matches and withdraw instant winnings via bKash.",
  keywords: [
    "Fast Gaming",
    "Fast Gaming BD",
    "Free Fire Tournament",
    "Free Fire",
    "Game Tournament",
    "Game Tournament Bangladesh",
    "Esports Bangladesh",
    "Ludo Tournament Cash Prize",
    "bKash earning app",
    "Fast Gaming App Download",
    "Mobile Gaming Tournaments",
    "gamezonebd.space"
  ],
  metadataBase: new URL("https://gamezonebd.space"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gamezonebd.space",
    title: "Fast Gaming - Tournament App Bangladesh",
    description: "Bangladesh's premier real-time mobile gaming tournament platform for PUBG Mobile, Free Fire & Ludo. Win daily cash rewards and withdraw instantly via bKash.",
    siteName: "Fast Gaming",
    images: [
      {
        url: "https://gamezonebd.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming - Premier Gaming Tournament App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Gaming - Tournament App Bangladesh",
    description: "Play daily mobile tournaments and win real cash rewards with instant bKash withdrawal. Download Fast Gaming APK.",
    images: ["https://gamezonebd.space/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Fast Gaming",
    "alternateName": [
      "Fast Gaming BD",
      "gamezonebd.space"
    ],
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "downloadUrl": "https://gamezonebd.space",
    "description": "Bangladesh's premier real-time mobile gaming tournament platform for PUBG Mobile, Free Fire & Ludo. Win daily cash rewards and withdraw instantly via bKash.",
    "genre": "Esports",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--canvas)] text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
