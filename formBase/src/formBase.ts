import { initForm } from "./decorators/initForm";
import { crmFormClass, crmFormInstance, initCrmForm } from "./decorators/crmFormClass";

/**
 * Form base
 */
export class FormBase {

    /**
     * Context of the CRM form.
     */
    context!: Xrm.Events.EventContext;

    constructor() {

    }

    @initForm
    public initCrmForm(context: Xrm.Events.EventContext) {
        //The context is set via @initForm decorator
        //It's the only way to be able to use the @crmValue access the decorator.
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