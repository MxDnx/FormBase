export function testDeco(lol: any, kikoo: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: string[]) {


    };

    return descriptor;
}