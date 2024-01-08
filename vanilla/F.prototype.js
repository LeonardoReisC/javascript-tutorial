"use strict";

// when there is a new F(), assign new object [[Prototype]] to F.prototype
{
    let animal = {
        eats: true,
    };

    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype = animal;

    let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ = animal
    console.log(rabbit.eats); // true
}

/**
 * the default "prototype" is an object with the only property constructor
 * that points back to the function itself
 */
{
    function Rabbit(name) {
        this.name = name;
    }

    let rabbit1 = new Rabbit("White Rabbit"); // inherits from { constructor: Rabbit }
    console.log(rabbit1.constructor == Rabbit); // true

    // can create a new object with the existing constructor
    let rabbit2 = new rabbit1.constructor("Black Rabbit");
    console.log(rabbit2); // Rabbit { name: 'Black Rabbit' }
}
