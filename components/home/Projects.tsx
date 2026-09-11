import ProjectCard from "./ProjectCard"
import type { Project } from "./data"

type ProjectsProps = {
  items: Project[]
}

export default function Projects({
  items,
}: ProjectsProps) {
  return (
    <section id="projects" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs font-bold text-orange-500">
              نمونه‌کارها
            </div>

            <h2 className="text-3xl font-black text-white sm:text-4xl">
              بخشی از کارهایی که ساخته‌ایم
            </h2>
          </div>

          <a
            href="#"
            className="hidden text-xs font-bold text-white/50 transition-colors hover:text-orange-500 sm:block"
          >
            مشاهده همه نمونه‌کارها ←
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}