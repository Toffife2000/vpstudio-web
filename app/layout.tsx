import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VP Studio | Weby, e-shopy, SEO a grafika",
  description:
    "VP Studio tvorí moderné weby, e-shopy, SEO nastavenia, Google Merchant riešenia, grafiku a editáciu fotiek pre Slovensko.",
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
