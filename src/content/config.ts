import { defineCollection, z } from 'astro:content';

const actionsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.array(
      z.object({
        id: z.number(),
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        welcome: z
          .object({
            header: z.string(),
            image: image().optional(),
            content: z.array(z.string()),
          })
          .optional(),
        url: z.string().url().optional(),
        category: z.string().optional(),
        status: z.string().optional(),
        begin: z
          .string()
          .transform((str) => str && new Date(str))
          .optional(),
        end: z
          .string()
          .transform((str) => str && new Date(str))
          .optional(),
        place: z
          .object({
            name: z.string(),
            url: z.string().url(),
            address: z.string(),
          })
          .optional(),
        images: z.array(image()).optional(),
        video: z.string().optional(),
        draft: z.boolean().optional(),
        pubDate: z.date().optional(),
      }),
    ),
});

const teamsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      sort: z.number(),
      skills: z.array(z.string()).optional(),
      images: z.array(image()),
      url: z.string(),
      draft: z.boolean().optional(),
    }),
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sort: z.number(),
    skills: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const investorsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      name: z.string(),
      title: z.string().optional(),
      url: z.string().url().optional(),
      image: image(),
    }),
});

export const collections = {
  actions: actionsCollection,
  resources: resourcesCollection,
  investors: investorsCollection,
  teams: teamsCollection,
};
