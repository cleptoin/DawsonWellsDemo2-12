"use client";

import { ArrowUpRight, BookOpen, ImageIcon, Search, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { artworks } from "@/data/artworks";
import { newsArticles } from "@/data/news";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  href: string;
  title: string;
  meta: string;
  group: "Pages" | "Artworks" | "Journal";
}

const sitePages: SearchResult[] = [
  { id: "page-artworks", href: "/artworks", title: "All artworks", meta: "Browse the 100-work concept catalogue", group: "Pages" },
  { id: "page-news", href: "/news", title: "News and journal", meta: "Collection notes and gallery updates", group: "Pages" },
  { id: "page-about", href: "/about", title: "About the gallery", meta: "Programme and working approach", group: "Pages" },
  { id: "page-contact", href: "/contact", title: "Contact", meta: "Prepare an enquiry or request information", group: "Pages" },
];

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const results = useMemo(() => {
    const pageResults = sitePages.filter((page) => `${page.title} ${page.meta}`.toLowerCase().includes(deferredQuery));
    const artworkResults = artworks
      .filter((artwork) => {
        if (!deferredQuery) return artwork.featured;
        return `${artwork.title} ${artwork.category} ${artwork.medium} ${artwork.year}`.toLowerCase().includes(deferredQuery);
      })
      .slice(0, deferredQuery ? 6 : 4)
      .map<SearchResult>((artwork) => ({
        id: `artwork-${artwork.id}`,
        href: `/artworks/${artwork.slug}`,
        title: artwork.title,
        meta: `${artwork.category} · ${artwork.medium}, ${artwork.year}`,
        group: "Artworks",
      }));
    const journalResults = newsArticles
      .filter((article) => !deferredQuery || `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(deferredQuery))
      .slice(0, 3)
      .map<SearchResult>((article) => ({
        id: `journal-${article.slug}`,
        href: `/news/${article.slug}`,
        title: article.title,
        meta: `${article.category} · gallery journal`,
        group: "Journal",
      }));

    return [...pageResults, ...artworkResults, ...journalResults];
  }, [deferredQuery]);

  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.classList.add("has-modal");
    window.requestAnimationFrame(() => inputRef.current?.focus());

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("a, button, input");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("has-modal");
      returnFocusRef.current?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  const chooseResult = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const result = results[activeIndex];
      if (result) {
        document.getElementById(result.id)?.click();
      }
    }
  };

  return (
    <div className="search-overlay" role="presentation">
      <button className="search-overlay__backdrop" type="button" aria-label="Close search" onClick={onClose} />
      <div className="search-overlay__panel" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="site-search-title">
        <div className="search-overlay__topline">
          <div>
            <p id="site-search-title">Search Dawson Wells Gallery</p>
            <span>Artworks, journal, and gallery information</span>
          </div>
          <button className="icon-button" type="button" aria-label="Close search" onClick={onClose}><X aria-hidden="true" /></button>
        </div>
        <label className="search-overlay__field">
          <Search aria-hidden="true" />
          <span className="sr-only">Search the site</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }}
            onKeyDown={chooseResult}
            placeholder="Search title, medium, year, or page"
            aria-label="Search the site"
            aria-controls="site-search-results"
            aria-activedescendant={results[activeIndex]?.id}
          />
          <kbd>Esc</kbd>
        </label>
        <div className="search-overlay__summary" aria-live="polite">
          {deferredQuery ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”` : "Suggested destinations and featured records"}
        </div>
        <div className="search-overlay__results" id="site-search-results">
          {results.length ? (["Pages", "Artworks", "Journal"] as const).map((group) => {
            const groupResults = results.filter((result) => result.group === group);
            if (!groupResults.length) return null;
            return (
              <section key={group} aria-labelledby={`search-group-${group.toLowerCase()}`}>
                <h2 id={`search-group-${group.toLowerCase()}`}>{group}</h2>
                <div>
                  {groupResults.map((result) => {
                    const index = results.indexOf(result);
                    return (
                      <Link
                        id={result.id}
                        key={result.id}
                        href={result.href}
                        className={index === activeIndex ? "is-active" : undefined}
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        onClick={onClose}
                      >
                        <span className="search-overlay__result-icon" aria-hidden="true">
                          {group === "Artworks" ? <ImageIcon /> : group === "Journal" ? <BookOpen /> : <ArrowUpRight />}
                        </span>
                        <span><SearchMatch text={result.title} query={query.trim()} /><small>{result.meta}</small></span>
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          }) : (
            <div className="search-overlay__empty">
              <h2>No matching records.</h2>
              <p>Try an artwork title, material, year, or a broader gallery topic.</p>
              <Link className="text-link" href="/artworks" onClick={onClose}>Browse all artworks <ArrowUpRight aria-hidden="true" /></Link>
            </div>
          )}
        </div>
        <div className="search-overlay__help" aria-hidden="true"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div>
      </div>
    </div>
  );
}

function SearchMatch({ text, query }: { text: string; query: string }) {
  if (!query) return text;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index < 0) return text;
  return <>{text.slice(0, index)}<mark>{text.slice(index, index + query.length)}</mark>{text.slice(index + query.length)}</>;
}
