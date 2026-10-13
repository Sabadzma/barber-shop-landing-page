export type TestimonialProps = {
    quote: string;
    authorName: string;
    authorTitle: string;
};

export const TestimonialSimple = ({ quote, authorName, authorTitle }: TestimonialProps) => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
                    <blockquote className="text-display-xs font-medium text-balance text-primary_on-brand md:text-display-sm">
                        &ldquo;{quote}&rdquo;
                    </blockquote>
                    <figcaption>
                        <div className="text-md font-semibold text-primary_on-brand">{authorName}</div>
                        <div className="mt-1 text-sm text-tertiary_on-brand">{authorTitle}</div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};
