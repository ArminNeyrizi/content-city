import ServiceCard from "./ServiceCard"
import type { Service } from "./data"

type ServicesProps = {
  items: Service[]
  eyebrow?: string
  title?: string
  description?: string
}

export default function Services({
  items,
  eyebrow = "خدمات ما",
  title = "هر چیزی که برند شما برای دیده‌شدن نیاز دارد",
  description = "از استراتژی و ایده تا تولید و انتشار، همه‌چیز را در یک تیم خلاق پیش می‌بریم.",
}: ServicesProps) {
  return (
    <section id="services" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1440px] rounded-[28px] bg-[#0a1628]/80 p-6 sm:p-8 lg:p-12">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-xs font-bold text-orange-500">
            {eyebrow}
          </div>

          <h2 className="text-3xl font-black leading-[1.4] text-white sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/40">
            {description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}