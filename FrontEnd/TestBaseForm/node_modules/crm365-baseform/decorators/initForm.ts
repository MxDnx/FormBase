import { EventManager } from "../event-management/eventManager";
import { FormBase } from "../formBase";

export function initForm(formBase: FormBase, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (context: Xrm.Events.EventContext) {

        formBase.context = context;
        EventManager.initEvents(context.getFormContext());

    };

    return descriptor;
}