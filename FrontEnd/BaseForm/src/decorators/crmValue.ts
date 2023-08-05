import { FormBase } from "../formBase";

export function crmValue(arg: string,) {
    return function (target: any, propertyKey: string) {
        return;
        return FormBase.FormContext.getAttribute<any>(arg);
    };
}