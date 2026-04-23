import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://paimarciodeoxossi.com.br";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/produtos/mapa-de-destino`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/produtos/flecha-da-decisao`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/produtos/circulo-do-cacador`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
