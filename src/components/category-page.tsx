import { CollectionBrowser } from "@/components/collection-browser";
import { PageHeading } from "@/components/page-heading";
import { artworkRepository } from "@/lib/repositories/artwork-repository";
import type { ArtworkCategory } from "@/types/content";

const introductions: Record<ArtworkCategory, string> = {
  Photography: "The Light Architecture Series attends to structure, weather, atmosphere, and the measured conditions of photographic light.",
  Paintings: "Mineral Inscriptions brings pigment, wax, stone dust, linen, and architectural scale into sustained material dialogue.",
  Drawings: "Orbital Notations uses pressure, erasure, graphite, carbon, ink, and open space as active physical elements.",
  Ceramics: "Vessels of Containment follows hand-building, prolonged firing, mineral glaze, weight, and the tension between vessel and sculpture.",
  Prints: "The Counterform Editions explores pressure, registration, relief, repetition, and the material intelligence of paper and ink.",
};

export function CategoryPage({ category }: { category: ArtworkCategory }) {
  return (
    <div className="collection-page section-shell">
      <PageHeading title={category} introduction={introductions[category]} />
      <CollectionBrowser initialArtworks={artworkRepository.getByCategory(category)} fixedCategory={category} />
    </div>
  );
}
