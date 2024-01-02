"use strict";

// dynamically typed
let variable = "Hello";
variable = 1;

// Number: integers and floating numbers
let n = 123;
n = 12.345;
n = Infinity; // 1 / 0
n = -Infinity;
n = NaN; // represents a computational error
console.log(typeof n);

// BigInt: great numbers with precision errors
const BIG = 1234567890123456789012345678901234567890n;

console.log(typeof BIG);

// Strings
let nickname = "Leo";
let message = `Hello, ${nickname}!`; // backticks

console.log(typeof message);

// Boolean
let yes = true;
let no = false;
console.log(typeof no);

/*
    Null: is not a reference to a non-existing object or a null 
    pointer but represents "nothing", "empty", "value unknown"  
*/
let age = null;
console.log(typeof age);

// Undefined: value not assigned
let a;
console.log(typeof a);
