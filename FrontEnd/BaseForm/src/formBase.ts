//import { initForm } from "./decorators/initForm";
import { crmFormClass, crmFormToInstanciate } from "./decorators/crmFormClass";
//import { initForm } from "./decorators/initForm";
import { EventManager } from "./event-management/eventManager";
import { initForm } from "./decorators/initForm";
import { onLoad } from "./decorators/onLoad";
import { getConstructorName } from "./helpers/classHelper";


/**
 * Form base
 */
export class FormBase {

    formName: string
    context!: Xrm.Events.EventContext;

    /**
     * Creates an instance of form base.
     * @param context 
     */
    constructor() {
        this.formName = getConstructorName(this.constructor);
    }

    @onLoad
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


}


