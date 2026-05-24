"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Smile, X } from "lucide-react";
import { clinic, navLinks } from "@/lib/data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-3 text-lg font-semibold text-primary">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Smile size={24} />
          </span>
          НАВИТИ
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-4 md:flex">
          <a href={`tel:${clinic.phone1.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary">
            <Phone size={16} />
            {clinic.phone1}
          </a>
          <a
            href="#appointment"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-text leading-none transition hover:bg-[#d19f18]"
          >
            Записаться
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white/90 p-3 text-text md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu size={20} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:px-8">
          <div className="flex items-center justify-between">
            <a href="#top" className="inline-flex items-center gap-3 text-lg font-semibold text-primary">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Smile size={24} />
              </span>
              НАВИТИ
            </a>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Закрыть меню" className="rounded-full border border-border p-3 text-text">
              <X size={20} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-6 text-lg text-text">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-sm text-text-muted">
            <a href={`tel:${clinic.phone1.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 text-text">
              <Phone size={16} />
              {clinic.phone1}
            </a>
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-text transition hover:bg-[#d19f18]">
              Записаться
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
