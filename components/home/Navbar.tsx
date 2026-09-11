import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

type NavItem = {
  label: string
  href: string
}

type NavbarProps = {
  logoSrc?: string
  logoAlt?: string
  brandName?: string
  brandDescription?: string
  navItems: NavItem[]
}

export default function Navbar({
  logoSrc = "/images/content-city-logo.webp",
  logoAlt = "Content City",
  brandName = "CONTENT CITY",
  brandDescription = "آژانس تولید محتوای دیجیتال",
  navItems,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07111f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}

        <a
          href="#"
          className="flex items-center gap-3"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#07111f]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              sizes="48px"
              className="scale-[1.1] object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-[13px] font-black tracking-[0.18em] text-white">
              {brandName}
            </div>

            <div className="mt-1 text-[10px] text-white/40">
              {brandDescription}
            </div>
          </div>
        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] transition-colors ${
                index === 0
                  ? "font-bold text-orange-500"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}

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
  )
}