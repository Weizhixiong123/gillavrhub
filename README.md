# GILLA VR Map Wiki

Unofficial GILLA VR wiki for Meta Quest players: the Base map, monsters, game modes, controls and quick answers. Built with Astro and deployed as a static site to https://gillavrmap.wiki.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` and generate the Pagefind search index |
| `npm run preview` | Preview the production build |

## Content

- `src/content/guides/en/` holds guides. Each one sets a `category` (beginner, maps, monsters, modes or progression). The beginner route uses `series: first-night` with a `step`.
- `src/content/faq/en/` holds short answers. They are all shown on one page, `/faq/`, under their `group` (game, playing or community), and each has an anchor named after its file (`/faq/#discord`). `answer` feeds the FAQPage schema. When a guide covers the question in full, set `more` to that guide section and leave the body empty instead of repeating it.
- Each guide should answer one complete question. If a new topic can't stand on its own, add it as a section of an existing guide. A category only gets its own hub page once it has two guides.
- Link to the next step where the reader needs it, in the paragraph itself (for example, link the Grinner where the text says monsters hear talking), not in a list at the end.
- The modes and monsters finder (`src/components/ModeFinder.astro`) reads its rows from `finder` in `src/i18n/ui.ts`. Only put sourced facts there.
- When you merge or rename a page, add a 301 for the old URL to `public/_redirects` (Cloudflare Pages), pointing at the page and section that now covers it.
- `src/content/news/en/` holds updates, with `published` and `kind`.

Every page has `updated`, `verifiedFor` and `sources`. Only state facts that a source supports, or that we confirmed in-game.

## Images and the fan content rules

Play Gilla's [fan content rules](https://gillavr.com/fan-content) allow screenshots in guides and wikis. They forbid ripped, data-mined or AI-copied maps, monsters and models. Only add real in-game screenshots (from gillavr.com or captured in-game), in `src/assets/screens/`, named after a guide slug or category (or mapped in `ALIASES` in `src/lib/imagery.ts`), and record each one in `public/images/SOURCES.md`.

## Languages

The site is in English (at the root), German (`/de/`), Spanish (`/es/`) and French (`/fr/`). Every page exists in all four languages.

- Interface strings live in `src/i18n/ui.ts` (English) and `ui-de.ts`, `ui-es.ts`, `ui-fr.ts`. They share one type, so a missing string fails the type check.
- Content lives in `src/content/<section>/<lang>/`, with the same file names in every language.
- When you change a page, change it in all four languages. Facts, numbers, official quotes and source links must match the English page.
- Keep game names in English: GILLA, The Base, Be the Monster, Don't Splash, The Grinner, The Mannequin, The Mako.
- Translated headings keep the English anchor: `## Preis {#price}`. Links, redirects, the finder and FAQ `more` fields all point at those English anchors.
- Links inside translated content carry the language prefix (`/de/guides/monsters/#the-grinner`). FAQ `more` fields stay without a prefix; the FAQ page adds it.
- `description` is limited to 170 characters, which German and French reach quickly.
- To add another language: extend `LANGS` and `LANG_META` in `src/i18n/locales.ts`, add a `ui-<lang>.ts` and register it in `ui.ts`, add the locale to `astro.config.mjs` (`LANGS` and the sitemap locales), then add the content folders.
