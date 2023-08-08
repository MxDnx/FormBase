import { crmValue } from "./decorators/crmValue";
import { onChange } from "./decorators/onChange";
import { onLoad } from "./decorators/onLoad";
import { FormBase } from "./formBase";

export class AccountForm extends FormBase {


    @crmValue("name")
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad
    test() {

    }

    @onChange("name")
    ch() {

        alert("change " + this.name.getValue());
    }
}

export var accountForm = new AccountForm();

