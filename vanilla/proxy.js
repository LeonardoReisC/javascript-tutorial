"use strict";

/**
 * Proxy
 * wraps another object and intercepts operations
 */
// if there are no traps, all operations on proxy are forwarded to target
{
    let target = {};
    let proxy = new Proxy(target, {}); // empty handler, no traps

    proxy.test = 5;
    console.log(target.test); // 5, appeared in target

    console.log(proxy.test); // 5, read from target

    for (let key in proxy) console.log(key); // test
}

// get(target, property, receiver): intercepts reading
{
    let dictionary = {
        Hi: "Oi",
        Bye: "Tchau",
    };

    dictionary = new Proxy(dictionary, {
        get(target, phrase) {
            if (phrase in target) {
                return target[phrase];
            } else {
                return phrase; // default, no translation
            }
        },
    });

    console.log(dictionary["Hi"]); // Oi
    console.log(dictionary["Hello World"]); // Hello World
}

// set(target, property, value, receiver): validates writing
{
    let numbers = [];

    numbers = new Proxy(numbers, {
        set(target, prop, val) {
            if (typeof val == "number") {
                target[prop] = val;
                return true;
            } else {
                return false;
            }
        },
    });

    numbers.push(1);
    numbers.push(2);
    console.log(numbers.length); // 2

    try {
        numbers.push("test");
    } catch (error) {
        console.log(error.name); // TypeError
    }
}

// ownKeys(target): trap for..in loops and also Object.keys/value with enumerable flag
{
    let user = {
        name: "Leonardo",
        age: 20,
        _password: "***",
    };

    user = new Proxy(user, {
        ownKeys(target) {
            return Object.keys(target).filter((key) => !key.startsWith("_"));
        },
    });

    for (let key in user) console.log(key); // name, then age

    console.log(Object.keys(user)); // [ 'name', 'age' ]
    console.log(Object.values(user)); // [ 'Leonardo', 20 ]
}

// we can use getOwnPropertyDescriptor trap to return keys that does not exists
{
    let user = {};

    user = new Proxy(user, {
        ownKeys(target) {
            return ["a", "b", "c"];
        },

        getOwnPropertyDescriptor(target, prop) {
            return {
                enumerable: true,
                configurable: true,
            };
        },
    });

    console.log(Object.keys(user)); // [ 'a', 'b', 'c' ]
}

// protected properties
{
    let user = {
        name: "Leonardo",
        age: 20,
        _password: "***",
    };

    user = new Proxy(user, {
        get(target, prop) {
            if (prop.startsWith("_")) {
                throw new Error("Access denied");
            }
            let value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop, val) {
            if (prop.startsWith("_")) {
                throw new Error("Access denied");
            }
            target[prop] = val;
            return true;
        },
        deleteProperty(target, prop) {
            if (prop.startsWith("_")) {
                throw new Error("Access denied");
            }
            delete target[prop];
            return true;
        },
        ownKeys(target) {
            return Object.keys(target).filter((key) => !key.startsWith("_"));
        },
    });

    try {
        console.log(user._password);
    } catch (error) {
        console.log(error.message); // Access denied
    }

    try {
        user._password = "****";
    } catch (error) {
        console.log(error.message); // Access denied
    }

    try {
        delete user._password;
    } catch (error) {
        console.log(error.message); // Access denied
    }

    for (let key in user) console.log(key); // name, then age
}

// has(target, property): intercepts 'in' calls
{
    let range = {
        from: 1,
        to: 10,
    };

    range = new Proxy(range, {
        has(target, prop) {
            return prop >= target.from && prop <= target.to;
        },
    });

    console.log(5 in range); // true
    console.log(-1 in range); // false
}

// apply(target, thisArg, args): handles callings a proxy as a function
{
    function delay(f, ms) {
        return new Proxy(f, {
            apply(target, thisArg, args) {
                setTimeout(() => f.apply(thisArg, args), ms);
            },
        });
    }

    function sayHi(user) {
        console.log(`Hi, ${user}!`);
    }
    sayHi = delay(sayHi, 1000);

    console.log(sayHi.length); // 1, original properties don't get lost

    sayHi("Leonardo"); // Hi, Leonardo!
}

/**
 * Reflect
 * are minimal wrappers around the internal methods
 * allows us to call operators (new, delete...) as functions
 * have the same name and arguments of Proxy traps
 *  */
{
    let user = {
        _name: "Guest",
        get name() {
            return this._name;
        },
    };

    let userProxy = new Proxy(user, {
        get(target, prop, receiver) {
            return Reflect.get(...arguments); // receiver = admin
        },
    });

    let admin = {
        __proto__: userProxy,
        _name: "Admin",
    };

    console.log(admin.name); // Admin
}

// Revocable proxies: proxies that can be disabled
{
    let object = {
        data: "Valuable data",
    };

    let { proxy, revoke } = Proxy.revocable(object, {});

    console.log(proxy.data); // Valuable data, appeared in target

    // remove all internal references to the target object from the proxy
    revoke();

    try {
        console.log(proxy.data);
    } catch (error) {
        console.log(error.message); // Cannot perform 'get' on a proxy that has been revoked
    }

    console.log(object.data); // Valuable data
}
