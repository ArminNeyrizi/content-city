type ClientsProps = {
  items: string[]
}

export default function Clients({ items }: ClientsProps) {
  return (
    <section id="clients" className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 text-center">
          <div className="text-xs font-bold text-orange-500">
            مشتریان ما
          </div>

          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            برندهایی که به ما اعتماد کرده‌اند
          </h2>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a1628] sm:grid-cols-4">
          {items.map((client, index) => (
            <div
              key={client}
              className={`flex h-28 items-center justify-center px-4 text-sm font-bold text-white/35 transition-colors hover:text-white ${
                index !== 0
                  ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}