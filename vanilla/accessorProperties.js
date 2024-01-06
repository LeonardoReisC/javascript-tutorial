"use strict";

// Getter and Setter
{
    let user = {
        name: "Leonardo",
        surname: "Reis",
        get fullName() {
            return `${this.name} ${this.surname}`;
        },
        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        },
    };

    console.log(user.fullName); // Leonardo Reis

    user.fullName = "Leonardo Coimbra";
    console.log(user.surname); // Coimbra
}

// Acessor descriptors: there is no 'value' or 'writable'
{
    let user = {
        name: "Leonardo",
        surname: "Reis",
    };

    Object.defineProperty(user, "fullName", {
        get() {
            return `${this.name} ${this.surname}`;
        },
        set() {
            [this.name, this.surname] = value.split(" ");
        },
    });

    let descriptor = Object.getOwnPropertyDescriptor(user, "fullName");

    console.log(JSON.stringify(descriptor, null, 4));
    /*
    {
        "enumerable": false,
        "configurable": false
    }
    */
}

// Smarter getters/setters: can be wrappers of 'real' property values
{
    let user = {
        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
                console.log("Name is too short, need at least 4 characters!");
                return;
            }
            this._name = value;
        },
    };
    user.name = "Leonardo";
    console.log(user.name); // Leonardo

    user.name = "Leo"; // Name is too short, need at least 4 characters!
}
