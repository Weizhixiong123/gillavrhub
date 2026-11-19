import type { Lang } from './locales';

type Forms = Partial<Record<Intl.LDMLPluralRule, string>>;

const en = {
  nav: {
    start: 'Start here',
    map: 'The Base map',
    guides: 'Guides',
    news: 'News',
    faq: 'FAQ',
    search: 'Search',
    searchLabel: 'Search the wiki',
    language: 'Language',
  },
  skip: 'Skip to content',
  adLabel: 'Advertisement',
  sections: {
    home: 'Home',
    guides: 'Guides',
    faq: 'FAQ',
    news: 'News',
  },
  categories: {
    beginner: { label: 'Beginner', blurb: 'Install, controls, ape movement and your first round.' },
    maps: { label: 'Maps', blurb: 'The Base, the levels under it and the flooded hall in Don’t Splash.' },
    monsters: { label: 'Monsters', blurb: 'The Grinner, the Mannequin and the Mako: where they hunt and how to avoid them.' },
    modes: { label: 'Game modes', blurb: 'Roam, Be the Monster and Don’t Splash, explained.' },
    progression: { label: 'Quests & cosmetics', blurb: 'Daily quests, levels, the shop and your ape’s look.' },
  },
  footer: {
    about: 'About and sources',
    disclaimer:
      'is an unofficial fan site. It is not made, sponsored or approved by Play Gilla (Content Media LLC). GILLA is their trademark. Meta Quest is a trademark of Meta Platforms, Inc.',
  },
  home: {
    metaTitle: 'GILLA VR Map Wiki: The Base, Monsters & Modes',
    metaDescription:
      'Unofficial GILLA VR wiki: a guide to the Base map and the keycard door, the three monsters, every game mode, controls and quick answers for Meta Quest.',
    title: 'GILLA VR Map Wiki',
    lead: 'Find your way through the Base, learn what hunts you and get ready for your first night in GILLA VR.',
    mapRoute: 'The Base access route',
    mapSteps: ['Find the keycard', 'Take it to the reader', 'Pass the locked door', 'Climb down'],
    baseArtAlt: 'A yellow keycard beside a red-lit reader and a steel door',
    baseArtCredit: 'The Base · Fan illustration',
    optional: 'Optional',
    openMap: 'Read the map guide',
    monsters: 'What hunts you',
    allMonsters: 'All monster guides',
    monsterNotes: {
      grinner: { name: 'The Grinner', location: 'Inside the Base', note: 'Drawn to the sound of talking.' },
      mannequin: { name: 'The Mannequin', location: 'Under the Base', note: 'A faceless, three-metre figure on the lower levels.' },
      mako: { name: 'The Mako', location: 'Don’t Splash', note: 'Touch the water and it comes for you.' },
    },
    placeholder: 'Search the wiki',
    popular: 'Popular:',
    popularTerms: ['keycard', 'Grinner', 'recycler', 'free'],
    topics: 'Guides by topic',
    allGuides: { one: 'All {n} guide', other: 'All {n} guides' } as Forms,
    guideCount: { one: '{n} guide', other: '{n} guides' } as Forms,
    route: 'Your first night, step by step',
    answers: 'Quick answers',
    allAnswers: 'All answers',
    facts: 'GILLA at a glance',
    credit: 'Screenshots © Play Gilla, used to illustrate this unofficial guide.',
  },
  sidebar: { route: 'Survival route' },
  hubs: {
    guides: {
      title: 'GILLA VR guides',
      description:
        'Source-checked GILLA VR guides: the Base map, the keycard door, monsters, game modes, controls, quests and cosmetics.',
    },
    faq: {
      title: 'GILLA VR questions, answered',
      description:
        'Short answers about GILLA VR: price, release date, headsets, PC VR and Steam, age rating, Discord and troubleshooting.',
    },
    news: {
      title: 'GILLA VR news and updates',
      description: 'GILLA VR updates and announcements. Only source-checked news appears here.',
    },
    categoryTitle: 'GILLA VR {label} guides',
    allTopics: 'All topics',
    emptyNews: 'No updates published yet',
    emptyText:
      'We’re checking primary sources before adding entries. In the meantime, start with the survival route.',
    browse: 'Browse the guides',
    faqGroups: { general: 'Game and account', troubleshooting: 'Troubleshooting' },
  },
  entry: {
    checked: 'Checked {date} for {verified}',
    defaultVerified: 'Early Access',
    toc: 'On this page',
    routeLabel: 'Survival route, step {i} of {n}',
    previous: 'Previous: {title}',
    next: 'Next: {title}',
    nextFallback: 'Explore the Base map',
    sources: 'Sources and verification',
    sourcesText: 'Checked against the following sources on {date}. Early Access content may change.',
    related: 'Keep exploring',
    relatedGuides: 'Guides on this topic',
    published: 'Published {date}',
  },
  search: {
    metaTitle: 'Search the GILLA VR Wiki',
    metaDescription: 'Search GILLA VR guides and answers.',
    title: 'Search the wiki',
    label: 'Search guides and answers',
    placeholder: 'Try keycard, Mako or controls',
    button: 'Search',
    idle: 'Enter a word or phrase to search published guides and answers.',
    searching: 'Searching…',
    results: { one: '{n} result for “{q}”', other: '{n} results for “{q}”' } as Forms,
    capped: ' (showing first 30)',
    none: ' Try another term, or browse Guides and FAQ.',
    unavailable:
      'The search index is unavailable. In local development, run npm run build and npm run preview. You can also browse Guides or FAQ.',
    noscript: 'Search needs JavaScript. You can browse the guides and FAQ directly.',
  },
  notFound: {
    metaTitle: 'Page not found',
    metaDescription: 'This GILLA VR Map Wiki page does not exist. Search the wiki or pick a guide.',
    title: 'This room doesn’t exist',
    lead: 'The link may be old, or the page moved after an update. Search for what you need, or pick up one of these.',
    route: 'Start with the survival route',
    topics: 'Or browse a topic',
  },
  about: {
    metaTitle: 'About & Sources',
    metaDescription: 'How GILLA VR Map Wiki checks sources, labels uncertainty and follows the official fan content rules.',
    title: 'About GILLA VR Map Wiki and our sources',
    intro: 'GILLA VR Map Wiki is an independent fan project for GILLA players on Meta Quest. It is not made, sponsored or approved by Play Gilla.',
    sections: [
      {
        title: 'Our source policy',
        text: 'We rely on the official GILLA website, its fan content page and the Meta Quest store listing. Every guide shows the date it was checked and links to its sources. Things we saw in our own play sessions are marked as such, and our tips are worded as tips, never as game rules.',
      },
      {
        title: 'Map pages and the fan content rules',
        text: 'Play Gilla allows fans to use the game’s name and screenshots in guides and wikis. It does not allow ripping, data-mining or AI copies of its maps, monsters or models. Our map pages therefore use written directions and our own screenshots only. We never publish extracted map files, models or textures, and we don’t accept them from readers.',
      },
      {
        title: 'When information is missing',
        text: 'GILLA is in Early Access and the official pages don’t list every room or number. Where we haven’t confirmed something, we say so instead of guessing.',
      },
      {
        title: 'Privacy',
        text: 'No account is needed and this site sets no cookies of its own. Fonts are served from this site.',
      },
      {
        title: 'Early Access changes',
        text: 'Maps, monsters and modes may change after a page is checked. When the game differs from a guide, trust the game, and tell us so we can fix the page.',
      },
    ],
    adsTitle: 'Advertising',
    adsGoogleLink: 'How Google uses information from sites that use its services',
    adsText: 'This site shows ads to cover hosting. Ad networks may use cookies and basic device data to choose and measure ads. Ads are not chosen or endorsed by us, and we never show ads inside guide text.',
    officialTitle: 'Official links',
    imageryTitle: 'Game imagery',
    imageryText:
      'Screenshots on this site are captured by us in-game and are © Play Gilla. They illustrate our unofficial guides under Play Gilla’s fan content rules. GILLA VR Map Wiki has its own name and design and is not the official game website.',
  },
};

export type UI = typeof en;

export const UI_STRINGS: Record<Lang, UI> = { en };

export const t = (lang: Lang) => UI_STRINGS[lang];

/** "{a} of {b}" style interpolation. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? `{${k}}`));
}
