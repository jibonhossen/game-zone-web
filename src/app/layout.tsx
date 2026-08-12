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
  title: "Fast Gaming BD - #1 eSports & Free Fire Tournament App Bangladesh",
  description:
    "Download Fast Gaming APK – Bangladesh's premier real-time eSports tournament platform for Free Fire (Battle Royale & Clash Squad). Win daily cash prizes with instant bKash, Nagad & Rocket withdrawals.",
  keywords: [
    "Fast Gaming",
    "Fast Gaming BD",
    "Fast Gaming App Download",
    "Fast Gaming APK",
    "fastgamingbd.com",
    "fastgamingbd.online",
    "fastgamingbd.xyz",
    "Free Fire Tournament App Bangladesh",
    "Free Fire Tournament",
    "Clash Squad 4v4 Tournament BD",
    "bKash earning app",
    "Nagad earning game app",
    "Mobile Gaming Tournaments BD",
    "Esports Bangladesh",
    "gamingzonebd",
    "gzb",
    "gamesclubbd",
    "gamesclub",
    "gamingzone"
  ],
  metadataBase: new URL("https://fastgamingbd.com"),
  icons: {
    icon: "/game-image/fastgaminglogo.png",
    shortcut: "/game-image/fastgaminglogo.png",
    apple: "/game-image/fastgaminglogo.png",
  },
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
    url: "https://fastgamingbd.com",
    title: "Fast Gaming BD - #1 eSports & Free Fire Tournament App Bangladesh",
    description:
      "Bangladesh's premier real-time mobile gaming tournament platform for Free Fire. Play daily matches and withdraw instant cash rewards via bKash.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming BD - Premier Gaming Tournament App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Gaming BD - #1 eSports & Free Fire Tournament App Bangladesh",
    description:
      "Play daily mobile tournaments and win real cash rewards with instant bKash withdrawal. Download Fast Gaming APK.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "Fast Gaming BD",
      "alternateName": [
        "Fast Gaming",
        "Fast Gaming App",
        "fastgamingbd.com",
        "fastgamingbd.online",
        "fastgamingbd.xyz"
      ],
      "operatingSystem": "Android 5.0 and up",
      "applicationCategory": "GameApplication",
      "downloadUrl": "https://fastgamingbd.com/download",
      "installUrl": "https://fastgamingbd.com/download",
      "description":
        "Bangladesh's premier real-time mobile gaming tournament platform for Free Fire. Play daily matches and withdraw instant cash rewards via bKash & Nagad.",
      "genre": "eSports Tournament",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BDT"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Fast Gaming BD",
      "url": "https://fastgamingbd.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://fastgamingbd.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fast Gaming BD",
      "url": "https://fastgamingbd.com",
      "logo": "https://fastgamingbd.com/game-image/fastgaminglogo.png",
      "sameAs": [
        "https://fastgamingbd.online",
        "https://fastgamingbd.xyz"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to download Fast Gaming APK in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit https://fastgamingbd.com/download, click 'Download APK', allow installation from unknown sources in Android settings, and open the app to register."
          }
        },
        {
          "@type": "Question",
          "name": "Which games are available on Fast Gaming BD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fast Gaming BD hosts daily eSports tournaments for Free Fire (Battle Royale & Clash Squad 4v4)."
          }
        },
        {
          "@type": "Question",
          "name": "How can I withdraw my winnings from Fast Gaming BD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can withdraw your match winnings instantly to your bKash, Nagad, or Rocket mobile wallet directly within the app."
          }
        }
      ]
    }
  ];

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
