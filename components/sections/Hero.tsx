import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-neutral-950">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex mb-6 rounded-full bg-orange-500/10 border border-orange-500/30 px-5 py-2 text-sm text-orange-400">
            آموزش تخصصی مهارت‌های دیجیتال
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.3] text-white">
            یادگیری مهارت‌های دیجیتال برای
            <span className="text-orange-500 block">ورود به بازار کار</span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-neutral-400 max-w-xl">
            دوره‌های پروژه‌محور برنامه‌نویسی، طراحی سایت، گرافیک، تدوین و
            حسابداری با مدرک معتبر فنی و حرفه‌ای.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="#courses"
              className="rounded-xl bg-orange-500 px-8 py-4 text-white font-medium hover:bg-orange-600 transition"
            >
              مشاهده دوره‌ها
            </Link>

            <Link
              href="#contact"
              className="rounded-xl border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition"
            >
              مشاوره رایگان
            </Link>
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative hidden lg:flex justify-center">
          <div className="w-[420px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-bold text-xl">مهارت‌های آموزشی</h3>
              <div className="w-3 h-3 rounded-full bg-orange-500" />
            </div>

            <div className="space-y-4">
              {[
                "💻 برنامه نویسی",
                "🎨 طراحی و گرافیک",
                "🎬 تدوین ویدیو",
                "📊 حسابداری",
                "🌐 طراحی سایت",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}