import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "آموزش جامع پایتون",
    description:
      "یادگیری برنامه‌نویسی از صفر تا ورود به بازار کار با پروژه‌های واقعی.",
    duration: "۶۰ ساعت",
    price: "۹,۸۰۰,۰۰۰ تومان",
    image: "/images/python.png",
    href: "/courses/python",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Courses */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h1 className="text-4xl font-black text-neutral-900">
              دوره‌های آموزشی
            </h1>

            <p className="mt-5 text-neutral-600">
              دوره مناسب خودتان را انتخاب کنید و مهارت‌های کاربردی یاد بگیرید.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover"
                />

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {course.title}
                  </h2>

                  <p className="mt-4 leading-8 text-neutral-600">
                    {course.description}
                  </p>

                  <div className="mt-6 flex justify-between text-sm text-neutral-500">
                    <span>{course.duration}</span>
                    <span>{course.price}</span>
                  </div>

                  <Link
                    href={course.href}
                    className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
                  >
                    مشاهده دوره
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}

      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black text-neutral-900">
              چرا آموزشگاه مهدوی‌نژاد؟
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "آموزش پروژه‌محور",
              "مدرک معتبر فنی و حرفه‌ای",
              "اساتید با تجربه",
              "پشتیبانی آموزشی",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mb-4 text-3xl">✓</div>

                <p className="font-medium text-neutral-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}