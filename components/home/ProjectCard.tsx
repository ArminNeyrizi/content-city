import Image from "next/image"
import { ArrowUpLeft } from "lucide-react"

type ProjectCardProps = {
  category: string
  title: string
  image: string
  href?: string
}

export default function ProjectCard({
  category,
  title,
  image,
  href = "#",
}: ProjectCardProps) {
  return (
    <a href={href} className="group block">
      <article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d1b2e]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

          <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all group-hover:bg-orange-500">
            <ArrowUpLeft className="h-4 w-4" />
          </div>

          <div className="absolute bottom-5 right-5 left-5">
            <div className="mb-2 text-[11px] font-bold text-orange-400">
              {category}
            </div>

            <h3 className="text-xl font-black text-white">
              {title}
            </h3>
          </div>
        </div>
      </article>
    </a>
  )
}