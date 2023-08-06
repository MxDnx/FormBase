export var crmFormToInstanciate: new (context: Xrm.Events.EventContext) => any | undefined;

// Fonction de décoration pour enregistrer et décorer la classe
export function crmFormClass<T extends { new(context: Xrm.Events.EventContext): any }>(constructor: T): T {
    crmFormToInstanciate = constructor;
    return constructor;
}