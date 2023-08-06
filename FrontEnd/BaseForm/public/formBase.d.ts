declare module mx
{
	{"version":3,"file":"jest.config.d.ts","sourceRoot":"","sources":["../jest.config.ts"],"names":[],"mappings":";;;;;;;AAAA,wBAeE"}

	const _default: {
	    preset: string;
	    testMatch: string[];
	    testPathIgnorePatterns: string[];
	    moduleFileExtensions: string[];
	    modulePathIgnorePatterns: string[];
	};
	export default _default;
	//# sourceMappingURL=jest.config.d.ts.map

	{"version":3,"file":"formBase.d.ts","sourceRoot":"","sources":["../../src/formBase.ts"],"names":[],"mappings":";AAIA;;GAEG;AACH,qBAAa,QAAQ;IAEjB,OAAO,EAAE,MAAM,CAAgB;IAC/B,OAAO,EAAG,GAAG,CAAC,MAAM,CAAC,YAAY,CAAC;IAGlC;;;OAGG;gBACS,OAAO,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY;IAK5C,uBAAuB,CAAC,OAAO,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY;IAKxD;;OAEG;IACH,IAAI,WAAW,oBAEd;CACJ;AAED;;;;GAIG;AACH,wBAAgB,WAAW,CAAC,OAAO,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,OAG3D;AAED,wBAAgB,QAAQ,CAAC,MAAM,EAAE,QAAQ,EAAE,WAAW,EAAE,MAAM,EAAE,UAAU,EAAE,GAAG,OAU9E"}

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
	//# sourceMappingURL=formBase.d.ts.map

	{"version":3,"file":"eventTime.d.ts","sourceRoot":"","sources":["../../../src/Types/eventTime.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,SAAS;;;CAGZ,CAAC;AAEX,MAAM,MAAM,SAAS,GAAG,OAAO,SAAS,CAAC,MAAM,OAAO,SAAS,CAAC,CAAC"}

	export const EventTime: {
	    readonly Start: "Start";
	    readonly Stop: "Stop";
	};
	export type EventTime = typeof EventTime[keyof typeof EventTime];
	//# sourceMappingURL=eventTime.d.ts.map

	{"version":3,"file":"eventTypes.d.ts","sourceRoot":"","sources":["../../../src/Types/eventTypes.ts"],"names":[],"mappings":"AACA,eAAO,MAAM,SAAS;;;;CAIZ,CAAC;AAEX,MAAM,MAAM,SAAS,GAAG,OAAO,SAAS,CAAC,MAAM,OAAO,SAAS,CAAC,CAAC"}

	export const EventType: {
	    readonly OnLoad: "OnLoad";
	    readonly OnSave: "OnSave";
	    readonly OnChange: "OnChange";
	};
	export type EventType = typeof EventType[keyof typeof EventType];
	//# sourceMappingURL=eventTypes.d.ts.map

	{"version":3,"file":"formBase.test.d.ts","sourceRoot":"","sources":["../../../src/__tests__/formBase.test.ts"],"names":[],"mappings":""}

	export {};
	//# sourceMappingURL=formBase.test.d.ts.map

	{"version":3,"file":"crmValue.test.d.ts","sourceRoot":"","sources":["../../../../src/__tests__/decorators/crmValue.test.ts"],"names":[],"mappings":""}

	export {};
	//# sourceMappingURL=crmValue.test.d.ts.map

	{"version":3,"file":"crmFormClass.d.ts","sourceRoot":"","sources":["../../../src/decorators/crmFormClass.ts"],"names":[],"mappings":";AAAA,eAAO,IAAI,oBAAoB,EAAE,KAAK,OAAO,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,KAAK,GAAG,GAAG,SAAS,CAAC;AAG3F,wBAAgB,YAAY,CAAC,CAAC,SAAS;IAAE,KAAI,OAAO,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,GAAG,GAAG,CAAA;CAAE,EAAE,WAAW,EAAE,CAAC,GAAG,CAAC,CAGxG"}

	/// <reference types="xrm" />
	export var crmFormToInstanciate: new (context: Xrm.Events.EventContext) => any | undefined;
	export function crmFormClass<T extends {
	    new (context: Xrm.Events.EventContext): any;
	}>(constructor: T): T;
	//# sourceMappingURL=crmFormClass.d.ts.map

	{"version":3,"file":"crmValue.d.ts","sourceRoot":"","sources":["../../../src/decorators/crmValue.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,QAAQ,EAAE,MAAM,aAAa,CAAC;AAEvC,wBAAgB,QAAQ,CAAC,GAAG,EAAE,MAAM,YACP,QAAQ,eAAe,MAAM,UAWzD"}

	import { FormBase } from "../formBase";
	export function crmValue(arg: string): (target: FormBase, propertyKey: string) => void;
	//# sourceMappingURL=crmValue.d.ts.map

	{"version":3,"file":"initForm.d.ts","sourceRoot":"","sources":["../../../src/decorators/initForm.ts"],"names":[],"mappings":""}

	//# sourceMappingURL=initForm.d.ts.map

	{"version":3,"file":"onChange.d.ts","sourceRoot":"","sources":["../../../src/decorators/onChange.ts"],"names":[],"mappings":"AAKA,wBAAgB,QAAQ,CAAC,aAAa,EAAE,MAAM,cAEf,GAAG,gBAAgB,MAAM,cAAc,kBAAkB,wBAUvF"}

	export function onChange(attributeName: string): (formBase: any, functionName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
	//# sourceMappingURL=onChange.d.ts.map

	{"version":3,"file":"onLoad.d.ts","sourceRoot":"","sources":["../../../src/decorators/onLoad.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,QAAQ,EAAE,MAAM,aAAa,CAAC;AAKvC,wBAAgB,MAAM,CAAC,QAAQ,EAAE,QAAQ,EAAE,YAAY,EAAE,MAAM,EAAE,UAAU,EAAE,kBAAkB,sBAQ9F"}

	import { FormBase } from "../formBase";
	export function onLoad(formBase: FormBase, functionName: string, descriptor: PropertyDescriptor): PropertyDescriptor;
	//# sourceMappingURL=onLoad.d.ts.map

	{"version":3,"file":"startStop.d.ts","sourceRoot":"","sources":["../../../src/decorators/startStop.ts"],"names":[],"mappings":""}

	export {};
	//# sourceMappingURL=startStop.d.ts.map

	{"version":3,"file":"eventManager.d.ts","sourceRoot":"","sources":["../../../src/event-management/eventManager.ts"],"names":[],"mappings":";AACA,OAAO,EAAE,SAAS,EAAE,MAAM,qBAAqB,CAAC;AAChD,OAAO,EAAE,QAAQ,EAAE,MAAM,aAAa,CAAC;AAGvC,qBAAa,YAAY;IAErB,MAAM,CAAC,YAAY,EAAE,KAAK,CAAC,CAAC,KAAK,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,KAAK,IAAI,CAAC,CAAyD;IAC7H,MAAM,CAAC,cAAc,EAAE,KAAK,CAAC,aAAa,CAAC,CAA8B;IACzE,MAAM,CAAC,YAAY,EAAE,KAAK,CAAC,CAAC,KAAK,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,KAAK,IAAI,CAAC,CAAyD;IAC7H,MAAM,CAAC,gBAAgB,EAAE,KAAK,CAAC,CAAC,KAAK,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,KAAK,IAAI,CAAC,CAAyD;IAEjI,QAAQ,EAAE,QAAQ,CAAC;gBAIP,QAAQ,EAAE,QAAQ;IAI9B,iBAAiB,CAAC,QAAQ,EAAE,QAAQ,EAAE,YAAY,EAAE,MAAM,EAAE,UAAU,EAAE,kBAAkB,EAAE,SAAS,EAAE,SAAS;IAmBhH,OAAO,CAAC,QAAQ;IAIhB,MAAM,CAAC,UAAU,CAAC,WAAW,EAAE,GAAG,CAAC,WAAW;CAsBjD;AAED,UAAU,aAAa;IACnB,aAAa,EAAE,MAAM,CAAC;IACtB,QAAQ,EAAE,CAAC,KAAK,EAAE,GAAG,CAAC,MAAM,CAAC,YAAY,KAAK,IAAI,CAAA;CACrD"}

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
	//# sourceMappingURL=eventManager.d.ts.map

	{"version":3,"file":"logManager.d.ts","sourceRoot":"","sources":["../../../src/log-management/logManager.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,oBAAoB,CAAC;AAC/C,OAAO,EAAE,SAAS,EAAE,MAAM,qBAAqB,CAAC;AAChD,OAAO,EAAE,QAAQ,EAAE,MAAM,aAAa,CAAC;AAEvC,qBAAa,UAAU;IACnB,MAAM,CAAC,OAAO,CAAC,OAAO,EAAE,MAAM;IAI9B,MAAM,CAAC,aAAa,CAAC,UAAU,EAAE,MAAM,EAAE,OAAO,EAAE,MAAM;IAGxD,MAAM,CAAC,YAAY,CAAC,QAAQ,EAAE,QAAQ,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,YAAY,EAAE,MAAM;CAG3G"}

	import { EventTime } from "../Types/eventTime";
	import { EventType } from "../Types/eventTypes";
	import { FormBase } from "../formBase";
	export class LogManager {
	    static logInfo(message: string): void;
	    static logCallerInfo(callerName: string, message: string): void;
	    static eventLogInfo(formBase: FormBase, eventType: EventType, eventTime: EventTime, functionName: string): void;
	}
	//# sourceMappingURL=logManager.d.ts.map

}