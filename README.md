# Dawson Wells Gallery

A premium, art-led Next.js website for Dawson Wells Gallery. The current collection, editorial entries, and images are explicitly labelled demonstration content because verified client inventory and public gallery details have not yet been supplied.

## Local development

```bash
pnpm install
pnpm dev
```

The development server is fixed to `http://localhost:3500`.

Useful checks:

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Content replacement

- Replace the generated collection in `src/data/artworks.ts` or adapt the repository in `src/lib/repositories/artwork-repository.ts`.
- Replace demo assets in `public/images/artworks/` and update `src/data/image-manifest.ts`.
- Add verified address, telephone, email, and hours in `src/lib/site.ts`; then surface them in the contact page and footer.
- Replace demonstration news in `src/data/news.ts`.

The UI only reads through repository objects, so a future Sanity integration can implement the same methods without rewriting presentation components.

## Enquiry service boundary

`POST /api/enquiry` validates submissions but deliberately does not send or store them. Connect a transactional email or form provider inside `src/app/api/enquiry/route.ts`, add server-only environment variables, rate limiting, and production spam protection. Never expose provider secrets through `NEXT_PUBLIC_*` variables.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the canonical Vercel domain before deployment so sitemap and metadata URLs are correct. No database or CMS is required for this phase.

## Image provenance

Six original raster assets were created with OpenAI’s built-in image-generation tool for this project. They are demonstration artwork and architectural imagery, not authenticated Dawson Wells Gallery holdings. Final prompts specified original, non-derivative compositions with no logos, signatures, or recognizable existing artworks.
