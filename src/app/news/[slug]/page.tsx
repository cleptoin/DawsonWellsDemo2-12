import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { NewsCard } from "@/components/news-card";
import { formatDate } from "@/lib/format";
import { newsRepository } from "@/lib/repositories/news-repository";

export function generateStaticParams() { return newsRepository.getAll().map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = newsRepository.getBySlug(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt, alternates: { canonical: `/news/${slug}` } };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsRepository.getBySlug(slug);
  if (!article) notFound();
  const related = newsRepository.getAll().filter((item) => item.slug !== slug).slice(0, 2);
  return (
    <article className="article-page section-shell">
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} />
      <header><p>{article.category} · {formatDate(article.date)}</p><h1>{article.title}</h1><p>{article.excerpt}</p></header>
      <figure><Image src={article.coverImage.src} alt={article.coverImage.alt} width={article.coverImage.width} height={article.coverImage.height} priority /><figcaption>Editorial image from the Dawson Wells concept collection.</figcaption></figure>
      <div className="article-body">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <section className="related-news"><h2>Continue reading</h2><div className="news-grid">{related.map((item) => <NewsCard key={item.slug} article={item} />)}</div></section>
    </article>
  );
}
