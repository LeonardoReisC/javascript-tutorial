"use strict";

let answer = "France";

// if statement
if (answer == "Brazil") {
    console.log("Bom dia!");
} else if (answer == "France") {
    console.log("Bonjour!");
} else {
    console.log("Good morning!");
}

// "?" operator
(answer == "Brazil") ?
    console.log("Boa noite!") :
(answer == "France") ?
    console.log("Bonne nuit!") :
    console.log("Good evening!");
    
// switch case
answer = "B";

switch (answer) {
    case "A":
        console.log("Right!");
        break;
    case "B":
    case "C":
    case "D":
    case "E":
        console.log("Wrong!");
        break;
    default:
        console.log("That option does not exist.");
        break;
}
