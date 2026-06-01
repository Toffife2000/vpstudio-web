import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | VP Studio",
  description: "Informácie o spracúvaní osobných údajov spoločnosťou Aeterna spol. s r.o. pri používaní webu VP Studio."
};

const sections = [
  {
    title: "1. Prevádzkovateľ",
    text: [
      "Prevádzkovateľom osobných údajov je Aeterna spol. s r.o., Rozmarínova 3238/26, 945 01 Komárno, IČO: 50924010, DIČ: 2120526705, zapísaná v Obchodnom registri Okresného súdu Nitra, oddiel Sro, vložka č. 43381/N.",
      "Kontaktný e-mail pre otázky k ochrane osobných údajov: info@vpstudio.sk."
    ]
  },
  {
    title: "2. Aké údaje spracúvame",
    text: [
      "Pri kontaktnom formulári a konfigurátore môžeme spracúvať meno a priezvisko alebo názov firmy, e-mail, telefónne číslo, aktuálnu webovú stránku, obsah správy, vybrané služby a technické informácie potrebné na doručenie správy.",
      "Nepýtame si údaje, ktoré nie sú potrebné na odpoveď alebo prípravu ponuky."
    ]
  },
  {
    title: "3. Účely a právne základy",
    text: [
      "Odpoveď na dopyt, spracovanie briefu a príprava cenovej ponuky: spracúvanie je potrebné na vykonanie opatrení pred uzatvorením zmluvy alebo na náš oprávnený záujem odpovedať na prijatú správu.",
      "Plnenie zmluvy a komunikácia počas projektu: spracúvanie je potrebné na plnenie zmluvy.",
      "Fakturácia, účtovníctvo a zákonné povinnosti: spracúvanie je potrebné na splnenie zákonnej povinnosti.",
      "Ochrana právnych nárokov: spracúvanie môže byť založené na oprávnenom záujme chrániť práva a preukázať komunikáciu."
    ]
  },
  {
    title: "4. Doba uchovávania",
    text: [
      "Dopyty a briefy bez uzatvorenia zmluvy uchovávame spravidla najviac 12 mesiacov od poslednej komunikácie.",
      "Projektovú a zmluvnú komunikáciu uchovávame počas trvania spolupráce a následne po dobu potrebnú na ochranu právnych nárokov.",
      "Účtovné a daňové doklady uchovávame po dobu vyžadovanú právnymi predpismi, spravidla 10 rokov."
    ]
  },
  {
    title: "5. Príjemcovia a sprostredkovatelia",
    text: [
      "K údajom môžu mať prístup technickí poskytovatelia webu, hostingu, e-mailových služieb, domény, úložiska, bezpečnosti, účtovníctva alebo právneho poradenstva, vždy len v rozsahu potrebnom na daný účel.",
      "Web je nasadený cez Vercel a zdrojový kód môže byť spravovaný cez GitHub. E-mailová komunikácia bude prebiehať cez poskytovateľa e-mailovej schránky k doméne vpstudio.sk alebo iný zvolený e-mailový systém."
    ]
  },
  {
    title: "6. Prenos mimo EÚ/EHP",
    text: [
      "Niektorí technickí poskytovatelia môžu spracúvať údaje aj mimo Európskej únie alebo Európskeho hospodárskeho priestoru. V takom prípade sa používajú primerané záruky, najmä štandardné zmluvné doložky alebo iné mechanizmy podľa GDPR."
    ]
  },
  {
    title: "7. Cookies a podobné technológie",
    text: [
      "V čase zverejnenia tejto stránky web nepoužíva analytické ani marketingové cookies. Používané môžu byť iba technické prvky potrebné na bezpečné a správne fungovanie webu.",
      "Ak budú neskôr pridané nástroje ako Google Analytics, Meta Pixel, remarketing alebo iné meranie návštevnosti, web doplníme o cookie lištu a možnosť udeliť alebo odmietnuť súhlas pred spustením takýchto nástrojov."
    ]
  },
  {
    title: "8. Práva dotknutej osoby",
    text: [
      "Máte právo požadovať prístup k osobným údajom, opravu, vymazanie, obmedzenie spracúvania, prenosnosť údajov a namietať proti spracúvaniu založenému na oprávnenom záujme.",
      "Ak je spracúvanie založené na súhlase, máte právo súhlas kedykoľvek odvolať bez vplyvu na zákonnosť spracúvania pred odvolaním.",
      "Svoje práva môžete uplatniť e-mailom na info@vpstudio.sk. Máte tiež právo podať návrh alebo sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020805] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-black text-emerald-300 transition hover:text-lime-200">
          Späť na VP Studio
        </Link>

        <header className="mt-12 rounded-[2rem] border border-emerald-300/15 bg-white/[0.035] p-7 shadow-[0_30px_120px_rgba(16,185,129,0.12)] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">GDPR</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Zásady ochrany osobných údajov</h1>
          <p className="mt-5 text-base font-semibold leading-8 text-zinc-400">
            Informácie podľa GDPR o tom, ako spracúvame osobné údaje pri používaní webu, kontaktného formulára a projektového konfigurátora.
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
