import { crmValue } from "crm365-formbase/decorators/crmValue"
import { onLoad } from "crm365-formbase/decorators/onLoad";
import { onChange } from "crm365-formbase/decorators/onChange"
import { startStop } from "crm365-formbase/decorators/startStop"
import { crmFormClass, crmFormInstance, initCrmForm } from "crm365-formbase/decorators/crmFormClass"
import { FormBase } from "crm365-formbase/formBase";
export { crmFormInstance, initCrmForm }

@crmFormClass
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

