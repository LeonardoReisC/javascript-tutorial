"use strict";

// setTimeout: runs a functions once after the interval of time
{
    function sayHi(phrase, who) {
        console.log(`${phrase}, ${who}!`);
    }

    setTimeout(sayHi, 1000, "Hi", "Leonardo"); // Hi, Leonardo!
}

// Cancelling with clearTimeut
{
    let timerId = setTimeout(() => console.log("Hi!"), 5000);
    clearTimeout(timerId); // cancelled
}

// setInterval: runs a function repeatedly after a given interval of time
{
    // repeat with the interval of 2 seconds
    let timerId = setInterval(() => console.log("Hi!"), 2000);

    // after 5 seconds stop
    setTimeout(() => {
        clearInterval(timerId);
        console.log("stop");
    }, 5000);
}

// Nested setTimeout: guarantees the fixed delay
{
    let i = 0;
    let timerId = setTimeout(function run() {
        console.log(i++);
        setTimeout(run, 100);
    }, 100);
    clearTimeout(timerId);
}

/**
 * Zero delay setTimeout
 * scheduler will invoke only after the currently executing script is complete
 * */
{
    setTimeout(() => {
        console.log("World"); // second
    });
    console.log("Hello"); // first
}
