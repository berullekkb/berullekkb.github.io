import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projets : un fichier .mdx par projet dans src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['IA', 'Data', 'Web', 'Autre']),
    tech: z.array(z.string()),
    cover: z.string().optional(), // chemin d'une image dans public/ (ex. /projects/mon-projet.png)
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false), // true = affiché sur la page d'accueil
    order: z.number().default(99), // ordre d'affichage (1 = en premier)
    date: z.coerce.date(),
  }),
});

// Articles de blog : un fichier .mdx par article dans src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
