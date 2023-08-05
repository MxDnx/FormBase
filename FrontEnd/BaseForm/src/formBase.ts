import { startStop } from "./decorators/startStop";
import { onLoad } from "./decorators/onLoad";
import { crmValue } from "./decorators/crmValue";
import { onChange } from "./decorators/onChange";
import { EventManager } from "./event-management/eventManager";

export class FormBase {

    static appName: string = "[BaseForm]";
    context!: Xrm.Events.EventContext;
    private eventManager: EventManager;

    constructor() {
        this.eventManager = new EventManager();
    }

    get FormContext() {
        return this.context.getFormContext();
    }

    @onLoad
    public initForm(context: Xrm.Events.EventContext) {
        this.eventManager.initEvents(context.getFormContext());
    }
}