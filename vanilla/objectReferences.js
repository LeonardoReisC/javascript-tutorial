"use strict";

// A variable assigned to an object stores not the object itself, but its “address in memory”
let user = { name: "Leonardo" };
let admin = user; // copy the reference

// Comparison by reference
console.log(admin == user); // true, both referece the same object

// const object can be modified
const obj1 = { id: 1 };
obj1.id = 0;

console.log(obj1.id); // 0

// Merging
let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

console.log(user); // { name: 'Leonardo', canView: true, canEdit: true }

// Simple Cloning
let clone = Object.assign({}, user);
console.log(clone === user); // false
console.log(clone); // { name: 'Leonardo', canView: true, canEdit: true }

/**
 * Deep Cloning
 * structuredClone(): works for most data types
 * suppots circular references
 */
user = {
    name: "Leonardo",
    age: 20,
    birthday: {
        day: 15,
        month: 5,
        year: 2003,
    },
};

let deepClone = structuredClone(user);
console.log(deepClone === user); // false
