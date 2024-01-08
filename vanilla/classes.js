/**
 * Class
 * a function where its body is taken from constructor and its methods are
   stored in Class.prototype

 * Not a syntactic sugar
 * a function created by class has a special internal property called
   [[IsClassConstructor]], so it must be called with 'new'
 * class methods are non-enumerable
 * classes always use strict
 */
{
    class User {
        constructor(name) {
            this.name = name;
        }

        sayHi() {
            console.log(`Hi, I'm ${this.name}!`);
        }
    }

    console.log(typeof User); // function
    console.log(User === User.prototype.constructor); // true
    console.log(User.prototype.sayHi); // [Function: sayHi]
    console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]
}

// Class Expression
{
    let User = class {
        sayHi() {
            console.log("Hi!");
        }
    };

    new User().sayHi(); // Hi!
}
{
    let User = class MyClass {
        sayHi() {
            console.log(MyClass);
        }
    };

    new User().sayHi(); // [class MyClass]
}
{
    function makeClass(phrase) {
        return class {
            sayHi() {
                console.log(phrase);
            }
        };
    }

    let User = makeClass("Hi!");
    new User().sayHi(); // Hi!
}

// Getters/Setters
{
    class User {
        constructor(name) {
            this.name = name;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            if (value.length < 4) {
                console.log("Name is too short.");
                return;
            }

            this._name = value;
        }
    }

    let user = new User("Leonardo");
    console.log(user.name); // Leonardo

    user = new User("Leo"); // Name is too short.
}

// Computed name
{
    class User {
        ["say" + "Hi"]() {
            console.log("Hi!");
        }
    }

    let user = new User();
    user.sayHi(); // Hi!
}

// Class fields: allows to add properties
{
    class User {
        name = "Leonardo";
    }

    let user = new User();
    console.log(user.name); // Leonardo
    console.log(User.prototype.name); // undefined, they're on individual objects
}

// Making bound methods with class fields
{
    class Button {
        constructor(value) {
            this.value = value;
        }

        // separate function for each Button object
        click = () => {
            console.log(this.value);
        };
    }

    let button = new Button("pressed");
    setTimeout(button.click, 500); // pressed
}
