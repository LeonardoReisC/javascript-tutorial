"use strict";

// Declaration
let arr = new Array(2); // array of length = 2
console.log(arr); // [ <2 empty items> ]

let fruits = ["apple", "strawberry", "grape"];

// Acessing an element
console.log(fruits[0]); // apple
console.log(fruits.at(-1)); // grape

// Replacing an element
fruits[1] = "pineapple";
console.log(fruits[1]); // pineapple

// Adding a new element
fruits[fruits.length] = "watermelon";
console.log(fruits); // [ 'apple', 'pineapple', 'grape', 'watermelon' ]

// shift: extract the first element
console.log(fruits.shift()); // apple

// unshift: add the element to the beginning
fruits.unshift("cherry");
console.log(fruits);

// pop: pop the last element
console.log(fruits.pop()); // watermelon

// push: push to the end
fruits.push("passion fruit");
console.log(fruits); // [ 'cherry', 'pineapple', 'grape', 'passion fruit' ]

// for..of loop: walk over all elements
for (let elem of fruits) {
    console.log(elem);
}

// Length is writable
fruits.length = 2; // truncate to 2 elements
console.log(fruits); // [ 'cherry', 'pineapple' ]

/**
 * toString
 * arrays don't have Symbol.toPrimitive neither valueOf, only toString so
 * [] -> ""
 * [1] -> "1"
 * [1,2] -> "1,2" (comma-separated)
 */
console.log([] + 1); // 1
console.log([1] + 1); // 11
console.log([1, 2] + 1); // 1,21
