import Link from "next/link";

export default function NotFound() {
  return <section className="not-found section-shell"><p>404</p><h1>This work is not in the archive.</h1><p>The address may have changed, or the record may not exist.</p><div><Link className="button" href="/artworks">Explore artworks</Link><Link className="text-link" href="/">Return home</Link></div></section>;
}
