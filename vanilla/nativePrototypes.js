"use strict";

// Object.prototype: has toString and other methods
{
    let obj = {};

    console.log(obj.__proto__ === Object.prototype); // true

    console.log(obj.toString === obj.__proto__.toString); // true
    console.log(obj.toString === Object.prototype.toString); // true
}

// Other built-in prototypes: all built-in prototypes have Object.prototype on the top
{
    let arr = [1, 2, 3];
    console.log(arr.__proto__ == Array.prototype); // true
    console.log(arr.__proto__.__proto__ == Object.prototype); // true

    function f() {}
    console.log(f.__proto__ == Function.prototype); // true
    console.log(f.__proto__.__proto__ == Object.prototype); // true
}

// Changing native prototypes
{
    String.prototype.show = function () { // becomes available to all strings
        console.log(this);
    };

    "Hello World!".show(); // Hello World!
}

// Borrowing a method
{
    let obj = {
        0: 1,
        1: 2,
        length: 2,
    };

    obj.join = Array.prototype.join;

    console.log(obj.join(",")); // 1,2
}
