import { XrmMockGenerator } from '../../node_modules/xrm-mock/dist/index';
import { crmValue } from '../../src/decorators/crmValue';
import { FormBase, } from '../../src/formBase';

describe('crmValue', () => {
    test('initForm should initiate FormBase.context', () => {

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