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
        <div className="absolute right-0 top-16 z-[80] w-[min(86vw,22rem)] rounded-3xl border border-emerald-300/28 bg-[#020805] p-3 shadow-[0_28px_120px_rgba(0,0,0,0.92),0_0_0_1px_rgba(190,242,100,0.06),0_0_70px_rgba(34,197,94,0.18)]">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_18%_0%,rgba(190,242,100,0.12),transparent_36%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.1),transparent_34%)]" />
          <nav className="grid gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="relative rounded-2xl border border-emerald-300/18 bg-[#06130c] px-4 py-4 text-base font-black text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-emerald-300/60 hover:bg-[#0a1f13] hover:text-lime-100"
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
