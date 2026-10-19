import type { ComponentConfig } from "@puckeditor/core";
import { pageSettingAttributes, type ContentFragmentSectionProps, type DataContext } from "@conloca/astro-cms";
import { Badge } from "@/components/base/badges/badges";

const formatDate = (date: Date) => date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

// Render-only props injected by resolveData. Puck's render-time field walk
// deep-rebuilds props without field definitions — including the injected
// `puck` context — which reduces Date objects in `puck.metadata` to empty
// objects. resolveData runs before that walk, so it sees real Dates and can
// hand the render plain strings, which survive.
type Props = ContentFragmentSectionProps & { publishedText?: string; publishedIso?: string };

export const ContentFragmentSectionConfig: ComponentConfig<Props> = {
    label: "Blog Post",
    fields: {
        fragmentId: { type: "text", label: "Post body fragment" },
    },
    defaultProps: { fragmentId: "" },
    resolveData: ({ props }, { metadata }) => {
        const page = (metadata as DataContext).page;
        const raw = page.timestamps?.published;
        const date = raw ? new Date(raw) : undefined;
        const valid = date && !Number.isNaN(date.getTime()) ? date : undefined;
        return {
            props: {
                ...props,
                publishedText: valid ? formatDate(valid) : "",
                publishedIso: valid ? valid.toISOString() : "",
            },
        };
    },
    render: ({ puck, fragment, publishedText, publishedIso }) => {
        const page = (puck.metadata as DataContext).page;
        const meta = (page.meta ?? {}) as { author?: string; description?: string; image?: string; tags?: string[] };
        return (
            <article className="bg-primary">
                <header className="mx-auto max-w-3xl px-4 pt-16 md:px-8 md:pt-24">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Badge type="pill-color" color="brand" size="md">
                            {meta.tags?.[0] ?? "Blog"}
                        </Badge>
                        <h1 {...pageSettingAttributes(puck, "title")} className="text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
                            {page.title}
                        </h1>
                        <p className="text-lg text-tertiary">{meta.description}</p>
                        <div className="mt-2 flex items-center gap-3 text-sm text-tertiary">
                            <span className="font-semibold text-primary">{meta.author}</span>
                            <span aria-hidden="true">·</span>
                            {publishedText && (
                                <time {...pageSettingAttributes(puck, "publishAt")} dateTime={publishedIso}>
                                    {publishedText}
                                </time>
                            )}
                        </div>
                    </div>
                    {meta.image && <img src={meta.image} alt="" className="mt-10 w-full rounded-2xl object-cover ring-1 ring-secondary_alt md:mt-12" />}
                </header>
                <div className="prose prose-neutral mx-auto max-w-2xl px-4 py-16 lg:prose-lg">
                    {fragment ??
                        (puck.isEditing ? (
                            <p className="rounded-xl border border-dashed border-secondary p-6 text-center text-sm text-tertiary">
                                Pick a content fragment for the post body in the sidebar.
                            </p>
                        ) : null)}
                </div>
            </article>
        );
    },
};
