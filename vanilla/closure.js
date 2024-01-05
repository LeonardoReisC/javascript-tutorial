"use strict";

/**
 * Lexical Environment
 * an object that stores all local variables as its properties and has a
 * reference to the outer lexical environment
 *
 * Closure
 * a function that remembers its outer variables(points to the outer lexical
 * environment) and can access them
 */
{
    function makeCounter() {
        let counter = 0;

        return function () {
            return counter++;
        };
    }

    let counter = makeCounter();
    console.log(counter()); // 0
    console.log(counter()); // 1
    console.log(counter()); // 2
}
