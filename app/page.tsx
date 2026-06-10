import {
  ArrowRight,
  BarChart3,
  Building2,
  Brush,
  ChevronDown,
  CheckCircle2,
  Clock3,
  Code2,
  Globe2,
  Heart,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  MousePointer2,
  Palette,
  Phone,
  Quote,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap
} from "lucide-react";
import { NeonHover } from "./neon-hover";
import { MobileMenu } from "./mobile-menu";
import { ProjectConfigurator } from "./project-configurator";
import { HeroNeonSystem } from "./hero-neon-system";

const navItems = [
  { label: "Služby", href: "#sluzby" },
  { label: "Shoptet", href: "#shoptet" },
  { label: "Konfigurátor", href: "#konfigurator" },
  { label: "Proces", href: "#proces" },
  { label: "Kontakt", href: "#kontakt" }
];

const stats = [
  {
    value: "WEB",
    label: "Prémiová prezentácia",
    detail: "Rýchly web s vlastnou atmosférou a jasným cieľom.",
    icon: Rocket,
    glow: "neon-cyan"
  },
  {
    value: "SHOP",
    label: "E-shop systém",
    detail: "Produkty, kategórie, dôvera, nákup a meranie.",
    icon: MousePointer2,
    glow: "neon-lime"
  },
  {
    value: "SEO",
    label: "Google výkon",
    detail: "Search Console, Merchant, indexácia a technika.",
    icon: Search,
    glow: "neon-amber"
  },
  {
    value: "DESIGN",
    label: "Grafický engine",
    detail: "Photoshop, produktové fotky, bannery a vizuály.",
    icon: Brush,
    glow: "neon-violet"
  }
];

const techSignals = ["WebGL shader", "Next.js", "React", "Tailwind", "Vercel", "SEO ready"];

const services = [
  {
    title: "Prémiové webové stránky",
    text: "Moderné weby na mieru s výrazným prvým dojmom, rýchlym načítaním a štruktúrou, ktorá vedie človeka ku kontaktu.",
    icon: Code2,
    glow: "neon-cyan"
  },
  {
    title: "E-shopy a prevádzka",
    text: "Rozumiem e-shopom aj z praxe: produkty, kategórie, nákupný proces, dôvera, meranie a reálne fungovanie obchodu.",
    icon: MousePointer2,
    glow: "neon-lime"
  },
  {
    title: "SEO a technické nastavenia",
    text: "SEO štruktúra, indexácia, Google Search Console, technické základy, rýchlosť a obsah pripravený pre vyhľadávače.",
    icon: Search,
    glow: "neon-emerald"
  },
  {
    title: "Google Merchant Center",
    text: "Nastavenie Merchantu, produktového feedu, základov pre Google nákupy a kontrola problémov, ktoré brzdia produkty.",
    icon: Globe2,
    glow: "neon-amber"
  },
  {
    title: "Photoshop a editácia fotiek",
    text: "Retuš, úprava produktových fotiek, bannery, orezávanie, farebné doladenie a vizuály pripravené pre web aj reklamu.",
    icon: Palette,
    glow: "neon-violet"
  },
  {
    title: "Grafika a reklamné vizuály",
    text: "Sociálne siete, bannery, vizuálne smerovanie značky a kreatívy, ktoré držia rovnaký prémiový pocit ako web.",
    icon: Megaphone,
    glow: "neon-rose"
  }
];

const shoptetHighlights = [
  "Úpravy a redizajn Shoptet e-shopov",
  "Produktové popisy, kategórie a SEO štruktúra",
  "Google Merchant, feedy a Search Console",
  "Bannery, produktové fotky a dôveryhodný vizuál"
];

const process = [
  { title: "Vibe a cieľ", text: "Najprv si ujasníme, aký pocit má web vyvolať a čo má návštevník spraviť." },
  { title: "Vizuálny smer", text: "Navrhnem štýl, farby, typografiu a rozloženie, ktoré budú sedieť k tvojej značke." },
  { title: "Vývoj", text: "Postavím web v Next.js, Reacte a Tailwinde, s dôrazom na rýchlosť a responzivitu." },
  { title: "Doladenie", text: "Upravím texty, detaily, animácie a finálne dojmy tak, aby web nepôsobil obyčajne." }
];

