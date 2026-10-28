import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { NewsArticle } from "@/types/content";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="news-card">
      <Link href={`/news/${article.slug}`} className="news-card__image">
        <Image src={article.coverImage.src} alt={article.coverImage.alt} width={article.coverImage.width} height={article.coverImage.height} sizes="(max-width: 768px) 100vw, 40vw" />
      </Link>
      <div>
        <p className="news-card__date">{article.category} · {formatDate(article.date)}</p>
        <h2><Link href={`/news/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.excerpt}</p>
      </div>
    </article>
  );
}
