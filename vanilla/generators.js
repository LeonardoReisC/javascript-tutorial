"use strict";

// generators can return (“yield”) multiple values, one after another, on-demand
{
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
    }

    let generator = generateSequence(); // returns a generator object
    let one = generator.next();
    console.log(one); // { value: 1, done: false }

    let two = generator.next();
    console.log(two); // { value: 2, done: false }

    let three = generator.next();
    console.log(three); // { value: 3, done: true }

    console.log(generator.next()); // { value: undefined, done: true }
}

// Generator are iterables
{
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
    }

    let generator = generateSequence();
    for (let value of generator) {
        console.log(value); // 1, then 2
    }

    let sequence = [0, ...generateSequence()];
    console.log(sequence); // [ 0, 1, 2 ]
}

// Using generators for iterables
{
    let range = {
        from: 1,
        to: 5,
        *[Symbol.iterator]() { // same as [Symbol.iterator]: function* ()
            for (let value = this.from; value <= this.to; value++) {
                yield value;
            }
        },
    };

    console.log([...range]); // [ 1, 2, 3, 4, 5 ]
}

// Generator composition
{
    function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
    }

    function* generatePasswordCodes() {
        yield* generateSequence(48, 57); // delegates execution to another generator
        yield* generateSequence(65, 90);
        yield* generateSequence(97, 122);
    }

    let str = "";
    for (let code of generatePasswordCodes()) {
        str += String.fromCharCode(code);
    }
    console.log(str); // 0..9A..Za..z
}

// 'yield' is a two-way street
{
    function* gen() {
        let ask1 = yield "2 + 2 = ?";
        console.log(ask1); // 4

        let ask2 = yield "3 * 3 = ?";
        console.log(ask2); // 6
    }

    let generator = gen();
    console.log(generator.next().value); // 2 + 2 = ?
    console.log(generator.next(4).value); // 3 * 3 = ?
    console.log(generator.next(9).done); // true
}

// generator.throw
{
    function* generate() {
        try {
            let result = yield "2 + 2 = ?";
        } catch (error) {
            console.log(error.message); // Whoops!
        }
    }

    let generator = generate();
    let question = generator.next();
    generator.throw(new Error("Whoops!"));
}
{
    function* generate() {
        let result = yield "2 + 2 = ?";
    }

    let generator = generate();
    let question = generator.next();
    try {
        generator.throw(new Error("Whoops!"));
    } catch (error) {
        console.log(error.message); // Whoops!
    }
}

// generator.return: finishes the execution and return the given value
{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    const g = gen();

    console.log(g.next()); // { value: 1, done: false }
    console.log(g.return("foo")); // { value: 'foo', done: true }
    console.log(g.next()); // { value: undefined, done: true }
}
