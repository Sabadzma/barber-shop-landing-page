import { Button } from "@/components/base/buttons/button";

export type FooterNavItem = { label: string; href?: string };
export type FooterNavCategory = { label: string; items: FooterNavItem[] };

export type FooterProps = {
    navList: FooterNavCategory[];
    copyright: string;
};

export const FooterLarge01Brand = ({ navList, copyright }: FooterProps) => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav>
                    <ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {navList.map((category) => (
                            <li key={category.label}>
                                <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {category.items.map((item) => (
                                        <li key={item.label} className="flex">
                                            {item.href ? (
                                                <Button className="max-h-5 gap-1 text-footer-button-fg hover:text-footer-button-fg_hover" color="link-color" size="md" href={item.href}>
                                                    {item.label}
                                                </Button>
                                            ) : (
                                                <span className="text-md font-semibold text-footer-button-fg">{item.label}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row md:items-center">
                    <a href="/" className="flex items-baseline gap-1.5">
                        <span className="text-lg font-semibold tracking-tight text-primary_on-brand">
                            Iron <span className="text-brand_alt">&amp;</span> Oak
                        </span>
                        <span className="text-xs font-semibold tracking-[0.2em] text-tertiary_on-brand uppercase">Barber Co.</span>
                    </a>
                    <p className="text-sm text-quaternary_on-brand">{copyright}</p>
                </div>
            </div>
        </footer>
    );
};
