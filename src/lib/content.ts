import {
  getCollection,
  type CollectionEntry,
  type DataEntryMap,
} from 'astro:content';
import type { ImageMetadata } from 'astro';
import { localize, type Lang } from '../i18n/locales';
import { guideImage } from './imagery';

export type Section = keyof DataEntryMap;

/** Content ids are "<lang>/<slug>" because each language has its own folder. */
export const langOf = (id: string) => id.split('/')[0] as Lang;
export const slugOf = (id: string) => id.split('/').slice(1).join('/');

/** Published entries for one language. Drafts never reach public routes. */
export async function getPublished<C extends Section>(
  collection: C,
  lang: Lang,
): Promise<CollectionEntry<C>[]> {
  const all = await getCollection(collection);
  return all.filter(
    (e) => langOf(e.id) === lang && !(e.data as { draft?: boolean }).draft,
  );
}

export const entryUrl = (section: Section, id: string) =>
  localize(langOf(id), `/${section}/${slugOf(id)}/`);

export type LinkCard = {
  title: string;
  href: string;
  description: string;
  image?: ImageMetadata;
};

/** Pages sharing the most tags (then same category) — feeds the "Related" block. */
export function related<
  T extends {
    id: string;
    data: {
      title: string;
      description: string;
      tags: string[];
      category?: string;
    };
  },
>(current: T, pool: T[], section: Section, limit = 6): LinkCard[] {
  return pool
    .filter((e) => e.id !== current.id)
    .map((e) => {
      const shared = e.data.tags.filter((tag) =>
        current.data.tags.includes(tag),
      ).length;
      const sameCat =
        current.data.category && e.data.category === current.data.category
          ? 0.5
          : 0;
      return { e, score: shared + sameCat };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.e.id.localeCompare(b.e.id))
    .slice(0, limit)
    .map(({ e }) => ({
      title: e.data.title,
      href: entryUrl(section, e.id),
      description: e.data.description,
      image:
        section === 'guides'
          ? guideImage(slugOf(e.id), e.data.category)
          : undefined,
    }));
}

/** FAQ questions all live on one page; each has an anchor named after its slug. */
export const faqUrl = (id: string) =>
  localize(langOf(id), `/faq/#${slugOf(id)}`);

/** FAQ groups, in the order the FAQ page lists them. */
export const FAQ_GROUPS = ['game', 'playing', 'community'] as const;

/**
 * Categories get their own hub page only when they hold two or more guides; a hub
 * with a single card would just be a thin page in front of that guide.
 */
export const MIN_CATEGORY_GUIDES = 2;

/** Where a category link should go: its hub page, or straight to its only guide. */
export function categoryHref(
  lang: Lang,
  key: string,
  guides: CollectionEntry<'guides'>[],
): string {
  const inCategory = guides.filter((g) => g.data.category === key);
  return inCategory.length >= MIN_CATEGORY_GUIDES
    ? localize(lang, `/guides/${key}/`)
    : entryUrl('guides', inCategory[0].id);
}
