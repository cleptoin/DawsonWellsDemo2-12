import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/content";

export function ArtworkCard({ artwork, priority = false }: { artwork: Artwork; priority?: boolean }) {
  const image = artwork.images[0];
  return (
    <article className="artwork-card">
      <Link href={`/artworks/${artwork.slug}`} className="artwork-card__image" aria-label={`View ${artwork.title}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
      </Link>
      <div className="artwork-card__meta">
        <div>
          <h2><Link href={`/artworks/${artwork.slug}`}>{artwork.title}</Link></h2>
          <p>{artwork.medium}, {artwork.year}</p>
        </div>
        <span>{artwork.category}</span>
      </div>
    </article>
  );
}
