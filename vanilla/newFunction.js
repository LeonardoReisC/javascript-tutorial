"use strict";

// Syntax: created literally from a string
{
    let sayHi = new Function("console.log('Hi!')");
    sayHi(); // Hi!

    let sum = new Function("a", "b", "return a + b");
    console.log(sum(1, 2)); // 3
}
