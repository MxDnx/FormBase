import { crmValue } from "crm365-baseform/decorators/crmValue"
import { onLoad } from "crm365-baseform/decorators/onLoad";
import { onChange } from "crm365-baseform/decorators/onChange"
import { startStop } from "crm365-baseform/decorators/startStop"
import { FormBase } from "crm365-baseform//formBase";


export class AccountForm extends FormBase {


    @crmValue("name")
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad
    coucou() {
        alert("OnLoad");
        this.testStartStop();
    }

    @startStop
    testStartStop() {
        alert("StartStop");
    }

    @onChange("name")
    xxx() {

        alert("change " + this.name.getValue());
    }
}

export var accountForm = new AccountForm();

