import { EventTime } from "../Types/eventTime";
import { EventType } from "../Types/eventTypes";
import { FormBase } from "../formBase";
import { LogManager } from "../log-management/logManager";

export class EventManager {

    static onLoadEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();
    static onChangeEvents: Array<onChangeEvent> = new Array<onChangeEvent>();
    static onSaveEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();
    static onPostSaveEvents: Array<(event: Xrm.Events.EventContext) => void> = new Array<(event: Xrm.Events.EventContext) => void>();

    formBase: FormBase;

    constructor(formBase: FormBase) {
        this.formBase = formBase;
    }

    addEventDecorator(formBase: FormBase, functionName: string, descriptor: PropertyDescriptor, eventType: EventType) {
        const originalMethod = descriptor.value;

        let _this = this;

        descriptor.value = function (...args: any[]) {

            _this.logEvent(eventType, EventTime.Start, functionName);

            const result = originalMethod.apply(formBase, args);

            _this.logEvent(eventType, EventTime.End, functionName);

            return result;
        }
    }

    private logEvent(eventType: EventType, eventTime: EventTime, functionName: string) {
        LogManager.logCaller(this.formBase.constructor.name, `${eventTime} ${eventType} Event - function: '${functionName}'`);
    }

    static initEvents(formContext: Xrm.FormContext) {

        LogManager.logInfo("Load OnChange Events");
        EventManager.onChangeEvents.forEach(onChangeEvent => {
            formContext.getAttribute(onChangeEvent.attributeName).addOnChange(onChangeEvent.callback);
        });

        LogManager.logInfo("Load OnSave Events");
        EventManager.onSaveEvents.forEach(onSaveEvent => {
            formContext.data.entity.addOnSave(onSaveEvent);
        });

        LogManager.logInfo("Load OnPostSave Events");
        EventManager.onPostSaveEvents.forEach(onPostSaveEvent => {
            formContext.data.entity.addOnPostSave(onPostSaveEvent);
        });

        LogManager.logInfo("Load OnChange Events");
        EventManager.onLoadEvents.forEach(onLoadEvent => {
            formContext.data.addOnLoad(onLoadEvent)
        });
    }
}

interface onChangeEvent {
    attributeName: string,
    callback: (event: Xrm.Events.EventContext) => void
}
