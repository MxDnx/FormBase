import { FormBase } from "../formBase";

export function crmValue(arg: string) {
    return function (target: any, propertyKey: string) {

        Object.defineProperty(target, propertyKey, {
            get: () => {
                if (!target.formContext)
                    return null;

                return ""// target.formContext.getAttribute<any>(arg);
            }
        });
    };
}