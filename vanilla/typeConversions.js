"use strict";

// String Conversion
let a = true;
a = String(a);
console.log(typeof a);

/** Numeric Conversion
 * undefined -> NaN
 * null -> 0
 * true/false -> 1/0
 * string -> 0 if empty, NaN if error, n otherwise(spaces, \t, \n etc are removed, firstly)
 */
let num = Number("   123   "); // explicit conversion

let age = "6" / "2"; // automatic conversion
console.log(typeof age);

/**
 * Boolean Conversion
 * falsy values -> false
 * truthy values -> true
 */
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
