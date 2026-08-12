import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Player Support & Channels | Fast Gaming BD",
  description:
    "Get 24/7 support for Fast Gaming BD. Reach our team via Telegram (@fastgamingbd_official), WhatsApp (+880 1400-389396), Email (support@fastgamingbd.com), or Facebook Community.",
  keywords: [
    "Contact Fast Gaming BD",
    "Fast Gaming Support Telegram",
    "Fast Gaming WhatsApp Number",
    "Fast Gaming Customer Care",
    "Fast Gaming Helpline BD"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/contact",
    title: "Contact Us - 24/7 Player Support & Channels | Fast Gaming BD",
    description:
      "Official contact channels for Fast Gaming BD. Connect on Telegram, WhatsApp, Email, or Facebook.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "Contact Fast Gaming BD Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Fast Gaming BD Support",
    description: "Connect with Fast Gaming BD on Telegram, WhatsApp, Email, or Facebook.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
