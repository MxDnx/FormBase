import { crmFormClass } from '../../decorators/crmFormClass';
import { crmValue } from '../../decorators/crmValue';
import { FormBase, initCrmForm } from '../../formBase';
import { XrmMockGenerator } from 'xrm-mock';



describe('crmValue', () => {
    test('initForm should initiate FormBase.context', () => {

        @crmFormClass
        class TestCrmValueForm extends FormBase {
            appName = "mxtest";
            @crmValue("mx_test")
            mx_test!: Xrm.Attributes.Attribute<string>;


            constructor(context: Xrm.Events.EventContext) {
                super(context);
            }
            test() {
                var a = this.formContext;
            }
        }

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();
        const testString = "kikoo"
        XrmMockGenerator.Attribute.createString("mx_test", testString);

        let testForm: TestCrmValueForm = initCrmForm(eventContext);
        testForm.test();

        let result = testForm.mx_test.getValue();

        expect(result).toEqual(testString);
    });
});