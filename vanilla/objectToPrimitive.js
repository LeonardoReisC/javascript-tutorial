"use strict";

/**
 * Hints
 * "string": for an object-to-string conversion
 * "number": for an object-to-number conversion
 * "default": when the operator is "not sure" what type to expect
 * e.g. binary +(concat/addition), == (string/numbers)
 *
 * All built-in objects except for one case (Date object) implement "default"
 * conversion the same way as "number".
 */

// Symbol.toPrimitive: it’s used for all hints, and no more methods are needed
let user = {
    name: "Leonardo",
    money: 100,

    [Symbol.toPrimitive](hint) {
        console.log(hint);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
};
console.log(String(user)); // {name: "Leonardo"}
console.log(+user); // 100

// toString/valueOf
user = {
    name: "Leonardo",
    money: 100,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // for hint="number" or "default"
    valueOf() {
        return this.money;
    },
};
console.log(String(user)); // {name: "Leonardo"}
console.log(+user); // 100
