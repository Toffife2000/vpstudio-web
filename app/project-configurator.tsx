"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Typ projektu",
    required: true,
    options: ["Webová stránka", "E-shop", "SEO / Google nastavenia", "Grafika a Photoshop", "Kompletný balík"]
  },
  {
    title: "Rozsah",
    required: true,
    options: ["Jedna stránka", "Do 5 stránok", "6-10 stránok", "Väčší projekt", "E-shop s produktmi"]
  },
  {
    title: "Doplnky",
    required: false,
    options: ["Google Merchant", "Search Console", "Produktové fotky", "Bannery / reklama", "Texty na web"]
  },
  {
    title: "Termín",
    required: false,
    options: ["Čo najskôr", "Do 2 týždňov", "Do mesiaca", "Nemám presný termín"]
  }
];

export function ProjectConfigurator() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const completed = useMemo(
    () => steps.filter((step) => answers[step.title] || !step.required).length,
    [answers]
  );

  const mailHref = useMemo(() => {
    const body = steps
      .map((step) => `${step.title}: ${answers[step.title] || "nezadané"}`)
      .join("\n");

    return `mailto:info@vpstudio.sk?subject=${encodeURIComponent("Nezáväzný brief z konfigurátora")}&body=${encodeURIComponent(body)}`;
  }, [answers]);

  return (
    <section id="konfigurator" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Konfigurátor webu
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Vyklikaj projekt. My pripravíme ponuku.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
            Rýchly orientačný brief pre web, e-shop, SEO, Google Merchant, Photoshop alebo grafiku.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-cyan-300/20 bg-[#071019]/80 p-5 shadow-[0_30px_140px_rgba(34,211,238,0.12)] backdrop-blur sm:p-8">
          <div className="grid gap-3 sm:grid-cols-4">
            {steps.map((step, index) => {
              const active = Boolean(answers[step.title]);
              return (
                <div
                  key={step.title}
                  className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
                    active
                      ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)]"
                      : "border-white/10 bg-white/[0.03] text-zinc-500"
                  }`}
                >
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-current/25">
                    {index + 1}
                  </span>
                  {step.title}
                </div>
              );
            })}
          </div>

          <div className="mt-9 grid gap-7">
            {steps.map((step) => (
              <div key={step.title} className="neon-card neon-cyan rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  {step.required ? (
                    <span className="rounded-xl bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                      Povinné
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {step.options.map((option) => {
                    const selected = answers[step.title] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAnswers((current) => ({ ...current, [step.title]: option }))}
                        className={`group flex min-h-16 items-center gap-4 rounded-2xl border px-4 py-3 text-left text-base font-bold transition ${
                          selected
                            ? "border-lime-300/70 bg-lime-300/12 text-white shadow-[0_0_26px_rgba(190,242,100,0.18)]"
                            : "border-white/10 bg-[#050b12] text-zinc-300 hover:border-cyan-300/55 hover:bg-cyan-300/10"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                            selected ? "border-lime-300 bg-lime-300 text-[#03110a]" : "border-cyan-300/70"
                          }`}
                        >
                          {selected ? <CheckCircle2 className="h-4 w-4" /> : null}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="text-sm font-semibold leading-6 text-zinc-400">
              Vyplnené kroky: <span className="font-black text-cyan-200">{completed}/{steps.length}</span>. Finálnu cenu pošleme až po krátkom posúdení zadania.
            </p>
            <a href={mailHref} className="rgb-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-7 text-base font-black text-white">
              Poslať konfiguráciu
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
