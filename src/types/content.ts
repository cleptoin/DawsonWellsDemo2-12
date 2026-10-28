export const artworkCategories = [
  "Photography",
  "Paintings",
  "Drawings",
  "Ceramics",
  "Prints",
] as const;

export type ArtworkCategory = (typeof artworkCategories)[number];

export interface ArtworkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Dimensions {
  height: number;
  width: number;
  depth?: number;
  unit: "in" | "cm";
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  description: string;
  year: number;
  medium: string;
  dimensions: Dimensions;
  images: ArtworkImage[];
  featured: boolean;
  sortOrder: number;
  edition?: string;
  additionalInformation?: string;
  createdAt: string;
  updatedAt: string;
  inventoryStatus: "demonstration" | "verified";
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: "Exhibition" | "Art fair" | "Press" | "Publication" | "Gallery update" | "Collection note" | "Journal";
  coverImage: ArtworkImage;
  excerpt: string;
  body: string[];
  demonstration: boolean;
}
