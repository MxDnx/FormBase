//import { initForm } from "./decorators/initForm";
import { crmFormClass, crmFormToInstanciate } from "./decorators/crmFormClass";
//import { initForm } from "./decorators/initForm";
import { EventManager } from "./event-management/eventManager";


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
    constructor() {

    }

    @initForm
    initCrmForm(context: Xrm.Events.EventContext) {
        debugger;
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
    debugger;
    if (crmFormToInstanciate)
        return new crmFormToInstanciate(context);
}
export function initForm(target: FormBase, propertyKey: string, descriptor: PropertyDescriptor) {
    debugger;
    const originalMethod = descriptor.value;

    descriptor.value = function (context: Xrm.Events.EventContext) {
        target.context = context;
        EventManager.initEvents(context.getFormContext());

    };

    return descriptor;
}