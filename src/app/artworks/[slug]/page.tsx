import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkCard } from "@/components/artwork-card";
import { ArtworkGallery } from "@/components/artwork-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InquiryForm } from "@/components/inquiry-form";
import { formatDimensions } from "@/lib/format";
import { artworkRepository } from "@/lib/repositories/artwork-repository";

export function generateStaticParams() { return artworkRepository.getAll().map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworkRepository.getBySlug(slug);
  if (!artwork) return { title: "Artwork not found" };
  return {
    title: artwork.title,
    description: `${artwork.title}, from the Dawson Wells Gallery concept catalog of ${artwork.category.toLowerCase()}.`,
    alternates: { canonical: `/artworks/${slug}` },
    openGraph: { images: [{ url: artwork.images[0].src, width: artwork.images[0].width, height: artwork.images[0].height, alt: artwork.images[0].alt }] },
  };
}

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = artworkRepository.getBySlug(slug);
  if (!artwork) notFound();
  const related = artworkRepository.getRelated(artwork);
  const adjacent = artworkRepository.getAdjacent(artwork);
  return (
    <div className="artwork-detail section-shell">
      <Breadcrumbs items={[{ label: "Artworks", href: "/artworks" }, { label: artwork.category, href: `/artworks/${artwork.category.toLowerCase()}` }, { label: artwork.title }]} />
      <div className="artwork-detail__layout">
        <ArtworkGallery images={artwork.images} title={artwork.title} />
        <aside className="artwork-information">
          <h1>{artwork.title}</h1>
          <p>{artwork.category}</p>
          <dl>
            <div><dt>Year</dt><dd>{artwork.year}</dd></div>
            <div><dt>Medium</dt><dd>{artwork.medium}</dd></div>
            <div><dt>Dimensions</dt><dd>{formatDimensions(artwork.dimensions)}</dd></div>
            {artwork.edition && <div><dt>Edition</dt><dd>{artwork.edition}</dd></div>}
          </dl>
          <p>{artwork.description}</p>
          <p className="muted">{artwork.additionalInformation}</p>
          <a className="button" href="#inquire">Inquire about this artwork</a>
        </aside>
      </div>
      <nav className="artwork-pagination" aria-label="Adjacent artworks">
        <Link href={`/artworks/${adjacent.previous.slug}`}><ArrowLeft aria-hidden="true" /><span>Previous work<small>{adjacent.previous.title}</small></span></Link>
        <Link href={`/artworks/${adjacent.next.slug}`}><span>Next work<small>{adjacent.next.title}</small></span><ArrowRight aria-hidden="true" /></Link>
      </nav>
      <section className="related-artworks"><h2>Related works</h2><div className="artwork-grid artwork-grid--related">{related.map((item) => <ArtworkCard key={item.id} artwork={item} />)}</div></section>
      <section className="detail-inquiry" id="inquire"><div><h2>Ask about this work.</h2><p>Prepare an inquiry with the artwork already associated. The demonstration endpoint will validate but will not send your message.</p></div><InquiryForm artwork={artwork.title} /></section>
    </div>
  );
}
