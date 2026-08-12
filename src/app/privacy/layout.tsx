import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Player Data Protection & Security | Fast Gaming BD",
  description:
    "Discover how Fast Gaming BD protects your personal information, mobile telemetry, and bKash/Nagad/Rocket transaction privacy. 100% secure eSports platform in Bangladesh.",
  keywords: [
    "Fast Gaming Privacy Policy",
    "Fast Gaming Data Protection",
    "bKash Security Fast Gaming",
    "Player Data Privacy Bangladesh",
    "Fast Gaming Security Policy"
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/privacy",
    title: "Privacy Policy - Player Data Protection & Security | Fast Gaming BD",
    description:
      "Official Privacy Policy for Fast Gaming BD. Encrypted transactions, no PIN storage, and player data privacy guaranteed.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming BD Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Fast Gaming BD",
    description: "Player data privacy, MFS transaction security, and user rights at Fast Gaming BD.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
