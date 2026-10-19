import { z } from "zod";
import { definePageSchema } from "@conloca/astro-cms/page-schemas";

export const dataSchemas = {
    barbers: z.object({
        name: z.string(),
        title: z.string(),
        image: z.string(),
        order: z.number().default(0),
        bio: z.string(),
    }),
};

export const pageSchemas = {
    "/blog/": definePageSchema({
        label: "Blog post",
        schema: z.object({
            author: z.string(),
            image: z.string(),
            tags: z.array(z.string()).optional(),
        }),
        ui: {
            author: { control: "text", label: "Author" },
            image: { control: "image", label: "Cover image" },
            tags: { control: "chips", label: "Tags" },
        },
    }),
};
