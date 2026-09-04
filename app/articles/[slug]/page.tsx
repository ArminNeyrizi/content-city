import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { articles } from "@/data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "مقاله پیدا نشد",
    };
  }

  return {
    title: `${article.title} | آموزشگاه مهدوی‌نژاد`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            {article.category}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight">
            {article.title}
          </h1>

          <div className="mt-8 flex justify-center gap-6 text-sm text-neutral-400">
            <span>{article.publishedAt}</span>

            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={700}
            className="rounded-3xl"
          />

          <article className="prose prose-lg mt-12 max-w-none leading-10">
            {article.content
              .trim()
              .split("\n")
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </article>
        </div>
      </section>
    </>
  );
}