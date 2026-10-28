import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { demoDisclaimer, galleryLocations } from "@/data/gallery";

const collectionLinks = ["Photography", "Paintings", "Drawings", "Ceramics", "Prints"];

export function SiteFooter() {
  return (
    <footer className="site-footer-wrap">
      <div className="site-footer">
        <div className="site-footer__lead">
          <p className="site-footer__statement">Art rewards time.</p>
          <div>
            <p>This digital collection is an invitation to look closely, follow material connections, and begin a specific conversation.</p>
            <Link className="footer-enquiry" href="/contact">Prepare an enquiry <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <Image src="/images/brand/dw-logo.png" alt="" width={66} height={48} />
            <p className="footer-wordmark">Dawson Wells</p>
            <p className="muted">Est. 2018 · New York &amp; London</p>
          </div>
          {galleryLocations.map((location) => (
            <div key={location.city} className="site-footer__location">
              <p className="site-footer__label">{location.city}</p>
              <p>{location.neighbourhood}</p>
              <p className="muted">{location.address}</p>
              <p className="muted">{location.hours}</p>
            </div>
          ))}
          <nav aria-label="Collection">
            <p className="site-footer__label">The collection</p>
            {collectionLinks.map((label) => <Link key={label} href={`/artworks/${label.toLowerCase()}`}>{label}</Link>)}
            <Link href="/artworks">All artworks</Link>
          </nav>
          <nav aria-label="Footer navigation">
            <p className="site-footer__label">Gallery</p>
            <Link href="/about">About</Link>
            <Link href="/mission-vision">Mission &amp; vision</Link>
            <Link href="/company-overview">Company overview</Link>
            <Link href="/news">Journal</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} Dawson Wells Gallery</span>
          <span>{demoDisclaimer}</span>
        </div>
      </div>
      <section className="clepto-ribbon" aria-label="Built by Clepto">
        <div className="clepto-ribbon__inner">
          <div className="clepto-ribbon__strip">
            <span className="clepto-ribbon__badge"><span className="clepto-ribbon__pulse" aria-hidden="true" />Demonstration showcase · Designed &amp; built by Clepto</span>
            <span className="clepto-ribbon__client">Prepared for Dawson Wells Gallery</span>
          </div>
          <div className="clepto-ribbon__grid">
            <div className="clepto-ribbon__copy">
              <h2>Want a digital experience like this?</h2>
              <p>This gallery website is a demonstration prototype designed and developed by <strong>Clepto</strong>. We build bespoke, museum-grade websites, viewing rooms, and portfolios for artists, galleries, and institutions.</p>
              <ul className="clepto-ribbon__pills">
                <li>Next.js App Router</li>
                <li>Editorial typography</li>
                <li>Mobile-first &amp; accessible</li>
              </ul>
            </div>
            <div className="clepto-ribbon__card">
              <p className="clepto-ribbon__label">Talk to the Clepto team</p>
              <div className="clepto-ribbon__actions">
                <a className="clepto-ribbon__primary" href="https://www.clepto.in" target="_blank" rel="noopener noreferrer">Visit www.clepto.in <ArrowUpRight size={15} aria-hidden="true" /></a>
                <a className="clepto-ribbon__secondary" href="mailto:contact@clepto.in?subject=Inquiry%20regarding%20Dawson%20Wells%20Gallery%20showcase"><Mail size={14} aria-hidden="true" /> contact@clepto.in</a>
              </div>
              <p className="clepto-ribbon__note">Response within one business day · Worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
