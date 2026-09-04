import type { Metadata } from "next";

import AboutTeacher from "@/components/sections/AboutTeacher";

export const metadata: Metadata = {
  title: "مهدیه مهدوی‌نژاد | مدرس ارتباط تصویری",
  description:
    "آشنایی با مهدیه مهدوی‌نژاد، مدرس ارتباط تصویری، مهارت‌های شناختی و دوره‌های تخصصی کامپیوتر.",
  alternates: {
    canonical: "https://mahdavinezhad.ir/mahdieh-mahdavinezhad/",
  },
};

export default function Page() {
  return <AboutTeacher />;
}