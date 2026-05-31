import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VP Studio | Weby, e-shopy, SEO a grafika",
  description:
    "VP Studio tvorí moderné weby, e-shopy, SEO nastavenia, Google Merchant riešenia, grafiku a editáciu fotiek pre Slovensko.",
  keywords: [
    "tvorba webových stránok",
    "web dizajn Slovensko",
    "e-shop",
    "SEO",
    "Google Merchant",
    "Photoshop",
    "grafika"
  ],
  openGraph: {
    title: "VP Studio | Weby, e-shopy, SEO a grafika",
    description:
      "Ultra prémiové weby, e-shopy, SEO, Google Merchant a grafika pre značky, ktoré nechcú pôsobiť obyčajne.",
    type: "website",
    locale: "sk_SK"
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Studio | Weby, e-shopy, SEO a grafika",
    description:
      "Weby, e-shopy, SEO nastavenia, Google Merchant, Photoshop a grafika pre Slovensko."
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
