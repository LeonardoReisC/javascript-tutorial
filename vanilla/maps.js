"use strict";

// Map: a collection of keyed data items, where the key can be of any type
let map = new Map();

// Adding a key, value pair
let obj = { num: 1 };
map.set("1", "a") // chaining
    .set(1, "b")
    .set({ num: 1 }, "c") // allow objects as keys
    .set(obj, "d"); // allow objects as keys

// Getting a value
console.log(map.get("1")); // a
console.log(map.get(1)); // b

// Searching
console.log(map.has(1)); // true
console.log(map.has({ num: 1 })); // false, not the same object

// Delete a key, value
map.delete(obj);
console.log(map); // Map(3) { '1' => 'a', 1 => 'b', { num: 1 } => 'c' }

/// Length
console.log(map.size); // 3

// Iteration over Map
// iterate over keys
let recipeMap = new Map([
    ["cucumber", 500],
    ["tomatoes", 350],
    ["onion", 50],
]);

for (let key of recipeMap.keys()) {
    console.log(key);
}

// iterate over values
for (let value of recipeMap.values()) {
    console.log(value);
}

// iterate over key, value entries
for (let entry of recipeMap) { // or recipeMap.entries()
    console.log(entry);
}

// forEach
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

// Object.entries: return an array of key, value pairs for an object
obj = {
    name: "Leonardo",
    age: 20,
};

map = new Map(Object.entries(obj));
console.log(map); // Map(2) { 'name' => 'Leonardo', 'age' => 20 }

// Object.fromEntries: creates an object given an array of key, value pairs
let prices = Object.fromEntries(map); // omit .entries()
console.log(prices); // { name: 'Leonardo', age: 20 }

// Clear all
map.clear();
console.log(map); // Map(0) {}
