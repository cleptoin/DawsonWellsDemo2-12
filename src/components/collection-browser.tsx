"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { ArtworkCard } from "@/components/artwork-card";
import { artworkCategories, type Artwork, type ArtworkCategory } from "@/types/content";

type SortOption = "curatorial" | "newest" | "oldest" | "title";

export function CollectionBrowser({ initialArtworks, fixedCategory }: { initialArtworks: Artwork[]; fixedCategory?: ArtworkCategory }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArtworkCategory | "All">(fixedCategory ?? "All");
  const [sort, setSort] = useState<SortOption>("curatorial");
  const [visible, setVisible] = useState(12);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    const result = initialArtworks.filter((artwork) => {
      const matchesCategory = category === "All" || artwork.category === category;
      const haystack = `${artwork.title} ${artwork.category} ${artwork.medium} ${artwork.year}`.toLowerCase();
      return matchesCategory && haystack.includes(deferredQuery);
    });
    return result.sort((a, b) => {
      if (sort === "newest") return b.year - a.year;
      if (sort === "oldest") return a.year - b.year;
      if (sort === "title") return a.title.localeCompare(b.title);
      return a.sortOrder - b.sortOrder;
    });
  }, [category, deferredQuery, initialArtworks, sort]);

  const clear = () => {
    setQuery("");
    if (!fixedCategory) setCategory("All");
    setSort("curatorial");
    setVisible(12);
  };

  return (
    <section className="collection-browser" aria-labelledby="collection-results">
      <div className="filter-bar">
        <label className="search-field">
          <span className="sr-only">Search collection</span>
          <Search size={20} aria-hidden="true" />
          <input value={query} onChange={(event) => { setQuery(event.target.value); setVisible(12); }} type="search" placeholder="Search title, medium, or year" />
        </label>
        {!fixedCategory && (
          <label>
            <span className="sr-only">Filter by category</span>
            <SlidersHorizontal size={18} aria-hidden="true" />
            <select value={category} onChange={(event) => { setCategory(event.target.value as ArtworkCategory | "All"); setVisible(12); }}>
              <option value="All">All categories</option>
              {artworkCategories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        )}
        <label>
          <span className="sr-only">Sort artworks</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
            <option value="curatorial">Curatorial order</option>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title A–Z</option>
          </select>
        </label>
        {(query || category !== (fixedCategory ?? "All") || sort !== "curatorial") && (
          <button className="clear-button" type="button" onClick={clear}><X size={16} aria-hidden="true" /> Clear</button>
        )}
      </div>
      <div className="results-summary" id="collection-results" aria-live="polite">
        <p>{filtered.length} {filtered.length === 1 ? "artwork" : "artworks"}</p>
        {query && <p>Results for “{query}”</p>}
      </div>
      {filtered.length > 0 ? (
        <>
          <div className="artwork-grid">
            {filtered.slice(0, visible).map((artwork) => <ArtworkCard key={artwork.id} artwork={artwork} />)}
          </div>
          {visible < filtered.length && (
            <div className="load-more"><button className="button button--outline" type="button" onClick={() => setVisible((count) => count + 12)}>Show more works</button></div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <h2>No artworks match these filters.</h2>
          <p>Try a broader title, another category, or reset the collection view.</p>
          <button className="text-link" type="button" onClick={clear}>Clear filters</button>
        </div>
      )}
    </section>
  );
}
