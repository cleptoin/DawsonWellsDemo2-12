import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHeading } from "@/components/page-heading";
import { galleryLocations } from "@/data/gallery";

export const metadata: Metadata = { title: "Contact", description: "Prepare an artwork, gallery visit, press, or general inquiry for Dawson Wells Gallery.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <div className="contact-page section-shell">
      <PageHeading title="Begin with a question." introduction="Ask about an artwork, the concept collection, press material, or a private viewing in New York or London." />
      <div className="contact-layout">
        <aside>
          <h2>Concept locations</h2>
          {galleryLocations.map((location) => <section className="contact-location" key={location.city}><h3>{location.city}</h3><p className="muted">{location.neighbourhood}</p><dl><div><dt>Address</dt><dd>{location.address}</dd></div><div><dt>Hours</dt><dd>{location.hours}</dd></div><div><dt>Email</dt><dd>{location.email}</dd></div><div><dt>Telephone</dt><dd>{location.phone}</dd></div></dl></section>)}
          <p className="muted">These addresses and contact details come from the supplied mockup and are illustrative.</p>
        </aside>
        <div><h2>Prepare an inquiry</h2><p>The local form validates accessibly but intentionally does not claim delivery.</p><InquiryForm /></div>
      </div>
    </div>
  );
}
