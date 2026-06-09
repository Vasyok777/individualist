import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://individualist.agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Individualist — Покроковий вихід брендів на міжнародний ринок",
  description:
    "5-денний інтенсивний воркшоп від Individualist Agency. Покрокова система виходу бренду на міжнародний ринок: США, Польща, Франція, ОАЕ. Практика, шаблони, закрита Telegram-група.",
  keywords: [
    "міжнародний маркетинг",
    "вихід на міжнародний ринок",
    "маркетинговий воркшоп",
    "Individualist Agency",
    "брендинг США",
    "міжнародний бізнес",
    "маркетинг для підприємців",
    "вихід бренду за кордон",
  ],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: SITE_URL,
    siteName: "Individualist Agency",
    title: "Individualist — Покроковий вихід брендів на міжнародний ринок",
    description:
      "5-денний інтенсивний воркшоп. Покрокова система виходу бренду на міжнародний ринок від агенції-переможця London Design Awards.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Individualist Agency — міжнародний маркетинг",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Individualist — Покроковий вихід брендів на міжнародний ринок",
    description:
      "5-денний інтенсивний воркшоп. Покрокова система виходу бренду на міжнародний ринок.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={montserrat.variable}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
