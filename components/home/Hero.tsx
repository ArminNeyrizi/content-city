import Image from "next/image"
import {
  ArrowLeft,
  Play,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"

type HeroProps = {
  badge?: string
  title?: string
  highlightedTitle?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  trustedCount?: string
}

export default function Hero({
  badge = "آژانس خلاقیت و تولید محتوای دیجیتال",
  title = "محتوایی خلق می‌کنیم",
  highlightedTitle = "که دیده می‌شود.",
  description = `از ایده و استراتژی تا تولید و انتشار؛
محتوای برند شما را طراحی می‌کنیم تا فقط منتشر نشود،
بلکه دیده، فهمیده و به نتیجه تبدیل شود.`,
  imageSrc = "/images/hero-agency.webp",
  imageAlt = "Content City Agency",
  trustedCount = "بیش از ۱۲۰ برند",
}: HeroProps) {
  return (
    <section className="relative">
      <div
        dir="ltr"
        className="mx-auto grid min-h-[650px] w-full max-w-[1440px] items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-14"
      >

        {/* Image */}

        <div
          dir="rtl"
          className="relative"
        >
          <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.08] blur-[110px]" />

          <div className="relative mx-auto max-w-[650px]">
            <div className="relative aspect-square overflow-hidden rounded-[38px] border border-white/[0.06]">

              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 650px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#07111f]/20" />
            </div>
          </div>
        </div>

        {/* Content */}

        <div
          dir="rtl"
          className="relative"
        >

          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.05] px-4 py-2 text-xs text-orange-300">
            <Sparkles className="h-3.5 w-3.5" />

            {badge}
          </div>

          {/* Heading */}

          <h1 className="max-w-[700px] text-5xl font-black leading-[1.25] tracking-tight text-white sm:text-6xl lg:text-[68px]">
            {title}

            <br />

            <span className="text-orange-500">
              {highlightedTitle}
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-[600px] whitespace-pre-line text-[15px] leading-8 text-white/50 sm:text-base">
            {description}
          </p>

          {/* Actions */}

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
                {trustedCount}
              </div>

              <div className="mt-1 text-[10px] text-white/35">
                به ما اعتماد کرده‌اند
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}