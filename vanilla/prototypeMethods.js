"use strict";

// obj.__proto__ is considered outdated
{
    let animal = {
        eats: true,
    };

    let rabbit = Object.create(animal, {
        // allows to create descriptors
        jumps: {
            value: true,
        },
    });

    console.log(Object.getPrototypeOf(rabbit) === animal); // true
    console.log(rabbit.eats); // true
    console.log(rabbit.jumps); // true
    Object.setPrototypeOf(rabbit, {}); // change __proto__ to {}
}

// powerful way of cloning
{
    let stringClone = Object.create(
        Object.getPrototypeOf(new String()),
        Object.getOwnPropertyDescriptors(new String())
    );

    console.log(Object.getPrototypeOf(stringClone) === String.prototype); // true
}
