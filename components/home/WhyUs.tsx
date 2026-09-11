import {
  Check,
  Sparkles,
  Users,
  Video,
} from "lucide-react"

type WhyUsProps = {
  items: string[]
}

const stats = [
  {
    value: "120+",
    label: "برند همراه",
    icon: Users,
  },
  {
    value: "2.8K+",
    label: "محتوای تولیدشده",
    icon: Video,
  },
  {
    value: "260+",
    label: "پروژه موفق",
    icon: Sparkles,
  },
  {
    value: "98%",
    label: "رضایت مشتریان",
    icon: Check,
  },
]

export default function WhyUs({
  items,
}: WhyUsProps) {
  return (
    <section
      id="about"
      className="px-5 py-20 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">

        {/* Content */}
        <div>
          <div className="mb-3 text-xs font-bold text-orange-500">
            چرا ContentCity؟
          </div>

          <h2 className="max-w-xl text-3xl font-black leading-[1.5] text-white sm:text-4xl">
            فقط محتوا تولید نمی‌کنیم؛
            <span className="text-orange-500">
              {" "}
              مسئله برند را حل می‌کنیم.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-8 text-white/40">
            هر پروژه از یک مسئله شروع می‌شود. قبل از دوربین، تدوین و طراحی،
            مخاطب، پیام و هدف کسب‌وکار را مشخص می‌کنیم.
          </p>

          {/* Benefits */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white/60"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  <Check className="h-3.5 w-3.5" />
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`aspect-square rounded-3xl border p-6 ${
                  index === stats.length - 1
                    ? "border-orange-500/20 bg-orange-500/[0.05]"
                    : "border-white/[0.07] bg-[#0a1628]"
                }`}
              >
                <div className="flex h-full flex-col justify-between">
                  <Icon className="h-5 w-5 text-orange-500" />

                  <div>
                    <div className="text-3xl font-black text-white sm:text-4xl">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-xs text-white/35">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}