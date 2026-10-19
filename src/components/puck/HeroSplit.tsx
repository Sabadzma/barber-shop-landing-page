import type { ComponentConfig } from "@puckeditor/core";
import { HeroSplit, type HeroProps } from "@/components/marketing/hero-split";

export const HeroSplitConfig: ComponentConfig<HeroProps> = {
    label: "Hero",
    fields: {
        badge: { type: "text", label: "Badge" },
        heading: { type: "text", label: "Heading", contentEditable: true },
        subheading: { type: "textarea", label: "Subheading" },
        primaryCta: {
            type: "object",
            label: "Primary CTA",
            objectFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "Link" },
            },
        },
        secondaryCta: {
            type: "object",
            label: "Secondary CTA",
            objectFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "Link" },
            },
        },
        image: { type: "text", label: "Image" },
    },
    defaultProps: {
        badge: "Walk-ins welcome",
        heading: "Sharp cuts. Classic craft.",
        subheading:
            "Iron & Oak is a neighborhood barber shop in Portland, OR. Four chairs, straight razors, hot towels — and a cut that still looks right three weeks later.",
        primaryCta: { label: "Book your chair", href: "#book" },
        secondaryCta: { label: "Our services", href: "#services" },
        image: "/images/hero.svg",
    },
    render: ({ badge, heading, subheading, primaryCta, secondaryCta, image }) => (
        <HeroSplit badge={badge} heading={heading} subheading={subheading} primaryCta={primaryCta} secondaryCta={secondaryCta} image={image} />
    ),
};
