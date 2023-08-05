import { crmValue } from '../../decorators/crmValue';
import { FormBase } from '../../formBase';
import { XrmMockGenerator } from 'xrm-mock';

class TestForm extends FormBase {

    @crmValue("mx_test")
    mx_test!: Xrm.Attributes.Attribute<string>;


    constructor() {
        super();
    }
}

describe('crmValue', () => {
    test('initForm should initiate FormBase.context', () => {

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();
        const testString = "kikoo"
        XrmMockGenerator.Attribute.createString("mx_test", testString);


        let testForm = new TestForm();
        testForm.initForm(eventContext);
        let result = testForm.mx_test.getValue();

        expect(result).toEqual(testString);
    });
});