import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/**
 * Guide header images. Only our own in-game screenshots go in src/assets/screens/
 * (Play Gilla's fan content rules forbid ripped or AI-copied map art). Name a file
 * after a guide slug ("the-base-map.webp") or a category ("monsters.webp") and it is
 * picked up automatically; with no file, the guide simply has no header image.
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

export function guideImage(
  slug: string,
  category?: string,
): ImageMetadata | undefined {
  return byName[slug] ?? (category ? byName[category] : undefined);
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
