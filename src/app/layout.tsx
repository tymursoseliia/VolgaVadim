import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Волга-Авто - Авто из Европы с доставкой по РФ",
  description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 9 лет на рынке, 1000+ довольных клиентов. Экономия до 30%.",
  keywords: "авто из европы, автомобили из европы, пригон авто, растаможка авто, Волга-Авто",
  authors: [{ name: "Волга-Авто" }],
  icons: {
    icon: "/image_2026-05-19_11-32-30.png",
    shortcut: "/image_2026-05-19_11-32-30.png",
    apple: "/image_2026-05-19_11-32-30.png",
  },
  openGraph: {
    title: "Волга-Авто - Авто из Европы с доставкой по РФ",
    description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 9 лет на рынке, 1000+ довольных клиентов. Экономия до 30%.",
    url: "https://lts-prigon.ru",
    siteName: "Волга-Авто - Авто из Европы",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/image.png",
        width: 1280,
        height: 853,
        alt: "Волга-Авто - Автомобили из Европы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Волга-Авто - Авто из Европы с доставкой по РФ",
    description: "Автомобили из Европы под ключ. Подбор, доставка, растаможка. Более 9 лет на рынке, 1000+ довольных клиентов.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "mailru-domain": "EjWgyxpdvkaREM5R",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
