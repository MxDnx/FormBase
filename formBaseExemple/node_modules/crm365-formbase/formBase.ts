import { initForm } from "./decorators/initForm";
import { crmFormClass, crmFormInstance, initCrmForm } from "./decorators/crmFormClass";

/**
 * Form base
 */
export class FormBase {


    context!: Xrm.Events.EventContext;

    /**
     * Creates an instance of form base.
     * @param context 
     */
    constructor() {

    }

    @initForm
    public initCrmForm(context: Xrm.Events.EventContext) {
        //the context is set via @initForm decorator
        //it's the only way to be able to use the @crmValue decorator
    }

    /**
     * Gets form context
     */
    get formContext() {
        return this.context.getFormContext();
    }

    get formName() {
        return this.constructor.name;
    }
}