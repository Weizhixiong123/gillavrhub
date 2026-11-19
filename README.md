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
- `src/content/faq/en/` holds short answers. `answer` feeds the FAQPage schema.
- `src/content/news/en/` holds updates, with `published` and `kind`.

Every page has `updated`, `verifiedFor` and `sources`. Only state facts that a source supports, or that we confirmed in-game.

## Images and the fan content rules

Play Gilla's [fan content rules](https://gillavr.com/fan-content) allow screenshots in guides and wikis. They forbid ripped, data-mined or AI-copied maps, monsters and models. Only add real in-game screenshots (from gillavr.com or captured in-game), in `src/assets/screens/`, named after a guide slug or category (or mapped in `ALIASES` in `src/lib/imagery.ts`), and record each one in `public/images/SOURCES.md`.

## Languages

English only for now. To add a language, extend `LANGS` in `src/i18n/locales.ts`, the UI strings in `src/i18n/ui.ts` and the locales in `astro.config.mjs`, then add `src/content/<section>/<lang>/` folders.
