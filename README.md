Other technology needed to make it work:

- webpack:https://webpack.js.org/
- sparkl http://www.sparklexrm.com/s/default.html

check the BaseFormExample project 

How to:
- create a typescript project
- npm i crm365-baseform
- ..


@
export class AccountForm extends FormBase {


    @crmValue("name") // equivalent: context.formContext.getAttribute<any>("name");
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad //=> Trigger when the form is loading
    onLoad() {

    }

    @startStop // Add Start and stop in the console.log
    basicFunction() {
        this.formContext //we can directly access the formContext
    }

    @onChange("name") // Trigger when name field is updated
    onChangeName(context) { //if current context is needed, it can be passed as parameter to access eventArgs info

    }

}

export var accountForm = new AccountForm();

