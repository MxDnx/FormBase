import { FormBase } from "../formBase";


describe('FormBase', () => {
    test('initForm should initiate FormBase.context', () => {
        let formBase = new FormBase();
        formBase.initForm()
        expect(() => {
            let formBase = new FormBase();
            formBase.initForm();
        }).toThrow(Error);
    });


});