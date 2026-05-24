"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { reviews } from "@/lib/data";

export function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [hovered]);

  const activeReview = reviews[activeIndex];
  const dots = useMemo(
    () => reviews.map((_, index) => index),
    [],
  );

  return (
    <div className="space-y-8">
      <div
        className="group relative overflow-hidden rounded-[28px] border border-border bg-white p-8 shadow-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          key={activeReview.author}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">4.8 ★</span>
            <span>14 отзывов на 2GIS</span>
          </div>
          <p className="text-xl font-semibold text-text">“{activeReview.quote}”</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span className="font-semibold text-text">— {activeReview.author}</span>
            <span>{activeReview.details}</span>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {dots.map((index) => (
          <button
            key={index}
            type="button"
            className={`h-2.5 w-8 rounded-full transition ${index === activeIndex ? "bg-primary" : "bg-slate-300"}`}
            aria-label={`Отзыв ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
