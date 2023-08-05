import { FormBase } from "../formBase";

export class LogManager {
    static logInfo(message: string) {
        console.info(`[${FormBase.appName}] - ${message}`);
    }
}