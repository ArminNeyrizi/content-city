import {
  Camera,
  Clapperboard,
  Megaphone,
  PenTool,
} from "lucide-react"

import type { Service } from "./data"

type ServiceCardProps = Service & {
  href?: string
}

const iconMap = {
  strategy: PenTool,
  camera: Camera,
  video: Clapperboard,
  social: Megaphone,
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "#",
}: ServiceCardProps) {
  const Icon = iconMap[icon]

  return (
    <a
      href={href}
      className="group block min-h-[235px] rounded-2xl border border-white/[0.05] bg-[#0d1b2e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/20 hover:bg-[#102039]"
    >
      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/40">
        {description}
      </p>

      <div className="mt-6 text-xs font-bold text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
        مشاهده خدمات ←
      </div>
    </a>
  )
}