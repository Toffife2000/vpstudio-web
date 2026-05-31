"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Zatvoriť menu" : "Otvoriť menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="neon-soft-action flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-white/[0.04] text-white"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-16 w-[min(82vw,22rem)] rounded-3xl border border-emerald-300/18 bg-[#04100b]/96 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.58)] backdrop-blur-2xl">
          <nav className="grid gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4 text-base font-black text-zinc-100 transition hover:border-emerald-300/50 hover:bg-emerald-300/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#konfigurator"
            onClick={closeMenu}
            className="rgb-action mt-3 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl px-5 text-sm font-black text-white"
          >
            Spustiť konfigurátor
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
