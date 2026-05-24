import Image from "next/image";
import { ArrowRight, Baby, Check, Crown, Heart, MapPin, MessageCircle, Phone, Scissors, Shield, Smile, Sparkles, Stethoscope, Wand2, Zap, Award, Cpu } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Header } from "@/components/Header";
import { PriceTabs } from "@/components/PriceTabs";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { ScrollTop } from "@/components/ScrollTop";
import { WorkingHoursStatus } from "@/components/ui/WorkingHoursStatus";
import { clinic, doctors, priceCategories, reviews, services, stats, whyUsFeatures } from "@/lib/data";

const serviceIcons: Record<string, typeof Stethoscope> = {
  Stethoscope,
  Sparkles,
  Crown,
  Scissors,
  Smile,
  Baby,
  Wand2,
  Shield,
  Zap,
};

const featureIconMap: Record<string, typeof Heart> = {
  Heart,
  Award,
  Shield,
  Cpu,
  MessageCircle,
  MapPin,
};

const trustItems = ["🛡️ Безболезненно", "✅ Гарантия", "💳 Рассрочка"];

const serviceRows = [
  [{ title: "Терапия" }, { title: "Гигиена" }, { title: "Ортопедия" }],
];

export default function Home() {
  return (
    <div className="bg-bg text-text">
      <Header />
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="top" className="min-h-screen py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center items-center">
          <FadeIn direction="left">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                ⭐ Рейтинг {clinic.rating} · Более {clinic.yearsOfWork} лет опыта
              </div>
              <h1 className="text-5xl font-heading font-bold leading-[1.03] tracking-tight text-text md:text-6xl">
                Заботливая стоматология в центре Петербурга
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-text-muted sm:text-lg">
                {clinic.description} Современные технологии, опытные врачи, уютная атмосфера.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center rounded-3xl bg-accent px-8 py-4 text-sm font-semibold text-text transition hover:bg-[#d19f18]"
                >
                  Записаться на приём
                </a>
                <a
                  href={`tel:${clinic.phone1.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center justify-center rounded-3xl border border-border bg-white px-8 py-4 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
                >
                  Позвонить
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-text-muted sm:grid-cols-3">
                {trustItems.map((item) => (
                  <div key={item} className="inline-flex items-center justify-start gap-2 rounded-3xl bg-white/80 px-4 py-3 text-sm shadow-card">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="relative mx-auto w-full overflow-hidden rounded-[32px] bg-white shadow-card sm:max-w-xl">
              <div className="absolute -right-14 top-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=700&fit=crop"
                alt="Dental clinic interior"
                width={800}
                height={700}
                className="relative h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </section>

        <section className="py-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-primary to-primary-dark px-6 text-white shadow-card sm:px-10">
          <div className="grid gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white/10 px-5 py-6 text-center backdrop-blur-xl">
                <p className="text-3xl font-heading font-semibold">{stat.value}</p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Наши услуги</p>
            <h2 className="mt-4 text-3xl font-heading font-semibold text-text md:text-4xl">Полный спектр стоматологической помощи</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] ?? Sparkles;
              return (
                <FadeIn key={service.title} direction="up">
                  <a className="group block rounded-[28px] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card">
                    <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-text">{service.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-text-muted">{service.description}</p>
                      </div>
                      <span className="text-primary">→</span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="py-24 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <FadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Почему мы</p>
              <h2 className="mt-4 text-3xl font-heading font-semibold text-text md:text-4xl">Ваш комфорт и здоровье — в центре внимания</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-text-muted">
                Мы совмещаем современный подход, индивидуальные планы лечения и внимательное обслуживание каждого пациента.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUsFeatures.map((feature) => {
              const Icon = featureIconMap[feature.icon] ?? Shield;
              return (
                <FadeIn key={feature.title} delay={0.05}>
                  <div className="rounded-[28px] border border-border bg-white p-6 shadow-card transition hover:shadow-lg">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-text">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-muted">{feature.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section id="doctors" className="py-24">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Наша команда</p>
              <h2 className="mt-4 text-3xl font-heading font-semibold text-text md:text-4xl">Врачи с большим опытом и вниманием</h2>
            </div>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="min-w-[260px] snap-start rounded-[32px] border border-border bg-white p-6 shadow-card sm:min-w-0">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className="mb-6 h-56 w-full rounded-[28px] object-cover"
                />
                <h3 className="text-xl font-semibold text-text">{doctor.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{doctor.role}</p>
                <p className="mt-3 text-sm font-medium text-text">{doctor.experience}</p>
                <a
                  href="#appointment"
                  className="mt-6 inline-flex items-center justify-center rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Записаться
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="prices" className="py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Прайс-лист</p>
            <h2 className="mt-4 text-3xl font-heading font-semibold text-text md:text-4xl">Уточняйте точную стоимость по телефону</h2>
          </div>
          <PriceTabs categories={priceCategories} />
          <p className="mt-4 text-sm text-text-muted">Цены носят ознакомительный характер. Точную стоимость уточняйте у администраторов.</p>
        </section>

        <section id="reviews" className="py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Отзывы</p>
            <h2 className="mt-4 text-3xl font-heading font-semibold text-text md:text-4xl">Пациенты доверяют НАВИТИ</h2>
          </div>
          <ReviewsCarousel />
        </section>

        <section id="appointment" className="py-24 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <FadeIn>
            <div className="space-y-6 rounded-[32px] border border-border bg-white p-8 shadow-card">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <Phone size={18} />
                Записаться на приём
              </div>
              <div>
                <h2 className="text-3xl font-heading font-semibold text-text md:text-4xl">Оставьте заявку — перезвоним в течение 15 минут</h2>
                <p className="mt-4 text-base leading-7 text-text-muted">
                  Напишите или позвоните, и мы подберём удобное время для визита.
                </p>
              </div>
              <div className="space-y-4 rounded-[28px] bg-slate-50 p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text">Телефон</span>
                  <a href={`tel:${clinic.phone1.replace(/[^+\d]/g, "")}`} className="text-lg font-semibold text-primary">
                    {clinic.phone1}
                  </a>
                </div>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1da851]"
                >
                  <MessageCircle size={18} />
                  Написать в WhatsApp
                </a>
                <WorkingHoursStatus />
              </div>
            </div>
          </FadeIn>

          <AppointmentForm />
        </section>

        <section id="contacts" className="py-24 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[32px] border border-border bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Контакты</p>
            <h2 className="mt-4 text-3xl font-heading font-semibold text-text">Найдите нас в центре города</h2>
            <div className="mt-8 space-y-4 text-sm text-text-muted">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-text">Адрес</p>
                  <p>{clinic.address}</p>
                  <p>{clinic.metro}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-text">Телефоны</p>
                  <a href={`tel:${clinic.phone1.replace(/[^+\d]/g, "")}`} className="block text-text">{clinic.phone1}</a>
                  <a href={`tel:${clinic.phone2.replace(/[^+\d]/g, "")}`} className="block text-text">{clinic.phone2}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-text">Социальные сети</p>
                  <a href={clinic.whatsapp} target="_blank" rel="noreferrer" className="block text-text">WhatsApp</a>
                  <a href={clinic.vk} target="_blank" rel="noreferrer" className="block text-text">ВКонтакте</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} className="mt-1 text-primary" />
                <div>
                  <p className="font-semibold text-text">Режим работы</p>
                  <p>{clinic.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-card">
            <iframe
              title="Карта клиники НАВИТИ"
              src="https://yandex.ru/map-widget/v1/?ll=30.362028%2C59.932477&z=16&pt=30.362028,59.932477,pm2rdm"
              width="100%"
              height="400"
              frameBorder="0"
              className="h-full min-h-[400px]"
            />
          </div>
        </section>

        <section className="py-24 rounded-[32px] bg-[#1B6CA8] px-8 text-white shadow-card sm:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">Не откладывайте</p>
              <h2 className="mt-4 text-3xl font-heading font-semibold leading-tight text-white">Не откладывайте здоровье на потом</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/90">Первичная консультация — бесплатно</p>
            </div>
            <div className="flex items-center justify-start">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-3xl bg-[#F5A623] px-8 py-4 text-sm font-semibold text-text transition hover:bg-[#d19f18]"
              >
                Записаться на приём
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A2332] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Smile size={24} />
              </span>
              НАВИТИ
            </div>
            <p className="max-w-sm text-sm text-white/70">
              Стоматология НАВИТИ в центре Санкт-Петербурга. Комфортные услуги и опытные врачи для детей и взрослых.
            </p>
            <a href={clinic.vk} target="_blank" rel="noreferrer" className="text-sm text-white/80 transition hover:text-white">
              ВКонтакте
            </a>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Услуги</p>
            <div className="grid gap-2 text-sm text-white/70">
              {services.slice(0, 5).map((service) => (
                <span key={service.title}>{service.title}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Контакты</p>
            <div className="space-y-3 text-sm text-white/70">
              <p>{clinic.address}</p>
              <p>{clinic.phone1}</p>
              <p>{clinic.hours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
          © 2024 Стоматология НАВИТИ · ул. Восстания, 17, Санкт-Петербург
        </div>
      </footer>

      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-28 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.25)] transition hover:-translate-y-1"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      <ScrollTop />
    </div>
  );
}
