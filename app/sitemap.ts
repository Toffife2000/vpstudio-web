import type { MetadataRoute } from "next";

const baseUrl = "https://vpstudio.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-01");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/ochrana-osobnych-udajov`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/vseobecne-obchodne-podmienky`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
