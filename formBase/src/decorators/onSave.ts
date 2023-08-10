import { FormBase } from "../formBase";
import { EventManager } from "../event-management/eventManager";
import { LogManager } from "../log-management/logManager";
import { EventType } from "../Types/eventTypes";

export function onChange(attributeName: string) {

    return function (target: FormBase, propertyKey: string, descriptor: PropertyDescriptor) {

        let eventManager: EventManager = new EventManager(target);
        eventManager.addEventDecorator(target, propertyKey, descriptor, EventType.OnSave);

        EventManager.onChangeEvents.push({ attributeName: attributeName, callback: descriptor.value });

        return descriptor;
    }

}
