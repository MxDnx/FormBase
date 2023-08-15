export var crmFormInstance: any

export function crmFormClass(crmFormTarget: any) {
    crmFormInstance = new crmFormTarget();
}

export function initCrmForm(context: Xrm.Events.EventContext) {

    crmFormInstance.initCrmForm(context);

}