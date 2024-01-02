"use strict";

// A function that is a property of an object is called its method
let user = {
    name: "Leonardo",
    sayHi() { // shorthand: same as sayHi: function() {...}
        console.log("Hi!");
    },
};

user.sayHi(); // Hi

// "this" in methods
user = {
    name: "Leonardo",
    sayHi() {
        console.log(`Hi! My name is ${this.name}.`);
    },
};
user.sayHi(); // Hi! My name is Leonardo.

// the value of "this" is evaluated during the run-time, unlike other programming languages
let user1 = { name: "Leonardo" };
let user2 = { name: "Nala" };

function sayHi() {
    console.log(this);
}
sayHi(); // undefined

user1.f = sayHi;
user2.f = sayHi;

user1.f(); // { name: 'Leonardo', f: [Function: sayHi] }
user2.f(); // { name: 'Nala', f: [Function: sayHi] }

// Arrow functions have no "this". Its value is taken from the outer "normal" function
user = {
    name: "Leonardo",
    sayHi() {
        let arrow = () => console.log(this.name);
        arrow();
    },
};
user.sayHi(); // Leonardo
