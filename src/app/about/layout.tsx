import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bangladesh's #1 eSports & Free Fire Platform | Fast Gaming BD",
  description:
    "Learn about Fast Gaming BD's mission, eSports ecosystem, 50,000+ active player community, and instant MFS payment architecture. Empowering Bangladeshi mobile gamers.",
  keywords: [
    "About Fast Gaming BD",
    "Fast Gaming Ecosystem Bangladesh",
    "eSports Platform Bangladesh",
    "Free Fire Community BD",
    "Fast Gaming Company Story"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastgamingbd.com/about",
    title: "About Us - Bangladesh's #1 eSports & Free Fire Platform | Fast Gaming BD",
    description:
      "Our story, eSports mission in Bangladesh, platform statistics, and core values at Fast Gaming BD.",
    siteName: "Fast Gaming BD",
    images: [
      {
        url: "https://fastgamingbd.com/game-image/fastgamingsplash.png",
        width: 1200,
        height: 630,
        alt: "About Fast Gaming BD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Fast Gaming BD",
    description: "Bangladesh's #1 eSports & Free Fire tournament platform.",
    images: ["https://fastgamingbd.com/game-image/fastgamingsplash.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
