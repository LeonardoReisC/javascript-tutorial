"use strict";

// Set: a set of unique values
let set = new Set();

// Adding a value
set.add(1) // chaining
    .add(1) // ignored
    .add(2)
    .add(3);
console.log(set);

// Searching for a value
console.log(set.has(2)); // true

// Deleting a value
set.delete(3);
console.log(set); // Set(2) { 1, 2 }

// Length
console.log(set.size); // 2

// Iteration over Set
// for..of
for (let value of set) {
    console.log(value);
}

// forEach
set.forEach((value, valueAgain, set) => { // valueAgain: compatibility with Map
    console.log(value);
});

// Clear
set.clear();
console.log(set); // Set(0) {}
