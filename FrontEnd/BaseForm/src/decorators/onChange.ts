import { FormBase } from "../formBase";
import { EventManager } from "../event-management/eventManager";
import { LogManager } from "../log-management/logManager";
import { EventType } from "../Types/eventTypes";

export function onChange(attributeName: string) {

    return function (formBase: any, functionName: string, descriptor: PropertyDescriptor) {

        let eventManager: EventManager = new EventManager(formBase);
        eventManager.addEventDecorator(formBase, functionName, descriptor, EventType.OnChange);

        EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });

        return descriptor;
    }

}
