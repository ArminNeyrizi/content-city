import Image from "next/image"
import {
  ArrowLeft,
  ArrowUpLeft,
  Camera,
  Check,
  Clapperboard,
  Megaphone,
  PenTool,
  Play,
  Sparkles,
  Users,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: PenTool,
    title: "استراتژی محتوا",
    description:
      "استراتژی محتوایی متناسب با برند، مخاطب و هدف کسب‌وکار شما.",
  },
  {
    icon: Camera,
    title: "عکاسی و برندسازی",
    description:
      "عکاسی حرفه‌ای از محصولات، خدمات و فضای برند برای ساخت یک هویت بصری منسجم.",
  },
  {
    icon: Clapperboard,
    title: "تولید ویدیو",
    description:
      "از ایده و سناریو تا فیلم‌برداری، تدوین و تولید محتوای ویدیویی.",
  },
  {
    icon: Megaphone,
    title: "مدیریت شبکه‌های اجتماعی",
    description:
      "برنامه‌ریزی، تولید، انتشار و تحلیل محتوای شبکه‌های اجتماعی برند.",
  },
]

const projects = [
  {
    category: "تولید ویدیو",
    title: "کمپین ویدیویی برند",
    image: "/images/project-01.webp",
  },
  {
    category: "عکاسی محصول",
    title: "کمپین تصویری محصول",
    image: "/images/project-02.webp",
  },
  {
    category: "شبکه اجتماعی",
    title: "مدیریت محتوای شبکه اجتماعی",
    image: "/images/project-03.webp",
  },
  {
    category: "برندسازی",
    title: "هویت محتوایی برند",
    image: "/images/project-04.webp",
  },
  {
    category: "تولید محتوا",
    title: "کمپین محتوایی دیجیتال",
    image: "/images/project-05.webp",
  },
  {
    category: "ویدیوی تبلیغاتی",
    title: "محتوای تبلیغاتی برند",
    image: "/images/project-06.webp",
  },
]

const stats = [
  {
    value: "+260",
    label: "پروژه انجام‌شده",
  },
  {
    value: "+120",
    label: "برند همراه",
  },
  {
    value: "+4",
    label: "سال تجربه",
  },
  {
    value: "98%",
    label: "رضایت مشتریان",
  },
]

const clients = [
  "دیجی‌کالا",
  "Snapp!",
  "TAPSI",
  "کاله",
  "ایرانسل",
]

