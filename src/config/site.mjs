// Single source of truth for site-wide settings.

// Set SITE_URL at build time if production uses a different domain.
export const SITE_URL = process.env.SITE_URL || 'https://gillavrhub.wiki';

/**
 * Search-console ownership tokens for the HTML meta-tag method. Leave empty when the
 * domain is verified via DNS TXT instead; the tags are only rendered when set.
 */
export const SITE_VERIFICATION = {
  google: process.env.GOOGLE_SITE_VERIFICATION || '',
  bing: process.env.BING_SITE_VERIFICATION || '',
};

/**
 * Ad scripts. Empty string = no ad script and no ad disclosure on the About page.
 * Adsterra zones are created per site, so this site needs its own keys. The keys are
 * public (they appear in every page's HTML); an environment variable overrides each.
 */
export const ADS = {
  socialBar: process.env.ADSTERRA_SOCIAL_BAR_SRC || '',
  // Native Banner key (32-char hex) or full script src URL; container id is "container-<key>".
  nativeBanner: process.env.ADSTERRA_NATIVE_KEY ?? '9c98cf02eab307b4838a3e2b77550beb',
  nativeBannerSrc: process.env.ADSTERRA_NATIVE_SRC ?? '',
  // Banner keys, shown above the footer. Only one loads per visit: the 728x90 on
  // screens 768px and wider, the 320x50 below that.
  bannerDesktop: process.env.ADSTERRA_BANNER_728_KEY ?? 'f1f840a860bc1e1886388ce210f5ffbe',
  bannerMobile: process.env.ADSTERRA_BANNER_320_KEY ?? '81269ea987f65d435c75a960028c2dd6',
  // Google AdSense publisher id; loads adsbygoogle.js in <head> on every page.
  // Add the domain in AdSense and keep public/ads.txt in sync before turning this on.
  adsenseClient: process.env.ADSENSE_CLIENT ?? '',
};

export const SITE_NAME = 'GILLA VR Map Wiki';
export const SITE_SHORT_NAME = 'GILLA Map';

export const SITE_TAGLINE =
  'Unofficial GILLA VR wiki: the Base map, monsters, game modes, controls and quick answers.';

/** Official sources every page can point at. */
export const OFFICIAL_LINKS = {
  site: 'https://gillavr.com/',
  store: 'https://www.meta.com/experiences/gilla/1440338659156877/',
  discord: 'https://discord.gg/gilla',
  fanContent: 'https://gillavr.com/fan-content',
  playerModel: 'https://gillavr.com/player-model',
};

/** Main navigation; labels come from the UI dictionary (src/i18n/ui.ts). */
export const NAV = [
  { key: 'start', href: '/guides/beginner-guide/' },
  { key: 'map', href: '/guides/the-base-map/' },
  { key: 'monsters', href: '/guides/monsters/' },
  { key: 'guides', href: '/guides/' },
  { key: 'news', href: '/news/' },
  { key: 'faq', href: '/faq/' },
];

/** Guide categories, in display order. Labels and blurbs live in src/i18n/ui.ts. */
export const GUIDE_CATEGORIES = ['beginner', 'maps', 'monsters', 'modes', 'progression'];
