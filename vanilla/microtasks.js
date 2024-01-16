"use strict";

/**
 * when a promise is ready, its .then/catch/finally handlers are put into the 
   queue; they are not executed yet. When the JavaScript engine becomes free 
   from the current code, it takes a task from the queue and executes it.
 */
{
    let promise = Promise.resolve();

    promise.then(() => console.log("Promise done!"));

    console.log("code finished"); // shows first
}
