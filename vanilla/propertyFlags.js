"use strict";

/**
 * Property flags
 * writable: if true, value can be changed, otherwise it's read-only
 * enumerable: if true, then listed in loops, otherwise not listed
 * configurable: if true, can be deleted and these flags can be modified
 */
{
    let user = {
        name: "Leonardo",
    };

    let descriptor = Object.getOwnPropertyDescriptor(user, "name");

    console.log(JSON.stringify(descriptor, null, 4));
    /*
    {
        "value": "Leonardo",
        "writable": true,
        "enumerable": true,
        "configurable": true
    }
    */
}

// define a property: if a flag is not supplied, it is assumed false
{
    let user = {};

    Object.defineProperty(user, "name", {
        value: "Leonardo",
    });

    let descriptor = Object.getOwnPropertyDescriptor(user, "name");

    console.log(JSON.stringify(descriptor, null, 4));
    /*
    {
        "value": "Leonardo",
        "writable": false,
        "enumerable": false,
        "configurable": false
    }
    */
}

// Non-writable
{
    let user = {
        name: "Leonardo",
    };

    Object.defineProperty(user, "name", {
        writable: false,
    });

    try {
        user.name = "Nala"; // Error!
    } catch (error) {
        console.log(error.message); // Cannot assign to read only property 'name' of object '#<Object>'
    }
}

// Non-enumerable
{
    let user = {
        name: "Leonardo",
        toString() {
            return this.name;
        },
    };

    console.log(Object.keys(user)); // [ 'name', 'toString' ]

    Object.defineProperty(user, "toString", {
        enumerable: false,
    });

    console.log(Object.keys(user)); // [ 'name' ]
}

// Non-configurable: one-way road
{
    let user = {
        name: "Leonardo",
    };

    Object.defineProperty(user, "name", {
        configurable: false,
    });

    user.name = "Leo"; // works fine

    try {
        delete user.name; // Error!
    } catch (error) {
        console.log(error.message); // Cannot delete property 'name' of #<Object>
    }
}

// Object.defineProperties: defines many properties at once
{
    let user = {
        name: "Leonardo",
        surname: "Reis",
        ["id"]: 1,
    };

    Object.defineProperties(user, {
        name: { value: "Leo", writable: false },
        surname: { writable: false, enumerable: false },
    });

    let descriptors = Object.getOwnPropertyDescriptors(user); // ALL properties

    // better way to clone
    let clone = Object.defineProperties({}, descriptors);
    console.log(Object.getOwnPropertyDescriptors(clone));
    /*
    {
        name: {
            value: 'Leo',
            writable: false,
            enumerable: true,
            configurable: true
        },
        surname: {
            value: 'Reis',
            writable: false,
            enumerable: false,
            configurable: true
        },
        id: { value: 1, writable: true, enumerable: true, configurable: true }
    }
    */
}
