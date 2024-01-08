// Static methods
{
    class Article {
        constructor(title, date) {
            this.title = title;
            this.date = date;
        }

        static createTodays() {
            return new this("Today's digest", new Date());
        }
    }

    let article = Article.createTodays();
    console.log(article.title); // Today's digest
}

// Static properties: looks like regular class properties
{
    class Article {
        static publisher = "Leonardo Reis";
    }

    console.log(Article.publisher); // Leonardo Reis
}

/**
 * Inheritance of static properties and methods
 * static properties and methods are inherited
 */
{
    class Animal {
        static planet = "Earth";
        constructor(name, speed) {
            this.speed = speed;
            this.name = name;
        }

        run(speed = 0) {
            this.speed += speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }

        static compare(animalA, animalB) {
            return animalA.speed - animalB.speed;
        }
    }

    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} hides!`);
        }
    }

    let rabbits = [
        new Rabbit("White Rabbit", 10),
        new Rabbit("Black Rabbit", 5),
    ];
    rabbits.sort(Rabbit.compare);
    rabbits[0].run(); // Black Rabbit runs with speed 5.

    console.log(Rabbit.planet); // Earth
}
