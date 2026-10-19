import type { Article } from "@/components/marketing/blog/base-components/blog-cards";

export interface CmsPageReference {
    pathname: string;
    title?: string;
    meta?: unknown; // PageReference['meta'] is the ContentMeta interface — no index signature, so it is not assignable to Record<string, unknown>; unknown accepts it and the cast below narrows
    timestamps?: { created?: Date | string; modified?: Date | string; published?: Date | string };
}

const formatDate = (date: Date) => date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export function pageToArticle(page: CmsPageReference, barberImageByName: Map<string, string>): Article {
    const meta = (page.meta ?? {}) as { description?: string; image?: string; author?: string; tags?: string[] };
    const published = page.timestamps?.published ? new Date(page.timestamps.published) : undefined;
    return {
        id: page.pathname,
        href: page.pathname,
        thumbnailUrl: meta.image ?? "/images/hero.svg",
        title: page.title ?? "Untitled",
        summary: meta.description ?? "",
        category: { name: meta.tags?.[0] ?? "Blog", href: "/blog" },
        author: {
            name: meta.author ?? "Iron & Oak",
            href: "/#barbers",
            avatarUrl: (meta.author && barberImageByName.get(meta.author)) || "/images/hero.svg",
        },
        publishedAt: published ? formatDate(published) : "",
        readingTime: "",
        tags: [],
    };
}
