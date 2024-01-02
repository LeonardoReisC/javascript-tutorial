"use strict";

// Comparison of different types: convert the values to numbers
let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true, 0 == 0

/**
 * Special Rule with null and undefined
 * null == ?: always false, except for undefined
 * undefined <op> ?: always false
 * */
console.log(null == undefined); // true

// Strict Equality: checks equality without type convertion
console.log("" === 0); // false
