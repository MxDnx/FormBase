
@mxDnx.crmFormClass
class accountForm extends mxDnx.FormBase {
    appName = "kikooForm";
    constructor(context: Xrm.Events.EventContext) {
        super(context);
        console.warn("je suis dans le constructeur");
    }

    @mxDnx.onLoad
    onFormLoad() {
    }
}