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
    default: "Content City | آژانس تولید محتوای دیجیتال",
    template: "%s | Content City",
  },
  description:
    "Content City آژانس خلاقیت و تولید محتوای دیجیتال؛ از استراتژی و ایده تا تولید و انتشار.",
  keywords: [
    "Content City",
    "تولید محتوا",
    "آژانس تولید محتوا",
    "استراتژی محتوا",
    "تولید ویدیو",
    "سوشال مدیا",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${kalameh.variable} font-kalameh antialiased`}
      >
        {children}
      </body>
    </html>
  );
}