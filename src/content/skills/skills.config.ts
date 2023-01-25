import { z, defineCollection } from "astro:content";

export const skillsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    pack: z.string(),
    iconName: z.string(),
    tabIdx: z.number(),

    types: z.record(
      z.object({
        pack: z.string(),
        iconName: z.string(),
        bg: z.string(),
      })
    ),

    skills: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        type: z.string(),
        experience: z.number().min(0).max(10),
        loc: z.number().min(0).optional(),
      })
    ),
  }),
});
