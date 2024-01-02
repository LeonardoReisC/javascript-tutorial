"use strict";

// a collection of key:value pairs
let name = "Leonardo";
let user = {
    name, // shorthand - same as name: name
    age: 20,
    "is male": true,
};

// access
console.log(user.name); // Leonardo
console.log([user["is male"]]); // true

// addition
user.isAdmin = true;

// deletion
delete user.isAdmin;

// Computed properties
let fruit = "apple";
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log(bag.apple); // 5

/**
 * Property existence
 * undefined, if property can't be found in object
 */
console.log(user.id); // undefined

// 'in' operator: check the existence of the key in the object
console.log("name" in user); // true

/**
 * the for..in loop: walk over all keys of an object
 * integer properties are sorted, but the others are displayed in the order of
 * creation
 */
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
