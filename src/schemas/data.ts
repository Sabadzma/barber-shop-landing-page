import typia from "typia";
import { defineHostSchema, definePageSchema } from "@conloca/astro-cms/page-schemas";

// Each schema is a TypeScript type plus the validator and JSON Schema metadata
// Typia generates for it at build time (typia-vite.mjs). Prune drops undeclared
// keys, as z.object() did.

interface Barber {
    name: string;
    title: string;
    image: string;
    /** Sort position; readers treat a missing value as 0. */
    order?: number;
    bio: string;
}

interface BlogPost {
    author: string;
    image: string;
    tags?: string[];
}

export const dataSchemas = {
    barbers: defineHostSchema<Barber>({
        validate: typia.plain.createValidatePrune<Barber>(),
        metadata: typia.json.schema<Barber>(),
    }),
};

export const pageSchemas = {
    "/blog/": definePageSchema({
        label: "Blog post",
        schema: defineHostSchema<BlogPost>({
            validate: typia.plain.createValidatePrune<BlogPost>(),
            metadata: typia.json.schema<BlogPost>(),
        }),
        ui: {
            author: { control: "text", label: "Author" },
            image: { control: "image", label: "Cover image" },
            tags: { control: "chips", label: "Tags" },
        },
    }),
};
