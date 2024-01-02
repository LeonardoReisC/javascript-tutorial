"use strict";

// stops the evaluation if the value before ?. is undefined or null and returns undefined.

let user = null;
console.log(user?.name); // undefined

let admin = {
    adminUsername: "admin",
    admin() {
        console.log("I'm admin");
    },
};
let guest = {};

console.log(admin?.["adminUsername"]); // admin
admin.admin?.(); // I'm admin

guest.admin?.(); // nothing happens
