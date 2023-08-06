import { startStop } from "./decorators/startStop";
import { onLoad } from "./decorators/onLoad";
import { crmValue } from "./decorators/crmValue";
import { onChange } from "./decorators/onChange";
import { EventManager } from "./event-management/eventManager";

export class FormBase {

    appName: string = "[BaseForm]";
    context!: Xrm.Events.EventContext;
    private localContext!: Xrm.Events.EventContext;

    constructor() {

    }

    get formContext() {
        return this.localContext.getFormContext();
    }

    public initForm(context: Xrm.Events.EventContext) {
        this.context = context;
        this.localContext = context;
        EventManager.initEvents(context.getFormContext());
    }
}