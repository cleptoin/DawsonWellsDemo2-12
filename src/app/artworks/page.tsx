import type { Metadata } from "next";
import { CollectionBrowser } from "@/components/collection-browser";
import { PageHeading } from "@/components/page-heading";
import { artworkRepository } from "@/lib/repositories/artwork-repository";

export const metadata: Metadata = { title: "Artworks", description: "Browse a 100-work concept catalogue across photography, paintings, drawings, ceramics, and prints.", alternates: { canonical: "/artworks" } };

export default function ArtworksPage() {
  return (
    <div className="collection-page section-shell">
      <PageHeading title="The collection" introduction="Search, filter, and sort 100 catalogue works across five material practices, adapted from the supplied Dawson Wells mockup." />
      <CollectionBrowser initialArtworks={artworkRepository.getAll()} />
    </div>
  );
}
