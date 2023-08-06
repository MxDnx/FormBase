export const EventTime = {
    Start: "Start",
    Stop: "Stop",
} as const;

export type EventTime = typeof EventTime[keyof typeof EventTime];