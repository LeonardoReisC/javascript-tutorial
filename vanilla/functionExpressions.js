"use strict";

// created when the execution reaches it and is usable only from that moment
let sayHi = function () {
    console.log("Hi!");
};

let sayHi2 = sayHi; // copy

sayHi(); // Hi!
sayHi2(); // Hi!

// Callback Functions
function run(f, a) {
    return f(a);
}

function square(a) {
    return a ** 2;
}

let squareOf2 = function () {
    return run(square, 2);
};

console.log(squareOf2()); // 4
