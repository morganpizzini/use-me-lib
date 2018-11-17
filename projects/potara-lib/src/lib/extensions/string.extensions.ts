/**
 * interfaccia globale per aggiungere funzione come extension method
 */
// interface String {
//     dotDotDot: (space?: number) => string;
//     toUpperFirst: () => string;
// }

declare global {
    interface String {
        dotDotDot(space?: number): string;
        toUpperFirst(): string;
    }
}

/**
 * Extension method dotDotDot
 */
String.prototype.dotDotDot = function (space: number = 10) {
    if (!this) {
        return '';
    }
    return this.length > space + 3 ? `${this.substr(0, space)}...` : this;
};

/**
 * Extension method toUpperFirst
 */
String.prototype.toUpperFirst = function () {
    if (!this) {
        return '';
    }
    return this.replace(/^\w/, c => c.toUpperCase());
};

export { };
