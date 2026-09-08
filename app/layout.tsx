import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const kalameh = localFont({
  src: [
    {
      path: "./fonts/Kalameh-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Kalameh-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-kalameh",
});

export const metadata: Metadata = {
  title: {
    default: "آموزشگاه کامپیوتر مهدوی نژاد",
    template: "%s | مهدوی نژاد",
  },
  description:
    "آموزش مهارت‌های دیجیتال، برنامه‌نویسی، طراحی سایت، گرافیک و حسابداری",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${kalameh.variable} font-kalameh antialiased`}>

        <main>{children}</main>

      </body>
    </html>
  );
}