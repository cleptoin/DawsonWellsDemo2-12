import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { galleryProfile } from "@/data/gallery";

export const metadata: Metadata = { title: "Company Overview", description: "An overview of the Dawson Wells Gallery concept, collection, and curatorial approach.", alternates: { canonical: "/company-overview" } };

export default function CompanyOverviewPage() {
  return (
    <div className="editorial-page section-shell">
      <PageHeading title="The gallery, in outline." introduction="A material-led collection and editorial programme connecting five studio practices through one shared visual archive." />
      <div className="overview-grid">
        {galleryProfile.pillars.map((pillar) => <section key={pillar.title}><h2>{pillar.title}</h2><p>{pillar.description}</p></section>)}
      </div>
      <section className="facts-pending"><h2>Collection framework</h2><ul><li>100 concept catalogue records</li><li>Photography, paintings, drawings, ceramics, and prints</li><li>Editorial journal and exhibition concepts</li><li>Artwork-specific enquiry paths with no live delivery service</li></ul></section>
    </div>
  );
}
