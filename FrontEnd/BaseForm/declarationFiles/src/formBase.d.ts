/// <reference types="xrm" />
/**
 * Form base
 */
export declare class FormBase {
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
export declare function initCrmForm(context: Xrm.Events.EventContext): any;
export declare function initForm(target: FormBase, propertyKey: string, descriptor: any): any;
//# sourceMappingURL=formBase.d.ts.map