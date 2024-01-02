"use strict";

// Symbol: a unique identifier (can have an optional description)
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id == id2); // false, they're not the same

// "Hidden properties"
let user = {
    name: "Leonardo",
};

user[id] = 1;
console.log(user[id]); // 1

// Symbols in an object literal
user = {
    name: "Leonardo",
    [id]: 1, // not "id"
};

// Global symbols: single symbols acessed everywhere
id = Symbol.for("id"); // created in the global registry
let idAgain = Symbol.for("id"); // read from the registry

console.log(id == idAgain); // true, they're the same
console.log(Symbol.keyFor(idAgain)); // id
