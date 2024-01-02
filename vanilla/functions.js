"use strict";

// default values: a parameter starts undefined if no value is passed
function greet(firstName, secondName = "R.", lastName) {
    let greet = "Greetings";
    greet += secondName;

    console.log(`Greetings, ${firstName} ${secondName} ${lastName ?? ""}!`);
}

greet("Leonardo");

// return: returns undefined if no value is returned

function returnUndefined() {
    return; // this line can be deleted
}

console.log(returnUndefined());
