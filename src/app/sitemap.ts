import type { MetadataRoute } from "next";
import { artworkRepository } from "@/lib/repositories/artwork-repository";
import { newsRepository } from "@/lib/repositories/news-repository";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/mission-vision", "/company-overview", "/artworks", "/artworks/photography", "/artworks/paintings", "/artworks/drawings", "/artworks/ceramics", "/artworks/prints", "/news", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date("2026-10-28"), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...artworkRepository.getAll().map((artwork) => ({ url: `${siteConfig.url}/artworks/${artwork.slug}`, lastModified: new Date(artwork.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...newsRepository.getAll().map((article) => ({ url: `${siteConfig.url}/news/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
