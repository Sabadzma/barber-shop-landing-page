import type { ComponentConfig } from "@puckeditor/core";
import type { DataContext } from "@conloca/astro-cms";
import { BarbersGrid, type Barber } from "@/components/marketing/barbers-grid";

export const BarbersGridConfig: ComponentConfig<Record<string, never>> = {
    label: "Barbers",
    fields: {},
    defaultProps: {},
    render: ({ puck }) => {
        const ctx = puck.metadata as DataContext;
        const entries = ctx.collections?.barbers ?? [];
        const barbers: Barber[] = entries
            .map((e) => ({
                name: String(e.data.name),
                role: String(e.data.title),
                image: String(e.data.image),
                bio: String(e.data.bio),
                order: Number(e.data.order ?? 0),
            }))
            .sort((a, b) => a.order - b.order)
            .map(({ order: _order, ...barber }) => barber);
        return (
            <div id="barbers">
                <BarbersGrid barbers={barbers} />
            </div>
        );
    },
};
