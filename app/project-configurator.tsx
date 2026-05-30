"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  Send,
  Sparkles
} from "lucide-react";

const projectTypes = [
  "Webová stránka",
  "E-shop",
  "SEO / Google nastavenia",
  "Grafika a Photoshop",
  "Kompletný balík"
];

const scopes = [
  "Jedna stránka",
  "Do 5 stránok",
  "6-10 stránok",
  "Väčší projekt",
  "E-shop s produktmi"
];

const styles = [
  "Ultra premium neon",
  "Čistý firemný web",
  "E-shop s dôverou",
  "Mám vlastný dizajn"
];

const addons = [
  "Google Merchant Center",
  "Google Search Console",
  "Produktový feed",
  "Kontaktný formulár",
  "Texty na web",
  "Produktové fotky",
  "Bannery / reklama",
  "Rýchlostné optimalizácie"
];

const steps = ["Základy", "Funkcie", "Kontakt", "Zhrnutie"];

type Answers = {
  projectType: string;
  scope: string;
  style: string;
  addons: string[];
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialAnswers: Answers = {
  projectType: "",
  scope: "",
  style: "Ultra premium neon",
  addons: [],
  name: "",
  email: "",
  phone: "",
  message: ""
};

function ChoiceButton({
  selected,
  children,
  onClick,
  multi = false
}: {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex min-h-16 items-center gap-4 rounded-2xl border px-4 py-3 text-left text-base font-bold transition ${
        selected
          ? "border-lime-300/70 bg-lime-300/12 text-white shadow-[0_0_28px_rgba(190,242,100,0.2)]"
          : "border-emerald-300/12 bg-[#050c08] text-zinc-300 hover:border-emerald-300/60 hover:bg-emerald-300/10 hover:shadow-[0_0_30px_rgba(74,222,128,0.18)]"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-lime-300 bg-lime-300 text-[#03110a]"
            : "border-cyan-300/80 text-cyan-200 group-hover:border-lime-300"
        }`}
      >
        {selected ? <Check className="h-4 w-4" /> : multi ? <span className="h-2 w-2 rounded-full bg-current opacity-60" /> : null}
      </span>
      {children}
    </button>
  );
}

export function ProjectConfigurator() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [touched, setTouched] = useState(false);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email);
  const stepValid = [
    Boolean(answers.projectType && answers.scope),
    true,
    Boolean(answers.name.trim() && emailOk),
    true
  ];

  const progress = useMemo(() => {
    const requiredDone = [stepValid[0], stepValid[2]].filter(Boolean).length;
    return requiredDone + (answers.addons.length ? 1 : 0) + (answers.style ? 1 : 0);
  }, [answers.addons.length, answers.style, stepValid]);

  const mailHref = useMemo(() => {
    const body = [
      "Nezáväzný brief z konfigurátora VP Studio",
      "",
      `Typ projektu: ${answers.projectType || "nezadané"}`,
      `Rozsah: ${answers.scope || "nezadané"}`,
      `Vizuálny štýl: ${answers.style || "nezadané"}`,
      `Doplnky: ${answers.addons.length ? answers.addons.join(", ") : "nezadané"}`,
      "",
      `Meno / firma: ${answers.name || "nezadané"}`,
      `E-mail: ${answers.email || "nezadané"}`,
      `Telefón: ${answers.phone || "nezadané"}`,
      "",
      `Poznámka: ${answers.message || "bez poznámky"}`
    ].join("\n");

    return `mailto:info@vpstudio.sk?subject=${encodeURIComponent("Nezáväzný brief z konfigurátora")}&body=${encodeURIComponent(body)}`;
  }, [answers]);

  function nextStep() {
    setTouched(true);
    if (!stepValid[activeStep]) return;
    setTouched(false);
    setActiveStep((step) => Math.min(step + 1, steps.length - 1));
  }

  function previousStep() {
    setTouched(false);
    setActiveStep((step) => Math.max(step - 1, 0));
  }

  function toggleAddon(addon: string) {
    setAnswers((current) => ({
      ...current,
      addons: current.addons.includes(addon)
        ? current.addons.filter((item) => item !== addon)
        : [...current.addons, addon]
    }));
  }

  return (
    <section id="konfigurator" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Konfigurátor webu
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Vyklikaj zadanie. My pošleme riešenie.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
            Krátky brief pre web, e-shop, SEO, Google Merchant, Photoshop alebo grafiku. Na mobile vidíš vždy len jeden krok.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-emerald-300/18 bg-[#04100b]/86 p-4 shadow-[0_30px_140px_rgba(34,197,94,0.14)] backdrop-blur-2xl sm:p-7">
          <div className="neon-card neon-cyan mb-5 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.045] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Novinka
              </span>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">Projektový konfigurátor</h3>
              <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-zinc-400">
                Vyberieš základ, doplnky môžeš naklikať viaceré naraz a na konci dostaneš čisté zhrnutie do e-mailu.
              </p>
            </div>
            <div className="mt-5 rounded-2xl border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm font-black text-lime-100 sm:mt-0">
              Stav: {progress}/4
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {steps.map((step, index) => {
              const current = index === activeStep;
              const done = index < activeStep;
              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => {
                    if (index <= activeStep || stepValid[activeStep]) {
                      setTouched(false);
                      setActiveStep(index);
                    }
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-black transition ${
                    current
                      ? "border-cyan-300/70 bg-cyan-300/12 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)]"
                      : done
                        ? "border-lime-300/45 bg-lime-300/10 text-lime-100"
                        : "border-white/10 bg-white/[0.03] text-zinc-500"
                  }`}
                >
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-current/25">
                    {done ? <Check className="h-4 w-4" /> : index + 1}
                  </span>
                  {step}
                </button>
              );
            })}
          </div>

          <div className="mt-7">
            {activeStep === 0 ? (
              <div className="neon-card neon-lime rounded-3xl border border-emerald-300/14 bg-white/[0.035] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black">Základy</h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-400">Toto stačí na prvý odhad smeru.</p>
                  </div>
                  <span className="rounded-xl bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                    Povinné
                  </span>
                </div>

                <div className="mt-7 grid gap-7 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-lg font-black">Typ projektu</h4>
                    <div className="grid gap-3">
                      {projectTypes.map((option) => (
                        <ChoiceButton
                          key={option}
                          selected={answers.projectType === option}
                          onClick={() => setAnswers((current) => ({ ...current, projectType: option }))}
                        >
                          {option}
                        </ChoiceButton>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-black">Rozsah</h4>
                    <div className="grid gap-3">
                      {scopes.map((option) => (
                        <ChoiceButton
                          key={option}
                          selected={answers.scope === option}
                          onClick={() => setAnswers((current) => ({ ...current, scope: option }))}
                        >
                          {option}
                        </ChoiceButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeStep === 1 ? (
              <div className="neon-card neon-cyan rounded-3xl border border-emerald-300/14 bg-white/[0.035] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black">Funkcie a doplnky</h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-400">Doplnky sú viacnásobný výber. Kľudne označ všetko, čo dáva zmysel.</p>
                  </div>
                  <span className="rounded-xl bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-emerald-200">
                    Voliteľné
                  </span>
                </div>

                <div className="mt-7 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h4 className="mb-4 text-lg font-black">Vizuálny smer</h4>
                    <div className="grid gap-3">
                      {styles.map((option) => (
                        <ChoiceButton
                          key={option}
                          selected={answers.style === option}
                          onClick={() => setAnswers((current) => ({ ...current, style: option }))}
                        >
                          {option}
                        </ChoiceButton>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-black">Čo má byť v balíku?</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {addons.map((option) => (
                        <ChoiceButton
                          key={option}
                          multi
                          selected={answers.addons.includes(option)}
                          onClick={() => toggleAddon(option)}
                        >
                          {option}
                        </ChoiceButton>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {activeStep === 2 ? (
              <div className="neon-card neon-violet rounded-3xl border border-emerald-300/14 bg-white/[0.035] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black">Kontakt</h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-400">Aby sme vedeli poslať odpoveď a cenu na mieru.</p>
                  </div>
                  <span className="rounded-xl bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                    Povinné
                  </span>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-black">
                    Meno / názov firmy *
                    <input
                      value={answers.name}
                      onChange={(event) => setAnswers((current) => ({ ...current, name: event.target.value }))}
                      placeholder="Napr. Firma s.r.o."
                      className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-black">
                    E-mail *
                    <input
                      value={answers.email}
                      onChange={(event) => setAnswers((current) => ({ ...current, email: event.target.value }))}
                      type="email"
                      placeholder="info@firma.sk"
                      className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-black">
                    Telefón
                    <input
                      value={answers.phone}
                      onChange={(event) => setAnswers((current) => ({ ...current, phone: event.target.value }))}
                      placeholder="+421 ..."
                      className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-black sm:col-span-2">
                    Poznámka
                    <textarea
                      value={answers.message}
                      onChange={(event) => setAnswers((current) => ({ ...current, message: event.target.value }))}
                      rows={5}
                      placeholder="Cieľ projektu, termín, aktuálny web alebo čokoľvek dôležité..."
                      className="rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 py-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55"
                    />
                  </label>
                </div>
              </div>
            ) : null}

            {activeStep === 3 ? (
              <div className="neon-card neon-amber rounded-3xl border border-emerald-300/14 bg-white/[0.035] p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black">Zhrnutie</h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-400">Skontroluj zadanie a odošli ho ako pripravený e-mail.</p>
                  </div>
                  <CheckCircle2 className="h-9 w-9 text-lime-300" />
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Typ projektu", answers.projectType],
                    ["Rozsah", answers.scope],
                    ["Vizuálny smer", answers.style],
                    ["Doplnky", answers.addons.length ? answers.addons.join(", ") : "Bez doplnkov"],
                    ["Meno / firma", answers.name],
                    ["E-mail", answers.email],
                    ["Telefón", answers.phone || "Neuvedené"],
                    ["Poznámka", answers.message || "Bez poznámky"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-emerald-300/12 bg-[#050c08] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-300">{label}</p>
                      <p className="mt-2 text-base font-bold leading-6 text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={mailHref}
                  className="rgb-action mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl px-7 text-base font-black text-white"
                >
                  Odoslať konfiguráciu
                  <Send className="h-5 w-5" />
                </a>
              </div>
            ) : null}
          </div>

          {touched && !stepValid[activeStep] ? (
            <div className="mt-5 rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm font-bold text-amber-100">
              {activeStep === 0
                ? "Pre pokračovanie vyber typ projektu aj rozsah."
                : "Doplň meno alebo názov firmy a platný e-mail."}
            </div>
          ) : null}

          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_1fr]">
            <button
              type="button"
              onClick={previousStep}
              disabled={activeStep === 0}
              className="neon-soft-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-emerald-300/18 bg-white/[0.035] px-7 text-base font-black text-white transition disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowLeft className="h-5 w-5" />
              Späť
            </button>

            {activeStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rgb-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-7 text-base font-black text-white"
              >
                Ďalej
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <a
                href="#kontakt"
                className="neon-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-400 px-7 text-base font-black text-[#03110a]"
              >
                Alebo napísať cez formulár
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
