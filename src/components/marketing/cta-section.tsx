import { Button } from "@/components/base/buttons/button";

export type CtaProps = {
    heading: string;
    subtext: string;
    action: { label: string; href: string };
};

export const CtaSection = ({ heading, subtext, action }: CtaProps) => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">{heading}</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">{subtext}</p>
                    <div className="mt-8">
                        <Button size="xl" href={action.href}>
                            {action.label}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
