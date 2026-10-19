import type { ComponentConfig } from "@puckeditor/core";
import { ServicesGrid, type Service } from "@/components/marketing/services-grid";

const iconOptions = [
    { label: "Scissors", value: "scissors" },
    { label: "Star", value: "star" },
    { label: "Face", value: "face" },
    { label: "Brush", value: "brush" },
    { label: "Shield", value: "shield" },
    { label: "Diamond", value: "diamond" },
];

type ServicesGridProps = { services: Service[] };

export const ServicesGridConfig: ComponentConfig<ServicesGridProps> = {
    label: "Services",
    fields: {
        services: {
            type: "array",
            label: "Services",
            min: 1,
            getItemSummary: (item) => item.name || "Service",
            defaultItemProps: { icon: "scissors", name: "New service", price: "$35", description: "" },
            arrayFields: {
                icon: { type: "select", label: "Icon", options: iconOptions },
                name: { type: "text", label: "Name" },
                price: { type: "text", label: "Price" },
                description: { type: "textarea", label: "Description" },
            },
        },
    },
    defaultProps: {
        services: [
            {
                icon: "scissors",
                name: "Classic Haircut",
                price: "$35",
                description: "Consultation, precision scissor or clipper cut, shampoo and style. The everyday standard, done right.",
            },
            {
                icon: "star",
                name: "Skin Fade",
                price: "$38",
                description: "High, mid or low — blended to the skin with a razor-detailed finish and crisp edges.",
            },
            {
                icon: "face",
                name: "Beard Trim & Shape",
                price: "$25",
                description: "Beard architecture: lines set, bulk managed, edges razor-finished, oil to close.",
            },
            {
                icon: "brush",
                name: "Hot Towel Shave",
                price: "$40",
                description: "The full ritual — hot towels, pre-shave oil, straight razor, cold towel finish.",
            },
            {
                icon: "shield",
                name: "Kids Cut",
                price: "$25",
                description: "Patient, unhurried cuts for the under-12s. First haircut certificates on request.",
            },
            {
                icon: "diamond",
                name: "The Full Works",
                price: "$65",
                description: "Cut, shave, beard shape, eyebrows and a scalp massage. Ninety minutes, zero errands.",
            },
        ],
    },
    render: ({ services }) => (
        <div id="services">
            <ServicesGrid services={services.map((service) => ({ ...service, icon: service.icon as Service["icon"] }))} />
        </div>
    ),
};
