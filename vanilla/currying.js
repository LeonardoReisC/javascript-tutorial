"use strict";

/**
 * Currying
 * is a transformation of functions that translates a function from callable as 
   f(a, b, c) into callable as f(a)(b)(c).
 */
{
    function curry(f) {
        return function (a) {
            return function (b) {
                return f(a, b);
            };
        };
    }

    function sum(a, b) {
        return a + b;
    }

    let curriedSum = curry(sum);
    console.log(curriedSum(1)(2)); // 3
}

// Advanced curry implementation
{
    function curry(f) {
        return function curried(...args) {
            if (args.length >= f.length) {
                f.apply(this, args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2));
                };
            }
        };
    }

    function log(date, importance, message) {
        console.log(
            `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
        );
    }
    log = curry(log);

    let logNow = log(new Date());
    let debugNow = logNow("DEBUG");

    logNow("INFO", "info_message 1"); // [19:14] [INFO] info_message 1
    logNow("INFO")("info_message 2"); // [19:14] [INFO] info_message 2

    debugNow("debug_message"); // [19:14] [DEBUG] debug_message
}
