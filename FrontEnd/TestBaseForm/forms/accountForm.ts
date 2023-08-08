import { crmValue } from "../node_modules/crm365-baseform/decorators/crmValue"
import { onLoad } from "../node_modules/crm365-baseform/decorators/onLoad"
import { onChange } from "../node_modules/crm365-baseform/decorators/onChange"
import { FormBase } from "../node_modules/crm365-baseform/formBase";


export class AccountForm extends FormBase {


    @crmValue("name")
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad
    aaa() {
        alert("OnLoad " + this.formName);
    }

    @onChange("name")
    xxx() {

        alert("change " + this.name.getValue());
    }
}

export var accountForm = new AccountForm();

