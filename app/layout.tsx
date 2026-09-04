import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


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
  title: "آموزشگاه کامپیوتر مهدوی نژاد",
  description:
    "آموزش مهارت‌های دیجیتال، برنامه نویسی، طراحی سایت، گرافیک و حسابداری",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fa" dir="rtl">

      <body className={`${kalameh.variable} antialiased`}>

        <Header />

        <main className="pt-20">
          {children }
        </main>

        <Footer />

      </body>

    </html>
  );
}