"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const studentTerms = [
  {
    title: "رعایت مقررات آموزشی و انضباطی",
    content:
      "کارآموز موظف است ضوابط و مقررات آموزشی و انضباطی آموزشگاه را که مطابق با دستورالعمل اجرایی آیین‌نامه نحوه اداره آموزشگاه‌های فنی و حرفه‌ای آزاد مصوب هیأت نظارت است، رعایت کند.",
  },
  {
    title: "جبران خسارت",
    content:
      "در صورتی که کارآموز به‌صورت عمدی یا در اثر سهل‌انگاری و عدم رعایت دستورات مربی یا مقررات کارگاه، خسارتی به تجهیزات، سخت‌افزارها، ابزار، ساختمان، تابلوهای آموزشی و سایر وسایل آموزشگاه وارد کند، موظف به جبران خسارت طبق برآورد آموزشگاه در مدت زمان توافق‌شده خواهد بود.",
  },
  {
    title: "رعایت شئونات آموزشی",
    content:
      "کارآموز موظف است از مطرح کردن مباحث غیرمرتبط با برنامه درسی، اهداف و شئونات آموزشگاه خودداری کند و تمامی ضوابط اجتماعی، اخلاقی و شئونات اسلامی را در محیط آموزشگاه رعایت نماید.",
  },
  {
    title: "حضور منظم و رعایت ساعات کلاس",
    content:
      "غیبت‌های موجه یا غیرموجه کارآموز در برگه‌های حضور و غیاب کلاس ثبت خواهد شد و جزئی از ساعات آموزش اجرا شده محسوب می‌شود. در صورت غیبت بیش از ۳ جلسه متوالی یا ۵ جلسه متناوب، آموزشگاه حق دارد از ادامه حضور کارآموز در کلاس جلوگیری کرده و قرارداد را بدون الزام به بازپرداخت شهریه لغو نماید.",
  },
  {
    title: "ورود و خروج به‌موقع",
    content:
      "کارآموز موظف است رأس ساعت شروع کلاس در آموزشگاه حاضر شود و پس از پایان جلسات آموزشی محیط آموزشگاه را ترک کرده و از ایجاد هرگونه اختلال در کلاس‌ها و کارگاه‌ها خودداری کند.",
  },
  {
    title: "انجام تکالیف و پیگیری مطالب آموزشی",
    content:
      "کارآموز موظف است تکالیف ارائه‌شده توسط مربیان را انجام دهد، مطالب تدریس‌شده را مطالعه کند و از مطرح کردن سؤالات نامرتبط که موجب اختلال در روند کلاس می‌شود، خودداری نماید.",
  },
  {
    title: "رعایت سایر مقررات آموزشی و امتحانی",
    content:
      "سایر قوانین مربوط به کارگاه، آزمون‌ها و مقررات آموزشی که در قرارداد ذکر نشده است، توسط آموزشگاه اطلاع‌رسانی خواهد شد و رعایت آن‌ها برای کارآموز الزامی است.",
  },
];

const instituteTerms = [
  {
    title: "اطلاع‌رسانی کامل شرایط آموزش",
    content:
      "آموزشگاه موظف است پیش از ثبت‌نام، شرایط آموزشی، شهریه و سایر جزئیات را به‌صورت شفاف به کارآموز اطلاع دهد. این اطلاعات در دفترچه ثبت‌نام یا به‌صورت کتبی در اختیار کارآموز قرار خواهد گرفت.",
  },
  {
    title: "اجرای برنامه آموزشی مطابق استانداردها",
    content:
      "برنامه آموزشی باید مطابق با استانداردهای مصوب سازمان آموزش فنی و حرفه‌ای کشور تدوین، اجرا و به کارآموز ابلاغ شود.",
  },
  {
    title: "صدور گواهینامه و معرفی به آزمون",
    content:
      "آموزشگاه موظف است پس از پرداخت هزینه‌های دوره، کارآموزان را جهت شرکت در آزمون‌های مربوطه معرفی کرده و برای دوره‌های خاص، گواهی حضور مطابق با فرمت تعیین‌شده صادر نماید.",
  },
  {
    title: "رعایت مقررات سازمان آموزش فنی و حرفه‌ای",
    content:
      "تمامی فعالیت‌های آموزشی آموزشگاه مطابق با ضوابط و مقررات سازمان آموزش فنی و حرفه‌ای کشور و در مدت اعتبار قرارداد انجام خواهد شد.",
  },
  {
    title: "حفظ حقوق کارآموزان و رعایت عدالت",
    content:
      "آموزشگاه متعهد است تمامی اقدامات خود را با رعایت انصاف، عدالت، اخلاق حرفه‌ای و حفظ حقوق کارآموزان انجام دهد.",
  },
  {
    title: "رعایت مقررات آموزشی و انضباطی",
    content:
      "آموزشگاه موظف است ضوابط و مقررات آموزشی و انضباطی را مطابق دستورالعمل‌های سازمان تدوین کرده و به‌عنوان بخشی از قرارداد در اختیار کارآموز قرار دهد.",
  },
  {
    title: "حل اختلافات",
    content:
      "در صورت بروز اختلاف بین کارآموز و آموزشگاه، موضوع مطابق ضوابط به هیأت نظارت استان یا مراجع قانونی ذی‌صلاح ارجاع خواهد شد.",
  },
];

function Accordion({
  title,
  items,
}: {
  title: string;
  items: { title: string; content: string }[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-black text-neutral-900">{title}</h2>

      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-right transition hover:bg-neutral-50"
              >
                <span className="text-lg font-bold text-neutral-900">
                  {item.title}
                </span>

                {isOpen ? (
                  <Minus className="text-orange-500" size={20} />
                ) : (
                  <Plus className="text-orange-500" size={20} />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-neutral-100 px-6 py-6 leading-9 text-neutral-600">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Terms() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-600">
            قوانین و مقررات
          </span>

          <h1 className="mt-8 text-5xl font-black text-neutral-900">
            شرایط و ضوابط آموزشگاه
          </h1>

          <p className="mt-8 text-lg leading-9 text-neutral-600">
            لطفاً پیش از ثبت‌نام، قوانین و مقررات آموزشگاه را با دقت مطالعه
            کنید. ثبت‌نام در دوره‌ها به منزله پذیرش تمامی شرایط و تعهدات مندرج
            در این صفحه خواهد بود.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <p className="text-lg leading-10 text-neutral-600">
              این قوانین با هدف ایجاد محیطی حرفه‌ای، حفظ حقوق کارآموزان،
              برگزاری منظم دوره‌های آموزشی و شفاف‌سازی مسئولیت‌های آموزشگاه و
              کارآموز تدوین شده است.
            </p>
          </div>

          <Accordion
            title="تعهدات کارآموز"
            items={studentTerms}
          />

          <Accordion
            title="تعهدات آموزشگاه"
            items={instituteTerms}
          />

          <div className="mt-20 rounded-3xl bg-orange-500 p-10 text-center text-white">
            <h3 className="text-3xl font-black">
              پذیرش قوانین
            </h3>

            <p className="mt-6 leading-9 text-orange-50">
              ثبت‌نام در آموزشگاه به منزله مطالعه، آگاهی و پذیرش تمامی قوانین،
              مقررات و تعهدات مندرج در این صفحه خواهد بود. این مقررات چارچوب
              همکاری بین آموزشگاه و کارآموز را مشخص می‌کند و رعایت آن برای هر دو
              طرف الزامی است.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}