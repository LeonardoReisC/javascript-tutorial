"use strict";

// OR: returns the first truthy or last falsy
console.log(null || 0 || 3 || undefined || false); // 3
console.log(null || 0 || "" || false || undefined); // undefined

// AND: returns the first falsy or last truthy
console.log(1 && null && true && "Leo"); // null
console.log("Leo" && true && 1); // 1

// NOT
console.log(!true); // false
console.log(!0); // true

// boolean conversion, same as Boolean()
let yes = !!"yes";
console.log(yes); // true

// Nullish coalescing: returns the first defined or last not defined(null/undefined)
let user;

console.log(user ?? "Empty"); // "Empty"
