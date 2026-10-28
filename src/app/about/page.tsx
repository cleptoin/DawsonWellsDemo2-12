import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { galleryProfile } from "@/data/gallery";
import { artistPortrait, demoImages } from "@/data/image-manifest";

export const metadata: Metadata = { title: "About", description: "Dawson Wells Gallery, its founder, and its material-led approach to presenting art.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <div className="editorial-page section-shell">
      <PageHeading title="A place for sustained attention." introduction="Dawson Wells Gallery is a concept for an art-led programme connecting material practice, architectural space, and the experience of looking slowly." />
      <figure className="editorial-image"><Image src={demoImages.Gallery.src} alt={demoImages.Gallery.alt} width={demoImages.Gallery.width} height={demoImages.Gallery.height} priority /><figcaption>Gallery interior concept · Chelsea, New York.</figcaption></figure>
      <section className="editorial-columns">
        <div className="about-founder"><Image className="about-founder__portrait" src={artistPortrait.src} alt={artistPortrait.alt} width={artistPortrait.width} height={artistPortrait.height} sizes="14rem" /><h2>{galleryProfile.founder}<br /><span className="muted">{galleryProfile.title}</span></h2></div>
        <div>{galleryProfile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="muted">{galleryProfile.education}</p></div>
      </section>
      <nav className="related-pages" aria-label="Related gallery information"><Link href="/mission-vision">Mission &amp; vision</Link><Link href="/company-overview">Company overview</Link><Link href="/contact">Contact</Link></nav>
    </div>
  );
}
