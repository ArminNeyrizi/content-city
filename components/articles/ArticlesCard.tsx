import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";

type Props = {

  article: Article;

};

export default function ArticleCard({ article }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={article.image}
        alt={article.title}
        width={600}
        height={400}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
          {article.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-neutral-900">
          {article.title}
        </h3>

        <p className="mt-4 leading-8 text-neutral-600">
          {article.excerpt}
        </p>

        <Link
          href={`/articles/${article.slug}`}
          className="mt-6 inline-flex font-medium text-orange-500 hover:text-orange-600"
        >
          مطالعه مقاله →
        </Link>
      </div>
    </article>
  );
}