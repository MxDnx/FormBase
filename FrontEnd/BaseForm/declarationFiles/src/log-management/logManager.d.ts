import { EventTime } from "../Types/eventTime";
import { EventType } from "../Types/eventTypes";
import { FormBase } from "../formBase";
export declare class LogManager {
    static logInfo(message: string): void;
    static logCallerInfo(callerName: string, message: string): void;
    static eventLogInfo(formBase: FormBase, eventType: EventType, eventTime: EventTime, functionName: string): void;
}
//# sourceMappingURL=logManager.d.ts.map