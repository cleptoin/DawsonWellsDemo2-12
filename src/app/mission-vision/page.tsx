import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { galleryProfile } from "@/data/gallery";

export const metadata: Metadata = { title: "Mission & Vision", description: "The mission, vision, and curatorial values of the Dawson Wells Gallery concept.", alternates: { canonical: "/mission-vision" } };

export default function MissionVisionPage() {
  return (
    <div className="editorial-page section-shell">
      <PageHeading title="Attention is the beginning." introduction="The gallery concept is built around material presence, architectural dialogue, and encounters that reward close looking." />
      <section className="manifesto-pair"><article><h2>Mission</h2><p>{galleryProfile.mission}</p></article><article><h2>Vision</h2><p>{galleryProfile.vision}</p></article></section>
      <section className="values-list"><h2>Curatorial values</h2><dl>{galleryProfile.pillars.map((pillar) => <div key={pillar.title}><dt>{pillar.title}</dt><dd>{pillar.description}</dd></div>)}</dl></section>
      <blockquote className="editorial-quote">“Make room for the work. Offer context without noise. Let attention become the invitation.” <small>Dawson Wells Gallery concept principle</small></blockquote>
    </div>
  );
}
