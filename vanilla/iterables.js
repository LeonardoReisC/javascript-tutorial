"use strict";

// Symbol.iterator: makes an object iterable
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;

        // must return an iterator with method next()
        return this;
    },
    next() {
        // must return { done: Boolean, value: any }
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    },
};

for (let num of range) {
    console.log(num);
}

// Calling an iterator explicitly
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// Array.from(): takes an iterable or array-like value and makes a real array
let arr = Array.from(range);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
