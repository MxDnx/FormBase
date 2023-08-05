import { FormBase } from "../formBase";
import { XrmMockGenerator } from 'xrm-mock';

describe('FormBase', () => {
    test('initForm should initiate FormBase.context', () => {

        const xrmMock = XrmMockGenerator.initialise();
        const eventContext = XrmMockGenerator.getEventContext();

        let formBase = new FormBase();
        formBase.initForm(eventContext);
        expect(formBase.context).toBeDefined();
    });
});