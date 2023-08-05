import { startStop } from "./decorators/startStop";
import { onLoad } from "./decorators/onLoad";
import { crmValue } from "./decorators/crmValue";
import { onChange } from "./decorators/onChange";
import { EventManager } from "./event-management/eventManager";

export class FormBase {

    static appName: string = "[BaseForm]";
    static context: Xrm.Events.EventContext;
    private eventManager: EventManager;

    @crmValue("firstname")
    firstname!: Xrm.Attributes.Attribute<string>;
    @crmValue("lastname")
    lastname!: Xrm.Attributes.Attribute<string>;

    constructor() {
        this.eventManager = new EventManager();
        // this.eventManager.initEvents();

    }

    static get FormContext() {

        return FormBase.context.getFormContext();
    }

    @onLoad
    public initForm() {

    }

    @onChange("lastname")
    public lastNameOnChange() {

    }


}

let b = new FormBase();
b.initForm();