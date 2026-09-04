"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "آیا آموزشگاه در شرق تهران و محله تهرانپارس قرار دارد؟",
    answer:
      "بله، آموزشگاه کامپیوتر مهدوی‌نژاد در تهرانپارس (شرق تهران) واقع شده و دسترسی آسانی از مترو و خطوط اتوبوس دارد.",
  },
  {
    question: "چه دوره‌هایی برگزار می‌شود؟",
    answer:
      "دوره‌های ICDL، برنامه‌نویسی (مانند پایتون)، حسابداری، فتوشاپ، طراحی سایت، گرافیک و سایر دوره‌های مهارتی به‌صورت حضوری و آنلاین برگزار می‌شوند.",
  },
  {
    question: "آیا مدرک پایان دوره معتبر است؟",
    answer:
      "بله، پس از پایان دوره، هنرجویان به سازمان فنی و حرفه‌ای معرفی می‌شوند و پس از قبولی در آزمون رسمی، مدرک معتبر فنی و حرفه‌ای دریافت خواهند کرد.",
  },
  {
    question: "کلاس‌ها چگونه برگزار می‌شود؟",
    answer:
      "کلاس‌ها به‌صورت کم‌جمعیت، پروژه‌محور و همراه با پشتیبانی آموزشی برگزار می‌شوند تا هنرجویان برای ورود به بازار کار آماده شوند.",
  },
  {
    question: "نحوه ثبت‌نام و مشاوره چگونه است؟",
    answer:
      "از طریق فرم ثبت‌نام سایت یا تماس با شماره ۰۹۳۷۰۱۳۱۰۳۰ می‌توانید مشاوره رایگان دریافت کرده و ثبت‌نام خود را انجام دهید.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            سوالات متداول
          </span>

          <h2 className="mt-6 text-4xl font-black text-neutral-900">
            پاسخ سوالات شما
          </h2>

          <p className="mt-5 leading-8 text-neutral-500">
            اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-right transition hover:bg-neutral-50"
                >
                  <h3 className="text-lg font-bold text-neutral-900">
                    {faq.question}
                  </h3>

                  <div className="text-orange-500">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-neutral-100 px-7 py-6 leading-8 text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}