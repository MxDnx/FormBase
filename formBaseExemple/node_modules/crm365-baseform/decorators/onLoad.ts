import { FormBase } from "../formBase";
import { EventManager } from "../event-management/eventManager";
import { EventType } from "../Types/eventTypes";

export function onLoad(formBase: FormBase, functionName: string, descriptor: PropertyDescriptor) {

    let eventManager: EventManager = new EventManager(formBase);
    eventManager.addEventDecorator(formBase, functionName, descriptor, EventType.OnLoad);

    EventManager.onLoadEvents.push(descriptor.value);

    return descriptor;
}
