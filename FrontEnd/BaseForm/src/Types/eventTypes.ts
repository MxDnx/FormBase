
export const EventType = {
    OnLoad: "OnLoad",
    OnSave: "OnSave",
    OnChange: "OnChange",
    Basic: "Basic"
} as const;

export type EventType = typeof EventType[keyof typeof EventType];


