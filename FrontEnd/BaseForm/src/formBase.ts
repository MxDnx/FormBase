//import { initForm } from "./decorators/initForm";
import { crmFormClass, crmFormToInstanciate } from "./decorators/crmFormClass";


/**
 * Form base
 */
export class FormBase {

    appName: string = "[BaseForm]";
    context!: Xrm.Events.EventContext;


    /**
     * Creates an instance of form base.
     * @param context 
     */
    constructor(context: Xrm.Events.EventContext) {
        this.initContextViaDecorator(context);
    }

    @initForm
    initContextViaDecorator(context: Xrm.Events.EventContext) {
        //the context is set via @initForm decorator
        //it's the only way to be able to use the @crmValue decorator 
    }

    /**
     * Gets form context
     */
    get formContext() {
        return this.context.getFormContext();
    }
}

/**
 * Inits crm form
 * @param context 
 * @returns  
 */
export function initCrmForm(context: Xrm.Events.EventContext) {
    if (crmFormToInstanciate)
        return new crmFormToInstanciate(context);
}

export function initForm(target: FormBase, propertyKey: string, descriptor: any) {

    const originalMethod = descriptor.value;

    descriptor.value = function (context: Xrm.Events.EventContext) {
        target.context = context;

    };

    return descriptor;
}
