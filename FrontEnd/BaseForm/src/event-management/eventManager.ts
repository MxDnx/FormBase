import { FormBase } from "../formBase";
import { LogManager } from "../log-management/logManager";


export class EventManager {

    static onLoadEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();
    static onChangeEvents: Array<onChangeEvent> = new Array<onChangeEvent>();
    static onSaveEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();
    static onPostSaveEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();

    constructor() {

    }

    public initEvents() {

        LogManager.logInfo("Load OnChange Events");
        EventManager.onChangeEvents.forEach(onChangeEvent => {
            FormBase.FormContext.getAttribute(onChangeEvent.attributeName).addOnChange(onChangeEvent.callback);
        });

        LogManager.logInfo("Load OnSave Events");
        EventManager.onSaveEvents.forEach(onSaveEvent => {
            FormBase.FormContext.data.entity.addOnSave(onSaveEvent);
        });

        LogManager.logInfo("Load OnPostSave Events");
        EventManager.onPostSaveEvents.forEach(onPostSaveEvent => {
            FormBase.FormContext.data.entity.addOnPostSave(onPostSaveEvent);
        });

        LogManager.logInfo("Load OnChange Events");
        EventManager.onLoadEvents.forEach(onLoadEvent => {
            FormBase.FormContext.data.addOnLoad(onLoadEvent)
        });


    }
}

interface onChangeEvent {
    attributeName: string,
    callback: (event: Xrm.Events.EventContext) => void
}
