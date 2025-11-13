export type ServiceId =
    | "control-plagas"
    | "desinfeccion"
    | "desratizacion"
    | "desinsectacion"
    | "limpieza-cisternas"
    | "control-palomas";

export type ServiceAccent = "red" | "teal" | "amber";

export type Service = {
    id: ServiceId;
    name: string;
    subtitle: string;
    shortDescription: string;
    description: string;
    heroImage: string;
    accent: ServiceAccent;
    icon: "bug" | "spray" | "droplets" | "rat" | "shield" | "bird";
    features: string[];
    processTitle: string;
    processSteps: ServiceProcessStep[];
    stats: ServiceStat[];
    whatsappText: string;
    relatedProductIds: string[]; // id de tus PRODUCTS
};

export type ServiceProcessStep = {
    order: number;
    title: string;
    description: string;
};

export type ServiceStat = {
    id: string;
    label: string;
    value: string;
    helper?: string;
};
