import Link from "next/link";
import {
  Code2,
  Globe,
  Palette,
  Video,
  Calculator,
  Laptop,
  ArrowLeft,
} from "lucide-react";

const categories = [
  {
    title: "برنامه‌نویسی",
    description: "Python • JavaScript • Backend • Full Stack",
    icon: Code2,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "طراحی سایت",
    description: "HTML • CSS • WordPress • Next.js",
    icon: Globe,
    color: "from-neutral-700 to-neutral-900",
  },
  {
    title: "گرافیک",
    description: "Photoshop • Illustrator",
    icon: Palette,
    color: "from-orange-400 to-orange-500",
  },
  {
    title: "تدوین ویدیو",
    description: "Premiere • After Effects",
    icon: Video,
    color: "from-neutral-800 to-black",
  },
  {
    title: "حسابداری",
    description: "ویژه بازارکار",
    icon: Calculator,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "ICDL",
    description: "مهارت‌های پایه کامپیوتر",
    icon: Laptop,
    color: "from-neutral-600 to-neutral-900",
  },
];

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fb923c15,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-medium text-orange-600">
            دسته‌بندی دوره‌ها
          </span>

          <h2 className="mt-7 text-5xl font-black tracking-tight text-neutral-900">
            مهارتی را انتخاب کن
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-neutral-500">
            مسیرهای آموزشی پروژه‌محور برای ورود سریع‌تر به بازار کار
          </p>

        </div>

        <div className="grid auto-rows-[280px] gap-6 lg:grid-cols-4">

          {/* Large Card */}

          <Link
            href="/courses/programming"
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-[32px] bg-neutral-950 p-10"
          >

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">

              <div>

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500">

                  <Code2 className="h-10 w-10 text-white" />

                </div>

                <h3 className="text-4xl font-black text-white">
                  برنامه‌نویسی
                </h3>

                <p className="mt-6 max-w-md leading-9 text-neutral-400">
                  Python، JavaScript، Backend، Frontend،
                  Full Stack و پروژه‌های واقعی.
                </p>

              </div>

              <div className="flex items-center gap-3 font-medium text-orange-400">

                مشاهده دوره‌ها

                <ArrowLeft className="transition group-hover:-translate-x-2" />

              </div>

            </div>

          </Link>

          {categories.slice(1).map((item) => {

            const Icon = item.icon;

            return (

              <Link
                href="#"
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 group-hover:opacity-5`}
                />

                <div className="relative flex h-full flex-col justify-between">

                  <div>

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 transition group-hover:bg-orange-500">

                      <Icon className="h-8 w-8 text-neutral-800 transition group-hover:text-white" />

                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-8 text-neutral-500">
                      {item.description}
                    </p>

                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">

                    مشاهده

                    <ArrowLeft
                      size={18}
                      className="transition group-hover:-translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}