import { FormBase } from "../src/formBase";

import { onLoad } from "../src/decorators/onLoad";
import { crmFormClass } from "../src/decorators/crmFormClass";
import { EventContextMock, XrmMockGenerator } from "../node_modules/xrm-mock/dist/index";
import { EventType } from "../src/Types/eventTypes";
import { EventTime } from "../src/Types/eventTime";


describe('FormBase', () => {


    class TestForm extends FormBase {

        constructor() {
            super();
        }
        @onLoad
        testOnLoad(event: Xrm.Events.EventContext) {
            return true
        }
        test() {

        }
    }

    var xrmMock;
    var eventContext: EventContextMock;
    var testForm: TestForm;


    beforeAll(() => {
        xrmMock = XrmMockGenerator.initialise();
        eventContext = XrmMockGenerator.getEventContext();

    })

    test('initForm should initiate FormBase.context', () => {
        testForm = new TestForm();
        testForm.initCrmForm(eventContext);
        expect(testForm.context).toBeDefined();
    });

    test('formName should be the name of the class', () => {
        testForm = new TestForm();
        expect(testForm.formName).toEqual("TestForm");
    });

    test('event "OnLoad" should display Start and End log', () => {

        const logs: string[] = [];
        const logSpy = jest.spyOn(console, "log").mockImplementation(message => logs.push(message));

        testForm = new TestForm();
        testForm.testOnLoad(eventContext);

        expect(logs[0]).toContain(EventType.OnLoad);
        expect(logs[0]).toContain(EventTime.Start);
        expect(logs[0]).toContain(testForm.testOnLoad.name);

        expect(logs[1]).toContain(EventType.OnLoad);
        expect(logs[1]).toContain(EventTime.End);
        expect(logs[1]).toContain(testForm.testOnLoad.name);

        logSpy.mockRestore();
    });
});