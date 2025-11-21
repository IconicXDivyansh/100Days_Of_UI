import { defineCollection, z } from 'astro:content';

const demos = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
        containerType: z.enum(['contained', 'full-width']).default('contained'),
	}),
});

export const collections = {
	demos,
};
