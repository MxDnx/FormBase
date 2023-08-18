import { EncodingMock, XrmMockGenerator } from '../../node_modules/xrm-mock/dist/index';
import { crmFormClass, crmFormInstance, initCrmForm } from '../../src/decorators/crmFormClass';
import { crmValue } from '../../src/decorators/crmValue';
import { FormBase, } from '../../src/formBase';

describe('crmFormClass', () => {

    test('crmFormClass should create a "TestcrmFormClassForm" object ', () => {

        @crmFormClass
        class TestcrmFormClassForm extends FormBase {
            appName = "mxtest";
            constructor() {
                super();
                console.log("Constructor Is Called")
            }

        }

        expect(crmFormInstance).toBeDefined();
    });
});