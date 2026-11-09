import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const me = defineCollection({
  loader: glob({ pattern: 'me.md', base: './src/data' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    excerpt: z.string().optional(),
    except: z.string().optional(),
    location: z.string().optional(),
    email: z.string().email(),
    phone: z.string().optional(),
    cvUrl: z.string().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    reddit: z.string().url().optional(),
    youtube: z.string().url().optional(),
    website: z.string().url().optional(),
    available: z.boolean().default(true),
    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { me, projects, blog };