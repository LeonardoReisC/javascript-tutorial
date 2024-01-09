"use strict";

// try...catch: only works for runtime errors
{
    let json = "{ bad json }";

    try {
        let user = JSON.parse(json);
    } catch (err) {
        console.log("Malformed JSON"); // Malformed JSON
        console.log(err.name); // SyntaxError
    }
}

// Error object: has 2 main properties
{
    try {
        user = {};
    } catch (err) {
        console.log(err.name); // ReferenceError
        console.log(err.message); // user is not defined

        // widely used
        console.log(err.stack);
    }
}

// Throwing our own errors
{
    let json = '{ "age": 20} ';

    try {
        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        }

        console.log(user.name);
    } catch (err) {
        console.log(err.message); // Incomplete data: no name
    }
}

// Rethrowing: catch should only process errors that it knows and “rethrow” all others.
{
    function readData() {
        let json = '{ "age": 20 }';

        try {
            user = JSON.parse(json);

            if (!user.name) {
                throw new SyntaxError("Incomplete data: no name");
            }

            console.log(user.name);
        } catch (err) {
            if (!(err instanceof SyntaxError)) {
                throw err;
            }
        }
    }

    try {
        readData();
    } catch (err) {
        console.log(err.name); // ReferenceError
        console.log(err.message); // user is not defined
    }
}

// try...catch...finally
{
    function fib(n) {
        if (n < 0 || Math.trunc(n) != n) {
            throw new Error("Must be a non-negative integer");
        }

        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    let n = -1,
        diff,
        result;

    let start = Date.now();
    try {
        result = fib(n);
    } catch (err) {
        result = 0;
    } finally {
        diff = Date.now() - start;
    }

    console.log(result || "error occured");
    console.log(`execution took ${diff}ms`);
}
