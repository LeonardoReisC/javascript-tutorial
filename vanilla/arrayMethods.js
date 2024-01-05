"use strict";

// splice
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // [ 'I', 'JavaScript' ]

arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "play"); // remove 3 elems and replace with 2 others
console.log(arr); // [ "Let's", 'play', 'right', 'now' ]

arr = ["I", "study", "JavaScript"];
arr.splice(-1, 0, "a", "complex", "language", "called"); // without removals
console.log(arr); // [ 'I', 'study', 'a', 'complex', 'language', 'called', 'JavaScript' ]

// slice
arr = ["L", "e", "o", "n", "a", "r", "d", "o"];
console.log(arr.slice(0, 3)); // [ 'L', 'e', 'o' ]
console.log(arr.slice(-5)); // [ 'n', 'a', 'r', 'd', 'o' ]

// concat
arr = [1, 2];
console.log(arr.concat([3, 4], 5, [6])); // [ 1, 2, 3, 4, 5, 6 ]

let arrLike = {
    0: 3,
    1: 4,
    [Symbol.isConcatSpreadable]: true, // must have in array-like objects
    length: 2,
};
console.log(arr.concat(arrLike)); // [ 1, 2, 3, 4 ]

// forEach: allows to run a function for every element
arr = ["Leonardo", "Nala"];
arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// Searching in array
// indexOf/lastIndexOf
let fruits = ["apple", "pineapple", "apple"];
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("grape")); // -1

console.log(fruits.lastIndexOf("apple")); // 2

// includes
console.log(fruits.includes("pineapple")); // true
console.log(fruits.includes("strawberry")); // false

// find: returns the item if found else undefined
let users = [
    { id: 1, name: "Leonardo" },
    { id: 2, name: "Nala" },
    { id: 3, name: "Fernando" },
];

let user = users.find((item) => item.id == 2);
console.log(user); // { id: 2, name: 'Nala' }

// findIndex/findLastIndex: returns the index if found else -1
console.log(users.findIndex((item) => item.name.at(-1) == "o")); // 0
console.log(users.findLastIndex((item) => item.name.at(-1) == "o")); // 2

// filter: returns an array of elements if found else empty array
let humans = users.filter((item) => Boolean(item.id % 2));
console.log(humans); // [ { id: 1, name: 'Leonardo' }, { id: 3, name: 'Fernando' } ]

// Transform an array
// map: applies a function to each element and return the array of results
arr = ["Leonardo", "Nala", "Fernando"];
let lengths = arr.map((item) => item.length);
console.log(lengths); // [ 8, 4, 8 ]

// sort(fn): converts element to string and applies lexicographic ordering
arr = [1, 2, 15];
arr.sort();
console.log(arr); // [ 1, 15, 2 ]

arr.sort((a, b) => a - b);
console.log(arr); // [ 1, 2, 15 ]

// reverse
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// split
let names = "Leonardo, Nala, Fernando";
arr = names.split(", ");

console.log(arr); // [ 'Leonardo', 'Nala', 'Fernando' ]

// join
names = arr.join("; ");
console.log(names); // Leonardo; Nala; Fernando

// reduce
arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((sum, item) => sum + item, 0);

console.log(sum); // 15

// Array.isArray()
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

// thisArg: its value is passed to "this" in functions
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    },
};

users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

let soldiers = users.filter(army.canJoin, army);
console.log(soldiers); // [ { age: 20 }, { age: 23 } ]
