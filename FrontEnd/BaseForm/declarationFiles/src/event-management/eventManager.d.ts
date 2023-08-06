/// <reference types="xrm" />
import { EventType } from "../Types/eventTypes";
import { FormBase } from "../formBase";
export declare class EventManager {
    static onLoadEvents: Array<(event: Xrm.Events.EventContext) => void>;
    static onChangeEvents: Array<onChangeEvent>;
    static onSaveEvents: Array<(event: Xrm.Events.EventContext) => void>;
    static onPostSaveEvents: Array<(event: Xrm.Events.EventContext) => void>;
    formBase: FormBase;
    constructor(formBase: FormBase);
    addEventDecorator(formBase: FormBase, functionName: string, descriptor: PropertyDescriptor, eventType: EventType): void;
    private logEvent;
    static initEvents(formContext: Xrm.FormContext): void;
}
interface onChangeEvent {
    attributeName: string;
    callback: (event: Xrm.Events.EventContext) => void;
}
export {};
//# sourceMappingURL=eventManager.d.ts.map