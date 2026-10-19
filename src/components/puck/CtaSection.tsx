import type { ComponentConfig } from "@puckeditor/core";
import { CtaSection, type CtaProps } from "@/components/marketing/cta-section";

export const CtaSectionConfig: ComponentConfig<CtaProps> = {
    label: "Call to action",
    fields: {
        heading: { type: "text", label: "Heading", contentEditable: true },
        subtext: { type: "textarea", label: "Subtext" },
        action: {
            type: "object",
            label: "Action",
            objectFields: {
                label: { type: "text", label: "Label" },
                href: { type: "text", label: "Link" },
            },
        },
    },
    defaultProps: {
        heading: "Ready for a fresh cut?",
        subtext: "Walk in Tue–Sat, 9:00–19:00 — or call ahead and skip the wait.",
        action: { label: "Call (555) 013-2026", href: "tel:+15550132026" },
    },
    render: ({ heading, subtext, action }) => (
        <div id="book">
            <CtaSection heading={heading} subtext={subtext} action={action} />
        </div>
    ),
};
