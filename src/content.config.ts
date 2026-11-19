import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { GUIDE_CATEGORIES } from './config/site.mjs';

// Shared fields: every page carries freshness + provenance so stale Early Access info is visible.
const base = z.object({
  title: z.string(),
  description: z.string().max(170),
  updated: z.coerce.date(),
  published: z.coerce.date().optional(),
  /** Game version or build the content was checked against. */
  verifiedFor: z.string().optional(),
  sources: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  tags: z.array(z.string()).default([]),
  /** Drafts are excluded from all public routes and indexes. */
  draft: z.boolean().default(false),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: base.extend({
    category: z.enum(GUIDE_CATEGORIES as [string, ...string[]]),
    summary: z.string().optional(),
    /** Series navigation (e.g. the beginner route): pages sharing `series` are chained by `step`. */
    series: z.string().optional(),
    step: z.number().int().positive().optional(),
    featured: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: base.extend({
    /** Short direct answer shown first and used for FAQPage schema. */
    answer: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: base.extend({
    published: z.coerce.date(),
    kind: z.enum(['patch', 'announcement']),
  }),
});

export const collections = { guides, faq, news };
