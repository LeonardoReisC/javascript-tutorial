"use strict";

/**
 * WeakMap
 * a Map where keys are objects reachable from somewhere else
 * generally used for additional data and caching
 */
let leo = { name: "Leonardo" };

let weakMap = new WeakMap();
weakMap.set(leo, 20);

console.log(weakMap.has(leo)); // true

leo = null; // leo is removed from memory so now weakMap is empty