export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#07111f] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Orange glow */}

        <div className="absolute right-[15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-orange-500/[0.06] blur-[150px]" />

        {/* Navy blue glow */}

        <div className="absolute left-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.035] blur-[150px]" />

        {/* Bottom glow */}

        <div className="absolute bottom-[-10%] right-[35%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.035] blur-[130px]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-8">

          {/* Logo */}

          <a
            href="#"
            className="flex items-center gap-3"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#07111f]">
              <Image
                src="/images/content-city-logo.webp"
                alt="Content City"
                fill
                sizes="48px"
                className="scale-[1.1] object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-[13px] font-black tracking-[0.18em] text-white">
                CONTENT CITY
              </div>

              <div className="mt-1 text-[10px] text-white/40">
                آژانس تولید محتوای دیجیتال
              </div>
            </div>
          </a>

          {/* Menu */}

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              "خانه",
              "خدمات ما",
              "نمونه‌کارها",
              "مشتریان",
              "درباره ما",
              "وبلاگ",
            ].map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-[13px] transition-colors ${
                  index === 0
                    ? "font-bold text-orange-500"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-10 border-white/10 bg-transparent px-4 text-xs text-white/70 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white sm:flex"
            >
              مشاوره رایگان
            </Button>

            <Button className="h-10 bg-orange-500 px-4 text-xs font-bold text-white shadow-none hover:bg-orange-400">
              درخواست همکاری

              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative">
        <div
          dir="ltr"
          className="mx-auto grid min-h-[650px] w-full max-w-[1440px] items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-14"
        >

          {/* HERO IMAGE — LEFT */}

          <div
            dir="rtl"
            className="relative"
          >
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[110px]" />

            <div className="relative mx-auto max-w-[650px]">
              <div className="relative aspect-square overflow-hidden rounded-[38px] border border-white/[0.06]">

                <Image
                  src="/images/hero-agency.webp"
                  alt="Content City Agency"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 650px"
                  className="object-cover"
                />

                {/* Bottom navy gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />

                {/* Right navy gradient */}

                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#07111f]/20" />
              </div>
            </div>
          </div>

          {/* HERO TEXT — RIGHT */}

          <div
            dir="rtl"
            className="relative"
          >

            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.05] px-4 py-2 text-xs text-orange-300">
              <Sparkles className="h-3.5 w-3.5" />

              آژانس خلاقیت و تولید محتوای دیجیتال
            </div>

            {/* Heading */}

            <h1 className="max-w-[700px] text-5xl font-black leading-[1.25] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              محتوایی خلق می‌کنیم

              <br />

              <span className="text-orange-500">
                که دیده می‌شود.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-[600px] text-[15px] leading-8 text-white/50 sm:text-base">
              از ایده و استراتژی تا تولید و انتشار؛
              محتوای برند شما را طراحی می‌کنیم تا فقط منتشر نشود،
              بلکه دیده، فهمیده و به نتیجه تبدیل شود.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-3">

              <Button
                size="lg"
                className="h-13 bg-orange-500 px-6 text-sm font-bold text-white shadow-none hover:bg-orange-400"
              >
                شروع یک پروژه

                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 border-white/10 bg-white/[0.02] px-6 text-sm text-white hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white"
              >
                مشاهده نمونه‌کارها

                <Play className="mr-2 h-4 w-4" />
              </Button>

            </div>

            {/* Trust */}

            <div className="mt-7 flex items-center gap-4">

              <div className="flex -space-x-3 space-x-reverse">
                {["A", "M", "S", "N", "+"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#07111f] bg-[#10213a] text-[10px] font-bold text-white"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div>
                <div className="text-xs font-bold text-white">
                  بیش از ۱۲۰ برند
                </div>

                <div className="mt-1 text-[10px] text-white/35">
                  به ما اعتماد کرده‌اند
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="mx-auto w-full max-w-[1440px] px-5 py-12 lg:px-8"
      >
        <div className="rounded-[28px] border border-white/[0.07] bg-[#0a1628]/80 p-5 sm:p-7">

          {/* Header */}

          <div className="mb-8 grid gap-6 lg:grid-cols-[280px_1fr] lg:items-end">

            <div>
              <div className="text-xs font-bold text-orange-500">
                خدمات ما
              </div>

              <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">
                راه‌حل‌های محتوایی
                <br />
                برای رشد برند شما
              </h2>
            </div>

            <div className="flex items-end justify-end">
              <Button
                variant="outline"
                className="border-white/10 bg-transparent text-xs text-white/60 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white"
              >
                مشاهده همه خدمات

                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>
            </div>

          </div>

          {/* Service Cards */}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon

              return (
                <Card
                  key={service.title}
                  className="group min-h-[235px] rounded-2xl border border-white/[0.07] bg-[#0d1b2e] p-6 text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#10213a] [&_*]:text-inherit"
                >

                  {/* Icon */}

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/[0.06]">
                    <Icon className="h-5 w-5 text-orange-400" />
                  </div>

                  {/* Title */}

                  <h3 className="text-base font-bold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-xs leading-7 text-white/45">
                    {service.description}
                  </p>

                  {/* Arrow */}

                  <ArrowUpLeft className="mt-5 h-4 w-4 text-white/25 transition-colors group-hover:text-orange-500" />

                </Card>
              )
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="mx-auto w-full max-w-[1440px] px-5 py-12 lg:px-8"
      >

        <div className="mb-7 flex items-end justify-between gap-5">

          <div>
            <div className="text-xs font-bold text-orange-500">
              نمونه‌کارها
            </div>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              ایده‌ها را به نتایج واقعی تبدیل می‌کنیم.
            </h2>
          </div>

          <Button
            variant="outline"
            className="hidden shrink-0 border-white/10 bg-transparent text-xs text-white/60 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white sm:flex"
          >
            مشاهده همه پروژه‌ها

            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>

        </div>

        <div className="relative">

          <div className="flex gap-4 overflow-hidden">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative min-w-[255px] flex-1 overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a1628] sm:min-w-[275px]"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="300px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/10 to-transparent" />

                  {/* Category */}

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-white/10 bg-[#07111f]/70 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="absolute bottom-0 right-0 left-0 p-5">

                    <h3 className="text-sm font-bold leading-6 text-white">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-1 text-[10px] text-white/40 transition-colors group-hover:text-orange-400">
                      مشاهده پروژه

                      <ArrowLeft className="h-3 w-3" />
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Slider Buttons */}

          <button
            type="button"
            aria-label="پروژه قبلی"
            className="absolute right-[-14px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1628]/95 text-white backdrop-blur-xl transition-all hover:border-orange-500/30 hover:bg-orange-500 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="پروژه بعدی"
            className="absolute left-[-14px] top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a1628]/95 text-white backdrop-blur-xl transition-all hover:border-orange-500/30 hover:bg-orange-500 hover:text-white"
          >
            <ArrowUpLeft className="h-4 w-4 rotate-[-45deg]" />
          </button>

        </div>
      </section>

      {/* =========================================================
          CLIENTS
      ========================================================= */}

      <section
        id="clients"
        className="border-y border-white/[0.06] bg-[#0a1628]/30"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-5 py-8 lg:flex-row lg:px-8">

          <div className="shrink-0 text-xs font-bold text-white/35">
            برخی از مشتریان ما
          </div>

          <div className="h-px w-full bg-white/[0.06] lg:h-8 lg:w-px" />

          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-12 gap-y-5 lg:justify-between">

            {clients.map((client) => (
              <div
                key={client}
                className="text-base font-black tracking-tight text-white/25 transition-colors hover:text-white/70"
              >
                {client}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="mx-auto w-full max-w-[1440px] px-5 py-8 lg:px-8">

        <div className="grid overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0a1628]/80 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-4 px-6 py-6 ${
                index !== 0
                  ? "border-t border-white/[0.07] sm:border-r lg:border-t-0"
                  : ""
              }`}
            >

              <div className="text-center">

                <div className="text-3xl font-black text-orange-500">
                  {stat.value}
                </div>

                <div className="mt-1 text-[10px] text-white/35">
                  {stat.label}
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* =========================================================
          WHY US
      ========================================================= */}

      <section
        id="about"
        className="mx-auto w-full max-w-[1440px] px-5 py-16 lg:px-8"
      >

        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

          {/* Text */}

          <div>

            <div className="text-xs font-bold text-orange-500">
              چرا ContentCity؟
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.3] text-white sm:text-5xl">
              فقط محتوا تولید نمی‌کنیم؛

              <br />

              <span className="text-orange-500">
                مسئله برند را حل می‌کنیم.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/40">
              هر پروژه از یک مسئله شروع می‌شود. قبل از دوربین،
              تدوین و طراحی، مخاطب، پیام و هدف کسب‌وکار را مشخص
              می‌کنیم.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "استراتژی قبل از تولید",
                "تیم چندتخصصی برای هر پروژه",
                "فرآیند مشخص از ایده تا انتشار",
                "گزارش و تحلیل عملکرد محتوا",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="rounded-full bg-orange-500/10 p-1.5">
                    <Check className="h-3.5 w-3.5 text-orange-500" />
                  </div>

                  <span className="text-xs text-white/65">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>

          {/* Numbers */}

          <div className="grid grid-cols-2 gap-3">

            <div className="mt-7 rounded-3xl border border-white/[0.07] bg-[#0a1628] p-6">
              <Users className="h-7 w-7 text-orange-500" />

              <div className="mt-8 text-3xl font-black text-white">
                120+
              </div>

              <div className="mt-2 text-[10px] text-white/35">
                برند همراه
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.07] bg-[#0a1628] p-6">
              <Video className="h-7 w-7 text-orange-500" />

              <div className="mt-8 text-3xl font-black text-white">
                2.8K+
              </div>

              <div className="mt-2 text-[10px] text-white/35">
                محتوای تولیدشده
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.07] bg-[#0a1628] p-6">
              <Sparkles className="h-7 w-7 text-orange-500" />

              <div className="mt-8 text-3xl font-black text-white">
                260+
              </div>

              <div className="mt-2 text-[10px] text-white/35">
                پروژه انجام‌شده
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-orange-500/20 bg-orange-500/[0.05] p-6">

              <div className="text-4xl font-black text-orange-500">
                98%
              </div>

              <div className="mt-3 text-[10px] text-white/40">
                رضایت مشتریان
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto w-full max-w-[1440px] px-5 pb-12 lg:px-8">

        <div className="relative overflow-hidden rounded-[30px] border border-orange-500/20 bg-[#0a1628] p-8 sm:p-12">

          <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <div className="text-xs font-bold text-orange-500">
                پروژه بعدی شما؟
              </div>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                چه کاری می‌توانیم برای برند شما انجام دهیم؟
              </h2>

              <p className="mt-4 text-xs leading-7 text-white/35">
                فرم را پر کنید تا کارشناسان ما در سریع‌ترین زمان
                با شما تماس بگیرند.
              </p>

            </div>

            <div className="flex shrink-0 flex-wrap gap-3">

              <Button
                size="lg"
                className="h-13 bg-orange-500 px-6 text-sm font-bold text-white shadow-none hover:bg-orange-400"
              >
                درخواست مشاوره رایگان

                <ArrowLeft className="mr-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-13 border-white/10 bg-transparent px-6 text-sm text-white hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white"
              >
                تماس با ما
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7 px-5 py-8 lg:px-8">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            {/* Logo */}

            <a
              href="#"
              className="flex items-center gap-3"
            >

              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#07111f]">

                <Image
                  src="/images/content-city-logo.webp"
                  alt="Content City"
                  fill
                  sizes="44px"
                  className="scale-[1.12] object-cover"
                />

              </div>

              <div>

                <div className="text-xs font-black tracking-[0.18em] text-white">
                  CONTENT CITY
                </div>

                <div className="mt-1 text-[9px] text-white/30">
                  آژانس تولید محتوای دیجیتال
                </div>

              </div>
            </a>

            {/* Links */}

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] text-white/35">

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                خانه
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-white"
              >
                خدمات ما
              </a>

              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                نمونه‌کارها
              </a>

              <a
                href="#clients"
                className="transition-colors hover:text-white"
              >
                مشتریان
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-white"
              >
                درباره ما
              </a>

            </nav>

            {/* Social */}

            <div className="flex items-center gap-2">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-[9px] font-black text-white/35 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-[9px] font-black text-white/35 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-[9px] font-black text-white/35 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-500"
              >
                TG
              </a>

            </div>
          </div>

          <div className="h-px bg-white/[0.05]" />

          <div className="text-center text-[9px] text-white/20">
            © 2026 ContentCity. All rights reserved.
          </div>

        </div>
      </footer>
    </main>
  )
}