import { EventTime } from "../Types/eventTime";
import { EventType } from "../Types/eventTypes";
import { FormBase } from "../formBase";

export class LogManager {
    static logInfo(message: string) {
        console.info(message);
    }

    static logCaller(callerName: string, message: string) {
        console.log(`[${callerName}] - ${message}`);
    }
    static logEvent(formBase: FormBase, eventType: EventType, eventTime: EventTime, functionName: string) {
        LogManager.logCaller(formBase.formName, ` ${eventType}  ${eventTime} function '${functionName}'`);
    }
}

