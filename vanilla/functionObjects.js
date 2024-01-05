"use strict";

// The 'name' property
{
    function sayHi() {
        console.log("Hi!");
    }
    console.log(sayHi.name); // sayHi
}
{
    let sayHi = function () {
        console.log("Hi!");
    };
    console.log(sayHi.name); // sayHi
}

// The length property: returns the number of function parameters
{
    function f1(a) {}
    function f2(a, b) {}
    function many(a, b, ...more) {}

    console.log(f1.length); // 1
    console.log(f2.length); // 2
    console.log(many.length); // 2, rest paramenters not counted
}

// Custom properties
{
    function makeCounter() {
        function counter() {
            return counter.count++;
        }

        // add a property to 'counter' function that can be accessed outside
        counter.count = 0;
        return counter;
    }

    let counter = makeCounter();
    counter();
    counter();
    counter();
    console.log(`${counter.count} times`); // 3 times
}

/**
 * Named Function Expression
 * it allows the function to reference itself internally
 * it is not visible outside of the function
 */
{
    let sayHi = function func(who) {
        if (who) {
            console.log(`Hi, ${who}!`);
        } else {
            func("guest"); // internal function name 
        }
    };
    let welcome = sayHi;
    sayHi = null;

    welcome(); // Hi, guest!
}
