import { crmFormClass } from "../src/decorators/crmFormClass";
import { onLoad } from "../src/decorators/onLoad";

@crmFormClass
class kikooForm extends mx.FormBase {
    appName = "kikooForm";
    constructor(context: Xrm.Events.EventContext) {
        super(context);
    }

    @onLoad
    onFormLoad() {
        this.context
    }


}