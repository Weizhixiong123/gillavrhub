// @ts-check
import { copyFileSync, existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site.mjs';

// Keep in sync with src/i18n/locales.ts (LANGS) and the sitemap locales below.
const LANGS = ['en'];

/**
 * Sitemap <lastmod> for content pages, taken from each entry's `updated` frontmatter.
 * Keys are URL paths ("/ru/guides/first-heist/"). Hub and tool pages get no lastmod,
 * because a build date would claim changes that did not happen.
 */
function contentLastmod() {
  const dates = new Map();
  for (const section of ['guides', 'faq', 'news']) {
    const root = join('src/content', section);
    let langs = [];
    try {
      langs = readdirSync(root, { withFileTypes: true }).filter((d) => d.isDirectory());
    } catch {
      continue;
    }
    for (const { name: lang } of langs) {
      for (const file of readdirSync(join(root, lang))) {
        if (!file.endsWith('.md')) continue;
        const text = readFileSync(join(root, lang, file), 'utf8');
        const updated = text.match(/^updated:\s*['"]?([\d-]+)/m)?.[1];
        if (!updated) continue;
        const prefix = lang === 'en' ? '' : `/${lang}`;
        dates.set(`${prefix}/${section}/${file.slice(0, -3)}/`, new Date(updated).toISOString());
      }
    }
  }
  return dates;
}
const lastmod = contentLastmod();

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Fetch a page when its link is hovered or focused, so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    {
      // Cloudflare Pages serves the nearest 404.html up the request path, so each
      // non-default language gets its own 404 page once LANGS has more than English.
      name: 'localized-404',
      hooks: {
        'astro:build:done': ({ dir }) => {
          const out = fileURLToPath(dir);
          for (const lang of LANGS.filter((l) => l !== 'en')) {
            const page = join(out, lang, '404', 'index.html');
            if (existsSync(page)) copyFileSync(page, join(out, lang, '404.html'));
          }
        },
      },
    },
    sitemap({
      // Noindex pages (search, 404) stay out of the sitemap in every language.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?\//, '/');
        return !['/search/', '/404/'].includes(path);
      },
      // Adds xhtml:link alternates between language versions of the same page.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en' },
      },
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
});
