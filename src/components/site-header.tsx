"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchOverlay } from "@/components/search-overlay";

const categories = ["photography", "paintings", "drawings", "ceramics", "prints"];

type DropdownKey = "about" | "artworks";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdown, setDropdown] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileSearchTriggerRef = useRef<HTMLButtonElement>(null);
  const lastSearchTriggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    lastSearchTriggerRef.current?.focus();
  }, []);
  const closeDropdown = useCallback(() => setDropdown(null), []);
  const toggleDropdown = (key: DropdownKey) => setDropdown((current) => (current === key ? null : key));

  // Close every menu whenever the route changes (client-side navigation keeps the header mounted).
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setDropdown(null);
    setOpen(false);
  }

  useEffect(() => {
    if (!dropdown) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setDropdown(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navRef.current?.querySelector<HTMLButtonElement>(`[aria-controls="nav-${dropdown}"]`)?.focus();
        setDropdown(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(false);
        setDropdown(null);
        lastSearchTriggerRef.current = searchTriggerRef.current ?? mobileSearchTriggerRef.current;
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onShortcut);
    return () => document.removeEventListener("keydown", onShortcut);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="masthead">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="masthead__utility">
        <span>New York · London · Online collection preview</span>
        <Link href="/contact">Plan an enquiry</Link>
      </div>
      <Link className="wordmark" href="/" aria-label="Dawson Wells Gallery home">
        <Image className="wordmark__mark" src="/images/brand/dw-logo.png" alt="" width={66} height={48} priority />
        <span>Dawson Wells</span><small>Gallery</small>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation" ref={navRef}>
        <Link href="/">Home</Link>
        <div className="nav-item">
          <button className="nav-trigger" type="button" aria-expanded={dropdown === "about"} aria-controls="nav-about" onClick={() => toggleDropdown("about")}>
            About <ChevronDown size={16} aria-hidden="true" />
          </button>
          {dropdown === "about" && (
            <div className="nav-dropdown" id="nav-about">
              <Link href="/about" onClick={closeDropdown}>About the gallery</Link>
              <Link href="/mission-vision" onClick={closeDropdown}>Mission &amp; vision</Link>
              <Link href="/company-overview" onClick={closeDropdown}>Company overview</Link>
            </div>
          )}
        </div>
        <div className="nav-item">
          <button className="nav-trigger" type="button" aria-expanded={dropdown === "artworks"} aria-controls="nav-artworks" onClick={() => toggleDropdown("artworks")}>
            Artworks <ChevronDown size={16} aria-hidden="true" />
          </button>
          {dropdown === "artworks" && (
            <div className="nav-dropdown nav-dropdown--wide" id="nav-artworks">
              <Link href="/artworks" onClick={closeDropdown}>All artworks</Link>
              {categories.map((category) => (
                <Link key={category} href={`/artworks/${category}`} onClick={closeDropdown}>
                  {category[0].toUpperCase() + category.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/news">News &amp; updates</Link>
        <Link href="/contact">Contact</Link>
        <button ref={searchTriggerRef} className="search-pill" type="button" aria-label="Search collection and journal" onClick={(event) => { closeDropdown(); lastSearchTriggerRef.current = event.currentTarget; setSearchOpen(true); }}>
          <Search size={17} aria-hidden="true" /><span>Search</span><kbd>Ctrl K</kbd>
        </button>
      </nav>
      <button ref={mobileSearchTriggerRef} className="mobile-search-trigger icon-button" type="button" aria-label="Search site" onClick={(event) => { lastSearchTriggerRef.current = event.currentTarget; setSearchOpen(true); }}><Search aria-hidden="true" /></button>
      <button
        className="mobile-menu-trigger icon-button"
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open && (
        <div className="mobile-menu" id="mobile-menu" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation">
          <button className="mobile-menu__search" type="button" onClick={() => { setOpen(false); setSearchOpen(true); }}><Search aria-hidden="true" /> Search the collection</button>
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/artworks" onClick={() => setOpen(false)}>Artworks</Link>
            {categories.map((category) => (
              <Link className="mobile-menu__sub" key={category} href={`/artworks/${category}`} onClick={() => setOpen(false)}>{category}</Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link className="mobile-menu__sub" href="/mission-vision" onClick={() => setOpen(false)}>Mission &amp; vision</Link>
            <Link className="mobile-menu__sub" href="/company-overview" onClick={() => setOpen(false)}>Company overview</Link>
            <Link href="/news" onClick={() => setOpen(false)}>News &amp; updates</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </header>
  );
}
