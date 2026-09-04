const stats = [
  {
    number: "12+",
    title: "سال تجربه",
    description: "آموزش تخصصی مهارت‌های دیجیتال",
  },
  {
    number: "500+",
    title: "هنرجو",
    description: "آموزش دیده و آماده بازار کار",
  },
  {
    number: "20+",
    title: "دوره تخصصی",
    description: "برنامه‌نویسی، طراحی و گرافیک",
  },
  {
    number: "100%",
    title: "پشتیبانی",
    description: "همراهی در مسیر یادگیری",
  },
];

export default function Stats() {
  return (
    <section
      className="
relative
bg-neutral-950
py-20
"
    >
      <div
        className="
max-w-7xl
mx-auto
px-6
"
      >
        <div
          className="
grid
grid-cols-2
lg:grid-cols-4
gap-6
"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="
group
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
text-center
hover:border-orange-500/50
hover:-translate-y-2
transition-all
duration-300
"
            >
              <div
                className="
text-4xl
font-bold
text-orange-500
mb-3
"
              >
                {item.number}
              </div>

              <h3
                className="
text-xl
font-bold
text-white
mb-3
"
              >
                {item.title}
              </h3>

              <p
                className="
text-sm
leading-7
text-neutral-400
"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
