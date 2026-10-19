import type { ComponentConfig } from "@puckeditor/core";
import type { DataContext } from "@conloca/astro-cms";
import { BlogSection } from "@/components/marketing/blog-section";
import type { Article } from "@/components/marketing/blog/base-components/blog-cards";
import { pageToArticle } from "@/utils/page-to-article";

// Same reasoning as ContentFragmentSection: page timestamps in puck.metadata
// reach render as empty objects (Puck's prop walk destroys Dates), so the
// article list — which formats publish dates — is built in resolveData where
// Dates are still real, and handed to render as plain strings.
export type LatestBlogPostsProps = { articles?: Article[] };

export const LatestBlogPostsConfig: ComponentConfig<LatestBlogPostsProps> = {
    label: "Latest blog posts",
    fields: {},
    defaultProps: {},
    resolveData: ({ props }, { metadata }) => {
        const ctx = metadata as DataContext;
        const entries = ctx.collections?.barbers ?? [];
        const barberImageByName = new Map<string, string>(entries.map((e) => [String(e.data.name), String(e.data.image)] as const));
        const articles = (ctx.pages ?? []).map((page) => pageToArticle(page, barberImageByName));
        return { props: { ...props, articles } };
    },
    render: ({ articles = [] }) => <BlogSection posts={articles} />,
};
