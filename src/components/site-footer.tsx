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
            <Link className="footer-inquiry" href="/contact">Prepare an inquiry <ArrowUpRight size={16} aria-hidden="true" /></Link>
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
      <section className="clepto-ribbon" aria-label="Concept credit">
        <div className="clepto-ribbon__inner">
          <div className="clepto-ribbon__grid">
            <div className="clepto-ribbon__copy">
              <span className="clepto-ribbon__badge"><span className="clepto-ribbon__pulse" aria-hidden="true" />Concept prototype</span>
              <h2>Concept prepared for Dawson Wells Gallery by Clepto</h2>
              <p>This website is a concept prototype. All names, artworks, dates, locations and contact details are illustrative demo content.</p>
            </div>
            <div className="clepto-ribbon__actions">
              <a className="clepto-ribbon__primary" href="https://www.clepto.in" target="_blank" rel="noopener noreferrer">www.clepto.in <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="clepto-ribbon__secondary" href="mailto:contact@clepto.in"><Mail size={14} aria-hidden="true" /> contact@clepto.in</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
