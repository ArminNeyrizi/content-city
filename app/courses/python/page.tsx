import Image from "next/image";
import Link from "next/link";

const topics = [
  "آشنایی کامل با مفاهیم پایه‌ای برنامه‌نویسی و زبان Python",
  "ساختارهای داده (List، Dictionary، Tuple و ...)",
  "شرط‌ها، حلقه‌ها و توابع",
  "برنامه‌نویسی شیءگرا (OOP)",
  "کار با فایل‌ها و ماژول‌ها",
  "ساخت ربات تلگرام",
  "تحلیل داده‌ها",
  "اتوماسیون وظایف",
  "آشنایی با NumPy، Pandas و Tkinter",
];

const audience = [
  "علاقه‌مندان به یادگیری برنامه‌نویسی از پایه",
  "دانشجویان و مهندسان",
  "افراد متقاضی ورود به بازار کار",
  "فریلنسرها",
  "متقاضیان مهاجرت کاری",
  "معلمان و پژوهشگران",
];

const specifications = [
  ["عنوان دوره", "آموزش جامع برنامه‌نویسی پایتون"],
  ["مدت زمان", "۶۰ ساعت"],
  ["شهریه", "۹,۸۰۰,۰۰۰ تومان"],
  [
    "مخاطبین",
    "افراد مبتدی تا متوسط، دانشجویان، مهندسان و علاقه‌مندان به بازار کار",
  ],
  ["محتوای آموزشی", "مبانی پایتون، ساختار داده، توابع، OOP، پروژه‌های کاربردی"],
  ["محل ثبت‌نام", "mahdavinezhad.ir"],
];

export default function PythonCourse() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-neutral-950 py-24 text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          <span className="rounded-full bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            دوره تخصصی برنامه‌نویسی
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            آموزش جامع
            <span className="text-orange-500"> پایتون</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-300">
            اگر به دنبال یادگیری یکی از قدرتمندترین و محبوب‌ترین زبان‌های
            برنامه‌نویسی دنیا هستید، این دوره دقیقاً برای شما طراحی شده است.
            آموزش از صفر، پروژه‌محور و مناسب ورود به بازار کار.
          </p>

          <Link
            href="/contact"
            className="mt-10 rounded-xl bg-orange-500 px-8 py-4 font-medium transition hover:bg-orange-600"
          >
            ثبت‌نام و مشاوره
          </Link>

          <div className="mt-16">
            <Image
              src="/images/python.png"
              alt="دوره آموزش برنامه‌نویسی پایتون"
              width={900}
              height={650}
              priority
              className="mx-auto w-full max-w-4xl rounded-3xl shadow-2xl"
            />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur">
              <div className="text-sm text-neutral-400">
                مدت دوره
              </div>

              <div className="mt-2 text-xl font-bold">
                ۶۰ ساعت
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur">
              <div className="text-sm text-neutral-400">
                شهریه
              </div>

              <div className="mt-2 text-xl font-bold">
                ۹,۸۰۰,۰۰۰ تومان
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 px-8 py-5 backdrop-blur">
              <div className="text-sm text-neutral-400">
                سطح دوره
              </div>

              <div className="mt-2 text-xl font-bold">
                مبتدی تا پیشرفته
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-black text-neutral-900">
            در این دوره چه چیزهایی یاد می‌گیرید؟
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-lg"
              >
                <span className="text-orange-500">✓</span>

                <span className="mr-3 text-neutral-700">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}

      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-black text-neutral-900">
            این دوره مناسب چه کسانی است؟
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-black text-neutral-900">
            مشخصات دوره
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl border border-neutral-200">
            <table className="w-full">
              <tbody>
                {specifications.map(([title, value]) => (
                  <tr
                    key={title}
                    className="border-b border-neutral-200 last:border-none"
                  >
                    <td className="w-1/3 bg-neutral-50 px-6 py-5 font-bold">
                      {title}
                    </td>

                    <td className="px-6 py-5 text-neutral-600">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-orange-500 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-5xl font-black">
            آماده یادگیری پایتون هستید؟
          </h2>

          <p className="mt-8 text-lg leading-9">
            همین امروز ثبت‌نام کنید و مسیر ورود به دنیای برنامه‌نویسی را آغاز
            کنید.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            ثبت‌نام دوره
          </Link>
        </div>
      </section>
    </>
  );
}