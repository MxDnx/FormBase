/*import { FormBase, initCrmForm } from "../formBase";
import { XrmMockGenerator } from 'xrm-mock';
import { onLoad } from "../decorators/onLoad";
import { crmFormClass } from "../decorators/crmFormClass";

describe('FormBase', () => {
    test('initForm should initiate FormBase.context', () => {

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();

        let formBase = new FormBase(eventContext);

        expect(formBase.context).toBeDefined();
    });

    test('event "OnLoad" should display Start and Stop info', () => {
        @crmFormClass
        class TestForm extends FormBase {
            appName: string = "TST";
            e: string = "aa";

            constructor(context: Xrm.Events.EventContext) {
                super(context);
            }
            @onLoad
            testOnLoad() {
            }
            l() { }
        }

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();
        let testForm: TestForm = initCrmForm(eventContext);

        testForm.testOnLoad();

    });

});*/