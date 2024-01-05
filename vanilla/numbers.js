"use strict";

// Representation
let billion = 1000000000;
billion = 1_000_000_000;
billion = 1e9;

// hexadecimal
let hex = 0xff;
console.log(hex); // 255

// octal
let octal = 0o377;
console.log(octal); // 255

// binary
let bin = 0b11111111;
console.log(bin); // 255

// toString(base): returns numeric representation in "base" numeral system
console.log((255).toString(16)); // ff

// Rounding
const PI = 3.1415;
console.log(Math.floor(PI)); // 3
console.log(Math.ceil(PI)); // 4
console.log(Math.round(PI)); // 3
console.log(Math.trunc(PI)); // 3
console.log(PI.toFixed(5)); // 3.14150

/**
 * isNaN(): check if the argument(converted to number) is NaN
 * Number.isNaN(): check if the argument is a number and NaN
 *
 * isFinite(): check if the argument(converted to number) is not NaN/+-Infinity
 * Number.isFinite(): check if the argument is a number and not Nan/+-Infinity
 */
console.log(isNaN("str")); // true
console.log(Number.isNaN("str" / 2)); // true

console.log(isFinite("str")); // false
console.log(Number.isFinite("str" / 2)); // false

// parseInt/parseFloat: read a digit from a string as far as possible
console.log(parseInt("100px")); // 100
console.log(parseInt("3.14")); // 3
console.log(parseInt("0xff", 16)); // 255
console.log(parseInt("ff", 16)); // 255

console.log(parseFloat("12.5em")); // 12.5
console.log(parseFloat("3.14.15")); // 3.14
