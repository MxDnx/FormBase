import { FormBase } from "../formBase";
import { XrmMockGenerator } from 'xrm-mock';
import { onLoad } from "../decorators/onLoad";

describe('FormBase', () => {
    test('initForm should initiate FormBase.context', () => {

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();

        let formBase = new FormBase();
        formBase.initForm(eventContext);
        expect(formBase.context).toBeDefined();
    });

    test('event "OnLoad" should display Start and Stop info', () => {

        class TestForm extends FormBase {
            appName: string = "TST";

            constructor() {
                super();
            }
            @onLoad
            testOnLoad() {

            }
        }

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();

        let formBase = new TestForm();
        formBase.initForm(eventContext);


    });

});