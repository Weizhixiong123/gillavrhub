import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/**
 * Guide header images: in-game screenshots in src/assets/screens/. Play Gilla's fan
 * content rules allow the game's screenshots in guides and wikis; they forbid ripped,
 * data-mined or AI-copied maps, monsters and models, so only real screenshots go here.
 * Name a file after a guide slug ("the-base-map.webp") or a category ("monsters.webp")
 * and it is picked up automatically; ALIASES lets one screenshot serve related pages.
 * With no match, the guide simply has no header image.
 * Record every screenshot in public/images/SOURCES.md.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/screens/*.{webp,avif,jpg,png}',
  { eager: true },
);
const byName: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [
    path.split('/').pop()!.replace(/\.\w+$/, ''),
    mod.default,
  ]),
);
/** Guide slug or category -> screenshot file name, for pages that share a shot. */
const ALIASES: Record<string, string> = {
  'beginner-guide': 'the-base-map',
  'be-the-monster': 'the-grinner',
  'dont-splash': 'the-mako',
  'game-modes': 'recycler-and-keycard',
  monsters: 'the-grinner',
};
const SCREEN_ALTS: Record<string, string> = {
  'the-base-map': 'A hall in the Base, lit red, with a hazard door at the far end',
  'recycler-and-keycard': 'A dark storeroom in the Base, with shelves and crates',
  'the-grinner': 'The Grinner up close, its mouth ripped open from ear to ear',
  'the-mako': 'The Mako tearing through the water',
  keycard: 'A gold GILLA keycard on a concrete floor',
  'card-reader': 'A card reader on the wall by a hazard door',
  'floor-hole': 'A jagged hole torn through a storeroom floor',
};
const resolveKey = (name: string) =>
  byName[name] ? name : ALIASES[name] && byName[ALIASES[name]] ? ALIASES[name] : undefined;
const lookup = (name: string) => {
  const key = resolveKey(name);
  return key ? byName[key] : undefined;
};

export function guideImage(
  slug: string,
  category?: string,
): ImageMetadata | undefined {
  return lookup(slug) ?? (category ? lookup(category) : undefined);
}

export function guideImageAlt(slug: string, category?: string): string {
  const key = resolveKey(slug) ?? (category ? resolveKey(category) : undefined);
  return (key && SCREEN_ALTS[key]) ?? '';
}

/** A screenshot by file name, for pages that place one directly (the home page). */
export function screen(name: string): ImageMetadata {
  const image = byName[name];
  if (!image) throw new Error(`Missing screenshot src/assets/screens/${name}`);
  return image;
}

/** Site-wide share card, drawn for this site (no game art). */
const brand = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/brand/og-default.png',
  { eager: true },
);
const DEFAULT_SHARE = Object.values(brand)[0]!.default;

/**
 * 1200×675 JPEG for og:image / twitter:image.
 * JPEG because Discord, X and Facebook previews do not reliably render AVIF.
 */
export async function shareImage(source: ImageMetadata = DEFAULT_SHARE) {
  const out = await getImage({ src: source, width: 1200, height: 675, format: 'jpeg', quality: 80 });
  return out.src;
}
