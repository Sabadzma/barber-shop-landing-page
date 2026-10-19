import type { Config } from "@puckeditor/core";
import type { ContentFragmentSectionProps } from "@conloca/astro-cms";
import type { HeroProps } from "@/components/marketing/hero-split";
import type { Service } from "@/components/marketing/services-grid";
import type { TestimonialProps } from "@/components/marketing/testimonial";
import type { CtaProps } from "@/components/marketing/cta-section";
import { HeroSplitConfig } from "@/components/puck/HeroSplit";
import { ServicesGridConfig } from "@/components/puck/ServicesGrid";
import { BarbersGridConfig } from "@/components/puck/BarbersGrid";
import { TestimonialSimpleConfig } from "@/components/puck/TestimonialSimple";
import { LatestBlogPostsConfig, type LatestBlogPostsProps } from "@/components/puck/LatestBlogPosts";
import { CtaSectionConfig } from "@/components/puck/CtaSection";
import { ContentFragmentSectionConfig } from "@/components/puck/ContentFragmentSection";

type Components = {
    HeroSplit: HeroProps;
    ServicesGrid: { services: Service[] };
    BarbersGrid: Record<string, never>;
    TestimonialSimple: TestimonialProps;
    LatestBlogPosts: LatestBlogPostsProps;
    CtaSection: CtaProps;
    ContentFragmentSection: ContentFragmentSectionProps;
};

const config: Config<Components> = {
    categories: {
        marketing: {
            title: "Marketing",
            components: ["HeroSplit", "ServicesGrid", "BarbersGrid", "TestimonialSimple", "LatestBlogPosts", "CtaSection"],
        },
        blog: {
            title: "Blog",
            components: ["ContentFragmentSection"],
        },
    },
    components: {
        HeroSplit: HeroSplitConfig,
        ServicesGrid: ServicesGridConfig,
        BarbersGrid: BarbersGridConfig,
        TestimonialSimple: TestimonialSimpleConfig,
        LatestBlogPosts: LatestBlogPostsConfig,
        CtaSection: CtaSectionConfig,
        ContentFragmentSection: ContentFragmentSectionConfig,
    },
};

export default config;
