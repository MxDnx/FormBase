export function getConstructorName(constructor: Function): string {
    const funcNameRegex = /function ([^\(]*)/;
    const constructorString = constructor.toString();
    const matches = funcNameRegex.exec(constructorString);

    if (matches && matches.length > 1) {
        return matches[1].trim();
    }

    return "Unknown";
}