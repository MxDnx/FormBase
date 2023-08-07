declare module mxDnx
{
	const _default: {
	    preset: string;
	    testMatch: string[];
	    testPathIgnorePatterns: string[];
	    moduleFileExtensions: string[];
	    modulePathIgnorePatterns: string[];
	};
	export default _default;

	export {};

	/// <reference types="xrm" />
	/**
	 * Form base
	 */
	export class FormBase {
	    appName: string;
	    context: Xrm.Events.EventContext;
	    /**
	     * Creates an instance of form base.
	     * @param context
	     */
	    constructor(context: Xrm.Events.EventContext);
	    initContextViaDecorator(context: Xrm.Events.EventContext): void;
	    /**
	     * Gets form context
	     */
	    get formContext(): Xrm.FormContext;
	}
	/**
	 * Inits crm form
	 * @param context
	 * @returns
	 */
	export function initCrmForm(context: Xrm.Events.EventContext): any;
	export function initForm(target: FormBase, propertyKey: string, descriptor: any): any;

	export const EventTime: {
	    readonly Start: "Start";
	    readonly Stop: "Stop";
	};
	export type EventTime = typeof EventTime[keyof typeof EventTime];

	export const EventType: {
	    readonly OnLoad: "OnLoad";
	    readonly OnSave: "OnSave";
	    readonly OnChange: "OnChange";
	};
	export type EventType = typeof EventType[keyof typeof EventType];

	/// <reference types="xrm" />
	export var crmFormToInstanciate: new (context: Xrm.Events.EventContext) => any | undefined;
	export function crmFormClass<T extends {
	    new (context: Xrm.Events.EventContext): any;
	}>(constructor: T): T;

	import { FormBase } from "../formBase";
	export function crmValue(arg: string): (target: FormBase, propertyKey: string) => void;



	export function onChange(attributeName: string): (formBase: any, functionName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;

	import { FormBase } from "../formBase";
	export function onLoad(formBase: FormBase, functionName: string, descriptor: PropertyDescriptor): PropertyDescriptor;

	export {};

	/// <reference types="xrm" />
	import { EventType } from "../Types/eventTypes";
	import { FormBase } from "../formBase";
	export class EventManager {
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

	import { EventTime } from "../Types/eventTime";
	import { EventType } from "../Types/eventTypes";
	import { FormBase } from "../formBase";
	export class LogManager {
	    static logInfo(message: string): void;
	    static logCallerInfo(callerName: string, message: string): void;
	    static eventLogInfo(formBase: FormBase, eventType: EventType, eventTime: EventTime, functionName: string): void;
	}

}