import type { ComponentConfig } from "@puckeditor/core";
import { TestimonialSimple, type TestimonialProps } from "@/components/marketing/testimonial";

export const TestimonialSimpleConfig: ComponentConfig<TestimonialProps> = {
    label: "Testimonial",
    fields: {
        quote: { type: "textarea", label: "Quote" },
        authorName: { type: "text", label: "Author name" },
        authorTitle: { type: "text", label: "Author title" },
    },
    defaultProps: {
        quote: "I've been coming to Iron & Oak every three weeks for six years. Marco's crew set the fade standard in this town — I've never once left with a bad cut.",
        authorName: "Daniel Reyes",
        authorTitle: "Regular since 2020",
    },
    render: ({ quote, authorName, authorTitle }) => <TestimonialSimple quote={quote} authorName={authorName} authorTitle={authorTitle} />,
};
