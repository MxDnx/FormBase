import { FormBase } from "../formBase";
import { EventManager } from "../event-management/eventManager";
import { LogManager } from "../log-management/logManager";

export function onLoad(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        LogManager.logInfo(`Start OnLoad Event function '${propertyKey}'`);
        let context = args[0];
        if (context === null) {
            throw Error("Please Provide the context")
        }
        let form: FormBase = target;
        form.context = context;

        const result = originalMethod.apply(this, args);

        LogManager.logInfo(`End OnLoad Event function '${propertyKey}'`);

        return result;
    };
    EventManager.onLoadEvents.push(descriptor.value);

    return descriptor;
}
