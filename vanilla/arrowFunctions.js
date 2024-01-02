"use strict";

// a shorter way to write functions
let sum = (a, b) => a + b;

console.log(sum(1, 1));

// multiline Arrow Function
let squareRoot = (n) => {
    let exp = 1 / 2;
    return n ** exp;
};

console.log(squareRoot(9));
