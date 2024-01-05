"use strict";

// Array destructuring
let arr = ["Leonardo", "Reis", "Coimbra"];
let [firstName, lastName] = arr;

console.log(lastName); // Reis

// ignoring elements
[firstName, , lastName] = arr;
console.log(lastName); // Coimbra

// the rest '...'
arr = ["Leonardo", "Nala", "Fernando", "Pedro", "Luca"];
let [name1, name2, ...others] = arr;
console.log(others); // [ 'Fernando', 'Pedro', 'Luca' ]

// default values: undefined if any default value is passed
[firstName, lastName = "Reis"] = ["Leonardo"];
console.log(firstName); // Leonardo
console.log(lastName); // Reis

// Object destructuring
let options = {
    title: "Menu",
    width: 100,
    height: 200,
    widthMeasure: "px",
    heightMeasure: "px",
    fontSize: 14,
};

// sourcePropery: targetProperty
let { width: w, height: h = 150, title, color = "purple", ...rest } = options;

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200
console.log(color); // purple, default value
console.log(rest); // { widthMeasure: 'px', heightMeasure: 'px', fontSize: 14 }

// Nested destructuring
options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Cake", "Donut"],
    vip: true,
};

let {
    size: { width, height },
    items: [item1, item2],
    heading = "Menu",
} = options;

console.log(heading); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut

// Smart functions parameters
function showMenu(
    {
        // use a object to destruturize arguments
        title = "Untitled",
        width: w = 100,
        height: h = 200,
        items: [item1, item2],
    } = {} // used to allow calling the function like showMenu()
) {
    console.log(`Title: ${title}`);
    console.log(`Dimensions: ${w} x ${h}`);
    console.log(`Items: [${item1}, ${item2}]`);
}

options = {
    title: "My menu",
    items: ["Doritos", "Coke"],
};

showMenu(options);
