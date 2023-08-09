import { EventTime } from "../Types/eventTime";
import { EventType } from "../Types/eventTypes";
import { EventManager } from "../event-management/eventManager";
import { FormBase } from "../formBase";
import { LogManager } from "../log-management/logManager";


export function startStop(caller: any, functionName: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;



    descriptor.value = function (...args: any[]) {
        LogManager.logCaller(caller.constructor.name, `${EventTime.Start} function '${functionName}'`);

        const result = originalMethod.apply(caller, args);

        LogManager.logCaller(caller.constructor.name, `${EventTime.End} function '${functionName}'`);

        return result;
    }
}
