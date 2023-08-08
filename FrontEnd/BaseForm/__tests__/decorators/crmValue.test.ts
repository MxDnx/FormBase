import { XrmMockGenerator } from '../../node_modules/xrm-mock/dist/index';
import { crmFormClass } from '../../src/decorators/crmFormClass';
import { crmValue } from '../../src/decorators/crmValue';
import { FormBase, initCrmForm } from '../../src/formBase';




describe('crmValue', () => {
    test('initForm should initiate FormBase.context', () => {

        @crmFormClass
        class TestCrmValueForm extends FormBase {
            appName = "mxtest";
            @crmValue("mx_test")
            mx_test!: Xrm.Attributes.Attribute<string>;


            constructor() {
                super();
            }
            test() {
                var a = this.formContext;
            }
        }

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();
        const testString = "kikoo"
        XrmMockGenerator.Attribute.createString("mx_test", testString);

        let testForm: TestCrmValueForm = new TestCrmValueForm();
        testForm.test();

        let result = testForm.mx_test.getValue();

        expect(result).toEqual(testString);
    });
});