export type TimelineItem = {
    year: string;
    title: string;
    description: string;
};

export type MetricItem = {
    id: string;
    label: string;
    value: string;
    helper?: string;
};

export type ValueItem = {
    id: string;
    title: string;
    description: string;
    icon: "shield" | "heart" | "zap" | "users";
};

export type HighlightItem = {
    id: string;
    title: string;
    description: string;
    icon: "map" | "clock" | "badge";
};

export type TeamRole = {
    id: string;
    title: string;
    description: string;
};
