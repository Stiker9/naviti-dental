"use client";

import { useEffect, useMemo, useState } from "react";

function isWorkingHour(date: Date) {
  const day = date.getDay();
  const hour = date.getHours();
  return day >= 1 && day <= 5 && hour >= 10 && hour < 20;
}

export function WorkingHoursStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const open = useMemo(() => isWorkingHour(now), [now]);
  const statusText = open ? "Сейчас открыто" : "Сейчас закрыто";
  const statusColor = open ? "bg-success/10 text-success" : "bg-[#FFE7E7] text-[#D64545]";

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm ${statusColor}`}>
      <span className={`h-2.5 w-2.5 rounded-full ${open ? "bg-success" : "bg-[#D64545]"}`} />
      <span>{statusText}</span>
    </div>
  );
}
