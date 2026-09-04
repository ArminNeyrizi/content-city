import ArticleCard from "./ArticlesCard";
import { articles } from "@/data/articles";

export default function ArticlesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm text-orange-600">
            وبلاگ آموزشگاه
          </span>

          <h1 className="mt-6 text-5xl font-black text-neutral-900">
            مقالات آموزشی
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            جدیدترین آموزش‌ها، مقالات تخصصی و نکات کاربردی برای ورود به
            بازار کار و یادگیری مهارت‌های دیجیتال.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}