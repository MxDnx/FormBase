import { FormBase } from "../formBase";

export function crmValue(arg: string) {
    return function (target: FormBase, propertyKey: string) {

        Object.defineProperty(target, propertyKey, {
            get() {
                if (!target.FormContext)
                    return null;

                return target.FormContext.getAttribute<any>(arg);
            }
        });
    };
}