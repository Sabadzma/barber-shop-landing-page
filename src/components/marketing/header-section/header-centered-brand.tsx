export type PageHeaderProps = {
    overline: string;
    title: string;
    description: string;
};

export const HeaderCenteredBrand = ({ overline, title, description }: PageHeaderProps) => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-secondary_on-brand md:text-md">{overline}</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary_on-brand md:text-display-lg">{title}</h1>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-6 md:text-xl">{description}</p>
                </div>
            </div>
        </section>
    );
};
