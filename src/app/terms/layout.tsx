import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Fast Gaming BD eSports Platform",
  description:
    "Read the official Terms and Conditions for Fast Gaming BD. Learn about 18+ age rules, skill-based eSports regulations, bKash/Nagad withdrawals, and fair play policies in Bangladesh.",
  keywords: [
    "Fast Gaming Terms and Conditions",
    "Fast Gaming BD Rules",
    "eSports Legal Terms Bangladesh",
    "bKash Gaming Payout Terms",
    "Fast Gaming User Agreement"
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/terms",
    title: "Terms and Conditions - Fast Gaming BD eSports Platform",
    description:
      "Official Terms of Service for Fast Gaming BD. Transparent eSports tournament rules and player agreement for Bangladesh.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Fast Gaming BD Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Fast Gaming BD",
    description: "Official player terms, 18+ policy, and wallet transaction terms for Fast Gaming BD.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
