import type { Stat } from "./data"

type StatsProps = {
  items: Stat[]
}

export default function Stats({ items }: StatsProps) {
  return (
    <section className="px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a1628] lg:grid-cols-4">
        {items.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-8 text-center sm:px-8 ${
              index !== 0
                ? "border-t border-white/[0.06] lg:border-l lg:border-t-0"
                : ""
            }`}
          >
            <div className="text-3xl font-black text-white sm:text-4xl">
              {stat.value}
            </div>

            <div className="mt-2 text-xs text-white/35">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}