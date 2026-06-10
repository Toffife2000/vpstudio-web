import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vpstudio.sk"),
  title: {
    default: "VP Studio | Tvorba webov, e-shopov, SEO a grafika",
    template: "%s | VP Studio"
  },
  description:
    "VP Studio tvorí moderné webové stránky, Shoptet e-shopy, SEO nastavenia, Google Merchant riešenia, grafiku a editáciu fotiek pre firmy na Slovensku.",
  applicationName: "VP Studio",
  authors: [{ name: "D.O.W. Trade, s.r.o.", url: "https://vpstudio.sk" }],
  creator: "VP Studio",
  publisher: "D.O.W. Trade, s.r.o.",
  category: "web design, SEO, e-commerce",
  keywords: [
    "tvorba webových stránok",
    "tvorba web stránok Slovensko",
    "web dizajn Slovensko",
    "webové stránky na mieru",
    "tvorba e-shopu",
    "Shoptet partner",
    "Shoptet e-shop",
    "úprava Shoptet e-shopu",
    "redizajn Shoptet",
    "e-shop Slovensko",
    "SEO optimalizácia",
    "technické SEO",
    "Google Merchant",
    "Google Search Console",
    "Photoshop",
    "grafický dizajn",
    "produktové fotky",
    "VP Studio"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "VP Studio | Weby, e-shopy, SEO a grafika pre Slovensko",
    description:
      "Prémiové weby, Shoptet e-shopy, SEO, Google Merchant a grafika pre značky, ktoré nechcú pôsobiť obyčajne.",
    url: "https://vpstudio.sk",
    siteName: "VP Studio",
    type: "website",
    locale: "sk_SK",
    images: [
      {
        url: "/hero-workspace.png",
        width: 1536,
        height: 1024,
        alt: "VP Studio - weby, e-shopy, SEO a grafika"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Studio | Weby, e-shopy, SEO a grafika",
    description:
      "Weby, Shoptet e-shopy, SEO nastavenia, Google Merchant, Photoshop a grafika pre Slovensko.",
    images: ["/hero-workspace.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
