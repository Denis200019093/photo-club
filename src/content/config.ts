import { defineCollection, z, image } from 'astro:content';

const photos = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    category: z.string().optional(),
    date: z.string(),
    image: image(),
    featured: z.boolean().optional().default(false),
  }),
});

const members = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: image(),
    instagram: z.string().optional(),
    joined: z.string(),
  }),
});

export const collections = { photos, members };
