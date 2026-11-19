// Language registry. English lives at the root; every other language gets a path prefix.
// To add a language: append it to LANGS, add LANG_META and UI strings, then add
// src/content/<section>/<lang>/ folders. Routing, hreflang and the sitemap follow.
export const LANGS = ['en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_META: Record<
  Lang,
  { label: string; hreflang: string; htmlLang: string; dateLocale: string }
> = {
  en: { label: 'English', hreflang: 'en', htmlLang: 'en', dateLocale: 'en-US' },
};

/** Language-neutral path ("/guides/x/") → localized path ("/ru/guides/x/"). */
export function localize(lang: Lang, path: string) {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Localized path → [lang, language-neutral path]. */
export function splitLang(path: string): [Lang, string] {
  const first = path.split('/')[1] as Lang;
  if (LANGS.includes(first) && first !== DEFAULT_LANG)
    return [first, path.slice(first.length + 1) || '/'];
  return [DEFAULT_LANG, path];
}

export function formatDate(d: Date, lang: Lang) {
  return d.toLocaleDateString(LANG_META[lang].dateLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Picks the plural form for `n` using CLDR rules. */
export function plural(
  lang: Lang,
  n: number,
  forms: Partial<Record<Intl.LDMLPluralRule, string>>,
) {
  const rule = new Intl.PluralRules(LANG_META[lang].dateLocale).select(n);
  return (forms[rule] ?? forms.other ?? '').replace('{n}', String(n));
}
