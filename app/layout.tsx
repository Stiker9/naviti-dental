import type { Metadata } from "next";
import { Montserrat, PT_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Стоматология НАВИТИ | Санкт-Петербург | ул. Восстания, 17",
  description:
    "Заботливая стоматология в центре Петербурга. 17 лет опыта. Рейтинг 4.8★. Все виды лечения. Запись: +7 (921) 970-80-40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${ptSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-text font-sans">{children}</body>
    </html>
  );
}
