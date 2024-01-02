"use strict";

/**
 * Constructor function: implement reusable object creation code
 * return with an object returns that object, in all other cases this is returned
 */
function User(name) {
    if (!new.target) { // if you run without "new"
        return new User(name); // ... I'll add "new" for you
    }

    // this = {} (implicit with "new" keyword)

    this.name = name;
    this.isAdmin = false;

    // return this (implicit with "new" keyword)
}

let user1 = new User("Leonardo");
let user2 = User("Nala");
