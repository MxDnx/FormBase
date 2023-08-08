import { LogManager } from "../log-management/logManager";

module mx {
    export function startStop(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {

            LogManager.logInfo(`Start function '${propertyKey}'`);

            const result = originalMethod.apply(this, args);

            LogManager.logInfo(`End function '${propertyKey}'`);

            return result;
        };

        return descriptor;
    }
}