"use strict";

// Rest Parameters '...': a function can be called with any number of args
function sum(...numbers) {
    let sum = 0;

    for (let number of numbers) sum += number;

    return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// the 'arguments' variable: contains all args by their index
function showName() {
    return arguments[0] + " " + arguments[1];
}

console.log(showName("Leonardo", "Reis")); // Leonardo Reis
console.log(showName("Leonardo")); // Leonardo undefined

// Spread Syntax: expands an iterable into a list of args
let arr1 = [-1, 2, -3];
let arr2 = [-4, 5, -6];

console.log(Math.max(...arr1, 1, ...arr2, -6)); // 5

// can be used to merge arrays
arr1 = [1, 2];
arr2 = [4, 5];

let merged = [0, ...arr1, 3, ...arr2];
console.log(merged); // [ 0, 1, 2, 3, 4, 5 ]

// Copy an array/object
let arr = [1, 2, 3];
let arrCopy = [...arr]; // copied
console.log(arrCopy); // [ 1, 2, 3 ]

let obj = { name: "Leonardo", age: 20 };
let objCopy = { ...obj }; // copied
console.log(objCopy); // { name: 'Leonardo', age: 20 }
