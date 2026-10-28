import { artworks } from "@/data/artworks";
import type { Artwork, ArtworkCategory } from "@/types/content";

export const artworkRepository = {
  getAll(): Artwork[] {
    return [...artworks].sort((a, b) => a.sortOrder - b.sortOrder);
  },
  getBySlug(slug: string): Artwork | undefined {
    return artworks.find((artwork) => artwork.slug === slug);
  },
  getByCategory(category: ArtworkCategory): Artwork[] {
    return artworks.filter((artwork) => artwork.category === category);
  },
  getFeatured(limit = 6): Artwork[] {
    return artworks.filter((artwork) => artwork.featured).slice(0, limit);
  },
  getRelated(artwork: Artwork, limit = 4): Artwork[] {
    return artworks.filter((item) => item.category === artwork.category && item.id !== artwork.id).slice(0, limit);
  },
  getAdjacent(artwork: Artwork): { previous: Artwork; next: Artwork } {
    const ordered = this.getAll();
    const index = ordered.findIndex((item) => item.id === artwork.id);
    return {
      previous: ordered[(index - 1 + ordered.length) % ordered.length],
      next: ordered[(index + 1) % ordered.length],
    };
  },
};
