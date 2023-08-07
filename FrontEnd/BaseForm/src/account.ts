import { onChange } from "./decorators/onChange";
import { onLoad } from "./decorators/onLoad";
import { FormBase } from "./formBase";

export class AccountForm extends FormBase {
    constructor() {

        super();


    }
    @onLoad
    test() {
        alert("kikoo");
    }

    @onChange("name")
    ch() {
        alert("change");
    }
}

export var accountForm = new AccountForm();

