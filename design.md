# Design — Dawson Wells Gallery

A locked design system for this app. Every page redesign reads this file before emitting code. Extend this system deliberately; do not regenerate a separate theme per page.

## Genre

Editorial — museum-grade, restrained, materially warm, and direct. The site uses asymmetry, hairline rules, generous negative space, and precise metadata rather than decorative luxury cues.

## Macrostructure family

- Marketing pages: **Ecosystem Index** with a decisive photographic lead and distinct discovery rails.
- Collection pages: **Portfolio Grid** with functional filters, stable result summaries, and artwork-first cards.
- Artwork and contact detail pages: **Split Studio** with image/proof on one side and factual context or action on the other.
- Editorial pages: **Long Document** with readable measure, continuous prose, and inline imagery.

## Theme

- `--color-paper` oklch(97% 0.009 82)
- `--color-paper-2` oklch(94% 0.012 82)
- `--color-paper-3` oklch(90% 0.014 82)
- `--color-ink` oklch(19% 0.012 65)
- `--color-ink-2` oklch(34% 0.012 65)
- `--color-rule` oklch(80% 0.013 82)
- `--color-accent` oklch(52% 0.145 42)
- `--color-focus` oklch(46% 0.2 42)

The accent is a mineral terracotta used for focus, active navigation, and small typographic signals. It must occupy less than five percent of a viewport.

## Typography

- Display: Cormorant Garamond, weight 400, normal style.
- Body: Manrope, weight 400; weight 600 for interface emphasis.
- Wordmark: Cormorant Garamond, weight 600.
- Display tracking: -0.025em.
- Type scale anchor: `--text-display: clamp(2.9rem, 7vw, 5.25rem)`.
- Display headings are always roman. Italic is limited to emphasis inside running body copy.

## Spacing

Use the 4-point named scale in `tokens.css`. Page CSS consumes named tokens and avoids improvised colour or font values.

## Motion

- Easings: `--ease-out`, `--ease-in`, and `--ease-in-out` from `tokens.css`.
- Reveal pattern: none. Content is present immediately.
- Functional overlays use opacity and transform only.
- Reduced-motion fallback: opacity-only and no longer than 150 ms.

## Microinteractions stance

- Silent success when the changed result is already visible.
- Search opens immediately by button or Ctrl/Command K; Escape closes it.
- Focus rings appear instantly and remain visible.
- Hover is supplementary; every action works by keyboard and touch.

## CTA voice

- Primary CTA: compact charcoal rectangle, sentence-case, concrete verb such as “View work” or “Enquire”.
- Secondary CTA: typographic link with a hairline underline and directional arrow.
- Never use sales-heavy or invented scarcity language.

## Per-page allowances

- The homepage may use the existing rights-cleared demonstration artwork as a photographic lead.
- Collection and detail pages use supplied artwork assets only.
- Editorial pages are typography-led and may use inline supplied imagery.
- Search may index artwork and editorial demonstration records; it must identify them honestly.
- Artist, exhibition, location, price, and availability claims require verified client data before publication.

## What pages MUST share

- The Dawson Wells wordmark.
- Warm ivory paper, charcoal ink, and mineral accent.
- Cormorant Garamond and Manrope.
- Compact rectangular controls and typographic secondary links.
- Hairline dividers, left-biased headings, and honest metadata.
- N13 search-led compact navigation and Ft1 mast-headed footer.

## What pages MAY differ on

- Grid density and image ratio according to content type.
- Split direction on detail and contact pages.
- Whether the page opens with an image, an index, or prose, within its declared macrostructure family.

## Exports

### tokens.css

```css
:root {
  --color-paper: oklch(97% 0.009 82);
  --color-paper-2: oklch(94% 0.012 82);
  --color-paper-3: oklch(90% 0.014 82);
  --color-surface: oklch(99% 0.006 82);
  --color-ink: oklch(19% 0.012 65);
  --color-ink-2: oklch(34% 0.012 65);
  --color-muted: oklch(46% 0.012 72);
  --color-rule: oklch(80% 0.013 82);
  --color-accent: oklch(52% 0.145 42);
  --color-accent-ink: oklch(98% 0.009 82);
  --color-focus: oklch(46% 0.2 42);

  --font-display: "Cormorant Garamond", "Times New Roman", serif;
  --font-body: "Manrope", "Trebuchet MS", sans-serif;
  --font-wordmark: "Cormorant Garamond", "Times New Roman", serif;

  --space-3xs: 0.125rem;
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-4xl: 9rem;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-micro: 120ms;
  --dur-short: 220ms;
  --dur-long: 420ms;
  --radius-card: 0.15rem;
  --radius-pill: 999px;
  --radius-input: 0.15rem;
}
```

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper: oklch(97% 0.009 82);
  --color-paper-2: oklch(94% 0.012 82);
  --color-paper-3: oklch(90% 0.014 82);
  --color-ink: oklch(19% 0.012 65);
  --color-ink-2: oklch(34% 0.012 65);
  --color-rule: oklch(80% 0.013 82);
  --color-accent: oklch(52% 0.145 42);
  --color-focus: oklch(46% 0.2 42);
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2.5rem;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### DTCG `tokens.json`

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(97% 0.009 82)", "$type": "color" },
    "paper-2": { "$value": "oklch(94% 0.012 82)", "$type": "color" },
    "ink": { "$value": "oklch(19% 0.012 65)", "$type": "color" },
    "ink-2": { "$value": "oklch(34% 0.012 65)", "$type": "color" },
    "rule": { "$value": "oklch(80% 0.013 82)", "$type": "color" },
    "accent": { "$value": "oklch(52% 0.145 42)", "$type": "color" },
    "focus": { "$value": "oklch(46% 0.2 42)", "$type": "color" }
  },
  "font": {
    "display": { "$value": "Cormorant Garamond, Times New Roman, serif", "$type": "fontFamily" },
    "body": { "$value": "Manrope, Trebuchet MS, sans-serif", "$type": "fontFamily" }
  },
  "space": {
    "sm": { "$value": "0.75rem", "$type": "dimension" },
    "md": { "$value": "1rem", "$type": "dimension" },
    "lg": { "$value": "1.5rem", "$type": "dimension" },
    "xl": { "$value": "2.5rem", "$type": "dimension" }
  },
  "duration": {
    "micro": { "$value": "120ms", "$type": "duration" },
    "short": { "$value": "220ms", "$type": "duration" },
    "long": { "$value": "420ms", "$type": "duration" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background: 97% 0.009 82;
  --foreground: 19% 0.012 65;
  --card: 94% 0.012 82;
  --card-foreground: 19% 0.012 65;
  --popover: 99% 0.006 82;
  --popover-foreground: 19% 0.012 65;
  --primary: 52% 0.145 42;
  --primary-foreground: 98% 0.009 82;
  --secondary: 90% 0.014 82;
  --secondary-foreground: 34% 0.012 65;
  --muted: 80% 0.013 82;
  --muted-foreground: 46% 0.012 72;
  --accent: 52% 0.145 42;
  --accent-foreground: 98% 0.009 82;
  --border: 80% 0.013 82;
  --input: 80% 0.013 82;
  --ring: 46% 0.2 42;
  --radius: 0.15rem;
}
```
