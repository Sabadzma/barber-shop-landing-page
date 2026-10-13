import { Badge } from "@/components/base/badges/badges";

export type Barber = {
    name: string;
    role: string;
    image: string;
    bio: string;
};

export const BarbersGrid = ({ barbers }: { barbers: Barber[] }) => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">The barbers</span>
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Four chairs, four craftsmen</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Every barber at Iron &amp; Oak is a specialist. Pick your chair — or let the front desk match you.
                    </p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
                    {barbers.map((barber) => (
                        <li key={barber.name} className="flex flex-col gap-4">
                            <img src={barber.image} alt={`Portrait of ${barber.name}`} className="aspect-square w-full rounded-2xl object-cover ring-1 ring-secondary_alt" />
                            <div>
                                <h3 className="text-lg font-semibold text-primary">{barber.name}</h3>
                                <Badge type="pill-color" color="brand" size="sm" className="mt-2">
                                    {barber.role}
                                </Badge>
                                <p className="mt-3 text-sm text-tertiary">{barber.bio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
