import { startStop } from "./decorators/startStop";
import { onLoad } from "./decorators/onLoad";
import { crmValue } from "./decorators/crmValue";
import { onChange } from "./decorators/onChange";
import { EventManager } from "./event-management/eventManager";
import { initForm } from "./decorators/initForm";
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

    /**
     * Inits form
     * @param context 
     */
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
