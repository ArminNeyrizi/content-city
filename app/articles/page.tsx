import type { Metadata } from "next";

import ArticlesGrid from "@/components/articles/ArticlesGrid";

export const metadata: Metadata = {
  title: "مقالات آموزشی | آموزشگاه مهدوی‌نژاد",
  description:
    "جدیدترین مقالات آموزشی آموزشگاه مهدوی‌نژاد در زمینه برنامه‌نویسی، طراحی سایت، ICDL، گرافیک و بازار کار.",
};

export default function ArticlesPage() {
  return <ArticlesGrid />;
}