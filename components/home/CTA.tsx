import { ArrowLeft } from "lucide-react"

type CTAProps = {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
}

export default function CTA({
  title = "آماده‌اید محتوای بهتری بسازیم؟",
  description = "کافی است درباره پروژه و هدفتان با ما صحبت کنید. مسیر مناسب را با هم پیدا می‌کنیم.",
  buttonLabel = "شروع یک پروژه",
  buttonHref = "#",
}: CTAProps) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[32px] border border-orange-500/10 bg-[#0a1628] px-6 py-16 text-center sm:px-12">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.07] blur-[100px]" />

        <div className="relative">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">
            {description}
          </p>

          <a
            href={buttonHref}
            className="mt-7 inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-6 text-sm font-bold text-white shadow-none transition-colors hover:bg-orange-400"
          >
            {buttonLabel}

            <ArrowLeft className="mr-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}