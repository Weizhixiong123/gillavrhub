import type { Lang } from './locales';
import { de } from './ui-de';
import { es } from './ui-es';
import { fr } from './ui-fr';

export type Forms = Partial<Record<Intl.LDMLPluralRule, string>>;

const en = {
  nav: {
    start: 'Start here',
    map: 'The Base map',
    monsters: 'Monsters',
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
    metaTitle: 'GILLA VR Game Wiki: Map, Monsters, Codes & Guides',
    metaDescription:
      'Unofficial wiki for the GILLA VR game on Meta Quest: what GILLA is, the Base map and keycard door, all monsters, game modes, codes, download help and quick answers.',
    title: 'GILLA VR map wiki',
    lead: 'Find your way through the Base, learn what hunts you and get ready for your first night in the GILLA VR horror game on Meta Quest.',
    heroAlt: 'A hall in the Base, lit red, with a hazard door at the far end',
    heroCaption: 'The Base, in game',
    shotsTitle: 'Through the Base',
    shots: [
      { image: 'keycard', alt: 'A gold GILLA keycard on a concrete floor', note: 'Find the keycard', href: '/guides/recycler-and-keycard/#the-keycard-and-the-locked-door' },
      { image: 'card-reader', alt: 'A card reader on the wall by a hazard door', note: 'Take it to the reader', href: '/guides/recycler-and-keycard/#the-keycard-and-the-locked-door' },
      { image: 'floor-hole', alt: 'A jagged hole torn through a storeroom floor', note: 'Then climb down, if you want to', href: '/guides/the-base-map/#under-the-base' },
    ],
    openMap: 'Read the map guide',
    newHere: 'New here? Start with the beginner guide',
    placeholder: 'Search the wiki',
    popular: 'Popular:',
    popularTerms: ['monsters', 'Discord', 'keycard', 'free', 'Steam'],
    topics: 'Guides by topic',
    allGuides: { one: 'All {n} guide', other: 'All {n} guides' } as Forms,
    guideCount: { one: '{n} guide', other: '{n} guides' } as Forms,
    route: 'Your first night, step by step',
    answers: 'Quick answers',
    allAnswers: 'All answers',
    facts: 'GILLA at a glance',
    // Store facts read from the Meta Quest listing (via vrdb.app) on 2026-11-19.
    factList: [
      { label: 'Price', value: 'Free, with in-app purchases' },
      { label: 'Released', value: 'November 10, 2026 (Early Access)' },
      { label: 'Headsets', value: 'Quest 2, Quest 3, Quest 3S, Quest Pro' },
      { label: 'Play area', value: 'Standing or roomscale' },
      { label: 'Comfort', value: 'Intense' },
      { label: 'Age rating', value: 'Mature 17+' },
      { label: 'Developer', value: 'Play Gilla' },
    ],
    storeLink: 'Meta Quest store page',
    discordLink: 'Official Discord',
    credit: 'Screenshots © Play Gilla, used to illustrate this unofficial guide.',
  },
  finder: {
    title: 'Modes and monsters at a glance',
    filterLabel: 'Filter by mode',
    all: 'All modes',
    modes: 'The modes',
    monsters: 'What hunts you',
    goal: 'Goal',
    map: 'Map',
    rounds: 'Rounds',
    where: 'Where',
    trigger: 'What sets it off',
    tip: 'What to do',
    player: 'Player',
    status: { all: 'Showing all modes', one: 'Showing {mode}' },
    items: {
      modes: [
        { key: 'base', name: 'The Base', kind: 'Roam', goal: 'Bring gold bars and diamonds to the recycler', map: 'The Base and the levels under it', rounds: 'Not stated officially', href: '/guides/the-base-map/' },
        { key: 'hunt', name: 'Be the Monster', kind: 'Hunt', goal: 'The monster catches players; players stay hidden', map: 'Chosen by vote', rounds: 'Two minutes for the other players', href: '/guides/be-the-monster/' },
        { key: 'splash', name: 'Don’t Splash', kind: 'Survive', goal: 'Cross without touching the water', map: 'A flooded hall', rounds: 'Up to seven, each with a shorter clock', href: '/guides/dont-splash/' },
      ],
      monsters: [
        { mode: 'base', image: 'the-grinner', alt: 'The Grinner up close, its mouth ripped open', name: 'The Grinner', where: 'In the Base', trigger: 'Talking near it', tip: 'Plan at the recycler, then go quiet', href: '/guides/monsters/#the-grinner' },
        { mode: 'base', image: 'floor-hole', alt: 'A jagged hole torn through a storeroom floor', name: 'The Mannequin', where: 'Under the Base', trigger: 'Not stated officially', tip: 'Drop your loot and go down as a group', href: '/guides/monsters/#the-mannequin' },
        { mode: 'hunt', image: '', alt: '', name: 'A player', where: 'The map the room voted for', trigger: 'Chosen each round', tip: 'Keep moving between sonar pings', href: '/guides/be-the-monster/' },
        { mode: 'splash', image: 'the-mako', alt: 'The Mako tearing through the water', name: 'The Mako', where: 'In the water', trigger: 'Touching the water', tip: 'Stay on the platforms and keep moving', href: '/guides/monsters/#the-mako' },
      ],
    },
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
        'Answers about GILLA VR: price, headsets, PC VR and Steam, age rating, playing with friends, muting, motion sickness, cheats, Discord and support.',
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
    faqGroups: {
      game: 'Getting the game',
      playing: 'Playing and safety',
      community: 'Community, rules and support',
    },
    faqChecked: 'Every answer checked on {date} against the official site, the terms and the store listing.',
    faqMore: 'Full answer: {title}',
    faqSources: 'Sources:',
  },
  entry: {
    checked: 'Checked {date} for {verified}',
    defaultVerified: 'Early Access',
    toc: 'On this page',
    routeLabel: 'Survival route, step {i} of {n}',
    previous: 'Previous: {title}',
    next: 'Next: {title}',
    nextFallback: 'Compare the game modes',
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
        text: 'Play Gilla allows fans to use the game’s name and screenshots in guides and wikis. It does not allow ripping, data-mining or AI copies of its maps, monsters or models. Our pages therefore use written directions and real in-game screenshots only, credited to Play Gilla. We never publish extracted map files, models or textures, and we don’t accept them from readers.',
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
        text: 'Maps, monsters and modes may change after a page is checked. When the game differs from a guide, trust the game.',
      },
    ],
    adsTitle: 'Advertising',
    adsGoogleLink: 'How Google uses information from sites that use its services',
    adsText: 'This site shows ads to cover hosting. Ad networks may use cookies and basic device data to choose and measure ads. Ads are not chosen or endorsed by us, and we never show ads inside guide text.',
    officialTitle: 'Official links',
    links: {
      store: 'GILLA on the Meta Quest store',
      discord: 'Official GILLA Discord',
      fanContent: 'Fan content & assets rules',
    },
    imageryTitle: 'Game imagery',
    imageryText:
      'Screenshots on this site are in-game screenshots from the official GILLA website (gillavr.com) and are © Play Gilla. They illustrate our unofficial guides under Play Gilla’s fan content rules. GILLA VR Map Wiki has its own name and design and is not the official game website.',
  },
};

export type UI = typeof en;

export const UI_STRINGS: Record<Lang, UI> = { en, de, es, fr };

export const t = (lang: Lang) => UI_STRINGS[lang];

/** "{a} of {b}" style interpolation. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? `{${k}}`));
}
