const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public", "partneri");
const baseUrl = "https://vpstudio-web.vercel.app";
const assetVersion = "v=3";

const cards = [
  {
    file: "vp-tvorba-webu",
    w: 800,
    h: 800,
    title: "Novy web",
    kicker: "VP Studio",
    desc: "Premium prezentacia od prveho dojmu po kontakt.",
    accent: "#38bdf8",
    icon: "web"
  },
  {
    file: "vp-shoptet-eshop",
    w: 800,
    h: 800,
    title: "Shoptet upravy",
    kicker: "Partner profil",
    desc: "Lepsia struktura, produkty, kategorie a dovera.",
    accent: "#60a5fa",
    icon: "shop"
  },
  {
    file: "vp-redizajn",
    w: 800,
    h: 800,
    title: "Redizajn",
    kicker: "Novy dojem",
    desc: "Ked web potrebuje posobit modernejsie a predajnejsie.",
    accent: "#22d3ee",
    icon: "redesign"
  },
  {
    file: "vp-webdesign",
    w: 1000,
    h: 800,
    title: "Webdesign",
    kicker: "Design system",
    desc: "Jasne sekcie, cisty vizual a cesta navstevnika ku kontaktu.",
    accent: "#7dd3fc",
    icon: "design"
  },
  {
    file: "vp-eshop-prax",
    w: 1000,
    h: 800,
    title: "E-shop prax",
    kicker: "E-commerce",
    desc: "Produkty, nakupny proces, meranie a kazdodenna prevadzka.",
    accent: "#93c5fd",
    icon: "practice"
  },
  {
    file: "vp-seo",
    w: 800,
    h: 800,
    title: "SEO texty",
    kicker: "Google ready",
    desc: "Kategorie, produkty a obsah pripraveny pre vyhladavanie.",
    accent: "#38bdf8",
    icon: "seo"
  },
  {
    file: "vp-google-merchant",
    w: 800,
    h: 800,
    title: "Merchant feedy",
    kicker: "Produktove data",
    desc: "Merchant Center, produktovy feed a kontrola problemov.",
    accent: "#60a5fa",
    icon: "merchant"
  },
  {
    file: "vp-bannery",
    w: 800,
    h: 800,
    title: "Bannery",
    kicker: "Visual content",
    desc: "Reklamne kreativy, produktove vizualy a grafika pre kampane.",
    accent: "#22d3ee",
    icon: "banners"
  },
  {
    file: "vp-pravidelna-sprava",
    w: 800,
    h: 800,
    title: "Sprava e-shopu",
    kicker: "Dlhodoba spolupraca",
    desc: "Upravy, nove sekcie, texty, SEO a grafika podla potreby.",
    accent: "#7dd3fc",
    icon: "care"
  },
  {
    file: "vp-cta",
    w: 1400,
    h: 760,
    title: "Ozvite sa",
    kicker: "VP Studio",
    desc: "Weby, Shoptet upravy, SEO, Merchant, bannery a grafika pre znacky, ktore chcu posobit profesionalne.",
    accent: "#38bdf8",
    icon: "cta"
  }
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function splitTitle(title, maxLen) {
  const words = title.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

function icon(kind, x, y, size, color) {
  const c = escapeXml(color);
  const common = `fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
  if (kind === "shop" || kind === "merchant") {
    return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><path d="M20 28h14l8 46h50l8-34H40"/><path d="M46 92a8 8 0 1 0 0 1"/><path d="M82 92a8 8 0 1 0 0 1"/><path d="M16 18h16"/></g>`;
  }
  if (kind === "seo") {
    return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><circle cx="52" cy="52" r="30"/><path d="M76 76l28 28"/><path d="M38 54h28M52 40v28" opacity=".55"/></g>`;
  }
  if (kind === "banners" || kind === "design") {
    return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><path d="M28 84l48-48 18 18-48 48H28z"/><path d="M72 40l10-10 18 18-10 10"/><path d="M24 24h30M24 42h18" opacity=".55"/></g>`;
  }
  if (kind === "practice" || kind === "care") {
    return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><path d="M28 88V34h64v54"/><path d="M20 88h80"/><path d="M40 52h40M40 68h24"/><path d="M78 26l14-14 14 14" opacity=".55"/></g>`;
  }
  if (kind === "redesign") {
    return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><path d="M32 76c10 18 38 26 58 8 13-12 15-30 8-45"/><path d="M92 38h18V20"/><path d="M88 38c-16-16-43-16-59 2-10 11-13 26-8 39"/><path d="M28 80H10v18"/></g>`;
  }
  return `<g transform="translate(${x} ${y}) scale(${size / 120})" ${common}><path d="M28 36l-20 24 20 24"/><path d="M92 36l20 24-20 24"/><path d="M72 20L48 100"/></g>`;
}

function cardSvg(card) {
  const { w, h, title, kicker, desc, accent, icon: iconKind } = card;
  const id = card.file.replace(/[^a-z0-9]/g, "");
  const isCta = w > 1200;
  const titleLines = splitTitle(title, isCta ? 18 : w > 900 ? 16 : 12);
  const titleSize = isCta ? 116 : w > 900 ? 92 : 88;
  const titleY = isCta ? 335 : 390;
  const descY = titleY + titleLines.length * (titleSize * 0.92) + (isCta ? 46 : 38);
  const iconSize = isCta ? 112 : 108;
  const iconX = isCta ? w - 230 : w - 186;
  const iconY = isCta ? 118 : 112;
  const titleText = titleLines
    .map((line, index) => `<text x="${isCta ? 92 : 70}" y="${titleY + index * titleSize * 0.95}" class="title">${escapeXml(line)}</text>`)
    .join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#020617"/><stop offset="0.48" stop-color="#071426"/><stop offset="1" stop-color="#020712"/></linearGradient>
    <radialGradient id="glow-${id}" cx="68%" cy="32%" r="70%"><stop offset="0" stop-color="${accent}" stop-opacity="0.55"/><stop offset="0.32" stop-color="${accent}" stop-opacity="0.22"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
    <linearGradient id="line-${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${accent}" stop-opacity="0"/><stop offset="0.5" stop-color="${accent}" stop-opacity="0.9"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
    <filter id="soft-${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="26" result="blur"/><feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.45  0 0 0 0 1  0 0 0 0.95 0"/></filter>
    <style>.kicker{font:800 ${isCta ? 24 : 22}px Inter,Manrope,Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;fill:${accent}}.title{font:900 ${titleSize}px Inter,Manrope,Arial,sans-serif;letter-spacing:-.035em;fill:#f8fafc}.desc{font:700 ${isCta ? 28 : 25}px Inter,Manrope,Arial,sans-serif;fill:#b9c6d8}.vp{font:900 ${isCta ? 26 : 24}px Inter,Manrope,Arial,sans-serif;letter-spacing:.12em;fill:#f8fafc}.micro{font:800 ${isCta ? 16 : 14}px Inter,Manrope,Arial,sans-serif;letter-spacing:.24em;fill:#7dd3fc}</style>
  </defs>
  <rect width="${w}" height="${h}" rx="42" fill="url(#bg-${id})"/>
  <rect width="${w}" height="${h}" rx="42" fill="url(#glow-${id})"/>
  <g opacity="0.18">${Array.from({ length: Math.ceil(w / 80) + 1 }, (_, i) => `<path d="M${i * 80} 0V${h}" stroke="#7dd3fc" stroke-opacity="0.25"/>`).join("")}${Array.from({ length: Math.ceil(h / 80) + 1 }, (_, i) => `<path d="M0 ${i * 80}H${w}" stroke="#7dd3fc" stroke-opacity="0.22"/>`).join("")}</g>
  <circle cx="${w * 0.72}" cy="${h * 0.34}" r="${Math.min(w, h) * 0.34}" fill="${accent}" opacity="0.18" filter="url(#soft-${id})"/>
  <circle cx="${w * 0.82}" cy="${h * 0.15}" r="${Math.min(w, h) * 0.16}" fill="#ffffff" opacity="0.08" filter="url(#soft-${id})"/>
  <path d="M${w * 0.1} ${h * 0.72}C${w * 0.32} ${h * 0.58} ${w * 0.5} ${h * 0.88} ${w * 0.9} ${h * 0.62}" stroke="${accent}" stroke-opacity="0.28" stroke-width="2" fill="none"/>
  <path d="M${w * 0.16} ${h * 0.17}H${w * 0.55}" stroke="url(#line-${id})" stroke-width="2"/>
  <rect x="${isCta ? 92 : 70}" y="${isCta ? 102 : 86}" width="${isCta ? 232 : 208}" height="48" rx="24" fill="#071426" stroke="${accent}" stroke-opacity="0.3"/>
  <text x="${isCta ? 120 : 96}" y="${isCta ? 134 : 118}" class="kicker">${escapeXml(kicker)}</text>
  ${icon(iconKind, iconX, iconY, iconSize, accent)}
  ${titleText}
  <foreignObject x="${isCta ? 92 : 70}" y="${descY}" width="${isCta ? 770 : w - 150}" height="${isCta ? 110 : 140}"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 ${isCta ? 28 : 25}px Inter,Manrope,Arial,sans-serif;line-height:1.38;color:#b9c6d8;">${escapeXml(desc)}</div></foreignObject>
  <g transform="translate(${isCta ? 92 : 70} ${h - (isCta ? 86 : 80)})"><rect width="74" height="44" rx="14" fill="#071426" stroke="${accent}" stroke-opacity="0.38"/><text x="18" y="29" class="vp">VP</text><text x="92" y="29" class="micro">STUDIO</text></g>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="42" fill="none" stroke="#bfdbfe" stroke-opacity="0.16"/>
</svg>`;
}

function htmlSnippet() {
  const img = (file, alt, href = baseUrl) =>
    `<a href="${href}" target="_blank" rel="noopener" style="display:block;text-decoration:none;"><img src="${baseUrl}/partneri/${file}.webp?${assetVersion}" alt="${alt}" loading="lazy" style="display:block;width:100%;height:auto;border-radius:14px;border:0;" onerror="this.onerror=null;this.src='${baseUrl}/partneri/${file}.svg?${assetVersion}';"></a>`;

  return `<div class="vp-shoptet-profile" style="max-width:980px;margin:0 auto;font-family:Arial,sans-serif;color:#1f2937;line-height:1.65;">
  <h2>O mne</h2>
  <p><strong>Ahojte, vol\u00e1m sa Viktor Pol\u00e1k a tvor\u00edm pod zna\u010dkou VP Studio.</strong></p>

  <h2>\u010co viem?</h2>
  <p>Tvor\u00edm modern\u00e9 webov\u00e9 prezent\u00e1cie, upravujem Shoptet e-shopy, pripravujem SEO texty, produktov\u00e9 popisy, kateg\u00f3rie, bannery a vizu\u00e1ly, ktor\u00e9 pom\u00e1haj\u00fa zna\u010dke p\u00f4sobi\u0165 profesion\u00e1lnej\u0161ie a d\u00f4veryhodnej\u0161ie.</p>

  <p><a href="${baseUrl}/" target="_blank" rel="noopener" style="display:inline-block;margin:10px 0 22px;padding:12px 20px;border-radius:12px;background:#0b1220;color:#ffffff;text-decoration:none;font-weight:700;letter-spacing:.02em;">POZRIE\u0164 VP STUDIO</a></p>

  <h3>Nov\u00e9 weby. Shoptet e-shopy. SEO.</h3>
  <p>Pom\u00e1ham firm\u00e1m a e-shopom od prv\u00e9ho n\u00e1padu a\u017e po hotov\u00fd v\u00fdsledok. Rie\u0161im dizajn, \u0161trukt\u00faru str\u00e1nky, texty, produkty, kateg\u00f3rie, technick\u00e9 \u00fapravy a vizu\u00e1ly pre web aj online kampane.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:22px 0 34px;">
    ${img("vp-tvorba-webu", "Tvorba nov\u00e9ho webu")}
    ${img("vp-shoptet-eshop", "\u00daprava Shoptet e-shopu")}
    ${img("vp-redizajn", "Redizajn existuj\u00facej str\u00e1nky")}
  </div>

  <h3>Webdesign. Programovanie. Predajn\u00fd obsah.</h3>
  <p>Moj\u00edm cie\u013eom nie je iba pekn\u00fd dizajn. Web alebo e-shop mus\u00ed by\u0165 preh\u013eadn\u00fd, r\u00fdchly, d\u00f4veryhodn\u00fd a pripraven\u00fd tak, aby z\u00e1kazn\u00edk r\u00fdchlo pochopil ponuku a vedel spravi\u0165 \u010fal\u0161\u00ed krok.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:22px 0 34px;">
    ${img("vp-webdesign", "Webdesign a \u0161trukt\u00fara str\u00e1nky")}
    ${img("vp-eshop-prax", "Re\u00e1lna e-shop prax")}
  </div>

  <h3>SEO. Google. Produktov\u00e9 fotky. Bannery.</h3>
  <p>Okrem webov rie\u0161im aj praktick\u00e9 veci, ktor\u00e9 e-shop potrebuje ka\u017ed\u00fd de\u0148: SEO popisy, Google Merchant Center, Search Console, produktov\u00e9 obr\u00e1zky, reklamn\u00e9 bannery a \u00fapravy grafiky pre kampane.</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:22px 0 34px;">
    ${img("vp-seo", "SEO texty pre e-shop")}
    ${img("vp-google-merchant", "Google Merchant a feedy")}
    ${img("vp-bannery", "Bannery a produktov\u00e1 grafika")}
  </div>

  <h3>Pravideln\u00e1 spolupr\u00e1ca.</h3>
  <p>Viem pom\u00f4c\u0165 jednorazovo s konkr\u00e9tnou \u00fapravou, ale aj dlhodobo pri rozvoji webu alebo e-shopu. Naj\u010dastej\u0161ie rie\u0161im \u00fapravy Shoptetu, nov\u00e9 sekcie, popisy produktov, kateg\u00f3rie, grafiku, SEO a technick\u00e9 doladenie.</p>
  <div style="margin:22px 0 34px;">
    ${img("vp-cta", "Spolo\u010dn\u00e1 cesta sa m\u00f4\u017ee za\u010da\u0165, sta\u010d\u00ed nap\u00edsa\u0165!", `${baseUrl}/#kontakt`)}
  </div>

  <h3>Profil</h3>
  <p><strong>VP Studio</strong><br>Viktor Pol\u00e1k<br>Tvorba webov, \u00fapravy Shoptet e-shopov, SEO, Google Merchant, produktov\u00e9 popisy, bannery a grafika.</p>

  <p><strong>Web:</strong> <a href="${baseUrl}/" target="_blank" rel="noopener">vpstudio-web.vercel.app</a><br><strong>E-mail:</strong> <a href="mailto:info@vpstudio.sk">info@vpstudio.sk</a></p>

  <p>Prev\u00e1dzkovate\u013e: Aeterna spol. s r.o., Rozmar\u00ednova 3238/26, 945 01 Kom\u00e1rno.<br>I\u010cO: 50924010<br>DI\u010c: 2120526705<br>Spolo\u010dnos\u0165 nie je platite\u013eom DPH. Registrovan\u00e1 pod\u013ea \u00a7 7 z\u00e1kona o DPH.</p>
</div>
`;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  for (const card of cards) {
    const data = cardSvg(card);
    await fs.writeFile(path.join(outDir, `${card.file}.svg`), data, "utf8");
    await sharp(Buffer.from(data)).resize(card.w, card.h).webp({ quality: 92 }).toFile(path.join(outDir, `${card.file}.webp`));
  }
  await fs.writeFile(path.join(process.cwd(), "partneri-shoptet-html.html"), htmlSnippet(), "utf8");
  await fs.writeFile(
    path.join(outDir, "README.md"),
    [
      "# VP Studio Shoptet partner assets",
      "",
      "Generated assets for the Shoptet partner profile.",
      "Edit card text, dimensions or colors in `scripts/generate-partner-assets.js`, then run:",
      "",
      "```bash",
      "node scripts/generate-partner-assets.js",
      "```",
      "",
      "Public URLs use `https://vpstudio-web.vercel.app/partneri/<file>.svg` or `.webp`."
    ].join("\n"),
    "utf8"
  );
  console.log(`Generated ${cards.length} SVG and ${cards.length} WebP assets.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
