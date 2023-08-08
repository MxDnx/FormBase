export const EventTime = {
    Start: "Start",
    End: "End",
} as const;

export type EventTime = typeof EventTime[keyof typeof EventTime];