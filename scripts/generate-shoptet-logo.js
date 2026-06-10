const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public", "logos");

const svg = `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(142 116) rotate(56) scale(322)">
      <stop stop-color="#14351e"/>
      <stop offset="0.36" stop-color="#06130b"/>
      <stop offset="1" stop-color="#010603"/>
    </radialGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(205 170) rotate(90) scale(178)">
      <stop stop-color="#c7ff75" stop-opacity="0.95"/>
      <stop offset="0.25" stop-color="#6eff8c" stop-opacity="0.46"/>
      <stop offset="1" stop-color="#00e25a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring" x1="84" y1="72" x2="318" y2="312" gradientUnits="userSpaceOnUse">
      <stop stop-color="#e7ff9a"/>
      <stop offset="0.42" stop-color="#8dff5d"/>
      <stop offset="1" stop-color="#20e58a"/>
    </linearGradient>
    <linearGradient id="word" x1="86" y1="314" x2="317" y2="314" gradientUnits="userSpaceOnUse">
      <stop stop-color="#eaffd0"/>
      <stop offset="0.5" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#a7f3d0"/>
    </linearGradient>
    <filter id="softGlow" x="-80" y="-80" width="560" height="560" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.45 0 0 0 0 1 0 0 0 0 0.22 0 0 0 0.82 0"/>
      <feBlend in="SourceGraphic"/>
    </filter>
    <filter id="textGlow" x="0" y="0" width="400" height="400" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#8dff5d" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="400" height="400" rx="58" fill="url(#bg)"/>
  <rect x="1.5" y="1.5" width="397" height="397" rx="56.5" stroke="#b8ff73" stroke-opacity="0.22" stroke-width="3"/>
  <circle cx="200" cy="174" r="151" fill="url(#glow)" opacity="0.4"/>
  <path d="M44 288C98 332 302 332 356 288" stroke="#9cff6e" stroke-opacity="0.18" stroke-width="2"/>
  <path d="M50 92C106 52 280 50 348 112" stroke="#9cff6e" stroke-opacity="0.16" stroke-width="2"/>

  <g filter="url(#softGlow)">
    <circle cx="200" cy="166" r="112" stroke="url(#ring)" stroke-width="15"/>
    <path d="M110 111L200 236L290 111" stroke="url(#ring)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M218 105H272C296 105 313 122 313 145C313 168 296 184 272 184H224V230" stroke="url(#ring)" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M198 241V91" stroke="#031008" stroke-width="13" stroke-linecap="round"/>
    <path d="M218 175H294" stroke="#031008" stroke-width="13" stroke-linecap="round"/>
  </g>

  <g filter="url(#textGlow)">
    <text x="200" y="323" text-anchor="middle" fill="url(#word)" font-family="Arial, Helvetica, sans-serif" font-size="39" font-weight="900" letter-spacing="1.6">VP STUDIO</text>
    <text x="200" y="350" text-anchor="middle" fill="#95f7b2" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" letter-spacing="5.4">WEB DESIGN STUDIO</text>
  </g>
</svg>`;

const cleanSvg = `<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(190 140) rotate(90) scale(310)">
      <stop stop-color="#14391f"/>
      <stop offset="0.42" stop-color="#06140b"/>
      <stop offset="1" stop-color="#010604"/>
    </radialGradient>
    <linearGradient id="vp" x1="78" y1="139" x2="324" y2="229" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f1ffd2"/>
      <stop offset="0.34" stop-color="#b8ff65"/>
      <stop offset="0.68" stop-color="#66f48a"/>
      <stop offset="1" stop-color="#64f2d2"/>
    </linearGradient>
    <filter id="glow" x="-70" y="-70" width="540" height="540" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#8dff5d" flood-opacity="0.78"/>
      <feDropShadow dx="0" dy="0" stdDeviation="26" flood-color="#00e25a" flood-opacity="0.32"/>
    </filter>
    <filter id="soft" x="-70" y="-70" width="540" height="540" color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
  </defs>

  <rect width="400" height="400" rx="62" fill="url(#bg)"/>
  <circle cx="200" cy="188" r="124" fill="#7cff5b" opacity="0.18" filter="url(#soft)"/>
  <rect x="2" y="2" width="396" height="396" rx="60" stroke="#b7ff70" stroke-opacity="0.24" stroke-width="4"/>
  <circle cx="200" cy="172" r="116" stroke="url(#vp)" stroke-width="9" opacity="0.86"/>
  <path d="M64 297C115 329 285 329 336 297" stroke="#9cff6e" stroke-opacity="0.2" stroke-width="2"/>
  <path d="M64 92C120 58 280 58 336 92" stroke="#9cff6e" stroke-opacity="0.15" stroke-width="2"/>

  <g filter="url(#glow)">
    <text x="200" y="219" text-anchor="middle" fill="url(#vp)" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="132" font-weight="900" letter-spacing="-12">VP</text>
  </g>
  <text x="200" y="317" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="37" font-weight="900" letter-spacing="1.4">VP STUDIO</text>
  <text x="200" y="346" text-anchor="middle" fill="#9cf8b6" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="800" letter-spacing="5.2">WEB DESIGN STUDIO</text>
</svg>`;

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const svgPath = path.join(outDir, "vp-studio-shoptet-logo-400.svg");
  const pngPath = path.join(outDir, "vp-studio-shoptet-logo-400.png");
  const jpgPath = path.join(outDir, "vp-studio-shoptet-logo-400.jpg");
  const cleanSvgPath = path.join(outDir, "vp-studio-shoptet-logo-clean-400.svg");
  const cleanPngPath = path.join(outDir, "vp-studio-shoptet-logo-clean-400.png");
  const cleanJpgPath = path.join(outDir, "vp-studio-shoptet-logo-clean-400.jpg");

  await fs.writeFile(svgPath, svg, "utf8");
  await sharp(Buffer.from(svg)).resize(400, 400).png().toFile(pngPath);
  await sharp(Buffer.from(svg)).resize(400, 400).jpeg({ quality: 94, mozjpeg: true }).toFile(jpgPath);
  await fs.writeFile(cleanSvgPath, cleanSvg, "utf8");
  await sharp(Buffer.from(cleanSvg)).resize(400, 400).png().toFile(cleanPngPath);
  await sharp(Buffer.from(cleanSvg)).resize(400, 400).jpeg({ quality: 94, mozjpeg: true }).toFile(cleanJpgPath);

  console.log(`Generated:
${svgPath}
${pngPath}
${jpgPath}
${cleanSvgPath}
${cleanPngPath}
${cleanJpgPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
