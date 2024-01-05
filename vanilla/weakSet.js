"use strict";

/**
 * WeakSet
 * a Set of objects reachable from somewhere else
 */

let leo = { name: "Leonardo" };

let weakSet = new WeakSet();
weakSet.add(leo);

console.log(weakSet.has(leo)); // true

leo = null; // leo is removed from memory so now weakSet is empty
