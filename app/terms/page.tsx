import type { Metadata } from "next";

import Terms from "@/components/sections/Terms";

export const metadata: Metadata = {
  title: "قوانین و مقررات | آموزشگاه کامپیوتر مهدوی‌نژاد",
  description:
    "مطالعه قوانین، مقررات، تعهدات کارآموز و تعهدات آموزشگاه کامپیوتر مهدوی‌نژاد پیش از ثبت‌نام.",
  alternates: {
    canonical: "https://mahdavinezhad.ir/terms/",
  },
};

export default function TermsPage() {
  return <Terms />;
}