const testimonials = [
  {
    quote: "Rýchlo pochopili, čo potrebujeme. Web pôsobí moderne, prehľadne a hlavne dôveryhodne.",
    name: "Lokálna služba zo Slovenska"
  },
  {
    quote: "Pomohol nám upratať e-shop, produkty aj základné SEO nastavenia. Konečne to celé dávalo systém.",
    name: "Prevádzkovateľ e-shopu"
  },
  {
    quote: "Grafika, fotky aj web začali pôsobiť jednotne. Presne ten rozdiel, ktorý zákazník cíti hneď.",
    name: "Menšia slovenská značka"
  }
];

const briefItems = ["Typ projektu", "Cieľ webu", "Rozsah služieb", "Dizajnový smer", "SEO a Google", "Rozpočet / termín"];

const footerColumns = [
  { title: "Služby", links: ["Webové stránky", "E-shopy", "SEO", "Google Merchant", "Photoshop", "Grafika"] },
  { title: "Nastavenia", links: ["Search Console", "Merchant Center", "Produktový feed", "Technické SEO"] },
  { title: "Kontakt", links: ["E-mail", "Instagram", "Facebook", "LinkedIn", "Nezáväzný brief"] }
];

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="group flex items-center gap-3">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-emerald-300/35 bg-[#07130d] shadow-[0_0_36px_rgba(52,211,153,0.28)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(190,242,100,0.55),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(16,185,129,0.44),transparent_34%)]" />
        <span className="mini-sigil-ring" />
        <span className="mini-sigil-cut" />
        <span className="relative text-[13px] font-black tracking-[-0.09em] text-white [text-shadow:0_0_12px_rgba(190,242,100,0.9)]">VP</span>
      </span>
      {!compact ? (
        <span>
          <span className="block text-lg font-black leading-none tracking-tight text-white">VP Studio</span>
          <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.24em] text-emerald-300/80">
            Web Design Studio
          </span>
        </span>
      ) : null}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.045] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
      <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
      {children}
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vpstudio.sk/#organization",
        name: "VP Studio",
        legalName: "D.O.W. Trade, s.r.o.",
        url: "https://vpstudio.sk",
        email: "viktorpolak3@gmail.com",
        taxID: "35864559",
        sameAs: ["https://sk.linkedin.com/in/viktor-pol%C3%A1k"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rozmarínova 3238/26",
          postalCode: "945 01",
          addressLocality: "Komárno",
          addressCountry: "SK"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vpstudio.sk/#website",
        url: "https://vpstudio.sk",
        name: "VP Studio",
        inLanguage: "sk-SK",
        publisher: {
          "@id": "https://vpstudio.sk/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vpstudio.sk/#professional-service",
        name: "VP Studio",
        legalName: "D.O.W. Trade, s.r.o.",
        url: "https://vpstudio.sk",
        image: "https://vpstudio.sk/hero-workspace.png",
        email: "viktorpolak3@gmail.com",
        areaServed: [
          {
            "@type": "Country",
            name: "Slovensko"
          },
          {
            "@type": "City",
            name: "Komárno"
          }
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rozmarínova 3238/26",
          postalCode: "945 01",
          addressLocality: "Komárno",
          addressCountry: "SK"
        },
        makesOffer: [
          "Tvorba webových stránok",
          "Tvorba e-shopov",
          "Úpravy Shoptet e-shopov",
          "Redizajn Shoptet e-shopov",
          "SEO optimalizácia",
          "Google Search Console",
          "Google Merchant Center",
          "Grafický dizajn",
          "Photoshop editácia fotiek",
          "Produktové fotky a reklamné vizuály"
        ],
        serviceType: [
          "Web design",
          "E-commerce",
          "SEO",
          "Google Merchant Center",
          "Grafický dizajn"
        ],
        provider: {
          "@id": "https://vpstudio.sk/#organization"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020805] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NeonHover />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(74,222,128,0.038)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.038)_1px,transparent_1px)] bg-[size:82px_82px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(190,242,100,0.12),transparent_24%),radial-gradient(circle_at_75%_82%,rgba(5,150,105,0.16),transparent_34%)]" />

      <header className="fixed left-0 right-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-3xl border border-emerald-300/15 bg-[#04100b]/82 px-4 py-3 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-6">
          <a href="#top" aria-label="VP Studio domov">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-400 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-emerald-200">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="neon-action hidden min-h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-400 px-5 text-sm font-black text-[#03110a] shadow-[0_0_36px_rgba(74,222,128,0.32)] transition hover:scale-[1.02] lg:inline-flex"
          >
            Chcem prémiový web
          </a>
          <MobileMenu items={navItems} />
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:min-h-screen lg:pt-44">
        <HeroNeonSystem />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-[#020805] via-[#020805]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-[#020805] via-[#020805]/68 to-transparent" />

        <div className="absolute left-[7%] top-[30%] hidden rounded-3xl border border-emerald-300/15 bg-emerald-300/[0.035] p-4 text-emerald-200 shadow-[0_0_40px_rgba(16,185,129,0.18)] lg:block">
          <Code2 className="h-8 w-8" />
        </div>
        <div className="absolute right-[8%] top-[27%] hidden rounded-3xl border border-lime-300/15 bg-lime-300/[0.035] p-4 text-lime-200 shadow-[0_0_44px_rgba(190,242,100,0.16)] lg:block">
          <Sparkles className="h-8 w-8" />
        </div>
        <div className="absolute bottom-[21%] left-[17%] hidden rounded-3xl border border-emerald-300/15 bg-white/[0.035] p-4 text-emerald-200 lg:block">
          <BarChart3 className="h-7 w-7" />
        </div>
        <div className="absolute bottom-[25%] right-[13%] hidden rounded-3xl border border-emerald-300/15 bg-white/[0.035] p-4 text-lime-200 lg:block">
          <Target className="h-7 w-7" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center lg:flex lg:min-h-[58vh] lg:flex-col lg:items-center lg:justify-end lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.045] px-4 py-2 text-sm font-black text-emerald-100">
            <Sparkles className="h-4 w-4 text-lime-300" />
            Ultra premium weby a grafika
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:max-w-5xl lg:text-8xl">
            <span className="block">Web, ktorý</span>
            <span className="block bg-gradient-to-r from-lime-200 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
              vtiahne zákazníka
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-8 text-zinc-300 sm:text-xl">
            Tvorím weby, e-shopy, SEO nastavenia a grafiku pre Slovensko s vlastnou atmosférou. Viem riešiť
            Photoshop, produktové fotky, Google Merchant, Search Console aj technické detaily, ktoré robia rozdiel.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#konfigurator"
              className="rgb-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl px-7 text-base font-black text-white transition hover:scale-[1.02]"
            >
              Spustiť konfigurátor
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#sluzby"
              className="neon-soft-action inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-emerald-300/25 bg-white/[0.035] px-7 text-base font-black text-white transition hover:bg-emerald-300/[0.08]"
            >
              Pozrieť služby
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>

          <div className="mx-auto mt-9 flex max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-white/[0.04] px-4 py-3 backdrop-blur">
              <Globe2 className="h-5 w-5 text-emerald-300" />
              <div className="flex gap-1 text-lime-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-black text-white">5.0</span>
              <span className="text-sm font-bold text-zinc-400">prémiový prvý dojem</span>
            </div>
            <p className="text-sm font-black text-emerald-100">Web + e-shop + SEO + Merchant + Photoshop</p>
          </div>

          <a
            href="#shoptet"
            className="neon-card neon-cyan mx-auto mt-5 inline-flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-white/[0.045] px-4 py-3 shadow-[0_0_42px_rgba(74,222,128,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/35"
          >
            <img src="/badges/shoptet-partner-white.svg" alt="Shoptet partner" className="h-8 w-auto" />
            <span className="text-sm font-black text-emerald-100">Shoptet partner pre e-shopy</span>
            <ArrowRight className="h-4 w-4 text-lime-300" />
          </a>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {techSignals.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-300/14 bg-[#04100b]/55 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-emerald-100 shadow-[0_0_34px_rgba(74,222,128,0.08)] backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-14 grid max-w-5xl grid-cols-4 gap-2 sm:mt-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`neon-card ${stat.glow} group rounded-2xl border border-emerald-300/13 bg-[#04100b]/58 p-2 text-center shadow-[0_22px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition hover:border-emerald-300/35 hover:bg-emerald-300/[0.045] sm:rounded-3xl sm:p-6 sm:text-left`}>
                <div className="neon-icon mx-auto flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_0_28px_rgba(74,222,128,0.25)] sm:mx-0 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon className="h-5 w-5 text-[#03110a] sm:h-7 sm:w-7" />
                </div>
                <p className="mt-3 text-base font-black tracking-tight sm:mt-5 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 hidden text-sm font-black uppercase tracking-[0.12em] text-emerald-200 sm:block">{stat.label}</p>
                <p className="mt-3 hidden min-h-16 text-sm font-semibold leading-6 text-zinc-400 sm:block">{stat.detail}</p>
                <div className="mt-3 h-px overflow-hidden bg-white/10 sm:mt-5">
                  <span className="block h-full w-2/3 bg-gradient-to-r from-lime-300 via-emerald-300 to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="shoptet" className="relative px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <div className="neon-card neon-cyan relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-white/[0.035] p-8 shadow-[0_30px_120px_rgba(16,185,129,0.12)] sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/14 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-lime-300/12 blur-3xl" />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-white/10 bg-[#08140f]/70 px-5 py-4 shadow-[0_0_52px_rgba(56,189,248,0.14)]">
                <img src="/badges/shoptet-partner-white.svg" alt="Shoptet partner" className="h-12 w-auto sm:h-14" />
              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Shoptet e-shop, ktorý pôsobí ako značka
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-zinc-400">
                VP Studio je Shoptet partner pre úpravy, redizajn a rast e-shopov. Pomôžem ti upratať produkty,
                kategórie, vizuál, SEO základ aj technické nastavenia tak, aby obchod nepôsobil ako obyčajná šablóna.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#konfigurator"
                  className="rgb-action inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl px-6 text-sm font-black text-white transition hover:scale-[1.02]"
                >
                  Nakonfigurovať e-shop
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#kontakt"
                  className="neon-soft-action inline-flex min-h-13 items-center justify-center rounded-2xl border border-emerald-300/25 bg-white/[0.035] px-6 text-sm font-black text-white transition hover:bg-emerald-300/[0.08]"
                >
                  Napísať správu
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {shoptetHighlights.map((item, index) => (
              <article
                key={item}
                className="neon-card group rounded-[1.75rem] border border-emerald-300/12 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.045]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-emerald-300 to-lime-300 text-[#03110a] shadow-[0_0_34px_rgba(56,189,248,0.24)]">
                  {index === 0 ? <Rocket className="h-6 w-6" /> : index === 1 ? <Search className="h-6 w-6" /> : index === 2 ? <BarChart3 className="h-6 w-6" /> : <Palette className="h-6 w-6" />}
                </div>
                <h3 className="mt-6 text-xl font-black">{item}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-zinc-400">
                  Praktické riešenie pre obchod, ktorý má byť rýchly, prehľadný, dôveryhodný a pripravený na predaj.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectConfigurator />

      <section id="sluzby" className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel>Čo pre teba vytvorím</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Nie obyčajný web. Digitálny zážitok.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
            Všetko má držať jeden prémiový pocit: od loga cez e-shop a SEO až po produktové fotky a reklamu.
          </p>

          <div className="mt-14 grid gap-6 text-left md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={`neon-card ${service.glow} group rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.045]`}
                >
                  <div className="neon-icon flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_0_34px_rgba(74,222,128,0.22)]">
                    <Icon className="h-8 w-8 text-[#03110a]" />
                  </div>
                  <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 min-h-24 text-base font-semibold leading-8 text-zinc-400">{service.text}</p>
                  <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-emerald-300">
                    Chcem vedieť viac
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="brief" className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel>Cena na mieru</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Najprv brief. Potom presná ponuka.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
            Namiesto univerzálneho cenníka zistíš, čo naozaj potrebuješ. Vyplníš pár vecí, pošleš požiadavku a ja ti
            odpoviem s odporúčaním, rozsahom a cenou na mieru.
          </p>

          <div className="mt-14 grid gap-6 text-left lg:grid-cols-[0.9fr_1.1fr]">
            <div className="neon-card neon-lime rounded-[2rem] border border-emerald-300/15 bg-white/[0.035] p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">Ako to funguje</p>
              <h3 className="mt-5 text-3xl font-black">Pošleš zadanie, ja pripravím riešenie.</h3>
              <p className="mt-5 text-base font-semibold leading-8 text-zinc-400">
                Cena závisí od toho, či ide o jednoduchý prezentačný web, e-shop, SEO nastavenia, grafiku, foto edit,
                Google Merchant alebo celý balík. Preto je lepšie najprv pochopiť cieľ a až potom dať férovú cenu.
              </p>
              <a
                href="#kontakt"
                className="neon-action mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-400 px-6 text-sm font-black text-[#03110a] shadow-[0_0_34px_rgba(74,222,128,0.26)]"
              >
                Poslať brief
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {briefItems.map((item, index) => (
                <div key={item} className="neon-card rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-6">
                  <p className="text-sm font-black text-lime-300">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-xl font-black">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proces" className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>Proces</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Od nápadu po web, ktorý pôsobí ako značka
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <article key={item.title} className="neon-card neon-emerald rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-7">
                <p className="text-sm font-black text-lime-300">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-base font-semibold leading-8 text-zinc-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel>Reakcie</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            Dôvera je <span className="text-emerald-300">najsilnejší glow</span>
          </h2>

          <div className="mt-14 grid gap-6 text-left lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="neon-card neon-violet flex min-h-72 flex-col rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/18 bg-emerald-300/15 text-emerald-200 shadow-[0_0_28px_rgba(74,222,128,0.16)]">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div className="flex gap-1 text-lime-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-lg font-semibold leading-8 text-zinc-300">"{item.quote}"</p>
                <p className="mt-auto pt-8 font-black">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black tracking-tight">
            Slovenské projekty môžu niesť <span className="text-emerald-300">tvoj podpis</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
            Web bude stáť na silnej prezentácii služieb, dôvere, referenciách a jasnom briefe bez zbytočných výplní.
          </p>
        </div>
      </section>

      <section id="kontakt" className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <SectionLabel>Kontakt</SectionLabel>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Napíšte nám, čo chcete vytvoriť
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-zinc-400">
              Vyplňte krátky brief. Ozveme sa s odporúčaním, rozsahom a cenou na mieru.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              action="mailto:viktorpolak3@gmail.com"
              method="post"
              encType="text/plain"
              className="neon-card neon-cyan rounded-[2rem] border border-emerald-300/15 bg-white/[0.035] p-6 shadow-[0_30px_140px_rgba(16,185,129,0.12)] sm:p-8"
            >
              <h3 className="text-3xl font-black">Nezáväzný brief</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-zinc-400">
                Stačí základ. Detaily doladíme v odpovedi.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-black">
                  Meno / názov firmy *
                  <input name="meno_firma" required placeholder="Napr. Firma s.r.o." className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55" />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  E-mail *
                  <input name="email" type="email" required placeholder="info@firma.sk" className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55" />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  Telefón
                  <input name="telefon" placeholder="+421 ..." className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55" />
                </label>
                <label className="grid gap-2 text-sm font-black">
                  Aktuálny web
                  <input name="web" placeholder="https://" className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55" />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-black">
                S čím potrebujete pomôcť? *
                <select name="sluzba" required defaultValue="" className="min-h-13 rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 text-base font-semibold text-white outline-none transition focus:border-emerald-300/55">
                  <option value="" disabled>Vyberte službu</option>
                  <option>Webová stránka</option>
                  <option>E-shop</option>
                  <option>SEO / Search Console</option>
                  <option>Google Merchant Center</option>
                  <option>Photoshop / editácia fotiek</option>
                  <option>Grafika a bannery</option>
                  <option>Kompletný balík</option>
                </select>
              </label>

              <label className="mt-5 grid gap-2 text-sm font-black">
                Správa *
                <textarea name="sprava" required rows={6} placeholder="Napíšte cieľ projektu, rozsah, termín alebo otázky..." className="rounded-2xl border border-emerald-300/15 bg-[#04100b] px-4 py-4 text-base font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/55" />
              </label>

              <label className="mt-5 flex items-start gap-3 text-sm font-semibold leading-6 text-zinc-400">
                <input name="suhlas" type="checkbox" required className="mt-1 h-4 w-4 accent-emerald-300" />
                <span>
                  Beriem na vedomie spracúvanie osobných údajov podľa{" "}
                  <a href="/ochrana-osobnych-udajov" className="font-black text-emerald-300 underline underline-offset-4 hover:text-lime-200">
                    zásad ochrany osobných údajov
                  </a>
                  .
                </span>
              </label>

              <button type="submit" className="neon-action mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-400 px-8 text-base font-black text-[#03110a] shadow-[0_0_42px_rgba(74,222,128,0.28)] transition hover:scale-[1.01]">
                Odoslať brief
                <Send className="h-5 w-5" />
              </button>

              <div className="mt-7 flex items-center justify-center gap-3 rounded-2xl border border-emerald-300/12 bg-white/[0.035] px-4 py-4 text-sm font-bold text-zinc-400">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                Odpoveď pošleme čo najskôr.
              </div>
            </form>

            <div className="grid content-start gap-5">
              {[
                { label: "E-mail", value: "viktorpolak3@gmail.com", icon: Mail, glow: "neon-cyan" },
                { label: "Telefón", value: "Doplníme", icon: Phone, glow: "neon-lime" },
                { label: "Sídlo", value: "Rozmarínova 3238/26, 945 01 Komárno", icon: MapPin, glow: "neon-rose" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={`neon-card ${item.glow} flex gap-4 rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-6`}>
                    <div className="neon-icon flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}

              <div className="neon-card neon-amber rounded-3xl border border-emerald-300/12 bg-white/[0.035] p-6">
                <div className="flex gap-4">
                  <div className="neon-icon flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-500">Firemné údaje</p>
                    <h3 className="mt-2 text-xl font-black">D.O.W. Trade, s.r.o.</h3>
                    <div className="mt-4 space-y-1 text-sm font-semibold leading-6 text-zinc-400">
                      <p>IČO: 35864559</p>
                      <p>DIČ: 2022138987</p>
                      <p>Spoločnosť nie je platiteľom DPH.</p>
                      <p>ORSR: Okresný súd Nitra, oddiel Sro, vložka č. 17570/N</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-emerald-300/12 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
            <div>
              <a href="#top" aria-label="VP Studio domov">
                <LogoMark />
              </a>

              <p className="mt-7 max-w-sm text-base font-semibold leading-8 text-zinc-400">
                Weby, e-shopy, SEO, Google Merchant, Photoshop a grafika pre ľudí, ktorí nechcú pôsobiť lacno ani obyčajne.
              </p>

              <div className="mt-7 flex gap-3">
                <a href="https://sk.linkedin.com/in/viktor-pol%C3%A1k" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-300 transition hover:bg-emerald-300 hover:text-[#03110a]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#kontakt" aria-label="Instagram bude doplnený" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-300 transition hover:bg-emerald-300 hover:text-[#03110a]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="mailto:viktorpolak3@gmail.com" aria-label="E-mail" className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-zinc-300 transition hover:bg-emerald-300 hover:text-[#03110a]">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-base font-black text-white">{column.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#kontakt" className="text-base font-semibold text-zinc-400 transition hover:text-emerald-300">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-emerald-300/12 pt-8 text-sm font-semibold text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VP Studio / D.O.W. Trade, s.r.o. Všetky práva vyhradené.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
              <a href="/ochrana-osobnych-udajov" className="transition hover:text-emerald-300">
                Ochrana osobných údajov
              </a>
              <a href="/vseobecne-obchodne-podmienky" className="transition hover:text-emerald-300">
                Všeobecné obchodné podmienky
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
