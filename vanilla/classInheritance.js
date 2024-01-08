// The 'extends' keyword
{
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        run(speed) {
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }
        stop() {
            this.speed = 0;
            console.log(`${this.name} stopped.`);
        }
    }

    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} hides!`);
        }
    }

    console.log(Object.getPrototypeOf(Rabbit) === Animal); // true
    console.log(Object.getPrototypeOf(Rabbit.prototype) === Animal.prototype); // true

    let rabbit = new Rabbit("White Rabbit");
    rabbit.run(5); // White Rabbit runs with speed 5.
}

// Overriding a method
{
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        run(speed) {
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }
        stop() {
            this.speed = 0;
            console.log(`${this.name} stopped.`);
        }
    }

    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} hides!`);
        }

        stop() {
            super.stop(); // call parent stop
            this.hide();
        }
    }

    let rabbit = new Rabbit("White Rabbit");
    rabbit.run(5); // White Rabbit runs with speed 5.
    rabbit.stop();
}

/**
 * Overriding constructor
 * constructor in inheriting classes must call super() before using this
 * an empty constructor is generated for inheriting classes that does not have one
 * */
{
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
    }

    class Rabbit extends Animal {
        constructor(name, earLength) {
            super(name);
            this.earLength = earLength;
        }
    }

    let rabbit = new Rabbit("White Rabbit", 10);
    console.log(rabbit.name); // White Rabbit
    console.log(rabbit.earLength); // 10
}

/**
 * Overriding class fields
 * the parent constructor always uses its own field value, not the overridden one
 */
{
    class Animal {
        name = "animal";
        constructor() {
            console.log(this.name);
        }
    }

    class Rabbit extends Animal {
        name = "rabbit";
    }

    new Animal(); // animal
    new Rabbit(); // animal
}

/**
 * [[HomeObject]]
 * when a function is specified as a class or object method, its [[HomeObject]]
   property becomes that object
 * the 'super' uses it to resolve the parent prototype and its methods
 */
{
    let animal = {
        name: "Animal",
        eat() { // animal.eat.[[HomeObject]] = animal
            console.log(`${this.name} eats.`);
        },
    };

    let rabbit = {
        __proto__: animal,
        name: "Rabbit",
        eat() { // rabbit.eat.[[HomeObject]] = rabbit
            super.eat();
        },
    };

    let longEar = {
        __proto__: rabbit,
        name: "Long Ear",
        eat() { // longEar.eat.[[HomeObject]] = longEar
            super.eat();
        },
    };

    longEar.eat(); // LongEar eats.
}

// Methods are not 'free': 'super' bounds a method forever
{
    let animal = {
        sayHi() {
            console.log("I'm an animal");
        },
    };

    let rabbit = {
        __proto__: animal,
        sayHi() {
            super.sayHi();
        },
    };

    let plant = {
        sayHi() {
            console.log("I'm a plant");
        },
    };

    let tree = {
        __proto__: plant,
        sayHi: rabbit.sayHi,
    };

    tree.sayHi(); // I'm an animal
}
