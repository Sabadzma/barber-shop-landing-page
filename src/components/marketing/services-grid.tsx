import { Brush01, Diamond01, FaceSmile, Scissors01, ShieldTick, Star01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const icons = {
    scissors: Scissors01,
    brush: Brush01,
    face: FaceSmile,
    star: Star01,
    shield: ShieldTick,
    diamond: Diamond01,
};

export type Service = {
    icon: keyof typeof icons;
    name: string;
    description: string;
    price: string;
};

export const ServicesGrid = ({ services }: { services: Service[] }) => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Services</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Cuts, shaves &amp; everything between</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Every service starts with a consultation and ends with a hot-towel finish. No rushing, no assembly line.
                    </p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = icons[service.icon];
                        return (
                            <li key={service.name} className="flex flex-col rounded-2xl bg-primary p-6 shadow-xs ring-1 ring-secondary_alt">
                                <div className="flex items-start justify-between">
                                    <FeaturedIcon icon={Icon} size="lg" color="brand" theme="light" />
                                    <span className="text-lg font-semibold text-brand-secondary">{service.price}</span>
                                </div>
                                <h3 className="mt-5 text-lg font-semibold text-primary">{service.name}</h3>
                                <p className="mt-2 text-md text-tertiary">{service.description}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
