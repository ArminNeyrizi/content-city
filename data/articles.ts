export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  publishedAt: string;
  readingTime: string;
};

export const articles: Article[] = [
  {
    slug: "python-for-beginners",
    title: "چرا پایتون بهترین زبان برای شروع برنامه‌نویسی است؟",
    excerpt:
      "اگر قصد ورود به دنیای برنامه‌نویسی را دارید، پایتون یکی از بهترین انتخاب‌هاست.",
    image: "/images/python.png",
    category: "برنامه‌نویسی",
    publishedAt: "۱۴۰۵/۰۴/۲۹",
    readingTime: "۶ دقیقه",
    content: `
پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست.

سادگی سینتکس، بازار کار مناسب و کاربردهای گسترده باعث شده اولین انتخاب بسیاری از برنامه‌نویسان باشد.

در آموزشگاه مهدوی‌نژاد این زبان به صورت پروژه‌محور تدریس می‌شود.
`,
  },
];