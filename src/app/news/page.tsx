import type { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { PageHeading } from "@/components/page-heading";
import { newsRepository } from "@/lib/repositories/news-repository";

export const metadata: Metadata = { title: "News & Updates", description: "Concept exhibitions, publications, collection notes, and editorial stories from Dawson Wells Gallery.", alternates: { canonical: "/news" } };

export default function NewsPage() {
  return (
    <div className="news-page section-shell">
      <PageHeading title="News & updates" introduction="Exhibitions, collection notes, publications, and longer-form stories from the gallery." />
      <div className="news-list">{newsRepository.getAll().map((article) => <NewsCard key={article.slug} article={article} />)}</div>
    </div>
  );
}
