import Image from "next/image";
import Link from "next/link";

export default function AboutTeacher() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          {/* Image */}

          <div className="mb-16 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-orange-500/20 blur-3xl" />

              <Image
                src="/images/mahdieh.png"
                alt="مهدیه مهدوی‌نژاد"
                width={430}
                height={560}
                priority
                className="relative rounded-[36px] object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-600">
              درباره مدرس
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-neutral-900 lg:text-6xl">
              من اینجام تا مسیر
              <br />
              پربارتری رو بهت
              <span className="text-orange-500"> نشون بدم.</span>
            </h1>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
              من مهدیه مهدوی‌نژاد هستم؛ مربی و مدرس دوره‌های آموزشی در زمینه
              ارتباط تصویری، نرم‌افزارهای تخصصی و مهارت‌های شناختی برای انتقال
              مؤثر پیام‌های بصری.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="rounded-xl bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
              >
                مشاهده دوره‌ها
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-neutral-300 px-8 py-4 transition hover:bg-neutral-100"
              >
                ارتباط با من
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}

      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[36px] bg-white p-12 shadow-sm">
            <h2 className="text-4xl font-black text-neutral-900">
              رسالت من
            </h2>

            <p className="mt-8 text-lg leading-10 text-neutral-600">
              حضور من اینجا فقط برای آموزش یک مهارت نیست.
              <br />
              <br />
              من اینجام تا بهت کمک کنم فرد مفیدتری برای خودت، خانواده‌ات و
              جامعه‌ات باشی؛ اعتمادبه‌نفس بیشتری داشته باشی، درست و مؤثر صحبت
              کنی و آینده‌ای متفاوت برای خودت بسازی.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-neutral-950 p-10 text-white">
              <h3 className="text-3xl font-bold">
                ارتباط تصویری یعنی چه؟
              </h3>

              <p className="mt-6 leading-9 text-neutral-300">
                ارتباط تصویری یعنی انتقال صحیح پیام از طریق تصویر، رنگ، فرم،
                تایپوگرافی و طراحی اصولی.
              </p>

              <Link
                href="/visual-communication"
                className="mt-10 inline-flex text-orange-400 transition hover:text-orange-300"
              >
                مطالعه بیشتر →
              </Link>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-10">
              <h3 className="text-3xl font-bold text-neutral-900">
                هدف من
              </h3>

              <p className="mt-6 leading-9 text-neutral-600">
                تا امروز افتخار داشتم به هزاران نفر کمک کنم مسیر مناسب خودشان را
                پیدا کنند و رشدی متناسب با فضای خانوادگی و اجتماعی‌شان تجربه
                کنند.
                <br />
                <br />
                اینجا هستم تا تو یا فرزندت دغدغه‌ای بابت آینده و انتخاب مسیر
                نداشته باشید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}

      <section className="bg-neutral-950 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-3xl font-black leading-[1.8] text-white lg:text-5xl">
            «من اینجا نیستم
            <br />
            که فقط یک مهارت یاد بدم.
            <br />
            <span className="text-orange-500">
              من اینجام تا کمک کنم
            </span>
            <br />
            نسخه بهتری از خودت باشی.»
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-orange-500 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-5xl font-black">
            آماده‌ای مسیرت را پیدا کنی؟
          </h2>

          <p className="mt-8 text-xl leading-9">
            خوشحال می‌شوم در این مسیر همراهت باشم.
          </p>

          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            دریافت مشاوره
          </Link>
        </div>
      </section>
    </>
  );
}