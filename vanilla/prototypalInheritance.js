"use strict";

/**
 * [[Prototype]]
 * if a property is missing in object, it automatically takes from [[Prototype]]
 * must be either null or an object reference
 *  */

{
    let animal = {
        eats: true,
        walk() {
            console.log("is walking...");
        },
    };

    let rabbit = {
        jumps: true,
    };

    rabbit.__proto__ = animal; // __proto__: getter/setter(outdated)

    console.log(rabbit.eats); // true
    rabbit.walk(); // true
}

// Writing does not use prototype, except for accessor properties
{
    let animal = {
        eats: true,
        walk() {
            console.log("is walking...");
        },
    };

    let rabbit = {
        jumps: true,
        __proto__: animal,
    };

    rabbit.walk = function () {
        console.log("Rabbit is jumping...");
    };
    rabbit.walk(); // Rabbit is jumping...
}

// The value of 'this': is always the object before the dot
{
    let animal = {
        walk() {
            if (!this.isSleeping) {
                console.log("is walking...");
            }
        },
        sleep() {
            this.isSleeping = true;
        },
    };

    let rabbit = {
        name: "White Rabbit",
        __proto__: animal,
    };

    rabbit.sleep();

    console.log(rabbit.isSleeping); // true
    console.log(animal.isSleeping); // undefined
}

// for..in loop: iterates over inherited properties too
{
    let animal = {
        eats: true,
    };

    let rabbit = {
        jumps: true,
        __proto__: animal,
    };

    for (let prop in rabbit) {
        let isOwn = rabbit.hasOwnProperty(prop);

        if (isOwn) {
            console.log(`Our: ${prop}`);
        } else {
            console.log(`Inherited: ${prop}`);
        }
    }
}
