import type { LucideIcon } from "lucide-react"
import {
  Camera,
  Clapperboard,
  Megaphone,
  PenTool,
} from "lucide-react"

export type Service = {
  icon: "strategy" | "camera" | "video" | "social"
  title: string
  description: string

}

export type Project = {
  category: string
  title: string
  image: string
}

export type Stat = {
  value: string
  label: string

}

export const navItems = [
  { label: "خانه", href: "#" },
  { label: "خدمات ما", href: "#services" },
  { label: "نمونه‌کارها", href: "#projects" },
  { label: "مشتریان", href: "#clients" },
  { label: "درباره ما", href: "#about" },
  { label: "وبلاگ", href: "#blog" },
]

export const services: Service[] = [
  {
    icon: "strategy",
    title: "استراتژی محتوا",
    description:
      "استراتژی محتوایی متناسب با برند، مخاطب و هدف کسب‌وکار شما.",
  },
  {
    icon: "camera",
    title: "عکاسی و فیلم برداری",
    description:
      "دارای استودیو و لوکیشن مجهز برای فیلم برداری حرفه ای.",
  },
  {
    icon: "video",
    title: "تولید ویدیو",
    description:
      "از ایده و سناریو تا فیلم‌برداری، تدوین و تولید محتوای ویدیویی.",
  },
  {
    icon: "social",
    title: "مدیریت شبکه‌های اجتماعی",
    description:
      "برنامه‌ریزی، تولید، انتشار و تحلیل محتوای شبکه‌های اجتماعی برند.",
  },
]

export const projects: Project[] = [
  {
    category: "تولید ویدیو",
    title: "ادیت ویدیو",
    image: "/images/project-01.webp",
  },
  {
    category: "تولید محتوا",
    title: "عکاسی و فیلم برداری",
    image: "/images/project-02.webp",
  },
  {
    category: "سوشیال مدیا",
    title: "مدیریت شبکه اجتماعی",
    image: "/images/project-03.webp",
  },
  {
    category: "کپی رایتینگ",
    title: "سناریو نویسی",
    image: "/images/project-04.webp",
  },
]

export const stats: Stat[] = [
  {
    value: "+260",
    label: "پروژه انجام‌شده",
  },
  {
    value: "+120",
    label: "برند همراه",
  },
  {
    value: "+2.8K",
    label: "محتوای تولیدشده",
  },
  {
    value: "98%",
    label: "رضایت مشتریان",
  },
]

export const clients = [
  "زادمهر",
  "دکتر شیری",
  "حجت عزیزی",
  "خشت",
]

export const whyUsItems = [
  "استراتژی قبل از تولید",
  "تیم چندتخصصی برای هر پروژه",
  "فرآیند مشخص از ایده تا انتشار",
  "گزارش و تحلیل عملکرد محتوا",
]