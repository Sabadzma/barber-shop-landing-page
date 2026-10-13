import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export type HeroProps = {
    badge: string;
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
};

export const HeroSplit = ({ badge, heading, subheading, primaryCta, secondaryCta, image }: HeroProps) => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col items-start">
                    <Badge type="pill-color" color="brand" size="lg">
                        {badge}
                    </Badge>
                    <h1 className="mt-4 text-display-md font-semibold tracking-tight text-primary md:text-display-lg">{heading}</h1>
                    <p className="mt-4 max-w-xl text-lg text-tertiary md:mt-6 md:text-xl">{subheading}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button size="xl" href={primaryCta.href}>
                            {primaryCta.label}
                        </Button>
                        <Button size="xl" color="secondary" href={secondaryCta.href}>
                            {secondaryCta.label}
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <img src={image} alt="Iron & Oak Barber Co. shopfront artwork" className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-secondary_alt" />
                </div>
            </div>
        </section>
    );
};
