"use strict";

// Losing 'this'
// solution 1: a wrapper
{
    let user = {
        firstName: "Leonardo",
        sayHi() {
            console.log(`Hi, ${this.firstName}!`);
        },
    };

    setTimeout(() => user.sayHi(), 1000); // GOT HACKED, problem!!

    // changed user object
    user = {
        sayHi() {
            console.log("GOT HACKED");
        },
    };
}

// solution 2: bind(fixes problem above)
{
    let user = {
        firstName: "Leonardo",
        sayHi() {
            console.log(`Hi, ${this.firstName}!`);
        },
    };

    let sayHi = user.sayHi.bind(user); // this=user

    sayHi(); // Hi, Leonardo!
    setTimeout(sayHi, 1000); // Hi, Leonardo!

    // changed user, but nothing changed in sayHi bound function
    user = {
        sayHi() {
            console.log("GOT HACKED?");
            7;
        },
    };
}

// Partial functions: allows to bind context and starting arguments
{
    function mul(a, b) {
        return a * b;
    }

    let double = mul.bind(null, 2);
    console.log(double(2)); // 4
    console.log(double(3)); // 6
}

// Going partial without context: can be easily implemented
{
    function partial(func, ...argsBound) {
        return function (...args) {
            return func.call(this, ...argsBound, ...args);
        };
    }

    let user = {
        firstName: "Leonardo",
        say(time, phrase) {
            console.log(`[${time}], ${this.firstName}: ${phrase}`);
        },
    };

    user.sayNow = partial(
        user.say,
        `${new Date().getHours()}:${new Date().getMinutes()}`
    );

    user.sayNow("Hello!"); // [16:50], Leonardo: Hello!
}
