"use client";

import { useState } from "react";
import { Menu01, XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export type NavItem = { label: string; href: string };

const Wordmark = () => (
    <a href="/" className="flex items-baseline gap-1.5 rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
        <span className="text-lg font-semibold tracking-tight text-primary">
            Iron <span className="text-brand-secondary">&amp;</span> Oak
        </span>
        <span className="hidden text-xs font-semibold tracking-[0.2em] text-tertiary uppercase sm:block">Barber Co.</span>
    </a>
);

export const SiteHeader = ({ items, cta }: { items: NavItem[]; cta: { label: string; href: string } }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-secondary bg-primary/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 md:h-18 md:px-8">
                <Wordmark />

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-1">
                        {items.map((item) => (
                            <li key={item.label}>
                                <Button color="link-gray" size="md" href={item.href}>
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <Button size="md" href={cta.href}>
                        {cta.label}
                    </Button>
                </div>

                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex size-10 items-center justify-center rounded-lg text-fg-secondary transition hover:bg-primary_hover md:hidden"
                >
                    {open ? <XClose className="size-5" /> : <Menu01 className="size-5" />}
                </button>
            </div>

            <nav className={cx("border-t border-secondary bg-primary md:hidden", !open && "hidden")}>
                <ul className="flex flex-col gap-1 px-4 py-3">
                    {items.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-md font-semibold text-secondary transition hover:bg-primary_hover hover:text-secondary_hover"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2 pb-1">
                        <Button size="lg" href={cta.href} className="w-full">
                            {cta.label}
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
