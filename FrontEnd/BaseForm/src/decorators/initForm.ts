import { FormBase } from "../formBase";


export function initForm(target: FormBase, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (context: Xrm.Events.EventContext) {
        target.context = context;

    };

    return descriptor;
}