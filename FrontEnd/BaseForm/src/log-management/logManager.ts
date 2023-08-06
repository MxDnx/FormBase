import { EventTime } from "../Types/eventTime";
import { EventType } from "../Types/eventTypes";
import { FormBase } from "../formBase";

export class LogManager {
    static logInfo(message: string) {
        console.info(message);
    }

    static logCallerInfo(callerName: string, message: string) {
        console.info(`[${callerName}] - ${message}`);
    }
    static eventLogInfo(formBase: FormBase, eventType: EventType, eventTime: EventTime, functionName: string) {
        LogManager.logCallerInfo(formBase.appName, ` ${eventType}  ${eventTime} function '${functionName}'`);
    }
}

