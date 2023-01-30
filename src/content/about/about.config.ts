import { z, defineCollection } from "astro:content";

const event = z.object({
  company: z.string(),
  value: z.string(),
  title: z.string(),
  date: z.string(),
  gpa: z.array(z.string()).length(2).optional(),
  points: z.array(z.string()),
});

export const aboutCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    about: z.array(
      z.object({
        name: z.string(),
        pack: z.string(),
        iconName: z.string(),
        highlight: z.string().optional(),
        title: z.string(),
        desc: z.string(),
      })
    ),
    experiences: z.array(event),
    awards: z.array(event),
  }),
});
