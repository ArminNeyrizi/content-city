import Link from "next/link";

const navItems = [
  { href: "#", label: "دوره‌ها" },
  { href: "#", label: "درباره ما" },
  { href: "#", label: "مقالات" },
  { href: "#", label: "آزمون آنلاین" },
  { href: "#", label: "تماس" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-neutral-900">
          مهدوی‌نژاد
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#" className="rounded-full bg-orange-500 px-6 py-3 text-sm text-white transition hover:bg-orange-600">
          مشاوره رایگان
        </Link>
      </div>
    </header>
  );
}
