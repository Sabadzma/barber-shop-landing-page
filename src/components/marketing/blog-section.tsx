import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Simple01Vertical, type Article } from "@/components/marketing/blog/base-components/blog-cards";

export const BlogSection = ({ posts }: { posts: Article[] }) => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">From the chair</span>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Notes on grooming &amp; craft</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">Practical advice from the barbers of Iron &amp; Oak — no fluff, just what works.</p>
                    </div>
                    <Button color="secondary" size="lg" href="/blog" iconTrailing={ArrowRight}>
                        All articles
                    </Button>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Simple01Vertical key={post.id} article={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};
