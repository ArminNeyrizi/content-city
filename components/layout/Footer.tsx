import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        {/* About */}

        <div>
          <h3 className="mb-3 text-xl font-bold">
            آموزشگاه مهدوی‌نژاد
          </h3>

          <p className="leading-7 text-neutral-400">
            آموزش مهارت‌های دیجیتال، برنامه‌نویسی، طراحی سایت، گرافیک،
            حسابداری و سایر مهارت‌های کاربردی برای ورود به بازار کار.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h4 className="mb-3 font-semibold">
            دسترسی سریع
          </h4>

          <ul className="space-y-2 text-neutral-400">
            <li>
              <Link href="/" className="transition hover:text-orange-400">
                صفحه اصلی
              </Link>
            </li>

            <li>
              <Link href="/courses" className="transition hover:text-orange-400">
                دوره‌های آموزشی
              </Link>
            </li>

            <li>
              <Link
                href="/mahdieh-mahdavinezhad"
                className="transition hover:text-orange-400"
              >
                درباره مدرس
              </Link>
            </li>

            <li>
              <Link href="/faq" className="transition hover:text-orange-400">
                سوالات متداول
              </Link>
            </li>

            <li>
              <Link href="/terms" className="transition hover:text-orange-400">
                قوانین و مقررات
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-orange-400">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h4 className="mb-3 font-semibold">
            اطلاعات تماس
          </h4>

          <div className="space-y-2 leading-7 text-neutral-400">
            <p>📞 0937 013 1030</p>
            <p>📍 تهران، تهرانپارس</p>
            <p>🕒 شنبه تا پنجشنبه | ۹ الی ۲۰</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} آموزشگاه کامپیوتر مهدوی‌نژاد. تمامی حقوق محفوظ است.
          </p>

          <div className="flex gap-5">
            <Link href="/terms" className="transition hover:text-orange-400">
              قوانین
            </Link>

            <Link href="/faq" className="transition hover:text-orange-400">
              سوالات متداول
            </Link>

            <Link href="/contact" className="transition hover:text-orange-400">
              تماس
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}