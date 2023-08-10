
export const EventType = {
    OnLoad: "OnLoad",
    OnSave: "OnSave",
    OnChange: "OnChange",
} as const;

export type EventType = typeof EventType[keyof typeof EventType];


