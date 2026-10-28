import { newsArticles } from "@/data/news";

export const newsRepository = {
  getAll: () => [...newsArticles].sort((a, b) => b.date.localeCompare(a.date)),
  getBySlug: (slug: string) => newsArticles.find((article) => article.slug === slug),
};
