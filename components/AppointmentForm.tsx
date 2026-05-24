"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";

const appointmentSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z
    .string()
    .min(10, "Введите номер телефона")
    .regex(/^[+\d()\s-]+$/, "Введите корректный телефон"),
  service: z.string().min(1, "Выберите услугу"),
  comment: z.string().optional(),
  consent: z.boolean().refine((value) => value === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const servicesOptions = [
  "Терапия",
  "Гигиена",
  "Ортопедия",
  "Хирургия",
  "Имплантация",
  "Детская",
  "Другое",
];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "Терапия",
      comment: "",
      consent: false,
    },
  });

  const onSubmit = (data: AppointmentFormValues) => {
    setLoading(true);
    setSubmitted(false);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      reset({ name: "", phone: "", service: "Терапия", comment: "", consent: false });
    }, 1000);
  };

  return (
    <div className="rounded-[32px] border border-border bg-white p-8 shadow-card">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-text">
            Имя*
            <input
              {...register("name")}
              placeholder="Ваше имя"
              className="w-full rounded-3xl border border-border bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
            {errors.name ? <span className="text-sm text-[#D64545]">{errors.name.message}</span> : null}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            Телефон*
            <input
              {...register("phone")}
              placeholder="+7 (921) 970-80-40"
              className="w-full rounded-3xl border border-border bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
            {errors.phone ? <span className="text-sm text-[#D64545]">{errors.phone.message}</span> : null}
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-text block">
          Услуга
          <select
            {...register("service")}
            className="w-full rounded-3xl border border-border bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          >
            {servicesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-text block">
          Комментарий
          <textarea
            {...register("comment")}
            rows={3}
            placeholder="Нам важно ваше пожелание"
            className="w-full rounded-3xl border border-border bg-slate-50 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </label>

        <label className="flex items-start gap-3 text-sm text-text-muted">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          />
          <span>Согласен на обработку персональных данных*</span>
        </label>
        {errors.consent ? <p className="text-sm text-[#D64545]">{errors.consent.message}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-accent px-6 py-4 text-sm font-semibold text-text transition hover:bg-[#d19f18] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Отправка..." : "Записаться"}
          <ArrowRight size={18} />
        </button>

        {submitted ? <p className="rounded-3xl bg-success/10 px-4 py-3 text-sm text-success">✅ Заявка отправлена! Перезвоним в течение 15 минут.</p> : null}
      </form>
    </div>
  );
}
