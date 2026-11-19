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

/** Groups FAQ entries for the hub page: troubleshooting gets its own list. */
export function faqGroup(e: CollectionEntry<'faq'>) {
  if (e.data.tags.includes('troubleshooting'))
    return 'troubleshooting' as const;
  return 'general' as const;
}
