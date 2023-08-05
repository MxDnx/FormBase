import { FormBase } from "../formBase";
import { EventManager } from "../event-management/eventManager";
import { LogManager } from "../log-management/logManager";

export function onChange(attributeName: string) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (context: Xrm.Events.EventContext) {

            LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);

            if (context === null) {
                throw Error("Please Provide the context")
            }

            FormBase.context = context;

            const result = originalMethod.apply(this, context);

            LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);

            return result;
        };
        EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });

        return descriptor;
    }

}
