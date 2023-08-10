import { crmValue } from "crm365-baseform/decorators/crmValue"
import { onLoad } from "crm365-baseform/decorators/onLoad";
import { onChange } from "crm365-baseform/decorators/onChange"
import { startStop } from "crm365-baseform/decorators/startStop"
import { FormBase } from "crm365-baseform//formBase";


export class AccountForm extends FormBase {


    @crmValue("name")
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad //--> will be automatically added to the onLoadEvent
    onLoad() {
        
    }

    @startStop
    basicFunction() {
        alert("StartStop");
    }

    @onChange("name")
    onChangeName() {

    }
}

export var accountForm = new AccountForm();

