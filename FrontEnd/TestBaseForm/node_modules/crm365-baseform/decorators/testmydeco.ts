export function testDeco(attributeName: string) {

    return function (formBase: any, functionName: string, descriptor: PropertyDescriptor) {


        return descriptor;
    }

}
