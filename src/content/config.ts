import { defineCollection, z } from 'astro:content';

const products = defineCollection({
 	type: 'content',
 	// Type-check frontmatter using a schema
 	schema: z.object({
 		title: z.string(),
 		description: z.string(),
  		// Transform string to Date object
  		heroImage: z.string().optional(),
        systemUrl: z.string().optional(),
        productType: z.string(),
  	}),
});

const projects = defineCollection({
 	type: 'content',
 	// Type-check frontmatter using a schema
 	schema: z.object({
 		title: z.string(),
 		description: z.string(),
  		// Transform string to Date object
  		heroImage: z.string().optional(),
        systemUrl: z.string().optional(),
        projectType: z.string(),
        work_list: z.array(z.string()).optional(),
  	}),
});

export const collections = { products, projects };

