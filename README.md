Other technology needed to make it work:

- webpack:https://webpack.js.org/
- sparkl http://www.sparklexrm.com/s/default.html

check the BaseFormExample project 

What I did:
- create a typescript project
- npm i typescript webpack webpack-cli ts-loader crm365-baseform
- install spkl
    - create a visual studio project  
    - install NuGet\Install-Package spkl -Version 1.0.440
    - copy paste spklTools folder to the root folder of the project
    - copy pase deployment-webresource.bat
    - update the first line of the bat file: (set package_root=.\spklTools)
- copy paste webpack.config.js to your project
- configure spkl.json
- configure package.json to add script to 
    - create webpack bundle for each file you want to upload to CRM.
    - call webresource.bat to send the file to CRM  

```Typescript
@crmFormClass //instantiate an object of the class.
export class AccountForm extends FormBase {


    @crmValue("name") // equivalent: context.formContext.getAttribute<any>("name");
    name!: Xrm.Attributes.Attribute<string>;

    @onLoad //=> Trigger when the form is loading (you can have several onload event
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
```

- In the CRM Form Configuration, create an onload event and type the function: "initCrmForm". Nothing more
