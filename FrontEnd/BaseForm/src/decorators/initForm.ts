import { EventManager } from "../event-management/eventManager";
import { FormBase } from "../formBase";

export function initForm(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (context: Xrm.Events.EventContext) {
        target.context = context;
        EventManager.initEvents(context.getFormContext());

    };

    return descriptor;
}