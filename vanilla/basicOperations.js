"use strict";

// String concatenation with binary +
let s = "Leo" + "nardo";
console.log(s); // Leonardo

/**
 * if any of the operands is a string, then the other is converted to string too
 * for the other operators, all operands are converted to numbers
 */
console.log("1" + 2); // 12
console.log(2 + 2 + "1"); // 41
console.log(6 - "2"); // 3

// Numeric conversion with unary +
console.log(+true); // 1
console.log(+""); // 0

// Assignment: is also an operator and returns the value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0
