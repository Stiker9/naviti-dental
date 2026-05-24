"use client";

import { useState } from "react";
import type { PriceCategory } from "@/lib/types";

type PriceTabsProps = {
  categories: PriceCategory[];
};

export function PriceTabs({ categories }: PriceTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <div className="rounded-3xl border border-border bg-surface p-1 shadow-card">
      <div className="grid grid-cols-2 gap-1 rounded-3xl bg-[#F3F7FB] p-1 sm:grid-cols-5">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              category.id === activeId
                ? "bg-white text-primary shadow-sm"
                : "text-text-muted hover:bg-white/80"
            }`}
            onClick={() => setActiveId(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl bg-white p-6">
        <div className="grid gap-4 text-sm text-text-muted sm:grid-cols-2">
          {activeCategory.items.map((item) => (
            <div key={item.service} className="rounded-3xl bg-slate-50 px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-text">{item.service}</span>
                <span className="text-right font-semibold text-primary">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
