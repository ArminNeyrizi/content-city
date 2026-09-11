import Image from "next/image"

type FooterProps = {
  brandName?: string
  description?: string
}

export default function Footer({
  brandName = "CONTENT CITY",
  description = "آژانس خلاقیت و تولید محتوای دیجیتال",
}: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/content-city-logo.webp"
              alt={brandName}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>

          <div>
            <div className="text-xs font-black tracking-[0.15em] text-white">
              {brandName}
            </div>

            <div className="mt-1 text-[10px] text-white/30">
              {description}
            </div>
          </div>
        </a>

        <div className="text-[11px] text-white/25">
          © {new Date().getFullYear()} Content City. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  )
}