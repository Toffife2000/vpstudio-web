import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Všeobecné obchodné podmienky | VP Studio",
  description: "Všeobecné obchodné podmienky pre poskytovanie webových, grafických, SEO a e-commerce služieb VP Studio."
};

const sections = [
  {
    title: "1. Poskytovateľ",
    text: [
      "Poskytovateľom služieb je D.O.W. Trade, s.r.o., Rozmarínova 3238/26, 945 01 Komárno, IČO: 35864559, DIČ: 2022138987, zapísaná v Obchodnom registri Okresného súdu Nitra, oddiel Sro, vložka č. 17570/N.",
      "Spoločnosť nie je platiteľom DPH.",
      "Kontaktný e-mail: viktorpolak3@gmail.com."
    ]
  },
  {
    title: "2. Predmet služieb",
    text: [
      "Tieto podmienky upravujú poskytovanie služieb v oblasti tvorby webových stránok, e-shopov, grafiky, Photoshop úprav, SEO, Google Search Console, Google Merchant Center, produktových feedov, technickej optimalizácie a súvisiacich konzultačných služieb.",
      "Konkrétny rozsah, cena a termíny sa vždy určujú individuálne v cenovej ponuke, e-mailovej dohode, objednávke alebo zmluve."
    ]
  },
  {
    title: "3. Objednávka a vznik spolupráce",
    text: [
      "Dopyt odoslaný cez web alebo e-mail nie je automaticky záväznou objednávkou. Záväzná spolupráca vzniká až potvrdením cenovej ponuky alebo inej písomnej dohody oboma stranami.",
      "Klient je povinný poskytnúť pravdivé informácie, potrebné podklady, prístupy a súčinnosť včas, aby bolo možné služby riadne dodať."
    ]
  },
  {
    title: "4. Cena, záloha a fakturácia",
    text: [
      "Cena služieb je určená individuálne podľa rozsahu projektu. Ak nie je dohodnuté inak, poskytovateľ môže požadovať zálohu pred začiatkom prác.",
      "Fakturácia môže prebiehať jednorazovo, po etapách alebo mesačne podľa dohody. Dielo alebo jeho časť môže byť odovzdaná až po úhrade dohodnutej ceny alebo príslušnej etapy.",
      "V prípade omeškania platby môže poskytovateľ pozastaviť práce, odovzdanie výstupov alebo ďalšiu podporu až do úhrady dlžnej sumy."
    ]
  },
  {
    title: "5. Termíny a odovzdanie",
    text: [
      "Termíny dodania sú orientačné, ak nie je výslovne dohodnutý pevný termín. Termín sa môže predĺžiť najmä pri oneskorenom dodaní podkladov, zmenách zadania alebo pri oneskorenej spätnej väzbe klienta.",
      "Výstupy sa odovzdávajú elektronicky, napríklad formou odkazu, prístupu do administrácie, exportu súborov alebo nasadením na hosting."
    ]
  },
  {
    title: "6. Zmeny zadania",
    text: [
      "Zmeny nad rámec pôvodne dohodnutého rozsahu môžu byť nacenené samostatne. Poskytovateľ klienta vopred upozorní, ak požadovaná zmena znamená navýšenie ceny alebo posun termínu.",
      "Drobné úpravy v rámci dohodnutého rozsahu sú súčasťou dodania, ak boli primerane špecifikované v ponuke."
    ]
  },
  {
    title: "7. Licencie a autorské práva",
    text: [
      "Autorské práva k návrhom, grafike, textom, kódu a ďalším výstupom zostávajú chránené podľa právnych predpisov. Klient získava právo používať finálny výstup na dohodnutý účel po úplnom zaplatení ceny, ak nie je dohodnuté inak.",
      "Podklady, fotografie, logá, fonty, pluginy, šablóny alebo licencie dodané klientom musí mať klient oprávnenie používať. Náklady na platené licencie tretích strán nie sú zahrnuté v cene, ak to nie je výslovne uvedené v ponuke."
    ]
  },
  {
    title: "8. Prístupy, hosting a služby tretích strán",
    text: [
      "Klient zodpovedá za správnosť a bezpečnosť prístupov, ktoré poskytne. Poskytovateľ používa prístupy len na účely dodania služby.",
      "Prevádzka hostingu, domény, e-mailu, platobných brán, analytiky, reklamných účtov, Google služieb alebo iných nástrojov tretích strán sa riadi podmienkami daného poskytovateľa.",
      "Ak je web nasadený na Vercel alebo podobnú platformu, dostupnosť a technické limity sa riadia podmienkami tejto platformy."
    ]
  },
  {
    title: "9. Reklamácie a zodpovednosť",
    text: [
      "Klient je povinný skontrolovať odovzdaný výstup bez zbytočného odkladu. Prípadné chyby je potrebné oznámiť písomne s opisom problému.",
      "Poskytovateľ nezodpovedá za škody spôsobené nepravdivými podkladmi klienta, zásahmi tretích osôb, výpadkami služieb tretích strán, zmenami algoritmov vyhľadávačov, zamietnutím reklamných alebo Merchant účtov z dôvodov na strane klienta alebo za výsledky, ktoré závisia od správania trhu a zákazníkov.",
      "SEO, reklama a e-commerce nastavenia sú optimalizačné služby. Poskytovateľ negarantuje konkrétnu pozíciu vo vyhľadávači, výšku tržieb alebo schválenie každej položky v externých systémoch."
    ]
  },
  {
    title: "10. Ukončenie spolupráce",
    text: [
      "Každá strana môže spoluprácu ukončiť podľa dohody alebo právnych predpisov. Pri predčasnom ukončení má poskytovateľ nárok na úhradu už vykonaných prác, objednaných licencií a preukázateľných nákladov.",
      "Po ukončení spolupráce môže klient požiadať o odovzdanie dostupných výstupov, ku ktorým má podľa dohody a po úhrade ceny právo používania."
    ]
  },
  {
    title: "11. Záverečné ustanovenia",
    text: [
      "Tieto podmienky sa riadia právom Slovenskej republiky. Ak je niektoré ustanovenie neplatné alebo neúčinné, nemá to vplyv na platnosť ostatných ustanovení.",
      "Poskytovateľ môže tieto podmienky aktualizovať. Pre konkrétnu spoluprácu je rozhodujúce znenie platné v čase potvrdenia ponuky, ak sa strany nedohodnú inak."
    ]
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#020805] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-black text-emerald-300 transition hover:text-lime-200">
          Späť na VP Studio
        </Link>

        <header className="mt-12 rounded-[2rem] border border-emerald-300/15 bg-white/[0.035] p-7 shadow-[0_30px_120px_rgba(16,185,129,0.12)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">VOP</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Všeobecné obchodné podmienky</h1>
          <p className="mt-5 text-base font-semibold leading-8 text-zinc-400">
            Podmienky pre poskytovanie webových, grafických, SEO a e-commerce služieb pod značkou VP Studio.
          </p>
          <p className="mt-4 text-sm font-bold text-zinc-500">Účinné od 1. júna 2026</p>
        </header>

        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-emerald-300/12 bg-white/[0.03] p-6">
              <h2 className="text-2xl font-black">{section.title}</h2>
              <div className="mt-4 space-y-3 text-base font-semibold leading-8 text-zinc-400">
                {section.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
