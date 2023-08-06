/// <reference types="xrm" />
export declare var crmFormToInstanciate: new (context: Xrm.Events.EventContext) => any | undefined;
export declare function crmFormClass<T extends {
    new (context: Xrm.Events.EventContext): any;
}>(constructor: T): T;
//# sourceMappingURL=crmFormClass.d.ts.map