"use strict";

// String length
console.log("Hi\n".length); // 3

// Acessing characters
let str = "Hello";

console.log(str[0]); // H
console.log(str.charAt(0)); // H

console.log(str[str.length - 1]); // o
console.log(str.at(-1)); // o

// for..of loops: walks over all characters
for (let c of str) {
    console.log(c);
}

// Strings are immutable
str[0] == "h";
console.log(str); // Hello

// Changing the case
console.log("Leonardo".toLowerCase()); // leonardo
console.log("Leonardo".toUpperCase()); // LEONARDO

// Searching for a substring
// str.indexOf()
str = "Widget with id";
console.log(str.indexOf("Widget")); // 0
console.log(str.indexOf("widget")); // -1, not found
console.log(str.indexOf("id")); // 1
console.log(str.indexOf("id", 2)); // 12

// str.lastIndexOf()
console.log(str.lastIndexOf("id")); // 12

// includes
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 2)); // false

// startsWith/endsWith
console.log(str.startsWith("Widget")); // true
console.log(str.endsWith("ID")); // false

// Getting a substring
// str.slice()
str = "Leonardo";
console.log(str.slice(0, 3)); // Leo
console.log(str.slice(3)); // nardo
console.log(str.slice(-4, -2)); // ar

// str.substring()
console.log(str.substring(0, 3)); // Leo
console.log(str.substring(3, 0)); // Leo

// str.substr()
console.log(str.substr(0, 3)); // Leo
console.log(str.substr(-5, 5)); // nardo

// Unicode
console.log("A".codePointAt(0)); // 65
console.log("a".codePointAt(0)); // 97

console.log(String.fromCodePoint(65)); // A
console.log(String.fromCodePoint(97)); // a
