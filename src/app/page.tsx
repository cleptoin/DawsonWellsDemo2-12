import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArtworkCard } from "@/components/artwork-card";
import { NewsCard } from "@/components/news-card";
import { galleryProfile } from "@/data/gallery";
import { artistPortrait, categoryImageSets, demoImages } from "@/data/image-manifest";
import { artworkRepository } from "@/lib/repositories/artwork-repository";
import { newsRepository } from "@/lib/repositories/news-repository";
import { artworkCategories } from "@/types/content";

export const metadata: Metadata = {
  title: "Contemporary art, held for close looking",
  description: "Explore the Dawson Wells Gallery concept catalogue across photography, painting, drawing, ceramics, and print.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = artworkRepository.getFeatured(6);
  const heroArtwork = featured.find((artwork) => artwork.category === "Paintings") ?? featured[0];
  const news = newsRepository.getAll();
  return (
    <>
      <section className="home-hero home-hero--programme">
        <Image src={demoImages.Paintings.src} alt={demoImages.Paintings.alt} fill priority sizes="100vw" />
        <div className="home-hero__content">
          <p className="home-hero__status">Concept collection · The Material of Light</p>
          <h1>Art that rewards time.</h1>
          <p className="home-hero__lede">A focused digital collection across photography, painting, drawing, ceramics, and print—presented for sustained attention.</p>
          <div className="home-hero__actions">
            <Link className="button button--light" href={`/artworks/${heroArtwork.slug}`}>View featured work <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="hero-text-link" href="/artworks">Explore the collection</Link>
          </div>
          <p className="home-hero__meta">Mineral Field in Bone, Umber &amp; Rust · Mineral Inscriptions</p>
        </div>
      </section>
      <section className="home-index-intro section-shell">
        <p>Dawson Wells Gallery is organised as a place to look first: one programme lead, five material indexes, a selected collection, and a working journal.</p>
        <Link className="text-link" href="/about">Read about the gallery <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>
      <section className="category-index section-shell">
        <div className="section-title-row"><h2>Browse by material</h2><Link className="text-link" href="/artworks">Open full index <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div>
          {artworkCategories.map((category, index) => (
            <Link key={category} href={`/artworks/${category.toLowerCase()}`}><span className="category-index__thumb"><Image src={categoryImageSets[category][1].src} alt="" width={categoryImageSets[category][1].width} height={categoryImageSets[category][1].height} sizes="5rem" /></span><span>{(index + 1).toString().padStart(2, "0")}</span><strong>{category}</strong><span>20 catalogue works</span><ArrowRight aria-hidden="true" /></Link>
          ))}
        </div>
      </section>
      <section className="featured-section section-shell">
        <div className="section-title-row"><h2>Selected works</h2><Link className="text-link" href="/artworks">View all artworks <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="featured-grid">{featured.slice(0, 5).map((artwork, index) => <ArtworkCard key={artwork.id} artwork={artwork} priority={index < 2} />)}</div>
      </section>
      <section className="home-artist section-shell" aria-labelledby="home-artist-title">
        <div className="home-artist__portrait">
          <Image src={artistPortrait.src} alt={artistPortrait.alt} width={artistPortrait.width} height={artistPortrait.height} sizes="(max-width: 60rem) 60vw, 22rem" />
          <p><strong>{galleryProfile.founder}</strong><span>{galleryProfile.title}</span><span>University of Tennessee, Knoxville</span></p>
        </div>
        <div className="home-artist__copy">
          <p className="home-artist__eyebrow">The artist &amp; founder</p>
          <h2 id="home-artist-title">Purpose, storytelling &amp; material truth.</h2>
          <blockquote>&ldquo;Whether designing for legendary American brands or creating contemplative gallery works, my goal is to use creativity with purpose to tell stories and inspire others.&rdquo;</blockquote>
          <p>{galleryProfile.biography[0]}</p>
          <div className="home-artist__actions">
            <Link className="button" href="/about">Read the full biography <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="text-link" href="/artworks">Explore the collection</Link>
          </div>
        </div>
      </section>
      <section className="home-story section-shell">
        <Link className="home-story__image" href={`/news/${news[0].slug}`} aria-label={`Read ${news[0].title}`}>
          <Image src={news[0].coverImage.src} alt={news[0].coverImage.alt} width={news[0].coverImage.width} height={news[0].coverImage.height} sizes="(max-width: 960px) 100vw, 58vw" />
        </Link>
        <div className="home-story__copy">
          <p>{news[0].category} · Gallery journal</p>
          <h2>{news[0].title}</h2>
          <p>{news[0].excerpt}</p>
          <Link className="text-link" href={`/news/${news[0].slug}`}>Read the story <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="gallery-introduction">
        <div className="gallery-introduction__image"><Image src={demoImages.Gallery.src} alt={demoImages.Gallery.alt} fill sizes="(max-width: 900px) 100vw, 58vw" /></div>
        <div className="gallery-introduction__copy">
          <h2>Two cities, one programme.</h2>
          <p>The concept places the collection in Chelsea and Mayfair, with dedicated viewing information and a direct route for artwork, press, and appointment enquiries.</p>
          <Link className="text-link" href="/contact">View contact information <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="mission-statement section-shell">
        <blockquote>Make room for the work. Offer context without noise. Let attention become the invitation.</blockquote>
        <Link href="/mission-vision" className="text-link">Read the mission &amp; vision <ArrowRight size={18} aria-hidden="true" /></Link>
      </section>
      <section className="home-news section-shell">
        <div className="section-title-row"><h2>From the journal</h2><Link className="text-link" href="/news">All stories <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="news-grid">{news.slice(1, 3).map((article) => <NewsCard key={article.slug} article={article} />)}</div>
      </section>
      <section className="visit-callout section-shell">
        <div><h2>Begin with a specific question.</h2><p>Ask about a work, the collection, press material, or a future visit. The enquiry keeps the artwork context while remaining a no-delivery demo form.</p></div>
        <Link className="button" href="/contact">Prepare an enquiry</Link>
      </section>
    </>
  );
}
